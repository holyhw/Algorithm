function solution(my_string) {
    var strArr = Array.from(my_string);
    
    strArr.reverse();
    let answer = strArr.join("");
    return answer;
}