function firstNonRepeatingCharacter(string) {
    const characterMap = {};
      
      for (const character of string) {
          if (!characterMap[character]) {
              characterMap[character] = 0;
              console.log(characterMap)
          }
          characterMap[character]++;
          console.log(characterMap)
      }
      
      for (let index = 0; index < string.length; index++) {
          const character = string[index]
          if (characterMap[character] === 1) {
              return index
          }
      }
      
    return -1;
  }

  firstNonRepeatingCharacter('ababac')