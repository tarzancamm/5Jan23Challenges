// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

const scores = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

const high = (str) => {
    let scoreOfWord = 0
    let highestScore = 0
    let highestScoreWord = null

    let arr = str.split(' ')
    
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[i].length; k++) {
            let letter = arr[i][k]
            scoreOfWord += scores[letter] //Dynamically access object using bracket notation. NOT possible with dot notation.
            if (scoreOfWord > highestScore) {
                highestScore = scoreOfWord
                highestScoreWord = arr[i]
            }
        }
        scoreOfWord = 0
    }
    return highestScoreWord
};


console.log(high("man i need a taxi up to ubud")); //'taxi'
