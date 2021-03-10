var div = document.querySelector('.content-all-cartes')
var add = document.getElementById('carte-grise').addEventListener("click", addPoules)

cartes_all = document.querySelectorAll('.carte')

function addPoules(){
    
    var content  = 

    `

        <div class="haut">
            <p class="nom">PouleRousse</p>
            <p class="date-ajout">ajoutée le 22/03/2020</p>
            <div class="avatar-div">
                <img class="avatar" src="img/poule-rousse.jpg" alt="Poule Rousse">
            </div>                   
        </div>

        <div class="bas">
            
            <p class="content-info oeufs">
                <span class="info">57</span>
                <span>OEUFS</span>
            </p>
            
            <p class="content-info age">
                <span class="info">235</span>
                <span>AGE</span>
            </p>
            
            <p class="content-info bague">
                <span class="info">verte</span>
                <span>BAGUE</span>
            </p>
            
        </div>
        <div class="poubelle" data-delete="${stock}">
            <span class="iconify"  data-icon="ic:baseline-delete-forever" data-inline="false"></span>
        </div>

        <div class="delete">
            <p class="texte-delete"> Voulez vous supprimer cette poules ?</p>
            <div class="btn-oui-non">
                <input type="button" class="btn-oui" data-delete="${stock}" value="OUI">
                <input type="button" class="btn-non" data-delete="${stock}" value="NON">
            </div>

            <div>
                <input type="button" value="Annuler" data-delete="${stock}" class="btn-annuler">
            </div>

        </div>

    `
    
    newcarte = document.createElement('div')
    newcarte.classList = "carte"
    newcarte.innerHTML = content
    
    console.log(newcarte)

    var carte = cartes_all[0]

    carte.before(newcarte)

    recup()
}


function recup(){

    var poubelle = document.querySelectorAll('.poubelle')
    
    poubelle.forEach(poub => {
        poub.addEventListener('click', affichageBlock)
    });

    affichageGris()
}

function affichageGris(){
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
}