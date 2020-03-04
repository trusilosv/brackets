module.exports = function check(str, bracketsConfig) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (bracketsConfig[j].indexOf(str[i]) != -1) {
                if (bracketsConfig[j].indexOf(str[i]) === 0) {
                    stack.push(j);
                } else if (stack.pop() != j)
                    return false;
                if (stack[stack.length - 1] === stack[stack.length - 2] && bracketsConfig[j][0] === bracketsConfig[j][1]) {
                    stack.pop();
                    stack.pop();
                }

            }
        }
    }

    if (stack.length != 0)
        return false;
    return true;
}