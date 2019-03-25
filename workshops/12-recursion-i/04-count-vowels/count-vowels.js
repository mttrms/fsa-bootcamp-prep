const countVowels = (str) => {
  const vowels = ['a','e','i','o','u'];
  let count = 0;
  if (str.length === 0) {
    return 0;
  }
  if (vowels.includes(str[0].toLowerCase())) {
    count++;
  }
  
  return count += countVowels(str.slice(1));
  
}