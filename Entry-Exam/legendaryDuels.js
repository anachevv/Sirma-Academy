function evaluate(s) {
    var arr = [];
    var pairs = {')': '(', '}': '{'};
    
    for (let el of s) {
        if (el === '(' || el === '{') {
            arr.push(el);
        } else if (el === ')' || el === '}') {
            if (arr.length === 0 || arr.pop() !== pairs[el]) {
                return "Not Legendary";
            }
        } else if (el === '!') {
            if (arr.length > 0 && arr[arr.length - 1] === '!') {
                arr.pop();
            } else {
                arr.push('!');
            }
        }
    }

    return arr.length === 0 ? "Legendary" : "Not Legendary";
}

console.log(evaluate("()()(()())"));
console.log(evaluate("((!!)(({!!})))"));
console.log(evaluate("((())"));
console.log(evaluate("{!}!"));
console.log(evaluate("({(!!}))"));