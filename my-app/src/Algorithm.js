
const isColFree = (numbers, col, value) => {
    for (let row = 0; row < 9; row++) {
        if (numbers[row][col] === value) {
            return false;
        }
    }
    return true;
}

const isRowFree = (numbers, row, value) => {
    for (let col = 0; col < 9; col++) {
        if (numbers[row][col] === value) {
            return false;
        }
    }
    return true;
}

// Check the value within its 3x3 grid
const isSquareFree = (numbers, row, col, value) => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (numbers[row + i][col + j] === value) {
                return false;
            }
        }
    }
    return true;
}

// Return true if the move is valid
const isInputCorrect = (numbers, row, col, value) => {
    return (
        isColFree(numbers, col, value) &&
        isRowFree(numbers, row, value) &&
        isSquareFree(numbers, row - (row % 3), col - (col % 3), value)
    );
}

// Return true if there are remaining empty boxes
const isEmpty = (numbers) => {
    let row, col;
    for (row = 0; row < 9; row++) {
        for (col = 0; col < 9; col++) {
            if (numbers[row][col] === 0) {
                return [true, row, col];
            }
        }
    }

    return [false, row, col];
}

const solve = (numbers) => {
    const result = isEmpty(numbers);
    const row = result[1], col = result[2];
    if (!result[0]) {   // Exit when solved
        return true;
    }

    for (let num = 1; num <= 9; num++) {
        if (isInputCorrect(numbers, row, col, num)) {
            numbers[row][col] = num;
            if (solve(numbers)) {
                return true;
            }
            numbers[row][col] = 0;
        }
    }

    return false;
}

module.exports = {
    solve: solve,
    checkMove: isInputCorrect
}