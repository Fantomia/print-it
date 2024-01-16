const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]

const arrowLeft = document.querySelector(".arrow__left");
const arrowRight = document.querySelector(".arrow__right");

let indexItem = 0;

arrowLeft.addEventListener("click", () => {
    if (indexItem - 1 >= 0) {
        indexItem = indexItem - 1;
		// vérifie que la décrémentation ne soit pas négative
    } else {
        indexItem = slides.length - 1;
		// si la décrémentation est négative, alors revient à la dernière slide
    }
    updateDots(indexItem);
    updateBanner();
});

arrowRight.addEventListener("click", () => {
    if (indexItem + 1 < slides.length) {
        indexItem = indexItem + 1;
		// vérifie que l'incrémentation ne dépasse pas le nombre de slides
    } else {
        indexItem = 0;
		// si l'incrémentation dépasse le nombre de slides, alors revient à la première slide
    }
    updateDots(indexItem);
    updateBanner();
});

function createDots () {
	const dotList = document.querySelector(".dots");
	for (let i=0; i < slides.length; i++) {
	// boucle qui s'éxecute tant que le nombre de dots est inférieure à slides.length
		const dot = document.createElement("div");
		// création d'une div
		dot.setAttribute("class", "dot");
		// ajout de la classe "dot" à la div précédemment créée
		dotList.appendChild(dot);
		// ajout de l'élément "dot" comme enfant de l'élément "dots"
	}
};

function updateDots(indexItem) {
	const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        if (i === indexItem) {
            dot.classList.add("dot__selected");
			// ajoute la classe "dot__selected" au dot associé à la diapositive 
        } else {
            dot.classList.remove("dot__selected");
			// supprime la class "dot__selected" aux autres dots
        }
    });
}

function updateBanner() {
	const bannerImg = document.querySelector(".banner__img");
    bannerImg.src = slides[indexItem].image;
	// change l'url source de l'image

	const tagLine = document.querySelector(".tagLine");
    tagLine.innerHTML = slides[indexItem].tagLine;
	// change le texte en fonction de la tagLine associé à la slide actuelle
}

createDots();
updateDots(indexItem);