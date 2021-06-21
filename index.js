/* Selectors */

let fullName = document.getElementById("nameSurname");
let age = document.getElementById("age");
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
    fullName.innerHTML = "Aykut Şahinler";
    age.innerHTML = "23";
    showBtn.style.display = "none";
}

