const sortByStrings = (s, t) => {
  const letters = {};
  for (let i = 0; i < s.length; i++) {
    if (letters[s[i]]) {
      letters[s[i]] = letters[s[i]] + 1
    } else {
      letters[s[i]] = 1
    }
  }
  let sortedString = ''

  for (let i = 0; i < t.length; i++) {
    if (letters[t[i]]) {
      for (let j = 0; j < letters[t[i]]; j++) {
        sortedString += t[i]
      }
    }
  }
  return sortedString;
}
