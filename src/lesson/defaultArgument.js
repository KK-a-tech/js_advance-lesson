// ここにコードを書きながら確認しましょう！





// 割引後の値段を計算する関数discountRateCalcを実行し、4500円の5%引きと、6000円の20%引きの値をconsoleに出力してください。
// ただし、割引率のデフォルト値に5%を設定すること。





// 練習問題
// 問題 1
function discountRateCalc(price, rate = 5) {
  return price * (1 - rate * 0.01);
}

console.log(discountRateCalc(4500));
console.log(discountRateCalc(6000, 20));
