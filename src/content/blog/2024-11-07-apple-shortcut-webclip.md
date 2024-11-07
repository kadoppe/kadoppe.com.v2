---
title: AppleのショートカットアプリでWebクリップをGitHubのリポジトリにコミットする
description: >-
  Appleのショートカットを使って、iPhoneのWebブラウザで現在見ている記事のWebクリップ（本文のみをMarkdown形式に変換したもの）を、GitHub
  のプライベートリポジトリにサクッと保存できるようにした。
pubDatetime: 2024-11-06T15:00:00.000Z
author: kadoppe
postSlug: 2024-11-07-apple-shortcut-webclip
draft: false
---

Appleのショートカットを使って、iPhoneのWebブラウザで現在見ている記事のWebクリップ（本文のみをMarkdown形式に変換したもの）を、GitHub のプライベートリポジトリにサクッと保存できるようにした。

こんな感じ。スクリーンショットは macOS 版のショートカットアプリですが、iOS版のショートカットアプリでも同様に作成できる。![](/apple-shortcut-webclip.png)

手順をざっくり書くと以下。

### 事前準備

* GitHub に Private リポジトリを作成しておく
* 上記リポジトリに対して「Contents : read and write」権限を付与したPAT （Personal Access Token）を発行

### ショートカットの作成

* 「共有シート」から「URL」の入力を受け取るようにショートカットを設定
* 「記事の詳細を取得」アクションを使って、受け取ったURLから、記事の内容を抽出
* 「リッチテキストからマークダウンを作成」アクションを使って、抽出した記事の本文をMarkdown形式に変換
* 「Base64エンコード」アクションを使って、Markdown形式の本文をBase64にエンコード
* 「URLエンコード」アクションを使って、抽出した記事の名前（タイトル）をURLエンコード
* 「URLの内容を取得」アクションを使って、GitHub の[「Create or Update file Contents」API](https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#create-or-update-file-contents)を呼び出し
  * リクエストURLでリポジトリ名や作成するファイル名・パスを指定
  * ファイル名に、先ほどURLエンコードした「記事の名前」 + 「.md」を指定
  * HTTPメソッドは「PUT」を指定
  * HTTPヘッダーに、事前準備で作成したPATを指定
  * リクエストボディのJSONには、Base64エンコードした Markdown 形式の本文を指定（以下参考）

![](/assets/blog/apple-shortcut-webclip2.png)

***

こんな感じでショートカットを作ると、iPhone の「共有シート」に以下のように「Web Clipper」と表示されるようになる。（上の方にショートカットを表示するには共有シートの設定が必要）

iPhoneのWebブラウザ（SafariやArcなど）で記事を読んでいるときに、このショートカットを実行することで、読んでいる記事の内容がMarkdown に変換されて、GitHub の PrivateリポジトリにMarkdownファイルとしてコミットされる。

![](/assets/blog/apple-shortcut-webclip3.jpeg)

元々はNotionにWebクリップを保存していたのだけれど、GitリポジトリでWebクリップを管理したいと思うきっかけがあり、ショートカットアプリを使って仕組みを作ってみた。

ショートカットアプリは、最初は慣れるまで操作が難しいけど、いろんなAPIと組み合わせるといろんなことが簡単に自動化できて便利。
