# eslint-example

前提知識としてcreate-react-appで作成したプロジェクトには
既にreact-app(eslint-config-react-app)がESLintに設定されている

https://www.npmjs.com/package/eslint-config-react-app

create-react-appで作成したプロジェクトへESLint, Prettierへの適用手順をまとめる

1. 既存のreact-appをpackage.jsonからeslintrcへ外だしする
2. Airbnbを追加で適用する
3. husky lint-staged prettierを追加で適用する
4. TypeScriptを導入した場合

create-react-appのversion
3.4.0 (2020-02-14)

## Airbnbについて

「Airbnb」（エアビーアンドビー）‎製のJavaScript スタイルガイド

翻訳
https://mitsuruog.github.io/javascript-style-guide/

## 1. 既存のreact-appをeslintrcへ外だしする

eslintrcファイル（拡張子はjsonかjavascriptが良さそう）

```javascript:eslintrc.js
module.exports = {
    extends: [
        "react-app"
    ]
};
```

eslint --initなどでeslintrcファイルを作成しても良いが必要なのはこの部分のみ

## 2. Airbnbを追加で適用する


## 3. husky lint-staged prettierを追加で適用する

#### 追加で必要なパッケージを追加

- eslint-config-prettier: ES Lintのコード整形ルールを全て無効にする
- eslint-plugin-prettier: PrettierをES Lint内で実行できるようにする
- husky: gitのcommit時等に処理をhookできるようにする
- lint-staged:commit時の処理の際にgitにstagingされたものだけをlintする
- prettier: Prettier (コード整形ツール)

```:追加パッケージの導入
// yarn
yarn add -D eslint-plugin-react-app eslint-config-prettier eslint-plugin-prettier husky lint-staged prettier 

// npm
npm install --save-dev eslint-plugin-react-app eslint-config-prettier eslint-plugin-prettier husky lint-staged prettier
```

#### prettierの設定

```:.esllintrc.jsへ追記
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",      // 追記
        "prettier/react"      // 追記
    ],

    "plugins": [
        "react",
        "prettier"      // 追記
    ],
```

#### husky, lint-stagedの設定

```:package.jsonへ追記
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx}": ["eslint --fix", "git add"]
  },
```

#### 発生したエラーへの対応

```
  5:1  error  'test' is not defined    no-undef
  8:3  error  'expect' is not defined  no-undef
  24:7   error  'process' is not defined  no-undef
  26:31  error  'process' is not defined  no-undef
  35:24  error  'process' is not defined  no-undef
```

```.eslintrc.jsへ追記
    node: true,
    jest: true
```

```
Warning: React version not specified in eslint-plugin-react settings. See https://github.com/yannickcr/eslint-plugin-react#configuration .
```

```.eslintrc.jsへ追記
  settings: {
    react: {
      version: "detect"
    }
  }
```

## 参考
https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically