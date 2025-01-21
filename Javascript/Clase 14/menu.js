let menuOpen = document.querySelector(".menu-open");
let menuClose = document.querySelector(".menu-close");

let drawer = document.querySelector(".drawer");

// menuOpen.addEventListener('click', () => {
//     drawer.style.display = "flex";
// });
// menuClose.addEventListener('click', () => {
//     drawer.style.display = "none";
// });

menuOpen.addEventListener('click', () => {
    drawer.style.transform = "translateX(0%)";
});
menuClose.addEventListener('click', () => {
    drawer.style.transform = "translateX(100%)";
});
