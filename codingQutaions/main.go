//Pattern Programs::



//Patern 1:
	/*
			 1
		    1 2
		   1 2 3
		  1 2 3 4		
	*/
/*
package main
import (
	"fmt"
)

func main(){

	// fmt.Printf("hello world")
	var i int = 0;
	var j int=0;
	for i=1;i<=4;i++ {
		for j=4;j>=i;j-- {
			fmt.Print(" ")
		}
		for j=1;j<=i;j++ {
			fmt.Print(" ",j)
		}
		fmt.Println()
	}
}
*/


//Patern 2:
	/*
			 1
		    2 3
		   4 5 6
		  7 8 9 10		
	*/

/*
package main

import(
	"fmt"
)

func main(){

	var i int=0
	var j int=0
	var count int =1
	for i=1;i<=4;i++{
		for j=4;j>=i;j--{
			fmt.Print(" ")
		}
		for j=1;j<=i;j++{
			// fmt.Print(count)
			fmt.Print(" ",count);
			count++;
		} 
		fmt.Println()
	}
}
*/

//Patern 3:
	/*
			 1
		    2 2
		   3 3 3
		  4 4 4 4		
	*/

/*
package main

import(
	"fmt"
)

func main(){

	var i int=0
	var j int=0
	for i=1;i<=4;i++{
		for j=4;j>=i;j--{
			fmt.Print(" ")
		}
		for j=1;j<=i;j++{
			fmt.Print(" ",i);
		} 
		fmt.Println()
	}
}
*/
//Patern 4:
	/*
			1
		    01
		    101
		  	0101
			10101		
	*/

/*
package main

import(
	"fmt"
)

func main(){
	var i int=0
	var j int=0
	for i=1;i<=5;i++{
		for j=1;j<=i;j++{
			if(i%2==0){
				if(j%2==0){
					fmt.Print(1)
				}else{
					fmt.Print(0)
				}
			}
			if(i%2!=0){
				if(j%2==0){
					fmt.Print(0)
				}else{
					fmt.Print(1)
				}
			}
		}	
			fmt.Println()
	}
}
*/

package main
