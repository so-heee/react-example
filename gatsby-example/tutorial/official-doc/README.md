# Gatsby.js 公式チュートリアル

https://www.gatsbyjs.org/tutorial

## 開発環境をセットアップする

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

## Gatsby Building Blocks

```:Gatsby starterを使用したGatsbyサイト作成コマンド
// 末尾からURLを省略すると、Gatsbyはデフォルトのスターターに基づいて自動的にサイトを生成
gatsby new [SITE_DIRECTORY_NAME] [URL_OF_STARTER_GITHUB_REPO]
```

### page ページコンポーネントの使用

src/pages/\*.js で定義された React コンポーネントは、自動的にページになる

### layout コンポーネントの使用

複数のページで共有するサイトのセクション用コンポーネント
サイドバーやナビゲーションメニューなど

### <Link />コンポーネントの使用

サイト内のページ間をリンクするためのもの

```javascript:Linkコンポーネント
<Link to="/contact/">Contact</Link>
```

### Gatsby サイトの展開

静的なサイトホスティングサービスにデプロイできる静的な HTML および JavaScript ファイルのディレクトリを作成する
ビルドすると public ディレクトリに出力される

```
gatsby build
```

Surge は、Gatsby サイトの展開を可能にする多くの「静的サイトホスト」の 1 つ

```
npm install --global surge
```
