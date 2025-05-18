# json-server とは

`json-server` は、簡単に REST API のモックサーバーを作成できる Node.js 製のツールです。ローカルの JSON ファイル（例: `db.json`）をデータベースとして利用し、API サーバーをすぐに立ち上げることができます。

## 主な特徴

- 数行のコマンドで即座に API サーバーを構築可能
- GET/POST/PUT/DELETE などの RESTful なエンドポイントを自動生成
- フロントエンド開発時のモック API サーバーとして便利
- クエリやページネーション、リレーションなどの機能もサポート

## 使い方の例

1. `npm install -g json-server` でグローバルインストール
2. `db.json` というファイルを用意
3. `json-server --watch db.json` でサーバー起動

これで `http://localhost:3000` で API を利用できます。

---

## jsonplaceholder とは

`jsonplaceholder` は、フロントエンドや API クライアントのテスト・学習用に提供されている、無料のオンライン REST API サービスです。実際のデータベースやサーバーを用意しなくても、ダミーデータを使った API リクエストの練習ができます。

### 主な特徴

- ユーザー、投稿、コメント、アルバム、写真、ToDo などのサンプルデータを提供
- GET/POST/PUT/DELETE などのエンドポイントが利用可能
- 登録不要・無料で利用可能
- API の URL 例: `https://jsonplaceholder.typicode.com/posts`

### 使いどころ

- フロントエンド開発時の API 通信のテスト
- HTTP クライアントやライブラリの動作確認
- 学習やデモ用のサンプル API として

---

### このリポジトリでの利用例

このリポジトリでは、`json-server` を使ってローカルでモック API サーバーを立ち上げ、`db.json` に記述したデータを REST API として利用できるようにしています。

また、`jsonplaceholder` のエンドポイントも参考として利用し、API 通信の学習やテストに役立てています。

- `json-server` で `db.json` を監視し、`http://localhost:3000` で独自のモック API を提供
- `jsonplaceholder` のエンドポイント（例: `https://jsonplaceholder.typicode.com/posts`）を使って、外部のサンプル API も利用可能

これにより、フロントエンド開発時に実際のバックエンドがなくても、API 通信の実装やテストが簡単に行えます。

---
