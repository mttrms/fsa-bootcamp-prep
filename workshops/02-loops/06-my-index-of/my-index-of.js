// let myIndexOf = function (source, searchValue, startIdx) {
//   let mySearch = '';
//   let searchChar = 0;
//   let found;

//   for (let i = startIdx || 0; i < source.length; i++) {
//     if (source[i] === searchValue[searchChar]) {
//       mySearch += source[i];
//       if (found === undefined) {
//         found = i;
//       }
//       console.log(mySearch);
//       console.log(found);
//       searchChar++
//     }
//   }
//   if (mySearch !== searchValue) {
//     return -1
//   }

//   return found
// }

const myIndexOf = (source, searchValue, startIdx = 0) => {
  for (let i = startIdx; i < source.length; i++) {
    let search = source.slice(i, i + searchValue.length);;

    if (search === searchValue) {
      return i;
    }
  }
  return -1;
}

myIndexOf('here and there', 'here');