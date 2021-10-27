const slider = document.querySelector(".slider");
const before = document.querySelector(".image-container-before");
const after = document.querySelector(".image-container-after");
const container = document.querySelector(".container");

function arrastra(ev) {
    let xPos = ev.layerX;
    before.style.width = xPos + 'px';
    slider.style.left = xPos + 'px';
}

container.addEventListener('mousemove', arrastra);

const titol = document.querySelector("#titol");
const textTitol = titol.textContent;
const lletres = textTitol.split("");
titol.textContent = "";

for(let i = 0; i < lletres.length; i++){
    titol.innerHTML += "<span>" + lletres[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 70);

function onTick() {
    const span = document.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;

    if(char === lletres.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}