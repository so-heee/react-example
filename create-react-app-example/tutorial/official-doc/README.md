https://ja.reactjs.org/docs

# MAIN CONCEPTS

## JSX の導入

- JSXを使う理由
- JSX に式を埋め込む
- JSX もまた式である
- JSX で属性を指定する
- JSX で子要素を指定する
- JSX はインジェクション攻撃を防ぐ
- JSX はオブジェクトの表現である

## 要素のレンダー

- 要素を DOM として描画する
- レンダリングされた要素の更新
- React は必要な箇所のみを更新する

## コンポーネントと props

- 関数コンポーネントとクラスコンポーネント
- コンポーネントのレンダー
- コンポーネントを組み合わせる
- コンポーネントの抽出
- Props は読み取り専用

## state とライフサイクル

- 関数をクラスに変換する
- クラスにローカルな state を追加する
- クラスにライフサイクルメソッドを追加する
- state を正しく使用する
  - state を直接変更しないこと
  - state の更新は非同期に行われる可能性がある
  - state の更新はマージされる
- データは下方向に伝わる

## イベント処理

- イベントハンドラに引数を渡す

## 条件付きレンダー

- 要素変数
- 論理 && 演算子によるインライン If
- 条件演算子によるインライン If-Else
- コンポーネントのレンダーを防ぐ

## リストと key

- 複数のコンポーネントをレンダリングする
- 基本的なリストコンポーネント
- Key
  - key のあるコンポーネントの抽出
  - key は兄弟要素の中で一意であればよい
  - map() を JSX に埋め込む

## フォーム

- 制御されたコンポーネント
- textarea タグ
- select タグ
- file input タグ
- 複数の入力の処理
- 制御された入力における null 値
- 制御されたコンポーネントの代替手段
- 本格的なソリューション

## state のリフトアップ

- 2 つ目の入力を追加する
- 変換関数の作成
- state のリフトアップ

## コンポジション vs 継承

- 子要素の出力 (Containment)
- 特化したコンポーネント (Specialization)
- 継承はどうするの？

## React の流儀

- モックから始めよう
- Step 1: UI をコンポーネントの階層構造に落とし込む
- Step 2: Reactで静的なバージョンを作成する
- Step 3: UI 状態を表現する必要かつ十分な state を決定する
- Step 4: state をどこに配置するべきなのかを明確にする
- Step 5: 逆方向のデータフローを追加する

# ADVANCED GUIDES

## アクセシビリティ

- 名前付きエクスポート
  - WCAG
  - WAI-ARIA
- セマンティックな HTML
- アクセシブルなフォーム
  - ラベル付け
  - ユーザへのエラー通知
- フォーカス制御
  - キーボードフォーカスとフォーカス時のアウトライン（輪郭線）
  - 目的のコンテンツまで飛べる仕組み
  - プログラムによりフォーカスを管理する
- マウスとポインタのイベント
- より複雑なウィジェット
- その他に考慮すべきポイント
  - 言語設定
  - ドキュメントの title の設定
  - 色のコントラスト
- 開発とテストのツール
  - キーボード
  - 開発支援
    - eslint-plugin-jsx-a11y
  - ブラウザでアクセシビリティをテストする
    - aXe, aXe-core and react-axe
    - WebAIM WAVE
    - アクセシビリティ検査ツールとアクセシビリティツリー
  - スクリーンリーダ
    - NVDA と FireFox
    - VoiceOver と Safari
    - JAWS と Internet Explorer
    - ChromeVox と Google Chrome

## コード分割

- バンドル
- コード分割
- import()
- React.lazy
  - Suspense
  - Error Boundary
- ルーティング単位でのコード分割
- 名前付きエクスポート

## コンテクスト

- コンテクストをいつ使用すべきか
- コンテクストを使用する前に
- API
  - React.createContext
  - Context.Provider
  - Class.contextType
  - Context.Consumer
  - Context.displayName
- 動的なコンテクスト
- ネストしたコンポーネントからコンテクストを更新する
- 複数のコンテクストを使用する

## Error Boundary

- error boundary とは
- error boundary を配置すべき場所
- エラーがキャッチされなかった場合の新しい動作
- コンポーネントのスタックトレース
- try/catch について
- イベントハンドラについて

## ref のフォワーディング

