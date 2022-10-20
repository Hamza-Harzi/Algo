function wordCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++)
        if (str[i] === " " && [i + 1] !== "") {
            count += 1;
        }

    count += 1;

    return count;
}

function vowelCount(str) {
    let totalVowel = 0;
    for (let i = 0; i <= str.length; i++) {
        if (
            str[i] == "a" ||
            str[i] == "o" ||
            str[i] == "u" ||
            str[i] == "e" ||
            str[i] == "i"
        ) {
            totalVowel += 1;
        }
    }
    return totalVowel;
}