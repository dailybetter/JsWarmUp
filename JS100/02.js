// <pass> 부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력 되게 하세요.

var arr = [200, 100, 300];
// pass
arr.splice(2,0,1000);
console.log(arr);
arr.splice(2,1,'new');
console.log(arr);
arr.splice(1,1,'second','third');
console.log(arr);
arr.splice(6,1,'end');
console.log(arr);
arr.splice(5,1);
console.log(arr);


//출력 : [200,100,1000,300]
// Splice 함수를 이용하면 배열의 원하는 index에 값을 추가, 삭제 할 수 있다.
// arr.splice(index, 삭제 갯수, 추가 요소)
