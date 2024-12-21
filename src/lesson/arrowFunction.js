// ここにコードを書きながら確認しましょう！












// 練習問題
// 問題 1
// 関数testFnをアロー関数で書き直して、consoleに関数の実行結果を出力してください。
// ※省略記法が使用できる場合は、省略記法を使用すること。
// const testFn = function(name) {
//   return `Gizumo ${name}`;
// };

const testFn = name => {
  return `Gizumo ${name}`;
};

console.log(testFn('hoge'));
