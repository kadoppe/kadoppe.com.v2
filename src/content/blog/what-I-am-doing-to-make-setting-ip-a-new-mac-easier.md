---
title: 新しい Mac のセットアップを楽にするためにやってること
author: kadoppe
pubDatetime: 2022-09-19T15:00:00.000Z
description: Mac の初期セットアップをちょっとでも楽にするために個人的にやってることを、メモ的に書きます。
postSlug: what-I-am-doing-to-make-setting-ip-a-new-mac-easier
tags:
  - misc
---

Mac の初期セットアップをちょっとでも楽にするために個人的にやってることを、メモ的に書きます。

※ 自分用にやっていること & メンテナンス完全にできてないので、そのまんま真似してもちゃんと動かない部分もありますがご了承ください。

## 必要なソフトウェアのインストール自動化

自分の Mac になにか新しいソフトウェアをインストールするときは、基本的に Homebrew などのパッケージマネージャーを使うようにしています。

- コマンドラインのツール → Homebrew
  [Homebrew](https://brew.sh/)
- デスクトップアプリケーション（App Store 以外からインストールするもの）やフォント → Homebrew Cask
  [https://github.com/Homebrew/homebrew-cask](https://github.com/Homebrew/homebrew-cask)
- デスクトップアプリケーション（App Store からインストールするもの）→ mas
  [https://github.com/mas-cli/mas](https://github.com/mas-cli/mas)

例えば、Google Chrome をインストールしたいときは、以下のコマンドを実行すれば OK です。

```bash
brew install google-chrome
```

また、以下のリポジトリ（kadoppe/osx-setup）で macOS をセットアップするための各種スクリプト群を管理するようにしています。

[https://github.com/kadoppe/osx-setup](https://github.com/kadoppe/osx-setup)

このリポジトリの中で、[homebrew-setup.sh](https://github.com/kadoppe/osx-setup/blob/master/homebrew-setup.sh) というスクリプトを管理しています。このスクリプトを実行するだけで、以下の作業がすべて自動的に行われるようにしています。

- Homebrew のインストールとセットアップ
- Homebrew をつかって、必要なコマンドラインをツールをすべてインストール
- Homebrew Cask をつかって、必要なデスクトップアプリケーション（App Store 以外）をすべてインストール
- mas をつかって、必要なデスクトップアプリケーション（App Store から）をすべてインストール

なので、パッケージマネージャーをつかって目的のソフトウェアをインストールしたあとは、 homebrew-setup.sh を更新するようにしています。例えば、先程例としてお伝えした Google Chrome をインストールしたあとは、homebrew-setup.sh を以下のように更新して、Git リポジトリに Commit & Push します。

```bash
# インストールするデスクトップアプリの一覧
apps=(
  1password
  # 中略
  font-noto-sans-cjk-jp
  font-roboto
  # 先程インストールした google-chrome を追記
  google-chrome
  google-cloud-sdk
  google-japanese-ime
  # 中略
  zoom
)
```

もちろん、もう使わなくなったアプリケーションはスクリプトから削除します。

このように管理しておくことで、新しい Mac をセットアップするときに以下の作業を行うだけで、自動的に必要なアプリケーションがすべてインストールされた状態になります。（風呂入って上がってきたら終わってるイメージです）

- kadoppe/osx-setup リポジトリを git clone
- homebrew-setup.sh を実行

スクリプト作成から時間が立つと、特定のアプリケーションのインストール中にスクリプト実行がエラーで失敗するようになっちゃうこともあるので、そのときはエラー内容をみながらスクリプトを修正する必要があります。ですが、ブラウザから必要なアプリケーションを一つ一つインストールしていくのと比べるとすごく楽です。

他にも、kadoppe/osx-setup リポジトリでは以下のような個別の環境セットアップ用のスクリプトも管理しており、なるべく早く新しい Mac をつかって開発に取り組めるようにトライしてます。

- Node.js 環境のセットアップスクリプト
- Fish のセットアップスクリプト
- など

## アプリケーションの設定同期の自動化

ここ最近は、アプリケーションの機能として、複数端末間で設定同期をサポートすることも増えてきましたね。ですが、設定同期をサポートしていないアプリケーションも多く存在しています。

そういったアプリケーションの中で、「設定内容をファイルとして出力 / ファイルから読み込みできるもの」に関しては、 kadoppe/dotfiles というリポジトリで、各種設定内容の管理しようとしています。

[https://github.com/kadoppe/dotfiles](https://github.com/kadoppe/dotfiles)

dotfiles （アプリケーションの設定ファイル）を GitHub リポジトリで公開して管理していくというのは多くの人がやってることですね。リポジトリを Clone して設定を Mac に持ってきて、アプリケーションからその内容を読み込んで、設定内容を変更したときは、リポジトリに Commit & Push するというやつです。

なお、上記の dotfiles は　 homesick というツールをつかって運用することを前提の構造になっています。

[https://github.com/technicalpickles/homesick](https://github.com/technicalpickles/homesick)

homesick をつかうことで、 dotfiles リポジトリの Clone や、Home Directory へのシンボリックリンクの作成、変更があったときの Commit & Push などの作業が簡単にできるようになります。

dotfiles での運用にまだ乗せることができていないアプリケーションもまだまだ多くありますが、自分が仕事でメインで使うアプリケーションなど、クリティカルな部分に関しては大体対応できてるかなという感覚です。例えば、エディタ（Neovim）やシェル（fish）、Karabiner-Elements などは、この方法で設定が同期できています。

## おわりに

新しい Mac が届いたのにセットアップが終わってなくて使いたくても使えないときってありますよね。そういう悩んでいる時間がもったいなくて始めたことだと思います。

結果として、新しい Mac に乗り換える時間的コストと心理的ハードルがグーンと下がってると思います。なので、（お金さえあれば）新しい Mac への乗り換えも全然躊躇がないです。乗り換えることによるメリットだけ考えられるようになります。

なお、自動化を完璧にするのはあまり目指さないようにしています。部分的に手動でおこなう作業があってもいいかなと。そうやって手動で設定を行うことで、自分の設定の見直しや、新しい設定方法の発見につながることもあります。

調べてみると、僕は約 8 年前からこのやり方をスタートしているみたいです。完璧をあまり目指さない「庭いじり」的な一つの趣味的な感覚で気軽に続けられていて、今もスクリプトを修正してコミットするときには、不思議な達成感を覚えます。

かんたんにできる小さいところから始めるだけでも、それなりに大きなリターンはあるかなーと。
