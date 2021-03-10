var cartes = document.querySelectorAll('.content-all-cartes .carte')
var content_all_cartes = document.querySelector('.content-all-cartes')
var message = "Aucune poule n'est inscrite pour le moment..."


var carteGrise = document.getElementById('carte-grise')

if(cartes.length == 0){
    var p = document.createElement('p')
    content_all_cartes.appendChild(p)
    p.innerHTML = message
    p.id = "message-zero-carte"
}


if(cartes.length == 6){

    carteGrise.style.display = "none"

}


console.log(cartes)