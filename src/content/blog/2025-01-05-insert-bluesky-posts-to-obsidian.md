---
title: Bluesky で投稿した内容を Obsidian にサクッと挿入できるようにした
description: Obsidian のノートに、その日に自分が Bluesky に投稿した内容のリストをサクッと挿入できるようにした。
pubDatetime: 2025-01-05T00:00:00.000Z
author: kadoppe
tags:
  - productivity
postSlug: 2025-01-05-insert-bluesky-posts-to-obsidian
draft: false
---

Obsidian のノートに、その日に自分が Bluesky に投稿した内容のリストをサクッと挿入できるようにした。

最近、読んだ記事の感想や考えたことなどを Bluesky に投稿している（Xへの投稿と同じ内容を [Buffer](https://buffer.com) というサービスを使ってマルチポストしている）。その記録を Obsidian にしている Daily Notes（毎日の行動ログや考え事、アイデア、1日の振り返りなどを書くノート）にもサクッと転記したいと思ったことがきっかけ。

## 使ったもの
- Obsidian の [Templater Plugin](https://github.com/SilentVoid13/Templater)
  - 編集中のノートに動的な内容を挿入することができるプラグイン
  - 挿入する内容を JavaScript のロジックで動的に組み立てることができる
  - Web上の情報を GET リクエストを使って取得した上で、整形・加工することも可能。
- Bluesky の [app.bsky.feed.getAuthorFeed API](https://docs.bsky.app/docs/api/app-bsky-feed-get-author-feed)
  - 指定したアカウントの投稿を最新の投稿を取得することができるAPIエンドポイント
  - 公開情報を取得する目的のエンドポイントであるため、認証不要でアクセスでき簡単。

## Templater のテンプレートスクリプト

以下のようなテンプレートスクリプトを実装した。

```javascript
<%*
/**
 * 今日投稿した Bluesky の投稿を取得し、ノートに挿入するテンプレートスクリプト
 */

// 投稿を取得する handle name
const handle = "kadoppe.com";

// 取得対象の投稿日時の範囲を指定
const today = new Date();
const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
const startOfTomorrow   = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1, 0, 0, 0);

// 公開アカウントの投稿を取得するAPIエンドポイント
const url = `https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=${handle}&limit=100`; 

const resultTexts = [];

try {
  const feed = await tp.web.request(url, "feed");

  // 投稿日時の期間で投稿をフィルタリング
  const todaysPosts = feed.filter(item => {
    const indexedAt = new Date(item.post.indexedAt);
    return (indexedAt >= startOfToday && indexedAt < startOfTomorrow);
  });
	
  resultTexts.push("## 🦋 本日の Bluesky 投稿\n");

  if (todaysPosts.length === 0) {
    resultTexts.push("本日分の投稿はありませんでした");
  } else {
    todaysPosts.forEach(post => {
    // 投稿テキスト、URL、画像を取得して出力を整形
    const record = post.post.record;
    const text = record.text;
    const uri = record.embed?.external?.uri ?? ''
    const indexedAt = new Date(post.post.indexedAt).toLocaleString();

    resultTexts.push(`**${indexedAt}**\n  ${text} ${uri}`);

    (post.post.embed?.images ?? []).forEach(image => {
      resultTexts.push(`![](${image.thumb})`);
    });

    resultTexts.push("\n");
    });
  }
} catch (err) {
  resultTexts.push(`エラーが発生しました: ${err.message}`);
}

// ノートに挿入
tR += resultTexts.join("\n");
%>
```

実際にノートの挿入するときの様子は以下のような感じ。その日にBlueskyに投稿した内容の一覧が、現在編集中のノートに挿入される。
![Blueskyに投稿した内容の一覧を編集中のノートに挿入](../../../public/assets/blog/bluesky-insert.gif)


### おわりに
Daily Noteを使った毎日の振り返りや内省の習慣を、今年はより強化したいと考えていて、こういう仕組みを作ってみた。SNSへの投稿をふくめたいろんな行動ログを Daily Notes に集約させることで、1日の終わりの新しい気づきやアイデアが得られたり、明日につながる次の行動を思いついたりする確率を少しでも増やせたらと考えている。

将来的には Cursor を使って、Obsidian に蓄積された自分の考えをもとに、内省のいい壁打ち相手を作れたらいいな。
