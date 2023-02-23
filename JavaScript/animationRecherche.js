function selectionRock(){
    var rock= document.getElementsByClassName("rock");
    for (var i=0, len=rock.length; i<len; i=i+1){
        console.log(rock[i])
        rock[i].style.display= rockoupas.checked ? "block" : "none";
        
    }
}
function selectionhardRock(){
    var rock= document.getElementsByClassName("hardRock");
    for (var i=0, len=rock.length; i<len; i=i+1){
        console.log(rock[i])
        rock[i].style.display= hardRockoupas.checked ? "block" : "none";
        
    }
}

function selectionClassic(){
    var classic =document.getElementsByClassName("classique");
    for (var i=0, len=classic.length; i<len; i=i+1){
        classic[i].style.display= classiqueoupas.checked ? "block" : "none";
    }
}

function selectionPop(){
    var classic =document.getElementsByClassName("pop");
    for (var i=0, len=classic.length; i<len; i=i+1){
        classic[i].style.display= popoupas.checked ? "block" : "none";
    }
}
function selectionRap(){
    var classic =document.getElementsByClassName("rap");
    for (var i=0, len=classic.length; i<len; i=i+1){
        console.log(classic[i])
        classic[i].style.display= rapoupas.checked ? "block" : "none";
    }
}

function supprimerMusicien(){
    var supprimer = document.getElementsByClassName("")
}


function afficheHeader(){
fetch('../HTML/header.html')
.then(function(response) {
    console.log("Réponse du fetch : " + response)
    return response.text();
})
.then(function(text) {
    document.body.insertAdjacentHTML("afterbegin",text);
})
}

function afficheFooter(){
    fetch('../HTML/footer.html')
    .then(function(response) {
        console.log("Réponse du fetch : " + response)
        return response.text();
    })
    .then(function(text) {
        document.body.insertAdjacentHTML("beforeend",text);
    })
    }

function recherche(){
    fetch('../JavaScript/musicien.json')
    .then(function(response) {
        return response.json();
      }
    )
    .then(function(json) {
        for (them of json.theme){
            
            
            var SommePrix=0;
            for(p of them.musiciens){
                SommePrix+=Number(p.prix);
            }
            li = document.createElement('li');
            a = document.createElement('a');

            image= document.createElement('img');
            image.src=them.photo;
            image.className="group";
           
            infoProduit = document.createElement('div');
            infoProduit.className="infoProduit";
            nomProduit = document.createElement('div');
            nomProduit.className="nomProduit";
            nomProduit.appendChild(document.createTextNode(them.groupe));
            prix= document.createElement('div');
            prix.className="prix";

            prix.appendChild(document.createTextNode(SommePrix));
            infoProduit.appendChild(nomProduit);
            infoProduit.appendChild(prix);
            
            a.appendChild(image);
            a.appendChild(infoProduit);
            a.href="./personnalisation.html?id="+them.groupe;
            

            li.className=them.styl;
            
            li.id=them.groupe;
            li.appendChild(a);
            document.getElementsByClassName("GroupContainer")[0].appendChild(li);
            
        }
    }
    )


   
}
