let card =document.getElementById("card");
let left =document.getElementById("left");
let right =document.getElementById("right");
let cont = "";
let i = 0;
function LLL() {
    if (i==0) {
        i=5
    }else{
        --i;
    }
    arry();
}

function RRR() {
    if (i==5) {
        i=0
    }else{
        ++i;
    }
    arry();
}

async  function arry() {
    const responseText = await fetch('https://reqres.in/api/users?page=1')
    const data1 = await responseText.json()
   
        // console.log(data1.data[i])
        cont = `<h5>${data1.data[i].id}</h5>
                <p>${data1.data[i].email}</p>
                <p>${data1.data[i].first_name}</p>
                <p>${data1.data[i].last_name}</p>
                <img src="${data1.data[i].avatar}">
                `
card.innerHTML=cont;
}
arry()






console.log("aa")
