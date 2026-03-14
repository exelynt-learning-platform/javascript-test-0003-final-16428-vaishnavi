function printPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let output = '';
        for (let j = 0; j <= i; j++) {
            output += (i + j) % 2 === 0 ? '1 ' : '0 ';
        }
        console.log(output.trim());
    }
}

printPattern(6);