- DOM コンポーネントに ref をフォワーディングする
- コンポーネントライブラリのメンテナ向けの補足
- 高階コンポーネントにおける ref のフォワーディング
- DevTools でのカスタム名表示

## フラグメント

- 動機
- 使い方
  - 短い記法
  - key 付きフラグメント

## 高階 (Higher-Order) コンポーネント

- 横断的関心事に HOC を適用する
- 元のコンポーネントを変更するのではなく、コンポジションを使うこと
- 規則：自身に関係のない props はラップされるコンポーネントにそのまま渡すこと
- 規則：組み立てやすさを最大限保つこと
- 規則：デバッグしやすくするため表示名をラップすること
- 注意事項
  - render メソッド内部で HOC を使用しないこと
  - 静的メソッドは必ずコピーすること
  - ref 属性は渡されない

## 他のライブラリとのインテグレーション

- DOM 操作プラグインとのインテグレーション
  - この問題への取り組み方法
  - jQuery Chosen プラグインとのインテグレーション
- 他のビューライブラリとのインテグレーション
  - React で文字列ベースのレンダーを置き換える
  - Backbone View に React を組み込む
- Model 層とのインテグレーション
  - React コンポーネントで Backbone Model を使用する
  - Backbone Model からデータを抽出する

## JSX を深く理解する

- React 要素の型を指定する
  - React がスコープ内にあること
  - JSX 型にドット記法を使用する
  - ユーザ定義のコンポーネントの名前は大文字で始めること
  - 実行時に型を選択する
- JSX における props
  - プロパティとしての JavaScript 式
  - 文字列リテラル
  - プロパティのデフォルト値は true
  - 属性の展開
- JSX における子要素
  - 文字列リテラル
  - 子要素としての JSX 要素
  - 子要素としての JavaScript 式
  - 子要素としての関数
  - 真偽値、null、undefined は無視される

## パフォーマンス最適化

- 本番用ビルドを使用する
  - Create React App
  - 単一ファイル版ビルド
  - Brunch
  - Browserif
  - Rollup
- Chrome のパフォーマンスタブでコンポーネントをプロファイルする
- DevToolsプロファイラを使用したコンポーネントのプロファイリング
- 長いリストの仮想化
- リコンシリエーション（差分検出処理）を避ける
- shouldComponentUpdate の実際の動作
- データを変更しないことの効果

## ポータル

- 使い方
- ポータルを介したイベントのバブリング

## プロファイラ API

- 使用法
- onRender コールバック

## ES6 なしで React を使う

- デフォルト props の宣言
- state の初期値の設定
- 自動バインド
- ミックスイン

## JSX なしで React を使う

## 差分検出処理

- 何が問題なのか
- 差分アルゴリズム
  - 異なる型の要素
  - 同じ型の DOM 要素
  - 同じ型のコンポーネント要素
  - 子要素の再帰的な処理
  - Keys
- トレードオフ

## Ref と DOM

- いつ Ref を使うか
- Ref を使いすぎない
- Ref を作成する
- Ref へのアクセス
- DOM の Ref を親コンポーネントに公開する

## レンダープロップ

- 横断的関心事にレンダープロップを使う
- render 以外の props を使う
- 注意事項
  - レンダープロップを React.PureComponent で使うときの注意点

## 静的型チェック

- Flow
  - Flow をプロジェクトに追加する
  - Flow の型定義をコンパイル時にコードから剥がす
  - Flow の実行
  - Flow の型定義の追記
- TypeScript
  - Create React App で TypeScript を使用する
  - TypeScript をプロジェクトに追加する
  - TypeScript コンパイラの設定
  - ファイル拡張子
  - TypeScript の実行
  - 型宣言
- Reason
- Kotlin
- 他の言語

## strict モード

- 安全でないライフサイクルの特定
- レガシーな文字列 ref API の使用に対する警告
- 非推奨な findDOMNode の使用に対する警告
- 意図しない副作用の検出
- レガシーなコンテクスト API の検出

## PropTypes を用いた型チェック

React v15.5 において別パッケージに移動

- PropTypes
- 単一の子要素を要求する
- props のデフォルト値

## 非制御コンポーネント

- デフォルト値
- ファイル input タグ

## Web Components

- React で Web Components を使用する
- Web Components で React を使用する

# API REFERENCE

# HOOKS

# TESTING

# CONCURRENT MODE

