// ここにコードを書きながら確認しましょう！












// 練習問題
// 問題 1
// 下記条件を満たした状態で、関数nameFnとcalcFnを実行し、返り値をconsoleに出力してください。
// ・src/lesson/esModules/namedExport.jsに定義されている関数nameFnとcalcFnをnamed exportでエクスポート

const nameFn = () => {
  return 'Gizumo taro';
};

const calcFn = (num) => {
  return num * 10;
};

export { nameFn };
export { calcFn };