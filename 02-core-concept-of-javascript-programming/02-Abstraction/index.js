//할당 연산자 (Assignment operators)
let name = '채희';
let x = 5;

x = x - 2;

console.log(x);

//복합 할당 연산자 (Compound assignment operators)
// 두 줄씩 모두 같은 의미
x = x + 1;
x += 1;

x = x + 2;
x += 2;

x = x * 2;
x *= 2;

x = x - 3;
x -= 3;

x = x / 2;
x /= 2;

x = x % 7;
x %= 7;

//증가(increment), 감소(decrement) 연산자
// 다음 세 줄은 같은 의미입니다.
x = x + 1;
x += 1;
x++;

// 다음 세 줄은 같은 의미입니다.
x = x - 1;
x -= 1;
x--;

// return문 제대로 이해하기
function sqare(x) {
  return x * x;
};

console.log(sqare(3));

function hamsu(a) {
  console.log('return 전');
  return a * a;
  console.log('return 후'); //Dead Code
};

console.log('return 전');
console.log(hamsu(3));
console.log('return 후');

//옵셔널 파라미터 (Optional Parameters)
function introduce(name, age, nationality = '한국') {
  console.log(`제 이름은 ${name}입니다.`);
  console.log(`나이는 ${age}살 이고,`);
  console.log(`국적은 ${nationality}입니다.`);
};

introduce('채희', 22, '대한민국'); //값을 모두 전달한 경우
console.log('');
introduce('채희', 22); //파라미터 값을 생략한 경우

//변수의 scope: 범위, 영역
function myFunction() { //블록문 block statement
  let c = 3 //로컬 변수, 지역 변수 (Local Variable)
  console.log(c);
};

let c = 4; //글로벌 변수, 전역 변수 (Global Variable)

myFunction();
console.log(c);

//상수(Constant)
const PI = 3.14; //원주율
let radius = 0; //반지름

//원의 넓이를 계산하는 함수
function calsulateArea() {
  return pi * radius * radius;
};

//반지름에 따른 원의 넓이를 출력하는 함수
function printArea() {
  return `반지름이 ${radius}일 때, 원의 넓이는 ${calsulateArea()}`;
};

radius = 4;
console.log(printArea());

radius = 7;
console.log(printArea());

radius = 8;
console.log(printArea());