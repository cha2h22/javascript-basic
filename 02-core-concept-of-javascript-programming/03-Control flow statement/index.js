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

function printGrade(midtermScore, finalScore) {
	let totalScore = midtermScore + finalScore;
	
  if (totalScore >= 90) {
    console.log('A');
  } else if (totalScore >= 80) {
    console.log('B');
  } else if (totalScore >= 70) {
    console.log('c');
  } else if (totalScor >= 60) {
    console.log('D');
  } else {
    console.log('F');
  };
};

printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);