/* # 문제39 : 오타 수정하기

혜원이는 평소 영타가 빠르고 정확한 것을 친구들에게 자랑하고 다녔습니다. 반 친구들이 혜원이의 타자 속도가 빠르다는 것을 모두 알게 되자 혜원이는 모두의 앞에서 타자 실력을 보여주게 됩니다. 

그런데 막상 보여주려니 긴장이 되서 문장의 모든 e를 q로 잘못 친 것을 발견했습니다. 
혜원이는 프로그램을 돌려 재빠르게 모든 q를 e로 바꾸는 프로그램을 작성하려고 합니다.

**문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.** */
let prevWord = 'querty';

let replaceWord = prevWord.replace(/q/g, 'e');
console.log(replaceWord);

const replaceAll = (word) => {
  return word.replace(/q/g, 'e');
};

/* # 문제40 : 놀이동산에 가자

테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다. 

**원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.**

첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다. */

const limit = prompt('제한 무게');
const n = prompt('인원 수');
let ans = 0;
let total = 0;
for (let i = 1; i <= n; i++) {
  total += parseInt(prompt('무게 용'), 10);
  if (total <= limit) {
    ans = i;
  }
}
console.log(i);
