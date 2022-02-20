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