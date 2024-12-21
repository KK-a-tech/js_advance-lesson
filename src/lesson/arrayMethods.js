// ここにコードを書きながら確認しましょう！











// 練習問題
// 問題 1
// 下記条件を満たした配列をmapメソッドを使用して作成し、consoleに出力してください。
// ・プロパティclassNameのvalueにc-というプレフィックスを付与
const array = [
  {
    tag: 'p',
    className: 'hoge',
  },
  {
    tag: 'div',
    className: 'fuga',
  },
  {
    tag: 'h1',
    className: 'piyo',
  },
];

const newArray = array.map(array => {
  return {...array, className:'c-' + array.className};
});

console.log(newArray);
