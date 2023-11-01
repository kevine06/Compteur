const compteur = document.getElementById("compteur");
const retire = document.getElementById("btn-remove");
const ajouter = document.getElementById("btn-add");
const reinitisialiser = document.getElementById("btn");



function decrementer() {
    const nombre = Number(compteur.innerHTML);
    if (nombre > 0){
        compteur.innerHTML = nombre - 1;
    }
}

function incrementer() {
    const nombre = Number(compteur.innerHTML);
    compteur.innerHTML = nombre + 1;
}

function reset() {
    compteur.innerHTML = "0";
}

retire.addEventListener("click", decrementer);
ajouter.addEventListener("click", incrementer);
reinitisialiser.addEventListener("click", reset);