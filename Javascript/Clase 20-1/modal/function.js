let imgList = document.querySelectorAll('.img-list');

let modal = document.querySelector('.modal');
let imgModal = document.querySelector('.modal img');

let closeIcon = document.querySelector('.close');
let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let numText = document.querySelector('.num');

let zoomBox = document.querySelector('.zoom-box');

closeIcon.addEventListener('click', () => modal.style.display = "none" );
arrowLeft.addEventListener('click', () => ChangeImg(-1) );
arrowRight.addEventListener('click', () => ChangeImg(1) );

let currentPosition = 0;

imgList.forEach((img, i) => {
    img.addEventListener('click', () => {
        modal.style.display = "flex";

        imgModal.setAttribute("src", img.getAttribute("src"));

        currentPosition = i;
        numText.textContent = (i + 1) + "/" + imgList.length;
    });
});

imgModal.addEventListener('mousemove', (e) => {
    let { left, top, width, height } = imgModal.getBoundingClientRect(); // { left, bottom, top, right }
    // let left = data.left; // let right = data.right; // let top = data.top; // let bottom = data.bottom;

    let posX = ((e.clientX - left) / width) * 100;
    let posY = ((e.clientY - top) / height) * 100;

    zoomBox.style.display = "flex";
    zoomBox.style.backgroundImage = "url(" + imgModal.getAttribute("src") + ")";
    zoomBox.style.backgroundRepeat = "no-repeat";
    zoomBox.style.backgroundPosition = posX + "% " + posY + "%";
});

imgModal.addEventListener('mouseleave', () => {
    zoomBox.style.display = "none";
});

function ChangeImg (value) {
    currentPosition += value;

    if (currentPosition < 0) { currentPosition = (imgList.length - 1); }
    if (currentPosition > (imgList.length - 1)) { currentPosition = 0; }

    numText.textContent = (currentPosition + 1) + "/" + imgList.length;


    imgModal.setAttribute("src", imgList[currentPosition].getAttribute("src"));
}