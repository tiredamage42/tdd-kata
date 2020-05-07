function wrap (str, col) {
    if (col <= 0) {
        return str;
    }

    let returnstring = '';
    let columnCounter = 0;
    for (let i = 0; i < str.length; i++) {
        returnstring += str[i];

        if (i < str.length - 1) {
            if (str[i] === '\n' || str[i+1] === '\n') {
                columnCounter = 0;
            }
            else {
                columnCounter++;
                if (columnCounter >= col) {
                    returnstring += '\n';
                    columnCounter = 0;
                }
            }
        }
    }
    return returnstring;
}

module.exports = wrap;

/*

a\nbcd\nefg\nhij\nklm\nnop\nqrs\ntuv\nwxy\n\nz' to equal
a\nbcd\nefg\nhij\nklm\nnop\nqrs\ntuv\nwxy\nz'
*/
