function solution(numbers) {
  var answer = 0;
  let max1 = Math.max(...numbers);
  const index1 = numbers.indexOf(max1);
  const outMax1 = numbers.filter((item, idx) => idx !== index1);
  let max2 = Math.max(...outMax1);

  let min1 = Math.min(...numbers);
  const index2 = numbers.indexOf(min1);
  const outMin1 = numbers.filter((item, idx) => idx !== index2);
  let min2 = Math.min(...outMin1);

  result1 = max1 * max2;
  result2 = min1 * min2;

  return (answer = result1 > result2 ? result1 : result2);
}