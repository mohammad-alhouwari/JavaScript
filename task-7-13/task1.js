
let name =["mohammad","sami","morad","ahmad"]
let age =["27","52","13","24"]

  let div0 = document.createElement("div"); 
  div0.style.display="flex";

for (let i = 0; i < 4; i++) {

    let div1 = document.createElement("div");
    //div1.style.border = "2px solid red"b;
    div1.style.cssText = `
    border: 3px black solid;
    text-align: center;
    width: 400px;
    height: 450px;
    font-size: x-large;
    display: inline-block;
    margin: 20px;
    `
    div0.appendChild(div1);

    let p1 = document.createElement("p");
    let p1_cont =document.createTextNode(name[i])
    p1.appendChild(p1_cont);
    div1.appendChild(p1);



    let p2 = document.createElement("p");
    let p2_cont =document.createTextNode(age[i])
    p2.appendChild(p2_cont);
    div1.appendChild(p2);



    let img1 = document.createElement("img");
    img1.setAttribute("src", "orenge.png")
    div1.appendChild(img1);
    

    document.body.appendChild(div1);

 
}


