function solution(price) {
  var answer = price;
  if (price >= 500000) {
    answer -= answer * 0.2;
  } else if (price >= 300000) {
    answer -= answer * 0.1;
  } else if (price >= 100000) {
    answer -= answer * 0.05;
  }
  return Math.floor(answer);
}