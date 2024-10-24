function countOddNumbers(string) {
  const numbers = string.split(",").map(Number);

  function recursion(index) {
    if (index >= numbers.length) return 0;
    const isOdd = numbers[index] % 2 === 1 ? 1 : 0;
    return isOdd + recursion(index + 1);
  }

  return recursion(0);
}

// 사용 예시
const result = countOddNumbers("1,2,3,4,5");

// in > [countOddNumbers, recursion0, recursion1, recursion2, recursion3, recursion4, recursion5]
// out > [recursion5, recursion4, recursion3, recursion2, recursion1, recursion0, countOddNumbers]
// index 5 > return 0
// index 4 > value 5 > isOdd 1 + (recursion(4 + 1 = 5) => 0) > 1
// index 3 > value 4 > isOdd 0 + (recursion(3 + 1 = 4) => 1) > 1
// index 2 > value 3 > isOdd 1 + (recursion(2 + 1 = 3) => 1) > 2
// index 1 > value 2 > isOdd 0 + (recursion(1 + 1 = 2) => 2) > 2
// index 0 > value 1 > isOdd 1 + (recursion(0 + 1 = 1) => 2) > 3
// result : 3

// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= i;
//   }

//   return total;
// }

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// Pure recursion
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);
