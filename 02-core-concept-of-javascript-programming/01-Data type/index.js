//숫자형------------------------------------
//거듭제곱
console.log(2 ** 3); //2의 3제곱

//나머지 연산
console.log(7 % 3); //7을 3으로 나눈 나머지 값

//덧셈
console.log(1 + 8);

//뺄셈
console.log(6 -7);

//곱셈
console.log(2 * 2);

//나눗셈
console.log(5 / 2);

//기본적인 사칙연산을 따름
console.log(2 + 3 * 2);
console.log((2 + 3) * 2);

//문자열 기본------------------------------------
console.log("I'm Iron man");
console.log(`He said "I'm Iron man"`); //맥북은 ``로 문자열 구분
console.log('3' + '5') //문자열의 +는 글자를 연결해주는 역할

//불린(boolean)------------------------------------
//숫자비교 *부등호(<,>)는 등호(=)보다 앞쪽에 사용해야함
console.log(2 > 1); //2가 1보다 크다 true
console.log(2 < 1); //2가 1보다 작다 false
console.log(3 >= 2); //3은 2보다 크거나 작다
console.log(3 <= 2); //3은 2보다 작거나 같다
console.log(3 === 3); //값이 일치한다
console.log(3 !== 3); //값이 일치하지 않는다
console.log('chaehee' === 'chaehee');
console.log('chaehee' !== 'chaehee');

//AND연산 - 둘다 true여야함
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//OR연산 - 1개만 true면 됨
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//NOT연산 - 값의 반대로 출력해줌
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

//불린형 연습
console.log(2 < 1 && 'chaehee' !== 'chaehee')

console.log(7 !== 7 || 4 < 3);

let x = 3;
console.log(x > 4 || !(x > 2));

//typeof 연산자
console.log(typeof 101);
console.log(typeof 'chaehee');
console.log(typeof true);

// not a number
console.log(typeof 'Hello' + 'Chaehee');
console.log(typeof 8 - 3);

// not a number 해결방법
console.log(typeof ('Hello' + 'Chaehee'));
console.log(typeof (8 - 3));

// 형 변환(type conversion)
console.log('10'+'5');
console.log(10 + 5);

console.log(Number('10')+ Number('5'));
console.log(String(10) + String(5));

//숫자 -> 문자
let a = 123;
console.log(a);
console.log(String(a));
console.log(typeof(a));
console.log(typeof String(a));

console.log('');

//불린 -> 숫자
let b = true
console.log(b);
console.log(Number(b)); //true는 1, false는 0
console.log(typeof b);
console.log(typeof Number(b));

//falsy값 -> '', 0, NaN

console.log('4' - true);

//산술연산 (+, -, *, /, %, **)
console.log(4 + '2');
console.log(4 + 2);
console.log(4 - true);
console.log(4 * false);
console.log(4 / '2');
console.log('4' ** true);
console.log(4 % 'two');

//관계 비교 연산(<, <=, >, >=)
console.log(2 < '3');
console.log(2 > true);
console.log('2' <= false);
console.log('two' >= 1);

//같음 비교 연산(===, !==, ==, !=)
console.log(1 === '1');
console.log(1 === true);
console.log(1 == '1');
console.log(1 == true);

//템플릿문자열(template strings)
let year = 2022;
let month = 3;
let day = 11;

console.log('생년월일은 ' + year + '년 ' + month + '월 ' + day + '일 입니다.');
console.log(`생년월일은 ${2022}년 ${3}월 ${11}일 입니다.`)

let myNumber = 3;

function gettwice(x) {
  return x * 2;
};

console.log(`${myNumber}의 두 배는 ${gettwice(myNumber)}입니다.`)

//실습과제
function calcWage(name, time, wage) {
  let total = time * wage;

  console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`); // 코드를 채워 넣으세요.
}

calcWage('이채희', 208, 11340);

//null과 undefined
let cup;
console.log(cup); //undefined
cup = '물';
console.log(cup); //물
cup = null;
console.log(cup); //null