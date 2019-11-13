import {Sudoku} from "./../src/checker";
describe('Sudoku',()=>{
    let array = [[1,2,3,4,5,6,7,8,9],[4,5,6,7,8,9,1,2,3],[7,8,9,1,2,3,4,5,6],[2,3,1,6,4,5,9,7, 8
    ],[6,4,5,9,7,8,3,1,2],[9,7,8,3,1,2,6,4,5],[3,1,2,5,6,4,8,9,7],[5,6,4,8,9,7,2,3,1],[8,9,7,2,3,1,5,6,4]];
    let sudoku;
    beforeEach(() => {
        sudoku = new Sudoku(array);
    })
    
    test("Checking size of  rows,size",()=>{
        expect(sudoku.board.length).toEqual(9);     
        for(let row=0; row<sudoku.board.length; row++)
        {
           expect(sudoku.board[row].length).toEqual(9);
        }
    });

    test("Checking method checkSudokuSquare()",()=>{
        expect(sudoku.checkSudokuSquare()).toEqual(true);
    });

    test("Checking method checkSudokuCol()",()=>{
        expect(sudoku.checkSudokuCol()).toEqual(true);
    });
    test("Checking method checkSudokuRow()",()=>{
        expect(sudoku.checkSudokuRow()).toEqual(true);
    });

});