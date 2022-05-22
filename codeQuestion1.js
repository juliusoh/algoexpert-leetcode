function findPasswordStrength(password) {
  // Write your code here
  let numberSegments = 0;
  let vowel = 0;
  let consonant = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  password.toLowerCase();

  for (let index = 0; index < password.length; index++) {
    if (vowels.includes(password.charAt(index))) {
      vowel++;
    } else if (password.charAt(index) >= "a" && password.charAt(index) <= "z") {
      consonant++;
    }
    if (vowel >= 1 && consonant >= 1) {
      numberSegments++;
      vowel = 0;
      consonant = 0;
    }
  }

  return numberSegments;
}

findPasswordStrength('hackerrank')