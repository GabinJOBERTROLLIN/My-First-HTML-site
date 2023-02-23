let contenu_json = {};
musiciensSelectionnes = [];
fetch('../JavaScript/musicien.json')
.then(function(response) {
        return response.json();
      }
)
.then(function(json) {
    let template2 = document.querySelector("#listeMusicien");
    musiSelectiones= JSON.parse(localStorage.getItem('panier'));
    console.log(musiSelectiones);
    prixtot=0;
    for (group  of json.theme) {
        for (musicien of group.musiciens){
            for(itermusi of musiSelectiones){
                console.log(itermusi);
                console.log(musicien.nom);
                if(musicien.nom==itermusi){ 
                    // console.log(musicien);
                prixtot = Number(prixtot)+Number(musicien.prix);

                let clone = document.importNode(template2.content, true);
                newContent = clone.firstElementChild.innerHTML
                    .replace(/{{photo}}/g, musicien.photo)
                    .replace(/{{nom}}/g, musicien.nom)
                    .replace(/{{role}}/g, musicien.role)  
                    .replace(/{{prix}}/g, musicien.prix);
                    
                clone.firstElementChild.innerHTML = newContent;
                console.log(clone.firstElementChild);
                
                clone.firstElementChild.id=musicien.nom;
                clone.firstElementChild.style.display= "block";
                console.log(document.getElementById("ContainerListeMusicien"));
                document.getElementById("ContainerListeMusicien").appendChild(clone);


    }}}}
    prix = document.createElement('div');
    var prixHorsFrais = localStorage.setItem("prixHorsFrais", prixtot);
    prix.appendChild(document.createTextNode("Prix de la prestation sans les frais de déplacement : "+Number(localStorage.getItem(prixtotal))+"€"));
    prix.id="prixGroupe";
    document.getElementById("formulairePanier").appendChild(prix);
})
