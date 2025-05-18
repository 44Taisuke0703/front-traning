setTimeout(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
    setTimeout(function () {
      console.log(3);
      setTimeout(function () {
        console.log(4);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

/* 処理の手順
1. setTimeoutが呼び出され、1秒後に最初のコールバック関数が実行されるようにスケジュールされる。
2. 1秒後、最初のコールバック関数が実行され、"1"が出力される。
3. 次のsetTimeoutが呼び出され、1秒後に2番目のコールバック関数が実行されるようにスケジュールされる。
4. 1秒後、2番目のコールバック関数が実行され、"2"が出力される。
5. 次のsetTimeoutが呼び出され、1秒後に3番目のコールバック関数が実行されるようにスケジュールされる。
6. 1秒後、3番目のコールバック関数が実行され、"3"が出力される。
7. 次のsetTimeoutが呼び出され、1秒後に4番目のコールバック関数が実行されるようにスケジュールされる。
8. 1秒後、4番目のコールバック関数が実行され、"4"が出力される。
このように、setTimeoutは非同期処理であり、指定された時間が経過した後にコールバック関数を実行する。
*/
//コールバック地獄　上記のコードはコールバックをネストしているため、可読性が低くなっている。
// コールバック地獄を避けるためには、Promiseやasync/awaitを使用することが推奨される。

//コールスタック確認用URL http://latentflip.com/loupe/?code=c2V0VGltZW91dChmdW5jdGlvbiAoKSB7DQogIGNvbnNvbGUubG9nKDEpOw0KICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsNCiBjb25zb2xlLmxvZygyKTsNCiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsNCiAgY29uc29sZS5sb2coMyk7DQogICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsNCiAgICAgIGNvbnNvbGUubG9nKDQpOw0KICAgICAgfSwgMTAwMCk7DQogICAgfSwgMTAwMCk7DQogIH0sIDEwMDApOw0KfSwgMTAwMCk7DQo%3D!!!
