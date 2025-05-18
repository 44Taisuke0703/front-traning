const getAllTodos = async () => {
  const response = await fetch("http://localhost:3000/todo");
  console.dir(response);
  const todos = await response.json();
  console.dir(todos);
  return todos;
};

getAllTodos();

/*処理の手順
1. getAllTodos関数が呼び出される。
2. fetch関数が呼び出され、指定されたURLからデータを取得するためのリクエストが送信される。
3. fetch関数はPromiseを返し、リクエストが完了するまで待機する。
4. リクエストが完了すると、responseオブジェクトが返される。
5. response.json()メソッドが呼び出され、レスポンスのデータをJSON形式に変換するためのPromiseが返される。
6. JSONデータが取得されると、todos変数に格納される。
7. todosをコンソールに出力する。
8. getAllTodos関数が終了する。
9. 処理が完了する。
*/

//fetchは、指定されたURLからデータを取得するための関数であり、Promiseを返す。
//fetchは、HTTPリクエストを送信するためのAPIであり、GET、POST、PUT、DELETEなどのHTTPメソッドを使用することができる。
//fetchは、非同期処理であり、リクエストが完了するまで待機する。
//fetchは、レスポンスを受け取るためのPromiseを返す。
//res.json()は、レスポンスのデータをJSON形式に変換するためのメソッドであり、Promiseを返す。

//mdn https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
