import 'animate.css';

// ここにコードを書きながら確認しましょう！
const title = document.getElementById('title');
const button = document.getElementById('button');
const cardMocha = document.querySelector('.card-type--mocha');
const cardYellow = document.querySelector('.card-type--yellow');

console.log(cardMocha);
console.log(cardYellow);

button.addEventListener('click', () => {
  // title要素に.animate__hingeクラスを付与
  title.classList.add('animate__hinge');
  // 2秒後にtitle要素から.animate__hingeクラスを削除
  setTimeout(() => {
    title.classList.remove('animate__hinge');
    cardMocha.classList.add('card-animation');
    cardYellow.style.display = '';
    cardYellow.classList.add('animate__fadeInUp');
  }, 2000);
});




// ↑ 練習問題はここまで書いてきたコードに追記する形で実装してください。 ↑
