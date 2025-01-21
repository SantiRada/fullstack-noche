let body = document.querySelector('.body');

let btnChange = document.querySelector('.change-theme');
let icon = document.querySelector('.icon-theme');

if(localStorage.getItem("theme") != ""){
    // RECONOCER SI EXISTE ESA VARIABLE EN LOCALSTORAGE
    let theme = JSON.parse(localStorage.getItem("theme")); // JSON A STRING

    if(theme == "dark"){
        body.classList.add("dark-theme");
        icon.classList.toggle("fa-moon");
        icon.classList.toggle("fa-sun");
    }
}

btnChange.addEventListener('click', () => {
    body.classList.toggle("dark-theme");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");

    if(body.classList.contains("dark-theme")){
        localStorage.setItem("theme", JSON.stringify("dark")); // STRING A JSON
    }else{
        localStorage.setItem("theme", JSON.stringify("light")); // STRING A JSON
    }
});