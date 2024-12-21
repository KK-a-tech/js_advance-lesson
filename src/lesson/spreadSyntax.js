// ここにコードを書きながら確認しましょう！












// 練習問題
// 問題 1
// consoleにpackageManagerとframeworkがマージされた配列が出力されるように、関数arrayFnの返り値をスプレッド構文を使用して定義してください。
const packageManager = ['npm', 'yarn', 'pnpm'];

function arrayFn(array) {
  const framework = ['Vue', 'React', 'Svelte'];
  const updatedCompanyInfo = [...array, ...framework];
  return updatedCompanyInfo;
}

console.log(arrayFn(packageManager));

// 問題 2
// 下記条件を満たしたオブジェクトをスプレッド構文を使用して作成し、consoleに出力してください。
// ・objectAのversionプロパティをobjectBのversionプロパティで更新
// ・新しいプロパティroutingLibrary: 'Vue Router'を追加
const objectA = {
  language: 'JavaScript',
  framework: 'Vue',
  version: 2,
};

const objectB = {
  version: 3,
};

const objectC = {
  routingLibrary: 'Vue Router'
};

const updatedObject = {...objectA, ...objectB, ...objectC};

console.log(updatedObject);
