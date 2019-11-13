export function Sudoku(array){
    this.board = array;
}

Sudoku.prototype.checkSudokuRow=function(){
    
    for(let row=0; row<this.board.length; row++){
        this.board[row].sort(function(a, b) {return a-b});
        for(let col=0; col<this.board[row].length; col++ ){
            if (this.board[row][col] > 9 || this.board[row][col] < 1) {
                return false
            }
            if(this.board[row][col]>=this.board[row][col+1] && col < this.board.length-1){
                return false;
            }
        }
    }
    return true;
}
Sudoku.prototype.checkSudokuCol=function(){
    for(let col=0; col<this.board.length; col++) 
    {   let newArray=[];
        for(let row = 0; row<this.board[0].length; row++)
        {
            if (this.board[row][col] > 9 || this.board[row][col] < 1) {
                return false
            }
            newArray.push(this.board[row][col]);
        }
        newArray.sort(function(a, b) {return a-b});
        for( let i=0; i<newArray.length-1; i++){
            if(newArray[i]>=newArray[i+1]){
                return false;
            }
        }
    
       
    }
    return true;
}

Sudoku.prototype.checkSudokuSquare = function() {
    let squares = [[0,1,2],[3,4,5],[6,7,8]];
    for (let i = 0; i < squares.length; i++) {
        for (let j = 0; j < squares.length; j++) {
            if (!checkSquare(this.board,squares[i], squares[j])) {
                return false;
            }
        }
    }
    return true;
}

function checkSquare (board, row, col) {
    let newArray = [];
    for (let i=0; i<row.length; i++) {
        for (let j=0; j < col.length; j++) {
            newArray.push(board[row[i]][col[j]])
        }
    }
    newArray.sort(function(a, b) {return a-b});
    for( let i=0; i<newArray.length-1; i++){
        if(newArray[i]>=newArray[i+1]){
            return false;
        }
    }
    return true;
}