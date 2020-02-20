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