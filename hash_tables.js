// Only string & O(n)
// function hash(key, arrayLen) {
//   let total = 0;
//   for (let char of key) {
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrayLen;
//   }

//   return total;
// }

// hash("pink", 10);
// hash("orange", 10);
// hash("green", 10);

function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) & arrayLen;
  }

  return total;
}

// How to collision
// 1. Seperate Chaning  > 데이터를 함께 저장 > 데이터 안에서 루프를 돌아 값을 찾음
// 2. Linear Probing  > 데이터가 있을 경우 다음 빈 곳의 영역을 찾아서 저장.
