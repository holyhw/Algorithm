function solution(my_string) {
  const regex = /[0-9]/;
  var answer = [...my_string]
    .filter((item) => regex.test(item) === true)
    .sort()
    .map((item) => Number(item));
  return answer;
}