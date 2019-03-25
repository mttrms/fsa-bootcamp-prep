let ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  move: function(char, rowNum, colNum) {
    if (this.board[rowNum][colNum] === null) {
      this.board[rowNum][colNum] = char;
    }
    
    return this.board;
  },
  clear: function() {
    ticTacToe.board =  [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
    return ticTacToe.board;
  }
}