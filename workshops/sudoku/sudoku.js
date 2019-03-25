// The ultimate goal of this project is to create a "sudoku checker".
// The sudoku checker will be a function that accepts a single sudoku grid (represented by an array of arrays)
// and returns true if the grid follows the rules above and false if not.

// Things to run:
// isValidPuzzle(Puzzle); // true
// isValidPuzzle(fakePuzzle); // false

// Create a function that returns 1 row in the Sudoku grid.
const getRow = (grid, rowIndex) => {
    if (rowIndex >= grid.length) {
        throw 'Try again.';
    }
    const row = grid[rowIndex];
    return row;
}

// Create a function that returns 1 column in the Sudoku grid.
const getColumn = (grid, columnIndex) => {     
    if (columnIndex >= grid.length) {
        throw 'Try again.';
    }
    let column = [];
    for (let i = 0; i < grid.length; i++) {
        column.push(grid[i][columnIndex]);
    }
    return column;
}

// Create a function that returns 1 subgrid in the Sudoku grid based on x,y coordinates.
// Example: (0, 0) === top left square grid.
// Example: (1, 0) === top middle square grid.
// Example: (0, 1) === middle left square grid.

const getSubGrid = (grid, xCoord, yCoord) => {
    // Multiply coordinates by 3 so we know which parts of which arrays to grab.
    xCoord *= 3;
    yCoord *= 3; 
    let section = [];
    for (let i = yCoord; i < (yCoord + 3); i++) {
        for (let j = xCoord; j < (xCoord + 3); j++) {
            section.push(grid[i][j]);
        }
    }
    return section;
}

// Create a function that checks if an array contains exactly 1-9 (valid sudoku digits)
const checkDigits = (section) => {
    if (section.length < 9) {
        throw 'Incomplete section.';
    }   
    // What should a solved section look like?
    const completedSection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // Make a copy of the given section and sort it
    let checkedSection = section.slice().sort();
    // Compare the sorted section to the "solution" and make sure they match
    for (let i = 0; i < section.length; i++) {
        if (checkedSection[i] !== completedSection[i]) {
            return false;
        }          
    }       
    return true;
}

// Accept a grid and confirm each row, column and subgrid contain exactly 1-9
const isValidPuzzle = (grid) => {     
    if (grid.length < 9) {
        throw 'Incomplete puzzle.'
    }
    // Check rows & columns to make sure they're valid.
    for (let i = 0; i < grid.length; i++) {
        const currentRow = getRow(grid, i);
        const currentColumn = getColumn(grid, i);
        if (!checkDigits(currentRow) || !checkDigits(currentColumn)) {
            return false;
        }
    }
    // Check each subgrid to make sure they're valid.
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            if (!checkDigits(getSubGrid(grid, x, y))) {
                return false;
            }
        }
    }
    return true;
}