function solution(dot) {
    var answer = 0;
    if(Math.min(...dot) > 0){
        answer = 1;
    }else if(Math.max(...dot) < 0){
        answer = 3;
    }else if(dot[0] < 0){
        answer = 2;
    }
    else{
        answer = 4;
    }
    return answer;
}