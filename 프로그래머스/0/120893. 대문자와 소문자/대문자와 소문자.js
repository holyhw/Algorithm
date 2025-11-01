function solution(my_string) {
  var answer = "";
  const regex1 = /[a-z]/;

  answer = [...my_string].map((item) => {
    if (regex1.test(item)) {
      return item.toUpperCase();
    } else {
      return item.toLowerCase();
    }
  });

  return answer.join("");
}