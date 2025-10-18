function solution(sides) {
    var answer = 0;
    const max = Math.max(...sides);
    const maxIndex = sides.indexOf(max);
    
    const outMax = sides.filter((item,idx) => idx !== maxIndex);
    
    const sum = outMax.reduce((acc, cur) => acc + cur, 0);
    
    answer = sum > max ? 1 : 2;
    
    return answer;
}