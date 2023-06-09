// let fruitName = document.getElementById("name");
// let showPriceBtn = document.getElementById("showPrice");
// let price = document.getElementById("price");

// showPriceBtn.addEventListener("click", function () {
//   let fruitNameValue = fruitName.value;
//   let priceHtml = `Khong co gia cho san pham: ${fruitNameValue}`;

//   switch (fruitNameValue) {
//     case "Oi":
//       priceHtml = `gia cho san pham: ${fruitNameValue} 20000 VND/Kg`;
//       break;
//     case "Dua Hau":
//       priceHtml = `gia cho san pham: ${fruitNameValue} 20000 VND/Kg`;
//       break;
//     case "Tao":
//       priceHtml = `gia cho san pham: ${fruitNameValue} 30000 VND/Kg`;
//       break;
//     case "Xoai":
//       priceHtml = `gia cho san pham: ${fruitNameValue} 30000 VND/Kg`;
//       break;
//     case "Cam":
//       priceHtml = `gia cho san pham: ${fruitNameValue} 40000 VND/Kg`;
//       break;
//     case "Chom Chom":
//       priceHtml = `gia cho san pham: ${fruitNameValue} 40000 VND/Kg`;
//       break;
//     case "Mang Cut":
//       priceHtml = `gia cho san pham: ${fruitNameValue} 50000 VND/Kg`;
//       break;

//     default:
//       priceHtml = `Khong co gia san pham: ${fruitNameValue}`;
//       break;
//   }
//   price.innerHTML = priceHtml;
// });

// let btnStart = document.querySelector('.start-btn');
// let mainGame = document.querySelector('.main-game');
// let answerBtn = document.querySelector('.answer-btn');
// let restartBtn = document.querySelector('.restart-btn');
// let resultCount = document.querySelector('.result-count');
// let result = document.querySelector('.result');

// const ANSWER = 'ABC';
// const LIMIT_ANSWER = 2;
// let count = 0;

// initGame()
// function initGame()
// {
//   hideMainGame()
//   hideResult()
// }

// function hideMainGame(){
//   mainGame.style.display = 'none'
// }

// function hideResult(){
//   result.style.display = 'none'
// }

// function hideStart(){
//   btnStart.style.display = 'none'
// }

// function showMainGame(){
//   mainGame.style.display = 'block'
// }

// function showResult(){
//   result.style.display = 'block'
// }

// function showStart(){
//   btnStart.style.display = 'block'
// }

// btnStart.addEventListener('click', function(){
//   console.log('start click')
//   count = 0;
//   showMainGame()
//   hideStart()
// });

// answerBtn.addEventListener('click', function(){
//   console.log('answer click')
//   let userAnswer = '';
//   let question = 'Nhap dap an:';
//   while(userAnswer != ANSWER)
//   {
//     if(count > 0)
//     {
//       question = 'Ban nhap sai roi nhap lai di';
//     }
//     if(count == LIMIT_ANSWER){
//       count = 'Ban da nhap het so lan gioi han'
//       break;
//     }
//     userAnswer = prompt(question);
//     count++;
//   }
  
//   resultCount.innerHTML = count;
//   showResult()
//   hideMainGame()
// });

// restartBtn.addEventListener('click', function(){
//   console.log('restart click')
//   hideMainGame()
//   hideResult()
//   showStart()
// });


// let width = 5;
// let height = 5;

// tamgiacvuong1();
// function tamgiacvuong1() {
//   for (let index = 0; index < width; index++) {
//     for (let j = 0; j <= index; j++) {
//       document.write('*');
//     }
//     document.write('</br> ');
//   }
// }

// document.write('------------');

// tamgiacvuong2();
// function tamgiacvuong2() {
//   for (let index = 0; index < width; index++) {
//     for (let j = 0; j <= height; j++) {
//       document.write('*');
//     }
//     document.write('</br> ');
//   }
// }
// i = 0
// j = 0 => in sao // j =1
// j = 5 => in sao
// in so xuong dong br
// i = 1
// i = 5

let nameEl = document.querySelector('.name')
let passwordEl = document.querySelector('.password')

let nameError = document.querySelector('.name-error')
let passwordError = document.querySelector('.password-error')
let showPassBtn = document.querySelector('.show-pass-btn')
let loginBtn = document.querySelector('.login-btn')

showPassBtn.addEventListener('click', function(){
  let type = passwordEl.getAttribute('type')
  console.log(type)
})
