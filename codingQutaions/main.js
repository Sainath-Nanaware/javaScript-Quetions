//sort array
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }

//shuffle random array
// console.log('initial Array:',arr);
// for(let i=0;i<arr.length/2;i++){
//     let index = parseInt(Math.random() * arr.length);
//     [arr[i], arr[index]] = [arr[index], arr[i]];
// }
// console.log(arr)

//Find the Most Frequent Element in an Array

/*const arr = [5, 52, 10, 10, 10, 52, 12, 52, 44, 88, 44, 10];

var maxValue = 0;
var countArray = [];
for (i = 0; i < arr.length; i++) {
  var count = 0;
  arr.forEach((element) => {
    console.log(element);
    if (element == arr[i]) {
      console.log("element:", element, "array:", arr[i]);
      count++;
    }
  });
  const checkNum = (num) => {
    var present = false;
    countArray.forEach((element) => {
      if (num == element.value) {
        present = true;
        return present;
      }
    });
    return present;
  };
  if (!checkNum(arr[i])) {
    countArray.push({ value: arr[i], count: count });
  }
  console.log(countArray);
  var maxCount = 0;
  var maxValue = 0;
  countArray.forEach((element) => {
    if (element.count > maxCount) {
      maxCount = element.count;
      maxValue = element;
    }
  });
  console.log("max count is:", maxValue);
}
*/
/*
Gpt code:

    const arr = [5, 52, 10, 10, 10, 52, 12, 52, 44, 88, 44, 10];

function findMostFrequentElement(arr) {
    let frequencyMap = {};  // Store element counts
    let maxCount = 0;
    let mostFrequentElement = null;

    // Count occurrences
    for (let num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;

        // Update maxCount and mostFrequentElement
        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num];
            mostFrequentElement = num;
        }
    }

    return { value: mostFrequentElement, count: maxCount };
}

// Run function
const result = findMostFrequentElement(arr);
console.log(`Most Frequent Element: ${result.value}, Count: ${result.count}`);


*/

//IMP HASH MAP CONCEPT
/*
let frequencyMap = {}; // Creating an empty object (hash map)

let num = 10;
frequencyMap[num] = 5; // Storing a key-value pair (10 -> 5)

console.log(frequencyMap[10]); // 5  (retrieves the value for key 10)
console.log(frequencyMap[num]); // 5  (same as above, since num = 10)


*/
/*for of:

const arr = [10, 20, 30];

for (let num of arr) {
    console.log(num); // 10, 20, 30
}

*/

/*
    Find Intersection and Union of Two Arrays
    Rotate an Array by K Positions
    Flatten a Deeply Nested Array Without Using flat()
        -Given an array that contains nested arrays, flatten it into a single-level array.
    Remove Duplicates Without Using Set
    Find the Second Largest Element in an Array
*/

    // Find Intersection and Union of Two Arrays:(Using set)


    /*const union=()=>{
        const arr1=[10,50,66,98,21,55]
        const arr2=[5,50,88,21,78,55]
        const union=new Set();
        for(let num of arr1){
            union.add(num)
        }
        for(let num of arr2){
            union.add(num)
        }
        console.log("Union of arr1 and arr2:",union)
    }
    // union()

    const intersection=()=>{
            const arr1 = [10, 50, 66, 98, 21, 55];
            const arr2 = [5, 50, 88, 21, 78, 55];

            const intersect=[]

            for (let num1 of arr1){
                for (let num2 of arr2){
                    if(num1==num2){
                        intersect.push(num2)
                    }
                }
            }
    
            console.log("intersect of array:",intersect);
            
    }
    // intersection();
    const unionWithoutSet = () => {
      const arr1 = [10, 50, 66, 98, 21, 55];
      const arr2 = [5, 50, 88, 21, 78, 55];

      var newArr = [];
      for (let num of arr1){
        if(!newArr.includes(num)){
            newArr.push(num)
        }
      }

       for (let num of arr2) {
         if (!newArr.includes(num)) {
           newArr.push(num);
         }
       }
      console.log("union of array:", newArr);
    };
    unionWithoutSet();*/
    //************************************************************************************

    // Rotate an Array by K Positions

    // const rotateArray=()=>{
    //     const arr=[20,25,88,99,87,54,66,24]
    //     const kPoint=1
    //     for(let i=0;i<arr.length;i++){
    //         if(i<=kPoint){
    //             let shiftElement=arr.shift()
    //             arr.push(shiftElement)
    //         }
    //     }
    //     console.log("final array:",arr);
        
    // }
    // rotateArray()
  //************************************************************************************* */
