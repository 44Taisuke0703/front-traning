const deleteTodo = async (id) => {
  const response = await fetch(`http://localhost:3000/todo/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    console.log(`TODO with id ${id} deleted successfully`);
  } else {
    console.error(`Failed to delete TODO with id ${id}`);
  }
};
deleteTodo(1);

/*処理の手順
1. deleteTodo関数が呼び出される。
2. fetch関数が呼び出され、指定されたURLにDELETEリクエストを送信するためのリクエストが作成される。


3. fetch関数はPromiseを返し、リクエストが完了するまで待機する。
4. リクエストが完了すると、responseオブジェクトが返される。
5. response.okプロパティがtrueの場合、TODOが正常に削除されたことを示すメッセージがコンソールに出力される。
6. response.okプロパティがfalseの場合、TODOの削除に失敗したことを示すエラーメッセージがコンソールに出力される。
7. deleteTodo関数が終了する。
8. 処理が完了する。
*/
//fetchは、指定されたURLにDELETEリクエストを送信するための関数であり、Promiseを返す。
//fetchは、HTTPリクエストを送信するためのAPIであり、GET、POST、PUT、DELETEなどのHTTPメソッドを使用することができる。
//fetchは、非同期処理であり、リクエストが完了するまで待機する。
//fetchは、レスポンスを受け取るためのPromiseを返す。
//response.okは、レスポンスが正常であるかどうかを示すプロパティであり、trueまたはfalseを返す。
//deleteは、リソースを削除するためのHTTPメソッドであり、指定されたURLにリクエストを送信する。
//response.okがtrueの場合、TODOが正常に削除されたことを示すメッセージがコンソールに出力される。
//response.okがfalseの場合、TODOの削除に失敗したことを示すエラーメッセージがコンソールに出力される。
//mdn https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
