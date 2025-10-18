function solution(numbers) {
    var answer = 0;
    
    let max1 = Math.max(...numbers);
    const index = numbers.indexOf(max1);
    
    const outMax1 = numbers.filter((item,idx)=>idx!==index);
    
    let max2 = Math.max(...outMax1);
    answer = max1 * max2;
    return answer;
}