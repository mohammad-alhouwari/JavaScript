/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(X,Y,Z,N) {
    console.log(`You will be a ${X} in ${Y}, and married to ${Z} with ${N} kids`)
}
tellFortune('software engineer', 'Jordan', 'Alice', 3);
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(NN) {
    console.log(`Your doggie is ${NN} years old in dog years!`)
}
calculateDogAge(1);
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(X,NN) {
     NX = (100-X)*(365*NN);
    console.log(`You will need ${NX} cups of tea  to last you until the ripe old age of 100`)
}
calculateSupply(30, 3);
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name) {
    console.log(`Hello ${name}`)
}
greet("Adam")
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
function double1(cat) {
    return 2 * cat;
  }
  
  function double2(X) {
    return 2 * X;
  }
  
  function double3(X) {
    return 2 * X;
  }

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
 function double11(x) {
    return 2 * x ;
  }
  
  function double22 (x){
  return 2 * x;
  }
  
  function  double33 (x) {
    return 2 * x;
  }

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(x) {
        let h = x * 16;
    console.log(h)
}
cube(4);
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(x,y) {
    let z =x*y;
    console.log(z)
}
multiply(3,4);
multiply(5,4);
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age) {
    if (age>=20) {
        console.log("yes you can")
    } else {
        L=20-age
        console.log(`please come back after ${L} years to get one`)
    }
}
canIGetADrivingLicense(21);
canIGetADrivingLicense(17);
canIGetADrivingLicense(20);
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(A,B) {
    if (A.length == B.length) {
        console.log("true")
    } else {
        console.log("falce")
    }
}
sameLength("tree","clue");
sameLength("tree","car");
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(x,z) {
    if (x>=z) {
        console.log(x)
    } else {
        console.log(z)
    } 
}
largerNubmer(5,6)
largerNubmer(5,3)
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(x,y,z) {
    if (x<=y && x<=z) {
        console.log(x)
    }else if(y<=x && y<=z) {
        console.log(y)
    }else{
        console.log(z)
    }
}
smallerNubmer(8,6,7);
smallerNubmer(5,99,34);
smallerNubmer(5,99,3);
smallerNubmer(5,3,3);
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(...X) {
  var min =X[0];
  for (let i = 0; i < X.length; i++) {
    if (X[i].length < min.length) {
      min = X[i]
    }
  }
  console.log(min)
}  
shorterString("air","school","car","by","github");
shorterString("air","tr","car","github","by");
shorterString("air","tr","by","car","github");

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(...y) {
  var max =y[0];
  for (let i = 0; i < y.length; i++) {
    if (y[i].length > max.length) {
      max = y[i]
    }
  }
  console.log(max)
}  
longerString("air","school","car","github")
longerString("air","schoo","car","github")  
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(x) {
 
    if (x %2 == 0) {
        console.log(true) 
    } else {
      console.log(false) 
    }
}
isEven(1);
isEven(2);
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isEven(x) {
 
  if (x %2 == 0) {
      console.log(false) 
  } else {
    console.log(true) 
  }
}
isEven(4);
isEven(5);

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(x) {
 
  if (x >= 0) {
      console.log(x) 
  } else {
    x = x * -1;
    console.log(x) 
  }
}
positive(4);
positive(-5);
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName,lastName) {
  console.log(firstName+" "+lastName)
}
fullName("Adam","McCallen")
fullName("Alex", "Mercer")
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(a,b,c,d,e) {
  avg =(a+b+c+d+e)/(5)
  console.log(avg)
}
average(1,2,3,4,5);
average(5,7,9,3,5);
/*
20
  Write a function called randomNumber
  that didnt takes any parameter
  and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber() {
  console.log(Math.random());
}
randomNumber()
randomNumber()
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(x,y) {
  console.log(Math.floor(Math.random() * y) + x);
}
randomBetweenNumbers(1,8)
randomBetweenNumbers(3,100)

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(G) {
  if (G>=95){
    console.log("A")
}else if(G>=85){
  console.log("B")
}else if(G>=70){
  console.log("C")
}else if(G>=50){
  console.log("D")
}else {
  console.log("F")
}
}
scoreInUniversty(96);
scoreInUniversty(3);
scoreInUniversty(71);

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
var NNN=0;
function counter() {
  ++NNN
  console.log(NNN)
}
counter();
counter();
counter();
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function resetCounter() {
  console.log(NNN+" and the counter reset now")
  NNN=0;
}
resetCounter();
counter();
counter();
resetCounter();
counter();