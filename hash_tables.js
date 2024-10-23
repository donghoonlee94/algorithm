// Only string & O(n)
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }

  return total;
}

hash("pink", 10);
hash("orange", 10);
hash("green", 10);
