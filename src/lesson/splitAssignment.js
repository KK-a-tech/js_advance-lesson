// ここにコードを書きながら確認しましょう！












// 練習問題
// 問題 1
// 関数arrayFnを実行し、返り値の配列から引数argが使用されている値を分割代入で取得し、consoleに出力してください。
// 関数arrayFnに渡す引数に指定はありません。
function arrayFn(arg) {
  return ['jQuery', 'Vue', arg];
}

const [val1, val2, val3] = arrayFn('hoge');

console.log(val3);

// 問題 2
function objectFn() {
  console.log();
}

const argObject = {
  name: 'Gizumo',
  place: 'Shibuya',
};

objectFn(argObject);
