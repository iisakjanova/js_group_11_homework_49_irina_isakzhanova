const squareWhite = '  ';
const squareBlack = '██';

const boardArray = [];

const getCellValue = (row, col) => {
    return boardArray[row][col];
};

const calculateCurrentValue = (row, col) => {
    let square;

    if (row === 0 && col === 0) {
        square = squareWhite;
    } else if (row === 0) {
        square = getCellValue(row, col - 1);
    } else {
        square = getCellValue(row - 1, col);
    }

    if (square === squareWhite) {
        return squareBlack;
    } else {
        return squareWhite;
    }
};

const fillRow = (rowIndex, width) => {
    for (let i = 0; i < width; i++) {
        boardArray[rowIndex].push(calculateCurrentValue(rowIndex, i));
    }
};

const fillBoard = (height, width) => {
    for (let i = 0; i < height; i++) {
        boardArray.push([]);
        fillRow(i, width);
    }
};

const drawBoard = (height) => {
    let boardString = '';

    for (let i = 0; i < height; i++) {
        const rowString = boardArray[i].join('');
        boardString += rowString + '\n';
    }

    return boardString;
};

const displayBoard = (height = 10, width = 10) => {
    fillBoard(height, width);
    const boardString = drawBoard(height);
    console.log(boardString);
};

displayBoard(process.argv[2], process.argv[3]);