function runLengthEncoding(string) {
    // O(n) time | O(n) space where n is the length of the input string
    // string.length

    const encodedStringCharacters = []
    let currentRunLength = 1;

    for (let i = 1; i < string.length; i++) {
        const currentCharacter = string[i]
        const previousCharacter = string[i - 1]

        if (currentCharacter !== previousCharacter || currentRunLength === 9) {
            encodedStringCharacters.push(currentRunLength.toString());
            encodedStringCharacters.push(previousCharacter);
            currentRunLength = 0;
        }

        currentRunLength++;
    }
    // Handle last run
    encodedStringCharacters.push(currentRunLength.toString());
    encodedStringCharacters.push(string[string.length - 1]);

    return encodedStringCharacters.join('');
}

runLengthEncoding("AAAAAAAAABBCCCCDD")