function generateDocument(characters, document) {
    const characterCounts = {}

    for (const character of characters) {
        if (!(character in characterCounts)) {
            characterCounts[character] = 0
        }
        characterCounts[character] += 1
     }
    
    for (const character of document) {
        if (!(character in characterCounts) || characterCounts[character] === 0) {
            return false
        }
        characterCounts[character] -= 1
    }
    return true
}