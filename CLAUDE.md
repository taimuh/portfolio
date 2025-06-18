# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 開発コマンド

- `yarn dev` - 開発サーバーを起動
- `yarn build` - プロダクション用にビルド
- `yarn start` - プロダクションサーバーを起動
- `yarn lint` - ESLintを実行

## アーキテクチャ概要

TypeScriptとTailwind CSSを使用したNext.js 14のApp Routerパターンによるポートフォリオサイトです。

### 技術スタック
- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS (テーマ用CSS変数)
- **UIコンポーネント**: shadcn/ui (Radix UIプリミティブ)
- **テーマシステム**: next-themes (ダーク/ライトモード)
- **パッケージマネージャー**: Yarn (v4.3.1)

### プロジェクト構成
- `app/` - Next.js App Routerのページとレイアウト
- `components/ui/` - shadcn/uiパターンに従った再利用可能なUIコンポーネント
- `lib/` - ユーティリティ関数と共有ロジック

### コンポーネントシステム
`components.json`で設定されたshadcn/uiコンポーネントを使用。コンポーネントはRadix UIプリミティブをベースにTailwind CSSでスタイリングされ、`app/globals.css`で定義されたCSS変数を使用してライト/ダークモード間で一貫したテーマを実現。

### テーマ実装
next-themesを使用したクラスベースの切り替えでダーク/ライトモードを実装。ThemeProviderが`app/layout.tsx`でアプリ全体をラップし、テーマカラーはTailwind設定でCSS変数として定義。