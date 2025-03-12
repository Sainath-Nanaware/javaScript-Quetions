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
/*
function countFrequency(str){
    let frequencyMap={}
    for(let char of str){
        frequencyMap[char]=(frequencyMap[char]||0)+1
    }
    console.log("Frequency Map:",frequencyMap)
}
const str="Ramayanr"
countFrequency(str)
*/


/*
7.Remove Duplicates
    removeDuplicates("programming"); // Output: "progamin"
*/
/*
function removeDuplicate(str){
    const charSet=new Set()
    var i=0
    var newStr='';
    const interator=charSet.values();
    for(let char of str){
        charSet.add(char)
        
    }
    const charArray=[...charSet]
    for(let char of charArray){
        newStr=newStr+char
    }
    console.log(newStr);
    
}

// const str="Programming"
const str="Gagantaram"
removeDuplicate(str)
*/


/*
8.Check Anagram
    isAnagram("listen", "silent"); // Output: true
    isAnagram("hello", "world");   // Output: false
*/

/*
const isAnagram=(str1,str2)=>{
    if(str1.length!=str2.length){
        console.log("It's not anagram")
        return
    }
   const stringSet=new Set()
    for(let char of str1){
        stringSet.add(char)
    }
    for (let char of str2) {
        stringSet.add(char);
        
    }
    console.log(stringSet);

    if(str1.length===stringSet.size){
         console.log("It's anagram");

    }else{
        console.log("It's not anagram");
        
    }
    
}
    // const str1="listen"
    // const str2="silent"
    const str1="MaaN"
    const str2="NaaM"
    isAnagram(str1,str2)

*/

/*
9.Replace Character
    replaceChar("banana", "a", "o"); // Output: "bonono"
*/
/*
function replaceChar(str, char1, char2){
    // console.log(str,char1,char2)
    const result=str.replaceAll(char1,char2)
    console.log(result);
    
}
replaceChar("banana","a","o")
*/


/*
    10.String Compression
    compressString("aaabbccc"); // Output: "a3b2c3"

*/
// const compressString=(str)=>{
//     var frequencyMap={}
//     var compressStr=''
//     for( let char of str){
//         frequencyMap[char]=(frequencyMap[char] || 0)+1;
//     }
//     console.log(frequencyMap);
//     for(let key in frequencyMap){
//         console.log(key);
//         compressStr=compressStr+key+frequencyMap[key]
//     }
//     console.log(compressStr);
    
// }


// compressString("aaaaavvvvsssshhhppp")

//Remove dublicate characters from string 
/*
function removeDublicate(str){
    const charSet=new Set()

    for(let char of str){
        charSet.add(char)
    }
    // console.log(charSet);
    var newStr=''
    for(let element of charSet){
        console.log(element);
        newStr=newStr+element;
    }
    console.log(str);
    
    console.log("output:",newStr);
    
    
}


const str="Applaee"

removeDublicate(str)
*/

// Find the First and all Non-Repeating Character


const findNonRepeatChar=(str)=>{
    var frequencyMap={}
    for(let char of str){
        frequencyMap[char]=(frequencyMap[char]||0)+1
    }
    console.log(frequencyMap);
    for(let key in frequencyMap){
      // console.log(key);
      //fnind first non repeat charecter in string
      // if(frequencyMap[key]==1){
      //     console.log("First non redundant charecter:",key);
      //     break
      // }
      //find all non repeat charecter in string
      if(frequencyMap[key]==1){
          console.log("non redundant charecter:",key);
      }
    }
    
}

const str="aabccdeer"
findNonRepeatChar(str)





























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