function solution(array, height) {
    var answer = 0;
    
    const result = array.filter((item) => item > height);
    answer = result.length;
    
    return answer;
}