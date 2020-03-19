# create-react-app-example

create-react-appを使用して作成したプロジェクトの設定内容
ESLintは既に導入済みのeslint-config-react-appを使用する

## ToDo

- prettierの設定整理

## 前提

前提知識としてcreate-react-appで作成したプロジェクトには
既にreact-app(eslint-config-react-app)がESLintに設定されている

https://www.npmjs.com/package/eslint-config-react-app

## 手順

1. コマンドの設定
2. eslint設定
3. prettier設定
4. husky設定
5. lint-staged設定
6. vscode設定
7. eslint-config-react-app

## 検証バージョン

create-react-app:3.4.0 (2020-02-14)

## 1. コマンド設定

```json:package.json
    "eslint": "eslint -c .eslintrc.json --ext .js --ext .jsx ./src",
    "eslint-fix": "eslint -c .eslintrc.json --ext .js --ext .jsx ./src --fix"
```

## 2. eslint設定

既存のreact-appをeslintrc.jsonへ外出しする

### .eslintrcの作成

eslintrcファイル（拡張子はjsonかjavascriptが良さそう）
eslint --initなどでeslintrcファイルを作成しても良いが必要なのはこの部分のみ

```javascript:.eslintrc.json
{
  "extends": [
      "react-app"
  ]
}
```

package.jsonからreact-appの箇所を削除

```json:package.json
  "eslintConfig": {
    "extends": "react-app"
  },
```

### .eslintignoreの作成

必要に応じて修正

### 動作確認

```:正常
▸ yarn elint
yarn run v1.19.0
$ eslint -c .eslintrc.json --ext .js --ext .jsx ./src
✨  Done in 0.95s.
```

```:エラーになるようにコードを修正
▸ yarn lint
yarn run v1.19.0
$ eslint -c .eslintrc.json --ext .js --ext .jsx ./src

  7:6  error  Parsing error: Unexpected token

   5 | function App() {
   6 |   return (
>  7 |     <<div className="App">
     |      ^
   8 |       <header className="App-header">
   9 |         <img src={logo} className="App-logo" alt="logo" />
  10 |         <p>

✖ 1 problem (1 error, 0 warnings)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

## 3. prettier設定

### パッケージをインストール

- eslint-config-prettier: ES Lintのコード整形ルールを全て無効にする
- eslint-plugin-prettier: PrettierをES Lint内で実行できるようにする
- prettier: Prettier (コード整形ツール)

```:追加パッケージの導入
yarn add -D eslint-config-prettier eslint-plugin-prettier prettier 
```

### .esllintrc.jsonを編集

```:.esllintrc.jsonへ追記
{
  "extends": [
      "react-app",
      "plugin:prettier/recommended"
  ]
}
```

### .prettierrc.jsonを作成

.eslintrc.jsonへ記述する方法もあるが別で分けて作成も可能
設定内容は以下を参照

https://prettier.io/docs/en/options.html

```:.prettierrc.jsonを作成
{
  "bracketSpacing": false,
  "singleQuote": true,
  "jsxBracketSameLine": true,
  "trailingComma": "es5",
  "printWidth": 80
}
```

### .prettierignoreを作成

必要に応じて修正

## 4. husky設定

### パッケージをインストール

```:追加パッケージの導入
yarn add -D husky 
```

### package.jsonへ追記

```:package.jsonへ追記
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
```

## 5. lint-staged設定

### パッケージをインストール

```:追加パッケージの導入
// yarn
yarn add -D lint-staged 
```

### package.jsonへ追記

```:package.jsonへ追記
  "lint-staged": {
    "*.{js,jsx}": ["eslint --fix", "git add"]
  }
```

## 6. vscode設定

```:.vscode/setting.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 参考
https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically
