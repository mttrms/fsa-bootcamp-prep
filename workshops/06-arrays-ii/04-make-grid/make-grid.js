// YOUR CODE BELOW
const makeGrid = (numColumns, numRows) => {
  let grid = [];
  
  for (let i = 0; i < numRows; i++) {
    grid.push([]);
    for (let j = 1; j <= numColumns; j++) {
      grid[i].push(j);
    }
  }
  
  
  
  return grid;
}