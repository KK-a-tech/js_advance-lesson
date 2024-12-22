// ここにコードを書きながら確認しましょう！












// 練習問題
// 問題 1
function arrayFn(arg) {
  return ['jQuery', 'Vue', arg];
}

const [val1, val2, val3] = arrayFn('hoge');

console.log(val3);

// 問題 2
function objectFn(arg) {
  console.log(arg);
}

const argObject = {
  name: 'Gizumo',
  place: 'Shibuya',
};

const { name } = argObject;

objectFn(name);
