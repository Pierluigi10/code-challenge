
let result = [];
for (let i = 0; i <= 4; i++) {
  for (let j = i + 1; j <= 4; j++) {
    result.push(i, j);
  }
}

console.log(result);
console.log([...new Set(result)]);