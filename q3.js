const changePossibilities = (amount, denomination, cur = 0, index = 0) => {
  if (cur === amount) {
    return 1;
  }
  if (cur > amount || index >= denomination.length) {
    return 0;
  }

  return changePossibilities(amount, denomination, cur + denomination[index], index) + changePossibilities(amount, denomination, cur, index + 1);
}