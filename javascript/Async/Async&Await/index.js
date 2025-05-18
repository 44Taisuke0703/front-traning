const timeAsync = async (count) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(count);
    }, 1000);
  }).then((result) => {
    console.log(result);
  });
};

const timeAsyncAll = async (num) => {
  for (let i = 1; i <= num; i++) {
    await timeAsync(i);
  }
};
timeAsyncAll(4);
/*処理の手順
1. timeAsyncAll(4)が呼び出され、forループが開始される。
2. iが1のとき、timeAsync(1)が呼び出される。
3. timeAsync(1)はPromiseを返し、1秒後にresolveされる。
4. 1秒後、Promiseがresolveされ、console.log(1)が実行される。
5. iが2のとき、timeAsync(2)が呼び出される。
6. timeAsync(2)はPromiseを返し、1秒後にresolveされる。
7. 1秒後、Promiseがresolveされ、console.log(2)が実行される。
8. iが3のとき、timeAsync(3)が呼び出される。
9. timeAsync(3)はPromiseを返し、1秒後にresolveされる。
10. 1秒後、Promiseがresolveされ、console.log(3)が実行される。
11. iが4のとき、timeAsync(4)が呼び出される。
12. timeAsync(4)はPromiseを返し、1秒後にresolveされる。
13. 1秒後、Promiseがresolveされ、console.log(4)が実行される。
14. forループが終了する。
15. 処理が完了する。

*/
// /* async/awaitは、Promiseをより簡潔に書くための構文である。
//     asyncは、非同期関数を定義するためのキーワードであり、awaitは、Promiseが解決されるまで待機するためのキーワードである。
//async関数は、常にPromiseを返す。
//     awaitは、Promiseが解決されるまで待機するためのキーワードであり、Promiseが解決されたときに結果を返す。
//     awaitは、async関数の中でのみ使用することができる。

//async関数のエラー処理は、try/catchを使用して行うことができる。
//try/catchは、同期処理と非同期処理の両方で使用することができる。
//try()ブロック内でエラーが発生した場合、catchブロックが実行される。
//catch()ブロック内でエラーを処理することができる。
