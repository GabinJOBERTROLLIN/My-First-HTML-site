let contenu_json = {};
musiciensSelectionnes = [];
fetch('../JavaScript/musicien.json')
    .then(function (response) {
        return response.json();
    }
    )
    .then(function (json) {
        let produit_id = new URLSearchParams(window.location.search).get("id");



        for (ind in json.theme) {
            if (json.theme[ind].groupe == produit_id) {
                for (musi of json.theme[ind].musiciens) {
                    musiciensSelectionnes.push(musi.nom)
                    visi = "block";
                }
            } else {
                visi = "none";
            }

            compo = json.theme[ind].musiciens;
            template(compo, visi);
            template2(compo, json.theme[ind]);
        }
    })

function template(compo, visi) {

    let template = document.querySelector("#listeCompoMovable");

    for (const c of compo) {

        let clone = document.importNode(template.content, true);
        newContent = clone.firstElementChild.innerHTML
            .replace(/{{photo}}/g, c.photo)
            .replace(/{{nom}}/g, c.nom)
            .replace(/{{role}}/g, c.role)
            .replace(/{{cnom}}/g, c.nom)
            .replace(/{{prix}}/g, c.prix);

        clone.firstElementChild.innerHTML = newContent;
        
        clone.firstElementChild.id = c.nom + " Movable";
        console.log(visi);
        clone.firstElementChild.style.display = visi;

        

        document.getElementsByClassName("compoGroup_flexContainer")[0].appendChild(clone);
        
    }
}
function template2(compo, them) {

    let template2 = document.querySelector("#listeCompo");

    for (const c of compo) {

        let clone = document.importNode(template2.content, true);
        newContent = clone.firstElementChild.innerHTML
            .replace(/{{photo}}/g, c.photo)
            .replace(/{{nom}}/g, c.nom)
            .replace(/{{role}}/g, c.role)
            .replace(/{{prix}}/g, c.prix);

        clone.firstElementChild.innerHTML = newContent;
        console.log(clone.firstElementChild);

        clone.firstElementChild.id = c.nom;
        console.log(ind);
        clone.firstElementChild.className = them.styl;
        clone.firstElementChild.style.display = "block";



        document.getElementsByClassName("compoGroup_flexContainer")[1].appendChild(clone);
    }
}


function removeMusicien(x) {
    console.log(x);


    document.getElementById(x + " Movable").style.display = "none";
    const index = musiciensSelectionnes.indexOf(x);
    musiciensSelectionnes.splice(index, 1);
    console.log(musiciensSelectionnes);
}

function addMusicien(x) {

    musiciensSelectionnes.push(x);
    console.log(x);
    console.log(x);
    console.log(document.getElementById(x + " Movable"));
    document.getElementById(x + " Movable").style.display = "block";




}
function validePanier() {
    console.log(JSON.stringify(musiciensSelectionnes));
    localStorage.setItem('panier', JSON.stringify(musiciensSelectionnes));

}



