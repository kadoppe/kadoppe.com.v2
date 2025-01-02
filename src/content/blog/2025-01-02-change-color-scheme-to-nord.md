---
title: よく使うアプリケーションの　Color Scheme を Nord に変更してみた
description: ここ数年、エディタやターミナルエミュレータの Color Scheme として Dracula を使っていた。2025年になったこともあり、気分転換に新しい Scheme を使ってみることにした。
pubDatetime: 2025-01-02T15:00:00.000Z
author: kadoppe
tags:
  - productivity
postSlug: 2025-01-02-change-color-scheme-to-nord
draft: false
---

ここ数年、エディタやターミナルエミュレータの Color Scheme として [Dracula](https://draculatheme.com) を使っていた。2025年になったこともあり、気分転換に新しい Scheme を使ってみることにした。

新しい Color Scheme として選んだのは [Nord](https://www.nordtheme.com/) という Color Scheme。 Dracula と比べて色が優しい（ローコントラストというのかな）。落ち着いた雰囲気が気に入ったのでこれにした。

Cursor に設定した様子は以下。
![Cursorの様子](../../../public/assets/blog/color-scheme-nord.png)

Dracula ほどではないけれど、いろんなアプリケーション用の Color Scheme が豊富に用意されているのも決めて。自分は以下のアプリケーションに対して Nord を設定した。

- Cursor (Visual Studio Code)
  - https://www.nordtheme.com/ports/visual-studio-code
- Neovim
  - https://github.com/shaunsingh/nord.nvim
- Alacritty
  - https://gist.github.com/candidtim/6097565040a3aec839a8a2d28cb8887d
  - ※ 公式サイトからアクセスできる Scheme は YAML 形式で alacritty.toml に対応してなかったので、上記 Gist で公開されている Scheme を使用した
- tmux
  - https://www.nordtheme.com/ports/tmux
- Obsidian
  - https://minimal.guide/home
  - ※ Minimal というテーマをインストールし、その上で選べる Color Scheme として Nord を選択しました。

最近、疲れ目がひどくて悩んでいるので、Dracula よりも目に優しそうな Scheme を選んだつもり。今の所気に入っている。実際にがっつりコードを書いていると不満が出てくるのかもしれないが、そこは自分で微調整とかできるといいのかな。

実は Color Scheme を自作してみようかと一瞬思ったのと、以下の資料を読んでると難しくて時間がかかりそう、センスも求められそうで、今は諦めてしまった。またいつかチャレンジ。（資料自体は Color Scheme 自作の奥深さを感じることができて、めちゃくちゃ面白かったのでオススメ）

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/0e6e3d1a67a346e9abe9c187a277e18e" title="Creating Your Lovely Color Scheme" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>


