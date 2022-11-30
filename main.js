const imgcontainer = document.querySelector(".image-container");
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
