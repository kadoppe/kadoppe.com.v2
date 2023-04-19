---
title: ブログをAstroを使ってリニューアルしました
author: kadoppe
pubDatetime: 2023-04-19T15:00:00.000Z
description: 背景や使用したツール・ライブラリなどについて
postSlug: renew-blog-with-astro
tags:
  - misc
  - engineeing
  - frontend
---

ブログ・個人サイトを [Astro](https://astro.build/) を使ってリニューアルしました。

もともとは、 [Super.so](https://super.so/) を使って、 Notion に作成したブログ記事やその他静的ページなどを公開していました。

背景や使用したツール・ライブラリについて簡単に書いてみようと思います。

## リニューアルの背景

先代の Super.so でつくったブログは、スマホでも Notion を開けば簡単にブログ記事やページの情報を編集できて、快適に使えて満足していたのですが、しばらく使ってみると自分の要件を満たせない部分があることにも気づきました。

最近、情報のインプットに [Readwise Reader](https://readwise.io/read) を使い始めたのですが、ブログやメディアが RSS を配信していることを重要視するようになりました。「あ、いいな」って思ったブログやメディアが RSS を配信していないと、少し残念な気持ちになる体になってしまいました。

ですが、 Super.so は現状 RSS の配信をサポートしていません。（一応、[開発ロードマップ](https://community.super.so/c/questions/rss-feed-for-blog)上では実装が計画されているようです。

また、細かいところなんですが、柔軟に UI をカスタマイズしたり、遊び心でサイト上になにかコンポーネントを追加したり、ということができません。

特に具体的にアイデアがあったわけではないのですが、最近個人的に Web フロントエンド関連の技術にアンテナを張っていて。いざ遊び心が芽生えたときに遊べる環境がほしいなと思い、カスタマイズ性があるブログ環境がほしいと思ったわけです。

## 使用しているツール・ライブラリなど

冒頭に書いたとおり、Web フレームワークには [Astro](https://astro.build/) を使っています。採用理由としては以下の通りです。

- サクサク表示されるブログにしたかったので、「zero-JS frontend architecture」というコンセプトに惹かれた
- いろんなライブラリを試したかったので、React や Vue.js など複数のライブラリによって実装された UI コンポーネントを単一ページに共存させることさえできる柔軟性に惹かれた（[Island architecture](https://docs.astro.build/en/concepts/islands/))

フルスクラッチでブログを構築する時間がなかったこともあり、 [Astro の Theme ページ](https://astro.build/themes/)\_から見つけた [AstroPaper](https://github.com/satnaing/astro-paper) というブログテーマを使わせていただきました。採用理由としては以下の通りです。

- ミニマルなデザインが個人的な好み
- ブログをつくるときに欲しくなる機能性が一通り揃っていたこと
- カスタマイズ性の高さ

Google Analytics でユーザーのトラッキングがしたかったのですが、せっかくのパフォーマンスを犠牲にはしたくなかったので、 [Partytown](https://partytown.builder.io/) を使って Third-party JavaScript を Main Thread ではなく、 Web Worker を使って実行するようにしました。Astro で構築したサイトへの導入は以下のページが参考になりました。

- [@astrojs/partytown 🚀 Astro ドキュメント](https://docs.astro.build/ja/guides/integrations-guide/partytown/)
- [Add google analytics to Astro with Partytown](https://www.kevinzunigacuellar.com/blog/google-analytics-in-astro/)

※ トラッキングブロッカーが導入されたウェブブラウザで動作確認をしていて、Google Analytics でうまくトラッキングされないことに 10 分ほど悩んでしまったのは秘密です 🤐

デプロイ先は [Cloudflare Pages](https://www.cloudflare.com/ja-jp/products/pages/) にしました。こちらはパフォーマンス観点で、以下のブログ記事に記載されていた内容を参考にさせていただきました。

- [ブログを Astro に移行した](https://www.shufo.dev/posts/migrate-blog-to-astro/)

独自ドメインを有効にするために、Google Domains で管理していたドメインのネームサーバーをデフォルトのものから、「カスタム ネームサーバー」の機能をつかって Cloudflare のものに変更する必要がありました。今後のドメインの取り回しを考えたときに少しだけ気になりましたが、最終的に気にせず設定しちゃいました。

ブログのコンテンツは markdown ファイルで、ブログ環境と同じリポジトリで管理するようにしています。Notion で管理していた移行前のブログコンテンツは、Notion のエクスポート機能を使い markdown で出力したあと、手作業で細かい微調整や、 front-matter でのメタデータの定義などを行い、新しいブログにも持ってきました。（記事の数が少なかったので短い時間で住みました ☺️

## おわりに、そして今後の展望

こんな感じに、ブログの Astro への移行は完了しました。サクサク動くし、見た目もいいし、とても気に入っています。

今後やりたいこととしては、以下のような感じです。

- 楽にブログ記事を編集できるように CMS を導入したい（[TinaCMS](https://tina.io/) か [CloudCannon](https://cloudcannon.com/) といった Git-based な CMS）
- 日本語記事も読みやすいようにスタイルを少し調整したい
- ポートフォリオや自己紹介ページも作りたい

そして何よりも、ブログの記事をどんどん書くこと。日々の気付きや学びを継続的かつコンスタントにアウトプットしていけたらと思っています。家族に「ブログできたよ、見てー」と言ったら、「記事は書いたの？」と言われました笑ブログ環境にこだわるよりも、

とにかく記事を書くことのほうが大事ですね！がんばるぞー！
