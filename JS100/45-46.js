/* # 문제45 : getTime()함수 사용하기

Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

이를 이용하여 **현재 연도(2022)를 출력해보세요.** */

let toDay = new Date();
console.log(toDay.getFullYear());
console.log(toDay.getMonth());
console.log(toDay.getDay());

/* # 문제46 : 각 자리수의 합 2

1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 

예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21) */
let s = '';
for (let i = 1; i < 21; i++) {
  s += i;
}
let sum = 0;
let sli = s.split('');
console.log(typeof sli);
console.log(sli);
sli.forEach((n) => {
  sum += parseInt(n);
});
console.log(sum);
