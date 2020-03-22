module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  let current;
  bracketsConfig = {
        "(": ")", 
        "[": "]", 
        "{": "}",
        "1": "2",
        "3": "4", 
        "5": "6",
        "|": "|",
        "7": "7",
        "8": "8",
      };
                    
  for (let i = 0; i < str.length; i++) {
    current = str[i];
    
    if (current === '(' || current === '[' || current === '{' || current === '1' || current === '3' || current === '5') {
      stack.push(current);

    } else if (current === ')') {
      if (stack.length === 0){stack.push(current);}
      else if (stack.length !== 0 && stack[stack.length-1] === '(') {stack.pop()};
    }
    else if (current === ']') {
      if (stack.length === 0){stack.push(current);}
      else if (stack.length !== 0 && stack[stack.length-1] === '[') {stack.pop()};
    }
    else if (current === '}') {
      if (stack.length === 0){stack.push(current);}
      else if (stack.length !== 0 && stack[stack.length-1] === '{') {stack.pop()};
    }
    else if (current === '2') {
      if (stack.length === 0){stack.push(current);}
      else if (stack.length !== 0 && stack[stack.length-1] === '1') {stack.pop()};
    }
    else if (current === '4') {
      if (stack.length === 0){stack.push(current);}
      else if (stack.length !== 0 && stack[stack.length-1] === '3') {stack.pop()};
    }
    else if (current === '6') {
      if (stack.length === 0){stack.push(current);}
      else if (stack.length !== 0 && stack[stack.length-1] === '5') {stack.pop()};
    }
    else if (current === '|' && stack[stack.length-1] !== '|') {
      stack.push(current);
    }
    else if (current === '|' && stack[stack.length-1] === '|') {
      stack.pop();
    }
    else if (current === '7' && stack[stack.length-1] !== '7') {
      stack.push(current);
    }
    else if (current === '7' && stack[stack.length-1] === '7') {
      stack.pop();
    }
    else if (current === '8' && stack[stack.length-1] !== '8') {
      stack.push(current);
    }
    else if (current === '8' && stack[stack.length-1] === '8') {
      stack.pop();
    }
  }
  return stack.length === 0;
};
