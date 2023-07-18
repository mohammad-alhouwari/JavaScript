let button = document.getElementById("button")
let tbody=document.getElementById("tbody")
let td=tbody.value

let lol = new XMLHttpRequest();
lol.open("GET","task.json")
button.onclick = function(){
    let mohammad = "";
    const httjs =JSON.parse(this.responseText);
    for (let i = 0; i<3; i++) {
 mohammad +=`
  <tr >
   <td>${httjs.names[i]}</td>
   <td>${httjs.Age[i]}</td>
   <td>${httjs.major[i]} </td>
   <td>${httjs.unvirsity[i]}</td>
   <td>
   <img src="${httjs.images[i]}" alt="">
   </td>
 </tr>
 <br>`
}
tbody.innerHTML=mohammad;
}
lol.send();