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
let imgRight = document.getElementById("imgRight")
let everyImage = ""
let onlyImage = ""


images.forEach((element, index, array) => {

    console.log("Title: ", element.title);
    console.log("Image: ", element.image);
    console.log("Text: ", element.text);

    everyImage += ` <img src="${element.image}">
                    <div class="position">
                    <h2>${element.title}</h2>
                    <p>${element.text}</p>
                    </div>`;

    onlyImage += ` <img src="${element.image}">`
});


imgPlace.innerHTML = everyImage;
imgRight.innerHTML = onlyImage;


let myImg = document.querySelectorAll("#imgPlace img")
let currentImage = 0
myImg[currentImage].classList.add("d-block")
myImg.forEach(img => img.classList.add("imgBig"));

let myImgRight = document.querySelectorAll("#imgRight img")
let currentImageRight = 0
myImgRight[currentImageRight].classList.add("imgFilter");
myImgRight.forEach(img => img.classList.add("imgH"));

let myText = document.querySelectorAll(".position")
let currentText = 0
myText[currentText].classList.add("d-block")


function BtnUp(my, current, classe) {
    btnUp.addEventListener("click", function () {

        if (current < my.length -1) {
            my[current].classList.remove(classe);
            current += 1
            my[current].classList.add(classe)
        } else {
            my[current].classList.remove(classe);;   
            current = 0
            my[current].classList.add(classe)
        }
        
    })
}

function BtnDown(my, current, classe) {
    btnDown.addEventListener("click", function () {


        if (current > 0) {
            my[current].classList.remove(classe);
            current -= 1
            my[current].classList.add(classe)
        } else {
            my[current].classList.remove(classe);;   
            current = my.length -1
            my[current].classList.add(classe)
        }
        
    })
}




BtnUp(myText, currentText, "d-block");
BtnDown(myText, currentText, "d-block");
BtnUp(myImg, currentImage, "d-block");
BtnDown(myImg, currentImage, "d-block");
BtnUp(myImgRight, currentImageRight, "imgFilter");
BtnDown(myImgRight, currentImageRight, "imgFilter");
    
    

