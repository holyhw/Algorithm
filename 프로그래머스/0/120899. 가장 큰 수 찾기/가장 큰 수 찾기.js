function solution(array) {
  var answer = [
    Math.max(...array),
    [...array].findIndex((item) => item === Math.max(...array)),
  ];
  return answer;
}