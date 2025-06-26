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
- **Markdownパーサー**: gray-matter (Front Matter解析)
- **アイコン**: Lucide React

### プロジェクト構成

- `app/` - Next.js App Routerのページとレイアウト
  - `layout.tsx` - ThemeProviderを含むルートレイアウト
  - `page.tsx` - メインポートフォリオページ
  - `globals.css` - Tailwind CSSとテーマ変数
- `components/ui/` - shadcn/uiパターンに従った再利用可能なUIコンポーネント
  - 専用コンポーネント: `CardGrid`, `SkillGrid`, `ThemeToggle`
  - レイアウトコンポーネント: `Header`, `Footer`, `Hero`, `Contact`
  - shadcn/uiベース: `button`, `card`, `dropdown-menu`, `input`, `label`, `separator`
- `content/` - Markdownベースのコンテンツ管理
  - `skills/` - スキル情報（現在6ファイル: Java, Next.js, Node.js, React, Tailwind CSS, TypeScript）
  - `works/` - 作品情報（現在1ファイル: Portfolio Website）
- `lib/` - ユーティリティ関数と共有ロジック
  - `constants.ts` - アプリケーション定数（個人情報、サイト設定、UI文言、テーマ設定）
  - `types.ts` - TypeScript型定義（コンテンツ型、Props型）
  - `markdown.ts` - Markdownファイル処理とコンテンツ取得
  - `utils.ts` - 共通ユーティリティ（スタイル結合、日付フォーマット、要約抽出）
  - `styles.ts` - 共通スタイル定数

### コンポーネントシステム

`components.json`で設定されたshadcn/uiコンポーネントを使用。コンポーネントはRadix UIプリミティブをベースにTailwind CSSでスタイリングされ、`app/globals.css`で定義されたCSS変数を使用してライト/ダークモード間で一貫したテーマを実現。

### テーマ実装

next-themesを使用したクラスベースの切り替えでダーク/ライトモードを実装。ThemeProviderが`app/layout.tsx`でアプリ全体をラップし、テーマカラーはTailwind設定でCSS変数として定義。

### コンテンツ管理

**Markdownベースのコンテンツ管理システム**
- **Skills**: Front Matter（name, description, experience, level, tags）+ Markdownコンテンツ
- **Works**: Front Matter（title, description, date, tags, buttonText）+ Markdownコンテンツ
- **処理**: gray-matterによるFront Matter解析、自動ソート（スキル: レベル順、作品: 日付順）
- **型安全性**: TypeScriptインターフェースによる厳密な型定義

### 主要な機能

- **レスポンシブデザイン**: モバイルファーストアプローチ
- **テーマ切り替え**: ダーク/ライトモード（システム設定自動検出）
- **動的コンテンツ**: Markdownファイルからの自動コンテンツ生成
- **型安全性**: 完全なTypeScript対応
- **アクセシビリティ**: WAI-ARIA準拠
- **SEO最適化**: App Routerによるサーバーサイドレンダリング
- **パフォーマンス**: Next.js 14の最適化機能活用

### 開発ガイドライン

- **スタイル管理**: 共通スタイルは`lib/styles.ts`に定数として定義
- **テキスト管理**: UI表示テキストは`lib/constants.ts`の`UI_TEXT`で管理
- **型定義**: 新しいデータ構造は`lib/types.ts`に型定義を追加
- **コンテンツ追加**: `content/`ディレクトリにMarkdownファイルを追加するだけで自動反映
- **コンポーネント**: shadcn/uiパターンに従い、`components/ui/`に配置

### 開発チェックリスト

- 変更を加えて作業を完了した際にはyarn buildとyarn lintを必ず実施してください。