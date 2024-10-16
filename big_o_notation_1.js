// O(n)
function addUpToA(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// 6
console.log(addUpToA(6));

// O(1)
function addUpToB(n) {
  return (n * (n + 1)) / 2;
}

// 6
console.log(addUpToB(6));

const t0 = performance.now();
addUpToA(100000000);
const t1 = performance.now();
console.log(`Call to doSomething took ${(t1 - t0) / 1000} seconds.`);

const t2 = performance.now();
addUpToB(100000000);
const t3 = performance.now();
console.log(`Call to doSomething took ${(t3 - t2) / 1000} seconds.`);

// O(n²)
function printAllParis(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// O(1) - 상수 시간 복잡도 (Constant Time Complexity)
// 항상 일정한 시간이 걸리는 알고리즘.
// O(n) - 선형 시간 복잡도 (Linear Time Complexity)
// 입력 크기 n에 비례하여 시간이 증가하는 알고리즘.
// O(n²) - 이차 시간 복잡도 (Quadratic Time Complexity)
// 입력 크기 n이 증가할 때, 실행 시간이 n²에 비례하여 증가하는 알고리즘.
// O(log n) - 로그 시간 복잡도 (Logarithmic Time Complexity)
// O(n log n) - 선형 로그 시간 복잡도 (Linearithmic Time Complexity)
