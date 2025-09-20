let log = console.log;

function reverseString(str) {
  let newStr = str.split("").reverse().join("");

  /*let length = str.length - 1;

  for (let i = length; i >= 0; i--) {
    newStr += str[i];
  }*/

  return newStr;
}

let myStr = "Hello World!";

log(reverseString(myStr));

//Capitalize the first letter of each word.

let theSentence = "this is the sentence we need to capitalize.";

function capitalizeFirstLetter(sentence) {
  const stringsArray = sentence.split(" ");

  let capitalizedWords = [];
  let capitalizedSentence = "";
  for (let i = 0; i < stringsArray.length; i++) {
    let capitalizedWord =
      stringsArray[i][0].toUpperCase() + stringsArray[i].slice(1);

    capitalizedWords.push(capitalizedWord);
  }

  for (let i = 0; i < capitalizedWords.length; i++) {
    capitalizedSentence += capitalizedWords[i] + " ";
  }

  return capitalizedSentence.trim();
}

log(capitalizeFirstLetter(theSentence));

//Capitalize the first letter of each word.

function capitalizeFirstLetterV2(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      if (word.length === 0) {
        return "";
      }
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

log(capitalizeFirstLetterV2(theSentence));

//Truncate a string to a certain length.
let truncateThisSentence =
  "This is a very long sentence we need to truncate this sentence fast.";
function truncateString(string, length) {
  if (string.length <= length) {
    return string;
  }

  return string.slice(0, length).trimEnd() + "...";
}

log(truncateString(truncateThisSentence, 29));

//Check if two strings are anagrams.

let strs1 = ["heart", "apple", "Cinema"];
let strs2 = ["earth", "apply", "iceman"];
let result = [];
function checkAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let sortedStr1 = str1.toLowerCase().split("").sort().join("");
  let sortedStr2 = str2.toLowerCase().split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

function functionRunner(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return "The length of the arrays must be equal.";
  }

  for (let i = 0; i < arr1.length; i++) {
    result.push(checkAnagrams(arr1[i], arr2[i]));
  }

  return result;
}

log(functionRunner(strs1, strs2));

//Replace all spaces in a string with .

function replaceSpaces(str) {
  return str.trim().replace(/ +/g, "_");
}

log(
  replaceSpaces(
    "    This is the sentence you  need to clean and replace spaces from.  "
  )
);

//Count vowels in a string.

function vowelsCounter(str) {
  let newStr = str.toLowerCase();

  let vowels = ["a", "e", "i", "o", "u"];

  let totalVowels = 0;

  let eachVowelCount = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  if (str.length < 1) {
    return 0;
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        totalVowels += 1;
        eachVowelCount[vowels[j]] += 1;
      }
    }
  }

  return {
    total: totalVowels,
    frequency: eachVowelCount,
  };
}

log(vowelsCounter("This is just another sentence for counting the vowel."));
log(vowelsCounter("This is an example sentence for testing the code I wrote."));

//Find the longest word in a sentence.

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = words[0];
  let longestWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i].length === longestWord.length) {
      longestWords.push(words[i]);
    }
  }

  return longestWords;
}

log(findLongestWord("This is a test sentence."));

//Repeat a string N times.

function repeatString(str, n) {
  const newStr = str.repeat(n);

  return newStr;
}

function repeatStringV2(str, n) {
  let newStr = "";
  for (let i = 1; i <= n; i++) {
    newStr += str;
  }

  return newStr;
}

log(repeatStringV2("abc", 6));

//Count occurrences of a character.

function countCharacterFrequency(str, char) {
  let charCount = 0;

  let newStr = str.replace(/ /g, "");

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === char) {
      charCount += 1;
    }
  }
  return charCount;
}

log(countCharacterFrequency(" this is a  sentence.", "e"));

//Check if a string is a palindrome.

function isPalindrome(str) {
  /* if (str.length === 0) {
    return;
    }
    
    if (str.length === 1) {
      return str;
      }
      
      
      let reversedString = "";
      
      for (let i = newStr.length - 1; i >= 0; i--) {
        reversedString += newStr[i];
        }
        
        return newStr === reversedString;*/

  let newStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return newStr === newStr.split("").reverse().join("");
}

log(isPalindrome("Nayan, nayan"));
log(isPalindrome("hiya"));
log(isPalindrome("Khalid"));

let person = {
  firstName: "Nayan",
  lastName: "Islam",
  age: "27",
};

let cars = [];

cars[1] = "volvo";

/* log(text.length);
log(text.indexOf("nayan")); */
log(cars.length);

function isPalindromeV2(str) {
  let newStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let leftPointer = 0;
  let rightPointer = newStr.length - 1;
  let iterateCount = 0;

  /*for (let i = 0; i <= Math.ceil(rightPointer / 2); i++) {
    if (newStr[leftPointer] === newStr[rightPointer]) {
      leftPointer += 1;
      rightPointer -= 1;
    } else {
      return false;
    }
    iterateCount += 1;
  }*/

  while (leftPointer < rightPointer) {
    if (newStr[leftPointer] !== newStr[rightPointer]) {
      return {
        isPalindrome: false,
        iterateCount: iterateCount,
      };
    }

    leftPointer += 1;
    rightPointer -= 1;
    iterateCount += 1;
  }

  return {
    isPalindrome: true,
    iterateCount: iterateCount,
  };
}

log(isPalindromeV2("Khalid"));
log(isPalindromeV2("Nayan"));
log(isPalindromeV2("A man, a plan, a canal – Panama."));
