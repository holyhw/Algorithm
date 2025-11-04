function solution(num, k) {
  var answer = [...String(num)].findIndex((item) => item === String(k));
  if (answer === -1) return -1;
  return answer + 1;
}