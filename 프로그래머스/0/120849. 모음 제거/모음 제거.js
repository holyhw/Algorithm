function solution(my_string) {
    var answer = [...my_string].filter(item=>item!=='a'&&item!=='e'&&item!=='i'&&item!=='o'&&item!=='u').join('');
    return answer;
}