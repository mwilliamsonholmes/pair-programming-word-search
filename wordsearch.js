const wordSearch = (letters, word) => {
    if (!letters.length) return false;

    // check each row for word
    const horizontalJoin = letters.map(ls => ls.join(""));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    // check each column for word
    const verticalJoin = [];
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters[i].length; j++) {
            if (i === 0) {
                verticalJoin.push([letters[i][j]]);
            } else {
                verticalJoin[j].push(letters[i][j]);
            }
        }
    }

    let verticalJoined = verticalJoin.map(ls => ls.join(""));
    for (l of verticalJoined) {
        if (l.includes(word)) return true;
    }

    return false;
};

module.exports = wordSearch;