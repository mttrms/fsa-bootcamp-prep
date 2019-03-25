const puzzle = [
  [ 8,9,5,   7,4,2,   1,3,6 ],
  [ 2,7,1,   9,6,3,   4,8,5 ],
  [ 4,6,3,   5,8,1,   7,9,2 ],

  [ 9,3,4,   6,1,7,   2,5,8 ],
  [ 5,1,7,   2,3,8,   9,6,4 ],
  [ 6,8,2,   4,5,9,   3,7,1 ],

  [ 1,5,9,   8,7,4,   6,2,3 ],
  [ 7,4,6,   3,2,5,   8,1,9 ],
  [ 3,2,8,   1,9,6,   5,4,7 ]
];

const fakePuzzle = [
  [ 8,9,5,   7,4,2,   1,3,6 ],
  [ 2,7,1,   9,6,3,   4,8,5 ],
  [ 4,6,3,   5,8,1,   7,9,2 ],

  [ 9,3,4,   6,1,7,   2,5,8 ],
  [ 5,2,7,   1,3,8,   9,6,4 ],
  [ 6,8,2,   4,5,9,   3,7,1 ],

  [ 1,5,9,   8,7,4,   6,2,3 ],
  [ 7,4,6,   3,2,5,   8,1,9 ],
  [ 3,1,8,   2,9,6,   5,4,7 ]
];  

describe('isValidPuzzle', () => {
  it('is a function', () => {
    expect(typeof isValidPuzzle).toEqual('function');
  });

  it('returns true for a legitimate sudoku', () => {
    let returnedValue = isValidPuzzle(puzzle);
    expect(returnedValue).toEqual(true);
  })

  it('returns false for an invalid sudoku', () => {
    let returnedValue = isValidPuzzle(fakePuzzle);
    expect(returnedValue).toEqual(false);
  })

  describe('getRow', () => {
    it('is a function', () => {
      expect(typeof getRow).toEqual('function');
    });

    it('returns an array', () => {
      let returnedValue = getRow(puzzle,1);
      expect(Array.isArray(returnedValue)).toEqual(true);
    })

    it('is equal to the length of the grid', () => {
      let returnedValue = getRow(puzzle, 4);
      expect(returnedValue.length === puzzle.length).toEqual(true);
    })

    it('returns the correct data for a requested row', () => {
      let returnedValue = getRow(puzzle, 8);
      expect(returnedValue).toEqual([3,2,8,1,9,6,5,4,7]);
    })
  });

  describe('getColumn', () => {
    it('is a function', () => {
      expect(typeof getColumn).toEqual('function');
    });

    it('returns an array', () => {
      let returnedValue = getColumn(puzzle,1);
      expect(Array.isArray(returnedValue)).toEqual(true);
    })

    it('is equal to the length of the grid', () => {
      let returnedValue = getColumn(puzzle, 4);
      expect(returnedValue.length === puzzle.length).toEqual(true);
    })

    it('returns the correct data for a requested row', () => {
      let returnedValue = getColumn(puzzle, 8);
      expect(returnedValue).toEqual([6,5,2,8,4,1,3,9,7]);
    })
  });

  describe('getSubGrid', () => {
    it('is a function', () => {
      expect(typeof getSubGrid).toEqual('function');
    });

    it('returns an array', () => {
      let returnedValue = getSubGrid(puzzle, 0, 0);
      expect(Array.isArray(returnedValue)).toEqual(true);
    })

    it('returns the correct data for a requested row', () => {
      let returnedValue = getSubGrid(puzzle, 2, 2);
      expect(returnedValue).toEqual([6,2,3,8,1,9,5,4,7]);
    })
  });

  describe('checkDigits', () => {

    let validSection = [6,2,3,8,1,9,5,4,7];
    let invalidSection = [1,2,3,4,5,6,7,7,8];

    it('is a function', () => {
      expect(typeof checkDigits).toEqual('function');
    });

    it('returns true for a legitimate sudoku section', () => {
      let returnedValue = checkDigits(validSection);
      expect(returnedValue).toEqual(true);
    })

    it('returns false for an incorrect sudoku section', () => {
      let returnedValue = checkDigits(invalidSection);
      expect(returnedValue).toEqual(false);
    })
  });




});

