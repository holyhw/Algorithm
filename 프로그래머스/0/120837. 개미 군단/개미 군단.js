function solution(hp) {
  var answer = 0;

  while (hp !== 0)
    if (hp >= 5) {
      answer += parseInt(hp / 5);
      hp %= 5;
      console.log(answer);
      console.log(hp);
    } else if (hp >= 3) {
      answer += parseInt(hp / 3);
      hp %= 3;
      console.log(answer);
      console.log(hp);
    } else if (hp >= 1) {
      answer += hp;
      hp %= 1;
      console.log(answer);
      console.log(hp);
    }
  return answer;
}