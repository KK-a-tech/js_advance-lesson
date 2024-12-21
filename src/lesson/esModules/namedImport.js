// ここにコードを書きながら確認しましょう！












// 練習問題
// 問題 1
// 下記条件を満たした状態で、関数nameFnとcalcFnを実行し、返り値をconsoleに出力してください。
// ・src/lesson/esModules/namedImport.jsで関数nameFnとcalcFnをnamed importでインポート

import { nameFn, calcFn } from './namedExport.js';

console.log(nameFn());
console.log(calcFn(5));
