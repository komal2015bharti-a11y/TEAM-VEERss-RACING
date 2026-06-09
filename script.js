
/* REVEAL ANIMATION */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

  reveals.forEach((element)=>{

    const windowHeight = window.innerHeight;

    const revealTop = element.getBoundingClientRect().top;

    const revealPoint = 120;

    if(revealTop < windowHeight - revealPoint){

      element.classList.add("active");

    }else{

      element.classList.remove("active");

    }

  });

}

revealSections();

/* IMAGE POPUP */

const images = document.querySelectorAll(".gallery img");

const popup = document.getElementById("popup");

const popupImg = document.getElementById("popupImg");

const closePopup = document.getElementById("closePopup");

images.forEach((img)=>{

  img.addEventListener("click", ()=>{

    popup.style.display = "flex";

    popupImg.src = img.src;

  });

});

closePopup.addEventListener("click", ()=>{

  popup.style.display = "none";

});

/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", ()=>{

  navLinks.classList.toggle("active");

});

/* TEAM SLIDER */

const slides = document.querySelectorAll(".member-slide");

let currentSlide = 0;

function showSlide(index){

  slides.forEach((slide)=>{

    slide.classList.remove("active");

  });

  slides[index].classList.add("active");
}

function nextSlide(){

  currentSlide++;

  if(currentSlide >= slides.length){

    currentSlide = 0;
  }

  showSlide(currentSlide);
}

function prevSlide(){

  currentSlide--;

  if(currentSlide < 0){

    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}
