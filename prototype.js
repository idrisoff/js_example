function calculator(string) {
    let arr = string.split(' ');
    let res;
    switch (arr[1]) {
            case '+':
                res = +arr[0] + +arr[2];
                break;
            case '-':
                res = +arr[0] - +arr[2];
                break;
            case '*':
                res = +arr[0] * +arr[2];
                break;
            case '/':
                res = +arr[0] / +arr[2];
                break;
    }
    
    return res;
    
}