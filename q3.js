const changePossibilities = (amount, denomination) => {
    const sortedDenomination = [...denomination].sort(compareNumbers);
    
    return findPossibilities(amount, denomination)
}

const compareNumbers = (a, b) => {
  return b - a
}

const findPossibilities = (amount, denomination, cur = 0, index = 0) => {
  if (cur === amount) {
    return 1;
  }
  if (cur > amount || index >= denomination.length) {
    return 0;
  }

  return findPossibilities(amount, denomination, cur + denomination[index], index) + findPossibilities(amount, denomination, cur, index + 1);
}