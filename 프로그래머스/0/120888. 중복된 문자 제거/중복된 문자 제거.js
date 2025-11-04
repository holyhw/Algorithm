function solution(my_string) {
  const removeItemSet = new Set();
  const answer = [...my_string];
  for (let i = 0; i < my_string.length - 1; i++) {
    for (let j = i + 1; j < my_string.length; j++) {
      if (my_string[i] === my_string[j]) {
        removeItemSet.add(j);
      }
    }
  }

  const removeItemArray = [...removeItemSet].sort((a, b) => b - a);

  removeItemArray.forEach((item) => {
    answer.splice(item, 1);
  });

  return answer.join("");
}
