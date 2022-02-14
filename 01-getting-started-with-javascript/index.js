console.log("Hello Codeit!") //console탭에 log기록해줘 "Hello Codeit!"라고.

//변수 선언 (이름을 선언)
let espressoPrice = 3000;
let lattePrice = 4300;
let mochaPrice = 4800;

console.log(espressoPrice * 2)
console.log(lattePrice * 4 + mochaPrice * 2)
console.log(lattePrice + mochaPrice)
console.log(espressoPrice + lattePrice * 4 + mochaPrice * 2)
console.log(lattePrice * 3)

//함수 선언 (명령 선언)
function greeting() {
  console.log('Hi');
  console.log('안녕');
  console.log('こんにちは');
  console.log('你好');
  console.log('Guten Tag');
  console.log('Bonjour');
  console.log('Buongiorno');
};

//함수 호출 (함수를 사용하는 방법)
greeting()

//Parameter(매개변수)
 function welcome(name) {
   console.log('안녕하세요 ' + name + '님!');
 };

 welcome('채희')

 function printSquare(x) {
   console.log(x * x);
 };

 printSquare(2)
 printSquare(4)
 printSquare(5)