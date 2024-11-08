const countWordOccurrences = (s: string, word: string): number => {
  s = s.toLowerCase();
  word = word.toLowerCase();

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == word[0]) {
      let ss = "";
      for (let j = 0; j < word.length && i + j < s.length; j++) {
        ss += s[i + j];
      }
      if (ss === word) {
        count++;
        i += word.length;
      }
    }
  }
  return count;
};

console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));

console.log(countWordOccurrences("I love typescript", "typescript"));
