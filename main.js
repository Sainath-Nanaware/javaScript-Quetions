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


    const union=()=>{
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

      var union = [];
      union=arr1
      for (let num2 of arr2) {
        for (let num of union){
            if(num!=num2){
                union.push(num)
            }
        }
      }

      console.log("union of array:", union);
    };
    unionWithoutSet();