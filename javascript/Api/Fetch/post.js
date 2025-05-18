const postTodo = async (todo) => {
  const response = await fetch("http://localhost:3000/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await response.json();
  console.dir(newTodo);
  return newTodo;
};

postTodo({
  userId: 1,
  title: "新しいTODO",
  completed: false,
});

/*処理の手順
1. postTodo関数が呼び出される。
2. fetch関数が呼び出され、指定されたURLにPOSTリクエストを送信するためのリクエストが作成される。
3. fetch関数はPromiseを返し、リクエストが完了するまで待機する。
4. リクエストが完了すると、responseオブジェクトが返される。
5. response.json()メソッドが呼び出され、レスポンスのデータをJSON形式に変換するためのPromiseが返される。
6. JSONデータが取得されると、newTodo変数に格納される。
7. newTodoをコンソールに出力する。
8. postTodo関数が終了する。
9. 処理が完了する。
*/
// //fetchは、指定されたURLにPOSTリクエストを送信するための関数であり、Promiseを返す。
// //fetchは、HTTPリクエストを送信するためのAPIであり、GET、POST、PUT、DELETEなどのHTTPメソッドを使用することができる。
//headersは、リクエストのヘッダーを指定するためのオブジェクトであり、Content-Typeは、リクエストのデータ形式を指定するためのヘッダーである。
// //bodyは、リクエストのデータを指定するためのプロパティであり、JSON形式のデータを指定する。
// //JSON.stringifyは、JavaScriptのオブジェクトをJSON形式の文字列に変換するためのメソッドである。
// //JSON.parseは、JSON形式の文字列をJavaScriptのオブジェクトに変換するためのメソッドである。

// //mdn https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON
// //mdn https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// //mdn https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
// //mdn https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
// //mdn https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch#sending_a_post_request