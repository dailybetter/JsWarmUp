// 다음 배열에서 400,500를 삭제하는 code를 입력하세요.

var nums = [100,200,300,400,500];
nums.pop();
nums.pop();
console.log(nums);


// 배열 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지 신경써야함
console.log(Array.isArray(nums));
// 배열인지 아닌지 확인하는 함수 ' Array.isArray

console.log(nums.indexOf(400));
// index번호 찾는 함수 ( 가장 처음 나온 값의 인덱스를 반환)
// 없으면 -1

console.log(nums.includes(500));
// 함수 안에 값 찾기 (있는지 없는지만 반환)

console.log(nums.push(500))
// 제일 뒤에 값 추가



//막간 삼항연산자
let num = 3;
num % 2 === 0 ? console.log('💛') : console.log('❌')