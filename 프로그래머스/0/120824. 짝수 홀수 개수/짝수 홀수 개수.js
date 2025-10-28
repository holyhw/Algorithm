function solution(num_list) {
    let odd=[...num_list].filter(item => item % 2 !== 0 );
    let even=[...num_list].filter(item => item % 2 === 0 );
    var answer = [even.length, odd.length];
    return answer;
}