/* # 문제43 : 10진수를 2진수로

우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

**사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.** */

let a = prompt('10진수를 입력해주세요.');
let b = [];
let result = '';

while (a) {
  b.push(a % 2);
  a = parseInt(a / 2, 10);
}
b.reverse();

b.forEach((n) => {
  result += n;
});

console.log(result);

/* # 문제44 : 각 자리수의 합

**사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램**을 만들어주세요

**예를들어**
18234 = 1+8+2+3+4 이고 정답은 18 입니다.
3849 = 3+8+4+9 이고 정답은 24입니다. */
let n = prompt('숫자를 입력하세요.');
let sum = 0;

while (n !== 0) {
  sum += n % 10;
  n = Math.floor(n / 10);
}

console.log(sum);
