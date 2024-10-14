function addUpToA(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// 6
console.log(addUpToA(6));

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
