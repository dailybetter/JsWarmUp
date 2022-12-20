// concat을 활용한 출력 방법
// 다음 소스코드를 완성하여 날짜와 시간을 출력하시오.

var year = '2019';
var month =  '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = `'${year}/${month}/${day} ${hour}:${minute}:${second}'`
// concat()메서드는 매개변수로 전달된 문자열을 메서드를 호출한 문자열에 붙여 새로운 문자열로 반환함
var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result)

// concat() 매서드를 사용하여 문제를 풀 수도 있지만 위에 서술한 대로 backtick 한국어로는 억음부호?
// 무튼 백틱을 활용한 출력방법을 통해서도 문제를 해결할 수 있으니 알아두쟈!