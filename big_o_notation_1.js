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
