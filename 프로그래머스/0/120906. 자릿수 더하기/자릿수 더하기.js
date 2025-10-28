function solution(n) {
  let sum = 0;
  [...String(n)].forEach((item) => (sum += parseInt(item)));
  return sum;
}