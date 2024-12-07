//sum of number using prompt

function sum(){
    let num1=prompt("Enter num 1:")
    let num2 = prompt("Enter num 2:");
    let sum=(+num1)+(+num2)
    alert(`The sum is:${sum}`)
}

//fullname 
function fullname() {
  let fname = prompt("Enter first name:");
  let lname = prompt("Enter Sirname:");
  let fullname=fname+lname
  alert(`The fullname is:${fullname}`);
}



//even or odd

function evenorodd() {
  let num1 = prompt("Enter num:");
  if (+num1 % 2 == 0) {
    alert("The number is even");
  } else {
    alert("The number is odd");
  }
}

//find length

function findlength(){
    let str=prompt("Enter the string")
    alert("length of string:"+str.length)
}


//display the table of number

function table(){
    var num=prompt("Enter the number:")
    for(i=1;i<=10;i++){
        console.log(i*num);
    }
}

//sum of 1 to 100

function total(){
    let add=0
    for(let i=1;i<=100;i++){
         add=add+i
    }
    console.log("Sum of 1 to 100:",add);
}

//Greater thean three number
function greater(){
    let num1=prompt("Eter the number 1");
    let num2 = prompt("Eter the number 2");
    let num3 = prompt("Eter the number 3");

    if((+num1)>(+num2)){
        if((+num1)>(+num3)){
            alert("number is greater:"+num1)
        }
    }else if((+num2)>(+num3)){
            alert("number is greater:"+num2);
    }else{
            alert("number is greater:"+num3);
    }

}

//random number 1 to 10

function randomGenrate(){
    let num= Math.random()*10;
    alert(`${Math.floor(num)}`);
}