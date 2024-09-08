---
title: 個人サイトに Biome を導入してみた（+ Neovim の設定）
author: kadoppe
pubDatetime: 2024-09-08T12:11:00.000Z
description: 個人サイトで使っている formatter と linter を ESLint と Prettier の構成から Biome に移行してみました。
postSlug: 2024-09-08-migrate-to-biome-for-personal-site
tags:
  - engineering
  - neovim
---

個人サイト（ここ）で使っている formatter と linter を [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) の構成から [Biome](https://biomejs.dev/) に移行してみた。


仕事で一度 Biome を導入したことがあって、必要な設定が少なく、実行速度が速くく、一つのツールで全部まかなえるというところが体験的にすごく良かったので。

この個人サイトは [Astro](https://astro.build/) で作られているのだけど、 Biome は .astro ファイルも[[部分的にサポートしている](https://biomejs.dev/internals/language-support/#html-super-languages-support)とのこと。

Biome の設定ファイル（biome.json）は以下のような内容にした。ほぼデフォルトの設定だけど、`vcs` セクションで Git で ignore されているファイルは Biome でも無視するように設定している。


```json
{
	"$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
	"organizeImports": {
		"enabled": true
	},
	"linter": {
		"enabled": true,
		"rules": {
			"recommended": true
		}
	},
	"vcs": {
		"enabled": true,
		"clientKind": "git",
		"useIgnoreFile": true
	}
}
```

導入してみてみたものの、以前使ったこともあるので特に驚きもなく、淡々と設定しおわった。こういうツールは導入時に驚くこともなく、気がついたら設定が済んでました、くらいの方がいいのかもしれない。

---

Biome の導入ついでに Neovim の設定も微調整した。

非同期での linter 実行には [nvim-lint](https://github.com/mfussenegger/nvim-lint) プラグインを使っている。以下が nvim-lintの設定。

```lua
return {
  "mfussenegger/nvim-lint",
  event = { "BufReadPre", "BufNewFile" },
  config = function()
    vim.api.nvim_create_autocmd({ "BufWritePost" }, {
      callback = function()
        require("lint").try_lint()
      end,
    })
  end
}
```

この設定ファイルには言語や linter ごとの設定は記述しておらず、それらは各プロジェクトのルートディレクトリに .nvim.lua というプロジェクトローカルの Neovim 設定ファイルを作ってそこに記載するようにしている。プロジェクトごとにどういうツールを採用しているか様々だから。

```lua
require('lint').linters_by_ft = {
  javascript = {'biomejs',},
  typescript = {'biomejs',},
  typescriptreact = {'biomejs'},
}
```

また、保存時の formatter 実行には [formatter.nvim](https://github.com/mhartington/formatter.nvim) プラグインを使っている。以下が formatter.nvim の設定。

```lua
return {
  "mhartington/formatter.nvim",
  event = { "BufReadPre", "BufNewFile" },
  config = function()
    local augroup = vim.api.nvim_create_augroup
    local autocmd = vim.api.nvim_create_autocmd
    augroup("__formatter__", { clear = true })
    autocmd("BufWritePost", {
      group = "__formatter__",
      command = ":FormatWrite",
    })
  end
}
```

こちらも、nvim-lint と同様に、 .nvim.lua にプロジェクトローカルの設定を書くようにしている。プロジェクトローカルにインストールした biome を実行したかったので、`exe` に実行ファイルとして `npx biome` を指定してる。

```lua
local util = require "formatter.util"
local biome = {
  exe = "npx biome",
  args = {
    "format",
    "--stdin-file-path",
    util.escape_path(util.get_current_buffer_file_path()),
  },
  stdin = true,
}

require('formatter').setup({
  filetype = {
    javascript = {
      function ()
        return biome
      end
    },
    typescript = {
      function ()
        return biome
      end
    },
    typescriptreact = {
      function ()
        return biome
      end
    },
    astro = {
      function ()
        return biome
      end
    },
  }
})
```

今のところは概ねいい感じ。また不満が出てきたら設定を見直してみる。
