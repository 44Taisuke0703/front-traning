const putTodo = async (id, todo) => {
  const response = await fetch(`http://localhost:3000/todo/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await response.json();
  console.dir(updatedTodo);
  return updatedTodo;
};
putTodo(1, {
  userId: 1,
  title: "更新されたTODO",
  completed: true,
});

/*処理の手順
1. putTodo関数が呼び出される。
2. fetch関数が呼び出され、指定されたURLにPUTリクエストを送信するためのリクエストが作成される。
3. fetch関数はPromiseを返し、リクエストが完了するまで待機する。
4. リクエストが完了すると、responseオブジェクトが返される。
5. response.json()メソッドが呼び出され、レスポンスのデータをJSON形式に変換するためのPromiseが返される。
6. JSONデータが取得されると、updatedTodo変数に格納される。
7. updatedTodoをコンソールに出力する。
8. putTodo関数が終了する。
9. 処理が完了する。
*/

// //fetchは、指定されたURLにPUTリクエストを送信するための関数であり、Promiseを返す。
// //fetchは、HTTPリクエストを送信するためのAPIであり、GET、POST、PUT、DELETEなどのHTTPメソッドを使用することができる。
// //headersは、リクエストのヘッダーを指定するためのオブジェクトであり、Content-Typeは、リクエストのデータ形式を指定するためのヘッダーである。
// //bodyは、リクエストのデータを指定するためのプロパティであり、JSON形式のデータを指定する。
// //JSON.stringifyは、JavaScriptのオブジェクトをJSON形式の文字列に変換するためのメソッドである。
//putは、リソースを更新するためのHTTPメソッドであり、指定されたURLにリクエストを送信する。
