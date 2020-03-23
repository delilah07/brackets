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
    } else if (current === ')' || current === ']' || current === "}" || current === '2' || current === '4' || current === "6"){
      
      if (stack.length === 0){stack.push(current);}
      else {
        const lastBracket = stack.pop();
      
        if (bracketsConfig[lastBracket] !== current) {
      
        return false;}
      }
    }
    else if (current === '|' || current === '7' || current === '8'){
      if (stack[stack.length-1] !== current){
        stack.push(current);
      } else{
        stack.pop();
      }
    }
    
  }
  return stack.length === 0;
};
