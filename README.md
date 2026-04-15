# portfolio

"Taimoon" のポートフォリオサイトです。

## URL

https://taimoon.dev

## 技術スタック

| カテゴリ | 技術 |
|---|---|
| フレームワーク | Next.js 15 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS |
| UIコンポーネント | shadcn/ui (Radix UI) |
| テーマ | next-themes (ダーク/ライトモード) |
| フォント | Inter (見出し) / Helvetica (本文) |
| Markdownパーサー | gray-matter |
| パッケージマネージャー | Yarn v4.3.1 |

## プロジェクト構成

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # ルートレイアウト（ThemeProvider）
│   ├── page.tsx            # メインページ
│   └── globals.css         # グローバルスタイル・テーマ変数
├── components/ui/          # UIコンポーネント
├── content/                # Markdownコンテンツ
│   ├── posts/              # ブログ記事
│   └── works/              # 制作物
└── lib/                    # ユーティリティ・共通ロジック
    ├── constants.ts        # 定数（個人情報、UI文言）
    ├── types.ts            # TypeScript型定義
    ├── markdown.ts         # Markdownファイル処理
    ├── styles.ts           # 共通スタイル定数
    └── utils.ts            # 共通ユーティリティ
```

## 開発コマンド

```bash
# 依存パッケージのインストール
yarn install

# 開発サーバーの起動
yarn dev

# プロダクションビルド
yarn build

# プロダクションサーバーの起動
yarn start

# Lintの実行
yarn lint
```

## コンテンツの追加

`content/` ディレクトリにMarkdownファイルを追加するだけで自動的にサイトに反映されます。

**Works** (`content/works/*.md`):

```markdown
---
title: プロジェクト名
description: 概要
date: YYYY-MM-DD
tags: [tag1, tag2]
buttonText: 詳細を見る
---

本文...
```

## Author

https://github.com/taimuh

## Licence

[MIT](https://github.com/taimuh/portfolio/blob/main/LICENSE)
