const timePromise = (count) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(count);
    }, 1000);
  });
};

// console.dir(timePromise(1)); ブラウザで実行すると、Promise と表示される。
//console.dirとは、オブジェクトの構造を表示するためのメソッドである。
// console.dirは、オブジェクトのプロパティやメソッドを表示するために使用される。

timePromise(1)
  .then((result) => {
    console.log(result);
    return timePromise(2);
  })
  .then((result) => {
    console.log(result);
    return timePromise(3);
  })
  .then((result) => {
    console.log(result);
    return timePromise(4);
  })
  .then((result) => {
    console.log(result);
  });

// Promise.allは、複数のPromiseを同時に実行し、全てのPromiseが成功したときに結果を取得するためのメソッドである。
//  Promise.all([
//   timePromise(1),
//   timePromise(2),
//   timePromise(3),
//   timePromise(4),
// ]).then((result) => {
//   console.log(result);
// });

// Promise.raceは、複数のPromiseの中で最初に成功したPromiseの結果を取得するためのメソッドである。
// Promise.race([
//   timePromise(1),
//   timePromise(2),
//   timePromise(3),
//   timePromise(4),
// ]).then((result) => {
//   console.log(result);
// });

/* Promiseは、非同期処理の結果を表すオブジェクトであり、成功または失敗の状態を持つ。
    Promiseは、非同期処理が完了したときに、thenメソッドを使用して結果を取得することができる。
    Promiseは、非同期処理の結果を扱うための便利な方法であり、コールバック地獄を避けるために使用される。
    Promiseは、非同期処理の結果をチェーンすることができるため、可読性が向上する。
    Promiseは、非同期処理のエラーハンドリングも簡単に行うことができる。
    Promiseは、非同期処理の結果を待つための便利な方法であり、async/awaitと組み合わせて使用することができる。
    PromiseStateは、Promiseの状態を表すオブジェクトであり、pending（保留中）、fulfilled（成功）、rejected（失敗）の3つの状態を持つ。
    PromiseResultは、Promiseの結果を表すオブジェクトであり、成功した場合は値を持ち、失敗した場合はエラーを持つ。
    resolveは、Promiseを成功させるためのメソッドであり、非同期処理が成功したときに呼び出される。 
    rejectは、Promiseを失敗させるためのメソッドであり、非同期処理が失敗したときに呼び出される。
    thenは、Promiseが成功したときに呼び出されるメソッドであり、成功した結果を受け取ることができる。
    catchは、Promiseが失敗したときに呼び出されるメソッドであり、失敗した結果を受け取ることができる。
    finallyは、Promiseが成功または失敗したときに呼び出されるメソッドであり、必ず実行される。
    resolve,rejectの引数は、Promiseの結果を表すオブジェクトであり、成功した場合は値を持ち、失敗した場合はエラーを持つ。
    それぞれ、then,catch内のコールバック関数の引数として渡される。
 */
//MDN Promise https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise

// async/awaitは、Promiseをより簡潔に扱うための構文である。
//axiosInstanceのはなし
