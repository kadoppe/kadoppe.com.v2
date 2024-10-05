---
title: TinaCMS
description: このブログの記事をスマホで気軽に書くために TinaCMS を導入してみた。
pubDatetime: 2024-10-04T15:00:00.000Z
author: kadoppe
postSlug: 2024-10-25-tina-cms
draft: true
---

このブログの記事をスマホで気軽に書くために [TinaCMS](https://tina.io/) を導入してみた。

このブログは [Astro](https://astro.build/) を使って構築していて、記事コンテンツは Markdown ファイルとして GitHub のリポジトリ上で管理している。

TinaCMS は Git-base なヘッドレスCMS。Gitリポジトリ上で管理しているコンテンツを Webのリッチなインタフェース上で編集することができる。

元々、Neovim を使ってブログの記事を編集していたのだけれど、電車での移動中やちょっとした空き時間を使ってスマホ上で記事を書きたいなと思って、方法を探していた。

導入方法は簡単。Astro だと以下のドキュメントが参考になる。

[Tina CMS & Astro | Docs](https://docs.astro.build/en/guides/cms/tina-cms/)

その後は、TinaCloud という仕組みを使うことで、ブログをホスティングしているサーバにCMSをデプロイすることができる。

[https://tina.io/docs/tina-cloud/overview/](https://tina.io/docs/tina-cloud/overview/)

TinaCMS 上で記事を編集、保存すると TinaCMS が GitHub のリポジトリの指定したブランチに編集内容をコミットしてくれる。ここのブログでは、そのコミットをトリガーに Cloudlare Pages の Deployment ジョブが実行され、新しい記事内容が [https://kadoppe.com](https://kadoppe.com) にデプロイされるような仕組みを作ってる。
