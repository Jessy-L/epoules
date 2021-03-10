var btn = document.getElementById('ham-btn')
btn.addEventListener('click', affichageNav)

var aside = document.getElementById('nav-block')

var stock = 1

var allLi = document.querySelectorAll('nav ul li')
allLi.forEach(element => {
    element.addEventListener('click', affichageNav)
});


function affichageNav(){


    if(stock == 1 ){

        aside.style.display = "none"
        stock--

        
    }else if(stock == 0){
        aside.style.display = "flex"
        stock++
        
    }else{
        stock = 0
    }

}

/* NAV ON RESIZE BLOCK*/

window.onresize = function(){ removeData()}

function removeData(){

    if(window.innerWidth > 1300){
        aside.style.display = "block"
    }else{
        stock = 1 
        affichageNav()
        
    }
}    

removeData()