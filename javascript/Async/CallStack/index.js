function hello(name) {
  console.log(`Hello ${name}`);
}

hello("A");
setTimeout(function () {
  hello("Async");
}, 3000);
hello("B");

/*処理の手順
1. hello("A")が実行され、"Hello A"が出力される。hello関数はアロー関数で定義されている。
2. setTimeoutが呼び出され、1秒後にhello("Async")が実行されるようにスケジュールされる。
3. hello("B")が実行され、"Hello B"が出力される。
4. 3秒後にsetTimeoutのコールバックが実行され、"Hello Async"が出力される。
このように、setTimeoutは非同期処理であり、指定された時間が経過した後にコールバック関数を実行する。
非同期処理は、JavaScriptのイベントループによって管理されており、メインスレッドがブロックされることなく、他の処理を続けることができる。
非同期処理は、特にI/O操作やネットワーク通信など、時間がかかる処理を行う際に非常に重要である。
*/
//コールバック関数は、他の関数に渡される関数であり、特定の条件が完了すると実行される。

// function add(x, y) {
//   return x + y;
// }
// function subtract(x, y) {
//   return x - y;
// }

// console.log(add(1, 2) + subtract(3, 2)); // 3

//コールスタック確認用URL http://latentflip.com/loupe/?code=DQpmdW5jdGlvbiBhZGQoeCwgeSkgew0KICByZXR1cm4geCArIHk7DQp9DQpmdW5jdGlvbiBzdWJ0cmFjdCh4LCB5KSB7DQogIHJldHVybiB4IC0geTsNCn0NCg0KY29uc29sZS5sb2coYWRkKDEsIDIpICsgc3VidHJhY3QoMywgMikpOyAvLyAzDQo%3D!!!

//そもそもjavascriptはどうやって動いているのか？
//コールスタックとはインタプリタの仕組みの一つで、関数の呼び出しを管理するためのものである。（LIFO構造）
//javascriptはシングルスレッドで動作するため、コールスタックは一度に一つの関数しか実行できない。
//不便すぎん？
//そのため、非同期処理を行うための仕組みが必要である。
//時間のかかる処理は誰かにお願いする？
//だれに？
//ブラウザに
//ブラウザは、非同期処理を行うためのAPIを提供している。
//これらのAPIは、Web APIsと呼ばれる。
//コールスタックで非同期処理が発生した場合、Web APIsに処理を依頼する。
//Web APIsは、非同期処理が完了したら、コールバック関数をコールバックキューに追加する。
//コールバックキューは、コールスタックが空いているときに、コールバック関数を実行するためのキューである。

//用語　イベントループ・コールスタック・コールバックキュー・Web Apis・シングルスレッド・コールバック関数
//コールスタック確認用URL http://latentflip.com/loupe/?code=ZnVuY3Rpb24gaGVsbG8obmFtZSkgew0KICBjb25zb2xlLmxvZygiSGVsbG9tICIrbmFtZSk7DQp9DQpoZWxsbygiQSIpOw0Kc2V0VGltZW91dChmdW5jdGlvbiAoKSB7DQogIGhlbGxvKCJBc3luYyIpOw0KfSwgMzAwMCk7DQpoZWxsbygiQiIpOw%3D%3D!!!
//
