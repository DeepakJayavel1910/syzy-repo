const word = "Challenge";
let count = 0;
for (i = 0; i < word.toLowerCase().length; i++) {
  if (
    word.charAt(i) === "a" ||
    word.charAt(i) === "e" ||
    word.charAt(i) === "i" ||
    word.charAt(i) === "o" ||
    word.charAt(i) === "u"
  ) {
    count++;
  }
}
console.log(`Count of vowels: ${count}`)