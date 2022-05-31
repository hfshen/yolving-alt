// Image filtering functions

function showAll() {
  let galleryImage = document.getElementsByClassName("galleryImage");
  for (let i = 0; i < galleryImage.length; i++) {
		if (galleryImage[i].classList.contains('hide')) {
    	galleryImage[i].classList.remove('hide');
		} 
  }
}

function showNature() {
  let galleryImage = document.getElementsByClassName("galleryImage");
  for (let i = 0; i < galleryImage.length; i++) {
		if (galleryImage[i].classList.contains('art') || galleryImage[i].classList.contains('pets')) {
    	galleryImage[i].classList.add('hide');
		} else {
    	galleryImage[i].classList.remove('hide');
		}
  }
}

function showPets() {
  let galleryImage = document.getElementsByClassName("galleryImage");
  for (let i = 0; i < galleryImage.length; i++) {
		if (galleryImage[i].classList.contains('nature') || galleryImage[i].classList.contains('art')) {
    	galleryImage[i].classList.add('hide');
		} else {
    	galleryImage[i].classList.remove('hide');
		}
  }
}

function showArt() {
  let galleryImage = document.getElementsByClassName("galleryImage");
  for (let i = 0; i < galleryImage.length; i++) {
		if (galleryImage[i].classList.contains('nature') || galleryImage[i].classList.contains('pets')) {
    	galleryImage[i].classList.add('hide');
		} else {
    	galleryImage[i].classList.remove('hide');
		}
  }
}

// Nature Pop up 
let gallery = document.getElementById('gallery');
let popUp = document.getElementById('popUp');
let selectedImage = document.getElementById('selectedImage');
let imageIndexes = [1, 2, 3];
let selectedIndex = null;

imageIndexes.forEach((i) => {
  const image = document.createElement('img');
  image.src = `images/nature-${i}.png`;
  // image.src = `https://ik.imagekit.io/ceo/tr:w-600/nature-${i}.png`;
  image.alt = `nature photo #${i}!`;
  image.classList.add('galleryImage');
  image.classList.add('nature');

  image.addEventListener('click', () => {
    popUp.style.transform = `translateY(0)`;
    selectedImage.src = `images/nature-${i}.png`;
    // selectedImage.src = `https://ik.imagekit.io/ceo/tr:w-1000/nature-${i}.png`;
    selectedImage.srcset = `images/nature-${i}.png `;
    selectedImage.alt = `nature photo ${i}`;
  })

  gallery.appendChild(image);
});

// Pets Pop up
let imagePetsIndexes = [1, 2];
let selectedPetsIndex = null;

imagePetsIndexes.forEach((i) => {
  const image = document.createElement('img');
  image.src = `images/pet-${i}.png`;
  // image.src = `https://ik.imagekit.io/ceo/tr:w-600/pets-${i}.png`;
  image.alt = `Pets (Macs and Cheeko) photo #${i}!`;
  image.classList.add('galleryImage');
  image.classList.add('pet');

  image.addEventListener('click', () => {
    popUp.style.transform = `translateY(0)`;
    selectedImage.src = `images/pet-${i}.png`;
    // selectedImage.src = `https://ik.imagekit.io/ceo/tr:w-1000/pets-${i}.png`;
    selectedImage.srcset = `images/pet-${i}.png`;
    selectedImage.alt = `Pet!`;
  })

  gallery.appendChild(image);
});

// Art Pop up
// let imageArtIndexes = [1, 2, 3, 4];
let selectedArtIndex = null;

imageArtIndexes.forEach((i) => {
  const image = document.createElement('img');
  image.src = `images/art-${i}.png`;
  // image.src = `https://ik.imagekit.io/ceo/tr:w-600/art-${i}.png`;
  image.alt = `Photo #${i} of my random artwork!`;
  image.classList.add('galleryImage');
  image.classList.add('art');

  // image.addEventListener('click', () => {
  //   popUp.style.transform = `translateY(0)`;
  //   selectedImage.src = `images/art-${i}.png`;
  //   // selectedImage.src = `https://ik.imagekit.io/ceo/tr:w-1000/art-${i}.png`;
  //   selectedImage.srcset = `
  //   images/art-${i}.png`;
  //   selectedImage.alt = `Art!`;
  // })

  gallery.appendChild(image);
});

// Click out of the pop up
popUp.addEventListener('click' , () => {
  popUp.style.transform = `translateY(-100%)`;
  popUp.src = '';
  popUp.srcset = '';
  popUp.alt = '';
});

// Add active class to the selected button
let btnContainer = document.getElementById("btnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// ==================================
// SameSite Cookie and Service Worker
// ==================================

// Set a same-site cookie for first-party contexts
document.cookie = 'cookie1=value1; SameSite=Lax';
// Set a cross-site cookie for third-party contexts
document.cookie = 'cookie2=value2; SameSite=None; Secure';


if ("serviceWorker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("service-worker.js");
}