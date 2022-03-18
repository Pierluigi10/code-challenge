
/* 
1-2
1-3
1-4
2-3
2-4
3-4
*/


let result = [];
for (let i = 1; i <= 4; i++) {
  for (let j = i + 1; j <= 4; j++) {
    result.push(i, j);
  }
}

console.log(result);
console.log([...new Set(result)]);