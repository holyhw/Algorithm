function solution(my_string, num1, num2) {
  let str1 = my_string.charAt(num1);
  let str2 = my_string.charAt(num2);
  var answer = [...my_string].map((item, idx) => {
    if (idx === num1) {
      return str2;
    } else if (idx === num2) {
      return str1;
    } else {
      return item;
    }
  });
  return answer.join("");
}