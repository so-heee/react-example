# eslint-example

create-react-appで作成したプロジェクトへESLint, Prettierへの適用手順をまとめる

create-react-appのversion
3.4.0 (2020-02-14)

## create-react-appに導入済みのパッケージを確認

- eslint: ES Lint (lintツール)
- eslint-plugin-react: React用のES Lint
- babel-eslint: Babelを使っている際のLint用のパーサー

```
@types/eslint-visitor-keys@^1.0.0
@typescript-eslint/eslint-plugin@^2.10.0
@typescript-eslint/experimental-utils@2.19.2
@typescript-eslint/parser@^2.10.0
@typescript-eslint/typescript-estree@2.19.2
babel-eslint@10.0.3
eslint-config-react-app@^5.2.0
eslint-import-resolver-node@^0.3.2
eslint-loader@3.0.3
eslint-module-utils@^2.4.1
eslint-plugin-flowtype@4.6.0
eslint-plugin-import@2.20.0
eslint-plugin-jsx-a11y@6.2.3
eslint-plugin-react-hooks@^1.6.1
eslint-plugin-react@7.18.0
eslint-scope@^4.0.3
eslint-scope@^5.0.0
eslint-utils@^1.4.3
eslint-visitor-keys@^1.0.0, eslint-visitor-keys@^1.1.0
eslint@^6.6.0
```

## 追加で必要なパッケージを追加

- eslint-config-prettier: ES Lintのコード整形ルールを全て無効にする
- eslint-plugin-prettier: PrettierをES Lint内で実行できるようにする
- husky: gitのcommit時等に処理をhookできるようにする
- lint-stagedcommit時の処理の際にgitにstagingされたものだけをlintする
- prettier: Prettier (コード整形ツール)

```
yarn add -D eslint-plugin-react-app eslint-config-prettier eslint-plugin-prettier husky lint-staged prettier 
npm install --save-dev eslint-plugin-react-app eslint-config-prettier eslint-plugin-prettier husky lint-staged prettier
```

## eslintの初期化を行う

```
yarn run eslint --init
npm run eslint --init
```

## prettierの設定

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

## husky, lint-stagedの設定

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

## 発生したエラーへの対応

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