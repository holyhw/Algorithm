function solution(cipher, code) {
  var answer = [...cipher].filter((item, idx) => (idx + 1) % code === 0);
  let string = answer.join("");
  return string;
}
