const decodeString = s => {
  const stack = [];
  let temp = ''
  
  for (let i = 0; i < s.length; i++) {
    // if a number
    if (!isNaN(s[i])) {
      if (isNaN(temp)) {
        stack.push(temp);
        temp = '';
      }
      temp += s[i]
    }

    else if (s[i] === '[') {
      if (temp) {
        stack.push(temp)
        temp = ''
      }
    }

    else if (s[i] === ']') {
      if (temp) {
        stack.push(temp)
        temp = ''
      }
      const str = stack.pop()
      const num = stack.pop()
      if (!isNaN(num)) {
        stack.push(multiplyString(str, num))
      } else {
        stack.push(num+str)
      }
    }

    else {
      if (!isNaN(temp) && temp) {
        stack.push(temp)
        temp = ''
      }
      temp += s[i]
    }
  }
  if (temp) {
    stack.push(temp)
  }
  return formatStack(stack);
}

const multiplyString = (str, num) => {
  let productString = '';
  for (let i = 0; i < num; i++) {
    productString += str;
  }
  return productString;
}

const formatStack = stack => {
  while (stack.length > 1) {
    const lastEl = stack.pop();
    const secondLastEl = stack.pop();

    if (!isNaN(secondLastEl)) {
      stack.push(multiplyString(lastEl, secondLastEl))
    } else {
      stack.push(secondLastEl + lastEl)
    }
  }
  return stack.pop()
}
