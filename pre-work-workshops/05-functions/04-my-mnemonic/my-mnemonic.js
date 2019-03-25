// YOUR CODE BELOW

const myMnemonic2 = function (str1, str2, str3, str4) {
  if (str1 && str2 && str3 && str4) {
    return str1[0] + str2[0] + str3[0] + str4[0];
  } else if (str1 && str2 && str3) {
    return str1[0] + str2[0] + str3[0];
  } else if (str1 && str2) {
    return str1[0] + str2[0];
  } else if (str1) {
    return str1[0];
  } else {
    return '';
  }
}

const myMnemonic = function (str1, str2, str3, str4) {
  let mnemonic = '';
  for (let i = 0; i < arguments.length; i++) {
    const currentWord = arguments[i];
    mnemonic += currentWord[0];
  }
  return mnemonic;
}