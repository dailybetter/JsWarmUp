// 리스트 중 중복된 값을 제거하는 여러가지 방법

const nums = [1, 2, 3, 4, 5, 6, 6, 7, 2, 2, 8, 8, 9];

// set을 이용하는 방법 set에는 순서가 없음
const uniqueNums = new Set(nums);
console.log(uniqueNums);

// indexOf 매서드 활용
const indexOfNums = nums.filter((item, position) => {
  return nums.indexOf(item) === position;
});

console.log(indexOfNums);

//caching/frequency map

function caching(arr) {
  const uniqueElements = {};
  const result = [];
  for (let element of arr) {
    if (!uniqueElements[element]) {
      result.push(element);
    }
    uniqueElements[element] = element;
  }
  return result;
}
console.log(caching(nums));
