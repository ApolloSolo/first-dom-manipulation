const box = document.getElementById("box");

const red = Math.floor(Math.random()*255)+1;
const green = Math.floor(Math.random()*255)+1;
const blue = Math.floor(Math.random()*255)+1;

box.addEventListener("click", () => {
    if(box.style.borderRadius < 1){
        box.style.background = "blue";
        box.style.borderRadius = "100%";
        box.innerHTML = "Now I'm a blue circle";
        box.style.color = "rgb(255, 255, 255)"
    }
    else{
        box.style.background = "red";
        box.style.borderRadius = "";
        box.innerHTML = "Red again!";
        box.style.color = "rgb(0, 0, 0)"
    }
});