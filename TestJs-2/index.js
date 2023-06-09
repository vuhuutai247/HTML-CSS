// // so luong o
// // n = 4
// // button x = 1 y=2
// // let hand = 1;
// // click button hand = 1 => carror[x][y] = *
// // push xy => username1
// // hand = 2
// // click nut => hand = 2 => carror[x][y] = x
// // push xy => username2
// // user1 =[[1,1][2,2][3,3],[4,4]]
// //

// // 0  0 x 0
// // 0  0 * 0

// //

// // in ra man hinh

// {
//   /* <div>
//               <button>0</button>
//               <button>0</button>
//               <button>0</button>
//               <button>0</button>
//           </div>
//           <div>
//               <button>0</button>
//               <button>0</button>
//               <button>0</button>
//               <button>0</button>
//           </div>
//            <div>
//               <button>0</button>
//               <button>0</button>
//               <button>0</button>
//               <button>0</button>
//           </div>
//           <div>
//               <button>0</button>
//               <button>0</button>
//               <button>0</button>
//               <button>0</button>
//           </div> */
// }

// let n = 4;
// // khoi tao mang
// let caros = [];
// for (i = 0; i < n; i++) {
//   // i = 1
//   let item = [];
//   for (j = 0; j < n; j++) {
//     item.push("+"); // [+,.+,+,+]
//   }
//   caros.push(item);
// }

// renderBoard(caros);
// function renderBoard(carosRender) {
//   let board = document.querySelector("#board");
//   let boardHtml = ``;
//   for (let index in carosRender) {
//     let caroItem = carosRender[index];
//     boardHtml += "<div>";
//     for (let index1 in caroItem) {
//       boardHtml += `
//                           <button data-x="${index}"
//                           data-y="${index1}"
//                           class="control" >
//                           ${caroItem[index1]}
//                            </button>`;
//     }
//     boardHtml += `</div>`;
//   }
//   board.innerHTML = boardHtml;
//   let carrorControlBtns = document.querySelectorAll(".control");
//   // let carrorControlBtns1 = document.getElementsByClassName('control')
//   carrorControlBtns.forEach(function (item) {
//     item.addEventListener("click", function () {
//       let x = item.getAttribute("data-x");
//       let y = item.getAttribute("data-y");
//       let mesage = "0";
//       caros[x][y] = mesage;
//       console.log(caros);
//       item.innerHTML = mesage;
//       console.log("click", x, y);
//     });
//   });
// }

// // let caros1 = [
// //     [0,0,0,0],
// //     [0,0,0,0],
// //     [0,0,0,0],
// //     [0,0,0,0]
// // ]

// // let caros1 = [
// //     [0,0,*,0],
// //     [0,x,0,*],
// //     [0,0,0,0],
// //     [0,0,0,0]
// // ]

// let n ='025468'

// for(let index = 0; index < n.length;index++)
// {
//   let num = n[index]
//   let numNext = n[index+1]
//   let messes = ``;
//   if(num % 2 == 0 && numNext %2 == 0)
//   {
//     messes = `${num}-${numNext}`
//   }else{
//     messes = `${num}${numNext}`
//   }
//   document.write(messes)
// }

// function isNumberBiggerThanZero(number)
// {
//   let isBigger = Number(number) > 0;
//   return isBigger;
// }
// let numberCheck = -1;
// let isBig =  isNumberBiggerThanZero(numberCheck)
// console.log(isBig)

// let numberInput = document.querySelector('.number-input')
// let btnCheck = document.querySelector('.btn-check')
// let result = document.querySelector('.result')

// btnCheck.addEventListener('click', function(){
//   console.log('click')
//   let numberInputValue = numberInput.value;
//   let message = `${numberInputValue} khong phai la so nguyen duong`;
//   if(isNumberBiggerThanZero(numberInputValue))
//   {
//     message = `${numberInputValue} la so nguyen duong`;
//   }
//   result.innerHTML = message;
// })

// let character = 'd';
// let arrSearch = ['2','a','a','a'];

// function countCharacterInArray(characterSearch, arr)
// {
//   let countStr = 0;
//    for(let index in arr)
//    {
//     if(arr[index] === character)
//     {
//       countStr += 1;
//     }
//    }

//    if(countStr == 0)
//    {
//     return -1;
//    }
//   return countStr;
// }

// let count = countCharacterInArray(character, arrSearch);
// console.log(count)

// *Ve hinh chu nhat
// class Rectangle{
//   constructor(widthInit, heightInit)
//   {
//     this.width = widthInit;
//     this.height = heightInit;
//     this.xStart = 0;
//     this.yStart = 0;
//   }
//   getArea()
//   {
//     return this.width * this.height;
//   }
//   getPerimeter()
//   {
//     return (this.width + this.height)*2;
//   }
//    draw()
//    {
//     let board = document.getElementById('board');
//     let context = board.getContext('2d');
//     context.fillStyle = 'red';
//     context.fillRect(this.xStart, this.yStart = 0, this.width, this.height)
//    }
// }

// let rectangleObj = new Rectangle(200,100);
// rectangleObj.draw()
// console.log(rectangleObj)
// console.log('dien tich',rectangleObj.getArea());
// console.log('chu vi',rectangleObj.getPerimeter());

// class Temperature{
//   constructor(temperatureInit)
//   {
//     this.temperature = temperatureInit;
//   }
//   convertToF()
//   {
//     return (this.temperature * 1.8) + 32;
//   }
//   convertToKenvin()
//   {
//     return this.temperature + 273.15;
//   }
// }

// let temp = new Temperature(50)
// console.log('do F', temp.convertToF());
// console.log('do K', temp.convertToKenvin())



// Bai tap adam, eva
// class Fruit {
//   constructor(weightInit = 10) {
//     this.weight = weightInit;
//   }

//   decrease() {
//     if (!this.isEmpty()) {
//       this.weight--;
//     }
//   }

//   isEmpty() {
//     return this.getWeight() == 0;
//   }

//   getWeight() {
//     return this.weight;
//   }
// }

// class Human {
//   constructor(name, gender, weight) {
//     this.name = name;
//     this.gender = gender;
//     this.weight = weight;
//   }

//   isMale() {
//     return this.gender == "Male";
//   }

//   serGender(gender) {
//     this.gender = gender;
//   }

//   checkFruit(
//     fruitObg // true if ruit not empty
//   ) {
//     return !fruitObg.isEmpty();
//   }

//   eat(
//     fruitObg // eat fruit
//   ) {
//     if (this.checkFruit(fruitObg)) {
//       //an duoc
//       this.weight++;
//       fruitObg.decrease();
//     } else {
//       //khong an duoc
//       alert("an het roi");
//     }
//   }
// }

// console.log("---------Tao Tao");
// let apple = new Fruit(1);
// console.log(apple);
// console.log("---------Tao nguoi");

// let adam = new Human("Adam", "Male", 70);
// let eva = new Human("Eva", "Female", 45);
// console.log(adam, eva);

// console.log("---------An Tao");
// adam.eat(apple);
// eva.eat(apple);

// console.log(apple);



