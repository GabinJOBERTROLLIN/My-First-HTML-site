
function afficheGroupe() {


    fetch('../JavaScript/musicien.json')
        .then(function (response) {
            return response.json();
        }
        )
        .then(function (json) {
            for (them of json.theme) {



                for (p of them.musiciens) {


                    li = document.createElement('li');
                    console.log(p.nom);
                    li.setAttribute("onclick", "addMusicien(" + p.nom + ")");
                    a = document.createElement('a');
                    a.className = them.styl;
                    image = document.createElement('img');
                    image.src = p.photo;
                    image.className = "musicien";

                    infoProduit = document.createElement('div');
                    infoProduit.className = "infoProduit";
                    nomProduit = document.createElement('div');
                    nomProduit.className = "nomProduit";
                    nomProduit.appendChild(document.createTextNode(p.nom));
                    prix = document.createElement('div');
                    prix.className = "prix";

                    prix.appendChild(document.createTextNode(p.prix));
                    infoProduit.appendChild(nomProduit);
                    infoProduit.appendChild(prix);

                    a.appendChild(image);
                    a.appendChild(infoProduit);





                    li.id = p.nom;
                    li.appendChild(a);
                    document.getElementsByClassName("compoGroup_flexContainer")[0].appendChild(li);
                }
            }
        }
        )



}



var image = document.getElementsByClassName("perruque");
console.log("bonjour 3" + image)
console.log(image)
/*for (var i = 0, len = image; i < len; i = i + 1) {
    var context = image[i].getContext("2d")
    var img = new Image();
    img.src = "../images/Chopin-1.jpg";
    console.log("bonjour 2");
    img.onload = function () {
        console.log("bonjour");
        context.drawImage(img, 0, 0, 200, 200);

    }
}*/