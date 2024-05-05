export function pointsForWord(word) {
    //word = word.toLowerCase()
    let points = 0;
    for (const char of word) {
      points += /[aeiou]/i.test(char) ? 1 : 2;
    }
    return points;
  }