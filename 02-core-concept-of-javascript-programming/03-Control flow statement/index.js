//if문 (if statement)
//온도가 0도 이하면 물이 언다는 메시지를 출력하는 코드를 작성하면
let temperature = -1; //온도를 0으로 설정

if (temperature <= 0) { //온도가 0보다 작거나 같으면
  console.log('물이 업니다.'); //콘솔에 물이 업니다 라고 출력 수행
} else { //그렇지 않으면 이라는 뜻
  if (temperature < 100) {
    console.log('물이 얼지도 끓지도 않습니다.')
  } else {
    console.log('물이 끓습니다.');
  }
}

//else if문
if (temperature <= 0) {
  console.log('물이 업니다.');
} else if (temperature < 100) {
    console.log('물이 얼지도 끓지도 않습니다.');
  } else {
    console.log('물이 끓습니다.');
}

//학점계산기
function printGrade(midtermScore, finalScore) {
	let totalScore = midtermScore + finalScore;
	
  if (totalScore >= 90) {
    console.log('A');
  } else if (totalScore >= 80) {
    console.log('B');
  } else if (totalScore >= 70) {
    console.log('c');
  } else if (totalScore >= 60) {
    console.log('D');
  } else {
    console.log('F');
  };
};

printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);

//서열 정리
// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender) {
  if (myAge === yourAge) {
    return callFriend;
  } else if (myAge > yourAge) {
    if (yourGender === 'male') {
      return callYoungerBrother;
    } else if (yourGender === 'female') {
      return callYoungerSister;
    }
  } else {
    if (yourGender === 'male') {
      return callOlderBrother;
    } else if (yourGender === 'female'){
      return callOlderSister;
    }
  }
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1); //여동생
console.log(result2); //남동생
console.log(result3); //친구
console.log(result4); //형
console.log(result5); //누나

//switch 문 (switch statement)
let myChoice = 2;

switch (myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default: //비교할 값이 모든 조건값과도 일치하지 않을 경우에 동작할 코드 작성(필요에따라 생략 가능)
  console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

//등급별 티켓 가격
// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요.
function checkPrice(grade) {
	switch (grade) {
    case `VIP`:
      console.log(`VIP석은 15만원 입니다.`);
      break;
    case `R`:
      console.log(`R석은 13만원 입니다.`);
      break;
    case `S`:
      console.log(`S석은 10만원 입니다.`);
      break;
    case `A`:
      console.log(`A석은 8만원 입니다.`);
      break;
    default:
      console.log(`VIP, R, S, A 중에서 하나를 선택해 주세요.`);
      break;
  };
};

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');

//for 반복문 (loop statement
for (let i = 2; i <= 10; i++) { //i는 1부터 시작해서 10이 될때까지 반복하는데 실행될 때마다 i는 1씩 증가한다는 뜻
  console.log(`${i} 채희 화이팅!`)
}