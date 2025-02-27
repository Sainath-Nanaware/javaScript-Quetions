//Reverse given string 


const reverseString=(str)=>{
    const reverseStr=str.split('').reverse().join('')
    console.log(reverseStr);
}
const str="aplaBhau"
// reverseString(str)


//Palindrom of string 

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
