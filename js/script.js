let arrimg = document.getElementsByTagName("img");
let container = document.querySelector(".container");
let button = document.querySelector("button");

button.addEventListener("click",hamGiDo);
function hamGiDo(){
    container.innerHTML ="<h1>Hello, TLU!</h1>";
    arrImg[0].src = "images/tlu.webp";
}