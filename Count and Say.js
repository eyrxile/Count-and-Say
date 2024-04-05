var countAndSay = function(n) {
    if(n === 1) return "1";

    let prevSeq = countAndSay(n - 1);
    let result = "";
    let count = 1;

    for(let i = 0; i < prevSeq.length; i++){
        if(prevSeq[i] === prevSeq[i + 1]){
            count++;
        } else {
            result += count + prevSeq[i];
            count = 1;
        }
    }
    return result;
};

//Example usage:
console.log(countAndSay(1));
console.log(countAndSay(4));