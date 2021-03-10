function recup(){

    var poubelle = document.querySelectorAll('.poubelle')
    
    poubelle.forEach(poub => {
        poub.addEventListener('click', affichageBlock)
    });
}

var div_delete = document.querySelectorAll('.delete')

var btn_oui = document.querySelectorAll('.btn-oui')
btn_oui.forEach(button =>
    button.addEventListener('click',deletePoules)
)

var btn_non = document.querySelectorAll('.btn-non')
btn_non.forEach(button =>
    button.addEventListener('click',affichageBlock)
)

var btn_annuler = document.querySelectorAll('.btn-annuler')
btn_annuler.forEach(button =>
    button.addEventListener('click',affichageBlock)
)

function affichageBlock(){

    var nb = parseInt(this.dataset.delete)
    
    if(div_delete[nb].style.display == "none"){
        
        div_delete[nb].style.display = "flex"

    }else if(div_delete[nb].style.display == "flex"){
        
        div_delete[nb].style.display = "none"

    }else{
        div_delete[nb].style.display = "flex"
    }

}

var carte = document.querySelectorAll('.carte')

function deletePoules(){
    var nb = parseInt(this.dataset.delete)
    
    carte[nb].remove()

    var carteGrise = document.getElementById('carte-grise')

    carteGrise.style.display = "flex"
}

recup()