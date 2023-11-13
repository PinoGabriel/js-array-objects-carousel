const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let btnUp = document.getElementById("su")
let btnDown = document.getElementById("giu")
let container = document.getElementById("container")
let imgPlace = document.getElementById("imgPlace")
let everyImage = ""


images.forEach((element, index, array) => {

    console.log("Title: ", element.title);
    console.log("Image: ", element.image);
    console.log("Text: ", element.text);

    everyImage += ` <img src="${element.image}">
                    <div class="position">
                    <h2>${element.title}</h2>
                    <p>${element.text}</p>
                    </div>`;
});


imgPlace.innerHTML = everyImage;


let myImg = document.querySelectorAll("#container img")
let currentImage = 0
myImg[currentImage].classList.add("d-block")

let myText = document.querySelectorAll(".position")
let currentText = 0
myText[currentText].classList.add("d-block")


function BtnUp(my, current) {
    btnUp.addEventListener("click", function () {

        if (current < my.length -1) {
            my[current].classList.remove("d-block");
            current += 1
            my[current].classList.add("d-block")
        } else {
            my[current].classList.remove("d-block");;   
            current = 0
            my[current].classList.add("d-block")
        }
        
    })
}

function BtnDown(my, current) {
    btnDown.addEventListener("click", function () {

        if (current > 0) {
            my[current].classList.remove("d-block");
            current -= 1
            my[current].classList.add("d-block")
        } else {
            my[current].classList.remove("d-block");;   
            current = my.length -1
            my[current].classList.add("d-block")
        }
        
    })
}


BtnUp(myImg, currentImage);
BtnUp(myText, currentText);
BtnDown(myImg, currentImage);
BtnDown(myText, currentText);

    
    

