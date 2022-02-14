console.log("Hello Codeit!") //console탭에 log기록해줘 "Hello Codeit!"라고.

//변수 선언 (이름을 선언)--------------------------------
let espressoPrice = 3000;
let lattePrice = 4300;
let mochaPrice = 4800;

console.log(espressoPrice * 2)
console.log(lattePrice * 4 + mochaPrice * 2)
console.log(lattePrice + mochaPrice)
console.log(espressoPrice + lattePrice * 4 + mochaPrice * 2)
console.log(lattePrice * 3)

//함수 선언 (명령 선언)--------------------------------
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

//Parameter(매개변수)--------------------------------
 function welcome(name) {
   console.log('안녕하세요 ' + name + '님!');
 };

 welcome('채희')

 function printSquare(x) {
   console.log(x * x);
 };

 printSquare(2)
 printSquare(4)
 printSquare(6)

 // GB와 MB 계산기--------------------------------
function teraToGiga(x) {
  console.log(x + 'TB는');
  console.log(x * 1024 + 'GB 입니다.');
};
function teraToMega(x) {
  console.log(x + 'TB는');
  console.log(x * 1024 * 1024 + 'MB 입니다.');
};

// TB -> GB 테스트
teraToGiga(2);
// TB -> MB 테스트
teraToMega(2);

//파라미터 1개 이상 사용하기 -------------------------------
function printSum(number1, number2) {
  console.log(number1 + number2);
};

printSum(10, 5);
printSum(123, 4);
printSum(56, 7890);

//자기소개 만들기
function introduce(name, birth, nationality, job) {
  console.log('안녕하세요! 반갑습니다.');
  console.log('제 이름은 ' + name + ' 입니다.');
  console.log('생년월일은 ' + birth + ' 이고,');
  console.log('국적은 ' + nationality + ' 입니다.');
  console.log('직업은 ' + job + ' 입니다.');
  console.log('잘 부탁드립니다!');
};

introduce('채희', '98.06.04', '한국', '학생')

//실습과제 체질량지수 계산기 -------------------------------
// 여기에 코드를 입력해 주세요.
function bmiCalculator(name, weight, tall) {
  console.log(name + '님의 체질량지수는 ' + weight / (tall * tall / 10000) + '입니다.')
};

// 테스트
bmiCalculator('채희', 43.52, 160);
bmiCalculator('우영', 61.25, 175);
bmiCalculator('조리퐁', 77.76, 180);

//리턴값 -------------------------------

function getTwice(number) {
  return number *2;
};

let x = getTwice(5); //5 * 2 = 10
let y = getTwice(2); //2 * 2 = 4

console.log(x * y) //10 * 4 = 40

//1년 뒤엔 얼마를 받을까? 실습 -----------------------
function interestCalculator(myMoney, saveTerm, interestRate) {
  return myMoney * saveTerm * interestRate / 100
};

// 조건 입력 테스트
let myMoney = 3650000; // 맡긴 금액 (원)
let saveTerm = 1; // 맡기는 기간 (년)
let interestRate = 4; // 이자율 (%)

// 수령액 계산 테스트
let myInterest = interestCalculator(myMoney, saveTerm, interestRate);
let totalMoney = myMoney + myInterest;

// 출력 테스트
console.log('맡긴 금액은 ' + myMoney + '원 입니다.');
console.log('이자는 ' + myInterest + '원 입니다.');
console.log('최종 받을 금액은 ' + totalMoney + '원 입니다.');