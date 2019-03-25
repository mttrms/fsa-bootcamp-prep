const mostVowels = (sentence) => {
  let currentWord = '';
  let currentVowelCount = 0;

  let maxWord = '';
  let maxVowelCount = 0;

  // Loop through the entire sentence, character by character
  for (let i = 0; i < sentence.length; i++) {
    
    // save current char in a variable
    let char = sentence[i];

    // if current char isn't a space and we're not at the end of the sentence
    if (char !== ' ' && char !== '.') {
      // console.log(currentWord);
      currentWord += char;
      debugger;

      if (isVowel(char)) {
        currentVowelCount += 1;
        debugger;
      }
      debugger;
    } else {
      debugger;
      if (currentVowelCount > maxVowelCount) {
        maxVowelCount = currentVowelCount;
        maxWord = currentWord;
        debugger;
      }
      currentWord = '';
      currentVowelCount = 0;
    }
  }
  return maxWord;
}

const isVowel = (char) => {
  let vowels = 'aeiouAEIOU';

  if (vowels.indexOf(char) >= 0) {
    return true;
  } else {
    return false;
  }

}


console.log(mostVowels('Give her hell from us, Peeves.'));