//  Remove Duplicates Without Using Set

  // const removeDublicates=()=>{
  //   const arr=[12,55,88,77,98,65,88,65,12,10]
  //   const newArray=[]
  //   for (let num of arr){
  //       if(!newArray.includes(num)){
  //         newArray.push(num)
  //       }
  //     }
  //     console.log("new Array:",newArray);
      
  // }

  // removeDublicates()

//    Find the Second Largest Element in an Array
//by sorting:

// function findLarge(arr){
//   const sortArray=arr.sort()
//   console.log(sortArray);
//   console.log("second large element:",sortArray[1]);
// }
// const arr=[10,55,87,66,95,20]
// findLarge(arr)

//without sorting:

// function findLarge(arr) {
//   var large=0
//   var sLarge=0
//   for(let i=0;i<arr.length;i++){
   
//       if(arr[i]>large){
//         sLarge=large
//         large=arr[i]

//     }
//   }
//   console.log(arr.sort((a,b)=>a-b));
//   console.log("second large",sLarge);
  
// }
// const arr = [10, 55, 87,558, 66,95,40,88,88,552,875,88,2,88];
// findLarge(arr);


//Find the majority element in an array.

// const selectElement=(arr)=>{
//   var frequencyMap={}
//   for(let i=0;i<arr.length;i++){
//     var count=0
//     for (let num of arr) {
//         if(arr[i]==num){
//           count++
//         }
//     }
//     frequencyMap[arr[i]]=count
//   }
//   var max=0
//   var maxElement
//   for(let [key,value] of Object.entries(frequencyMap)){
//     if(value>max){
//       max=value
//       maxElement=key
//     }
//   }
//   console.log(frequencyMap);
  
//   console.log("most frequent element in array:",maxElement);

  

// }

// const arr=[20,50,20,88,90,20,66,66,325,66,66]
// //selectElement(arr)


//Implement a function that removes falsy values from an array.


/*
*
**
***
****
*****
*/


// function pattern(){
//   for(var i=0;i<5;i++){
//     for(var j=0;j<=i;j++){
//       console.log("hii");
//       console.log(j)
//     }
//   }
// }
// pattern()

//Write a function to check if a number is a power of 2.

function powerOf2(a){
  if(a%2==0){
    console.log("Number is power of two");
    
  }else{
    console.log("Number is not power of two");
  }
}

// powerOf2(50)



//closure example:

const closure=()=>{
  let count=0
  return increaseCount=()=>{
      count++
      return count
  }

}
// const counter=closure()
// console.log(counter())
// console.log(counter())
// console.log(counter())



// function timer(){
//   setInterval(()=>{
//     console.log("euu")
//   },5000)
// }
// // timer()
// // console.log("Hiii");


// function reverseString(str){
//   const reverse=str.split('').reverse().join('')
//   console.log(reverse);
//   const status=reverse.includes('d')
//   console.log(status);
  
  
// }
// reverseString('nadJS')

// const reverseArr=(arr,k)=>{

//   for(let i=0;i<arr.length;i++){
//     if(i===k)break;
//     let element=arr.shift()
//     arr.push(element)
//   }
//   console.log(arr);
// }

// //reverse array k point 

// const arr=[10,50,80,9,66,87]
// reverseArr(arr,2)


//move 0 strting points



// function modifyArray(arr){
//   let count=0
//   for(let i=0;i<arr.length;i++){
//     let num=arr.shift()
//     if(num===0){
//       count++;
//     }else{
//       arr.push(num)
//     }
//   }  
//   for(let i=0;i<=count;i++){
//     arr.push(0)
//   }
// console.log(arr);


// }

// const arr=[0,55,88,99,0,55,0,58,0]

// modifyArray(arr)



// var person={
//   id:2121,
//   name:"sainath",
//   city:"pune"
// }

// console.log(Object.values(person));
// console.log(Object.keys(person));


// var a=50
// {
//   var a=80
// }
// let b=a
// console.log(b);

// function removeZero(arr1){
//   for(let i = arr1.length-1;i>=0;i--){
//       if(arr1[i]===0){
//           arr1.pop()
//       }else{
//         break;
//       }

//   }
//   console.log(arr1.sort());
  
// }


// arr1=[21,0,54,8,7,0,0,0]

// arr2=[0,0,0,54,88,99]
// removeZero(arr1)


function findLargset(arr){
  var max=0
  var secondMax=0
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
      secondMax=max
      max=arr[i]
    }
    if(arr[i]>secondMax && arr[i]<max){
      secondMax=arr[i]
    }
  }
  console.log("max:"+max+"      second Max:"+secondMax);
  
}


const arr=[55,99,88,5,66,87,77,22]
findLargset(arr)