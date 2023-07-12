/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
G = window.prompt("input your grade", "0 ~ 100");

if (G>=90){
    alert("A")
}else if(G>=80){
    alert("B")
}else if(G>=70){
    alert("C")
}else if(G>=60){
    alert("D")
}else if(G>=50){
    alert("E")
}else {
    alert("Fail")
}
