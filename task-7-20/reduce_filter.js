console.log("Here is : ", "Reduce & Filter");

//Using Reduce 1 -5
var persons = [
  { name: { first: "John", last: "Hob" }, age: 35 },
  { name: { first: "Alex", last: "Mercer" }, age: 25 },
  { name: { first: "Alice", last: "Zaheer" }, age: 24 },
  { name: { first: "Zues", last: "Odin" }, age: 55 },
  { name: { first: "Soso", last: "Al-Amora" }, age: 67 },
];

/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/
// reduceee=[]
let persons1 =
  persons.reduce(function (acc, cu) {
    return acc + cu.age;
  }, 0) / persons.length;

console.log(`avgAge(persons) =>${persons1}`);

/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/
function longestname(p) {
  let aa = p.reduce((acc, cur) => {
    let a = (cur.name.first + cur.name.last).length;
    let b = (acc.name.first + acc.name.last).length;
    return b > a ? acc : cur;
  });
  console.log(`longestName(persons) => '${aa.name.first} ${aa.name.last}'`);
}
longestname(persons);

/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
function maxNumber(e) {
  let maxNumber1 = e.reduce(function (acc, cu) {
    return cu > acc ? cu : acc;
  });
  return maxNumber1;
}
console.log(`maxNumber([1,2,4,9]) =>${maxNumber([1, 2, 4, 9])}`);
/*
4\
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/
function repeatChar(word,char) {
  let count = 0;
  let repeatChar1 = word.split("").reduce(function (_acc, cu) {
    if (cu.includes(char)) {
      console.log(cu);
      count += 1;
    }
    return `the count is  ${count}`;
  }, "");
  return repeatChar1;
}
console.log(repeatChar("hello world","w"));
/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/
function usAndNumberBeetweenUs(num1 = 2, num2 = 5) {
  let arr = [num1, num2];
  arr.length = num2 - num1 - 1;
  let arr2 = arr.map(function (ele, index, arr) {
    if (index == arr.length) {
      arr = arr.splice(index, 1);
      console.log(arr);
    } else {
      arr = arr.splice(index + 1, 0, ele + 1);
    }
    return arr;
  });

  return arr;
}

console.log(usAndNumberBeetweenUs(2, 5));

//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
function evenOnly(arr) {
  let evenOnly1 = arr.filter(function (el) {
    return el % 2 == 0;
  });
  return evenOnly1;
}
console.log(evenOnly([1, 8, 6, 4]));
/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
function multiFour(arr) {
  let multiFour1 = arr.filter(function (el) {
    return el % 4 == 0;
  });
  return multiFour1;
}
console.log(multiFour([1, 8, 6, 4]));
/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
function containChar(arr, char) {
  let containChar1 = arr.filter(function (ele) {
    return ele.includes(char);
  });
  return containChar1;
}
console.log(containChar(["hello", "world"], "l"));
/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
function evenIndexOddLength(arr) {
  let evenIndexOddLength1 = arr.filter(function (ele, index) {
    return ele.length % 2 != 0 && index % 2 == 0;
  });
  return evenIndexOddLength1;
}
console.log(
  evenIndexOddLength(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"])
);
/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
var persons = [
  { name: { first: "John", last: "Hob" }, age: 35 },
  { name: { first: "Alex", last: "Mercer" }, age: 25 },
  { name: { first: "Alice", last: "Zaheer" }, age: 24 },
  { name: { first: "Zues", last: "Odin" }, age: 55 },
  { name: { first: "Soso", last: "Al-Amora" }, age: 67 },
];
function olderThan(arr,num) {
 let olderThan1= arr.filter(function (el,index) {
   if (el.age > num) {
    return el
  }
 })
 return olderThan1;
}
console.log(olderThan(persons,56));
/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
function shorterThan(arr=[],num=5) {
  let shorterThan1=arr.filter(function (ele) {
   return ele.length < num
  })
  return shorterThan1;
}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log(shorterThan(strings, 5));
// if you finish the exercises review the material of the week and help your classmate