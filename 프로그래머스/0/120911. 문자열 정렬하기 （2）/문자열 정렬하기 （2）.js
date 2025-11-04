function solution(my_string) {
  var low_string = [...my_string].map((item) => item.toLowerCase()).sort();
  let result = low_string.join("");
  return result;
}
