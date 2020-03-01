# Gatsby.js 公式チュートリアル

https://www.gatsbyjs.org/tutorial

## 0. 開発環境をセットアップする

### Node.js のインストール

### Gatsby CLI ツールのインストール

```:グローバルにインストール
npm install -g gatsby-cli
```

### Gatsby サイトを作成する

```
gatsby new hello-world
cd hello-world
gatsby develop
```

## 1. Gatsby Building Blocks

```:Gatsby starterを使用したGatsbyサイト作成コマンド
// 末尾からURLを省略すると、Gatsbyはデフォルトのスターターに基づいて自動的にサイトを生成
gatsby new [SITE_DIRECTORY_NAME] [URL_OF_STARTER_GITHUB_REPO]
```

### page ページコンポーネントの使用

src/pages/\*.js で作成したコンポーネント。自動でルーティングの設定がされる

### layout コンポーネントの使用

複数のページで共有するサイトのセクションコンポーネント。サイドバーやナビゲーションメニュー等

### <Link />コンポーネントの使用

サイト内のページ間をリンクするためのもの

### Gatsby サイトの展開

## 2. Gatsby のスタイリングの概要

### グローバルスタイルの使用

サイト全体に適用するスタイル
src/styles/global.css スタイルシートを作成し、gatsby-browser.js で読み込むことで利用

### コンポーネントスコープの CSS を使用

コンポーネント指向のスタイリング CSS
CSS モジュールを利用し、各コンポーネント単位で CSS を作成する

### CSS-in-JS

## 3. ネストされたレイアウトコンポーネントの作成

### プラグインを使用する

Typography.js は、サイトのタイポグラフィのグローバルベーススタイルを生成する JavaScript ライブラリ

### レイアウトコンポーネントの作成

### site サイトタイトルを追加する

### pages ページ間にナビゲーションリンクを追加する

## 4. Gatsby のデータ

### 非構造化データと GraphQL の使用

### GraphQL に対して非構造化データを使用する場合

### Gatsby のデータレイヤーが GraphQL を使用してデータをコンポーネントにプルする方法

### ページクエリを使用する

ページクエリは、コンポーネント定義の外側（慣例により、ページコンポーネントファイルの末尾）に存在し
ページコンポーネントでのみ使用可能

### StaticQuery を使用する

StaticQuery は Gatsby v2 で導入された新しい API であり、非ページコンポーネント（layout.js コンポーネントなど）が
GraphQL クエリを介してデータを取得できるようになる

## 5. ソースプラグイン

### GraphiQL の紹介

GraphQL 統合開発環境（IDE）

### ソースプラグイン（gatsby-source-filesystem）

Gatsby サイトのデータは、API、データベース、CMS、ローカルファイルなど、どこからでも取得可能

### GraphQL クエリを使用してページを構築

## 6. Transformer プラグイン（gatsby-transformer-remark）

ファイル内のデータを照会するためソースプラグインから生のコンテンツを取得し、それをより使いやすいものに変換する

### Transformer プラグイン

ソースプラグインから生のコンテンツを取得し、それをより使いやすいものに変換する

### サイトのマークダウンファイルのリストを作成します

## 7. データからプログラムでページを作成する

### ページのスラッグの作成

### ページを作成する

## 8. 公開するサイトの準備

### Lighthouse による監査

```
// productionビルド
gatsby build

// 本番サイトをローカルで表示
gatsby serve
```

### マニフェストファイルを追加する(gatsby-plugin-manifest)

### オフラインサポートを追加する(gatsby-plugin-offline)

### ページのメタデータを追加
