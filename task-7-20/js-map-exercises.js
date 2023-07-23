/*
Instructions: 
 - You should solve all these questions using .map() function 
*/


/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/
console.log("***********************Exercise 1 ***********************")

function doubleNumbers(arr){
  let arrdouble = arr.map(function(ele){
    return ele*2
  })
  console.log(arrdouble);
}

let arrNumber = [2, 5, 100];
doubleNumbers(arrNumber);
doubleNumbers([3 , 6, 10]);


/*
 * Exercise 2 : 
 * 
 * Take an array of numbers and make them strings
 *
 * Test Case: 
 *
 * console.log(stringItUp([2, 5, 100]));
 * 
 * Result:
 * ["2", "5", "100"]
*/
console.log("***********************Exercise 2 ***********************")

function stringItUp(arr){
  // your code here
  let newarr = arr.map(function(ele){
    return ele.toString()
  })
  console.log(newarr);
}
stringItUp([2, 5, 100]);


/*
 * Exercise 3:  
 * 
 * Capitalize each of an array of names
 *
 * Test Case: 
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 * 
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/
console.log("***********************Exercise 3 ***********************")


function capitalizeNames(arr) {
  return arr.map((ele) => {
    return ele.split("").map((ele, i) => {
        if (i === 0) {
          return ele.toUpperCase();
        } else {
          return ele.toLowerCase();
        }
      })
      .join("");
  });
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));



/*
 * Exercise 4:  
 * 
 * Make an array of strings of the names
 *
 * Test Case: 
 *
 * console.log(namesOnly([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 *   ])); 
 * 
 * Result:
 *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
*/
console.log("***********************Exercise 4 ***********************")

let namesArray = [
  {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
  ]; 
 function namesOnly(array){
  let namesOnly = namesArray.map((ele)=>ele.name)
  console.log(namesOnly);
}
namesOnly(namesArray)
/*
 * Exercise 5:  
 * 
 * Make an array of strings of the names saying whether or not they can go to The Matrix
 *
 * Test Case: 
 *
 * console.log(makeStrings([
 *    {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ]));  
 * 
 * Result:
 * 
 * ["Angelina Jolie can go to The Matrix", 
 * "Eric Jones is under age!!", 
 * "Paris Hilton is under age!!", 
 * "Kayne West is under age!!", 
 * "Bob Ziroll can go to The Matrix"]
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */
console.log("***********************Exercise 5 ***********************")

function makeStrings(arr){
  // your code here
  let matrix = namesArray.map(function(ele){
    return ele.age > 18 ? `${ele.name} can go to the Matrix` : `${ele.name} is under age!!`;
  })
  console.log(matrix);
}
makeStrings(namesArray);

/*
 * Exercise 6:  
 * 
 * Make an array of the names in h1s, and the ages in h2s
 *
 * Test Case: 
 *
 * console.log(readyToPutInTheDOM([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ])); 
 * 
 * Result:
 * 
 * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
 * "<h1>Eric Jones</h1><h2>2</h2>", 
 * "<h1>Paris Hilton</h1><h2>5</h2>", 
 * "<h1>Kayne West</h1><h2>16</h2>", 
 * "<h1>Bob Ziroll</h1><h2>100</h2>"]
 */
console.log("***********************Exercise 6 ***********************")

function readyToPutInTheDOM(arr){
  // your code here
  let h1h2 = namesArray.map(function(ele){
    return `<h1>${ele.name}</h1><h2>${ele.age}</h2>`
  })
  console.log(h1h2);
}
readyToPutInTheDOM(namesArray)




/*
* Exercise 7:
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Cases:
*   Test Case 1:  doubleValues([1,2,3]) 
*   Test Case 2:  doubleValues([1,-2,-3])  
*
* Result:
* Test Case 1: [2,4,6] 
* Test Case 2: [2,-4,-6]
*/
console.log("***********************Exercise 7 ***********************")

function doubleValues(arr){
    // your code here
    let darray = arr.map(function(ele){
      return ele*2
    })
    console.log(darray);
  }
  doubleValues([1,2,3])
  doubleValues([1,-2,-3])
  
  /*
  * Exercise 8:
  * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
  *
  *
  * Test Cases :
  *   Test Case 1:  valTimesIndex([1,2,3])  
  *   Test Case 2:  valTimesIndex([1,-2,-3]) 
  * 
  * Result
  * Test Case 1: [0,2,6]
  * Test Case 2: [0,-2,-6]
  */
  console.log("***********************Exercise 8 ***********************")

  function valTimesIndex(arr){
     // your code here   
     let mindex = arr.map(function(ele,ind){
      return ele*ind
     })
    console.log(mindex);
  }
  valTimesIndex([1,2,3])
  valTimesIndex([1,-2,-3])
  
  /*
  * Exercise 9:
  * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
  * of that key in each object.
  * 
  * Test Case:
  * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
  * 
  * Result:
  * ['Elie', 'Tim', 'Matt', 'Colt']
  */
  console.log("***********************Exercise 9 ***********************")

  function extractKey(arr,key){
     // your code here 
     let names = arr.map(function(ele){
      return ele.key
     })
     console.log(names);
  }
  extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}],"name")
  
  /*
  * Exercise 10:
  * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
  * 
  * Examples:
  * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) 
  * // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
  */
  console.log("***********************Exercise 10 ***********************")

 function extractFullName(array){
    // your code here 
    let Fname = array.map((ele)=>ele.first + " " + ele.last)
    console.log(Fname);
 }
 extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}])