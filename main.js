const imgcontainer = document.querySelector(".image-container, .image-container2, .image-container3, .image-container4");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let a = 0;
let timeout;

function updategellary() {
  imgcontainer.style.transform = `perspective(1000px) rotateY(${a}deg)`;
  timeout=setTimeout(() => {
    a = a - 45;

    updategellary();
  }, 4000);
}
updategellary();

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function switchFunction() {
    var gallery1 = document.getElementById("galleryMother")
    gallery1.classList.toggle("showGallery1")

}

function switchFunction2() {
    var gallery2 = document.getElementById("galler2")
    gallery2.classList.toggle("showGallery2")
    gallery2.classList.toggle("closeGallery1")
    gallery2.classList.toggle("closeGallery3")
    gallery2.classList.toggle("closeGallery4")

}

function switchFunction() {
    var gallery1 = document.getElementById("galleryMother")
    gallery1.classList.toggle("showGallery1")
    gallery1.classList.toggle("closeGallery2")
    gallery1.classList.toggle("closeGallery3")
    gallery1.classList.toggle("closeGallery4")

}

function switchFunction() {
    var gallery1 = document.getElementById("galleryMother")
    gallery1.classList.toggle("showGallery1")
    gallery1.classList.toggle("closeGallery2")
    gallery1.classList.toggle("closeGallery3")
    gallery1.classList.toggle("closeGallery4")

}