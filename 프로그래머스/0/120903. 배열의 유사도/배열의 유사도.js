function solution(s1, s2) {
  var answer = 0;
  s1.forEach((item1) => {
    s2.forEach((item2) => {
      item1 === item2 ? answer++ : answer;
    });
  });
  return answer;
}
