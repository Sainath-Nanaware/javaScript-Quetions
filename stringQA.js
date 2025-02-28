//Reverse given string 

/*
const reverseString=(str)=>{
    const reverseStr=str.split('').reverse().join('')
    console.log(reverseStr);
}
const str="aplaBhau"
// reverseString(str)
*/

//Palindrom of string 
/*
const checkPallindrom=(str)=>{
    // const oldString=str
    const reverseString=str.split('').reverse().join('')
    // console.log(reverseString);
    
    if(str==reverseString){
        console.log("given string is pallindrom string");
    }else{
        console.log("given string is not pallindrom string");
    }
}

const str1="madAM"
checkPallindrom(str1.toLowerCase())
*/

// Count Vowels and Consonants
/*
const findCount=(str)=>{
    var vovelCount=0
    var constantCount=0
    for(let i=0;i<str.length;i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i'|| str[i]=='o'|| str[i]=='u'){
            vovelCount++;
        }else{
            constantCount++
        }
    }
    console.log("vovels:"+vovelCount+" and constant:"+constantCount);
    
}
// const str="Itshaala"
// const str="AeioU"

findCount(str.toLowerCase())
*/


//Find the Longest Word
/*
const findLongestStr=(str)=>{
    const splitStr=str.split(' ')
    console.log(splitStr);
    let frequencyMap={}
    var max=0;
    var logestWord=''
    for(let word of splitStr){
        frequencyMap[word]=(frequencyMap[word] || word.length)
         if (frequencyMap[word] >=max) {
           max = frequencyMap[word];
           logestWord=word
         }
    }
    console.log(frequencyMap);
    
    console.log("logest word in string are="+logestWord);

}

// const str="I am programmer"
const str="namha parvati pate har har mahadev"
findLongestStr(str)
*/


//Capitalize First Letter of Each Word
/*
const capitalize=(str)=>{
    const splitStr=str.split(' ')
    console.log(splitStr);
    var wordsArray=[]
    for(let str of splitStr){
        let capitalizeWord=str.replace(str[0],str[0].toUpperCase())
        console.log(capitalizeWord);
        wordsArray.push(capitalizeWord)
    }
    var finalString=wordsArray.join(' ')
    console.log("output=",finalString);    
}

str="hellow sadha bhau"

capitalize(str)*/

/*
6.Character Frequency
    charFrequency("hello"); // Output: { h: 1, e: 1, l: 2, o: 1 }
*/

function countFrequency(str){
    let frequencyMap={}
    for(let char of str){
        frequencyMap[char]=(frequencyMap[char]||0)+1
    }
    console.log("Frequency Map:",frequencyMap)
}
const str="Ramayanr"
countFrequency(str)





/*
7.Remove Duplicates
    removeDuplicates("programming"); // Output: "progamin"
8.Check Anagram
    isAnagram("listen", "silent"); // Output: true
    isAnagram("hello", "world");   // Output: false
9.Replace Character
    replaceChar("banana", "a", "o"); // Output: "bonono"
10.String Compression
    compressString("aaabbccc"); // Output: "a3b2c3"

*/
































/*
NOTE:
    1]Traverse of map:(using for in )
                for (let key in frequencyMap) {
                    if (frequencyMap[key] > max) {
                        max = frequencyMap[key];
                        longestWord = key;
                    }
                }


*/