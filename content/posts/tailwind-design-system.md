---
title: "Tailwind CSSでデザインシステムを構築する"
description: "Tailwind CSSを使用して一貫性のあるデザインシステムを構築する方法について解説します。"
date: "2024-04-20"
tags: ["Tailwind CSS", "Design System", "CSS", "Frontend"]
buttonText: "記事を読む"
---

# Tailwind CSSでデザインシステムを構築する

Tailwind CSSは、ユーティリティファーストのCSSフレームワークです。効率的なデザインシステム構築について説明します。

## カスタムテーマの設定

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a'
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      }
    }
  }
}
```

## コンポーネントクラスの作成

```css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors;
  }
  
  .card {
    @apply bg-white shadow-lg rounded-lg p-6 border border-gray-200;
  }
}
```

## レスポンシブデザイン

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="card">...</div>
</div>
```

## ダークモード対応

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <h1 class="text-2xl font-bold">タイトル</h1>
</div>
```

Tailwind CSSを活用することで、効率的で保守性の高いスタイリングシステムを構築できます。