/* Selectors */

let fullName = document.getElementById("nameSurname");
let ageElement = document.getElementById("age");
let showBtn = document.getElementById("showBtn");
let linkedinUrl = document.getElementById("linkedinUrl");
let githubUrl = document.getElementById("githubUrl");


/* Add links to a href */

linkedinUrl.href = "https://www.linkedin.com/in/numan-aykut-%C5%9Fahinler/";
githubUrl.href = "https://github.com/aykutsahinler";

/* Event Listeners */

showBtn.addEventListener("click", showInfos);

/* Functions */

function showInfos() {
    let name = "Aykut";
    let surname = "Şahinler";
    let age = 23
    fullName.innerHTML = name + " " + surname; 
    ageElement.innerHTML = age;
    showBtn.style.display = "none";
}

