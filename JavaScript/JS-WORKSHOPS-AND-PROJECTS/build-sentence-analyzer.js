//In this workshop, you'll review how to work with JavaScript loops by building a sentence analyzer app.

//In this workshop, you will build a sentence analyzer that will take a sentence and get the count for the number of words, vowels, consonants, and punctuation marks.
function getVowelCount (sentence){
    const vowels = 'aeiouAEIOU';
    let count = 0 ;


for(let char of sentence){
    if(vowels.includes(char)){
        count++;
    }
}
return count;
}
function getConsonantCount(sentence) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for(let char of sentence ){
        if(/[a-zA-Z]/.test(char) && !vowels.includes(char)){
            count++;
        }
    }
    return count;
}
function getWordCount(sentence) {
    // Trim removes extra spaces at start/end, split splits by space,
    // filter removes any empty strings caused by multiple spaces.
    return sentence.trim().split(/\s+/).filter(word => word !== "").length;
}


const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

 const consonatCount = getConstantCount("Coding is fun");
 console.log(` Consonant Count: ${consonatCount} `);


 const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

const wordCount = getWordCount("Coding is fun and powerful!");
console.log(`Word Count: ${wordCount}`);
