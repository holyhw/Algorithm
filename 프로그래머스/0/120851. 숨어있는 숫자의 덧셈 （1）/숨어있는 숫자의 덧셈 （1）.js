function solution(my_string) {
  var answer = 0;
  const regex = /[0-9]/;
  answer = [...my_string].reduce((acc, cur) => {
    let num = regex.test(Number(cur)) === true ? Number(cur) : 0;
    return acc + num;
  }, 0);
  return answer;
}
