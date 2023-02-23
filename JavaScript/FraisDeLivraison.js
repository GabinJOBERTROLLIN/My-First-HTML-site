function geocoding(event) {
    const adresse = document.getElementById("adresse").value; /* recupere l'input entré par l'utilisateur dans panier.html */
    const codepostal = document.getElementById("codepostal").value; /* idem */
    const ville = document.getElementById("ville").value; /* idem */
    if (adresse != "" && codepostal != "" && ville != "") { /* verification que le formulaire n'est pas vide */
        var adresseURL = encodeURIComponent(adresse + " " + codepostal + " " + ville) /* encodage de l'adresse pour l'injecter dans l'url (remplacer les espaces par des %20 par exemple)*/
    }
    jsonMapbox = fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + adresseURL + "%20France.json?country=fr&language=fr&access_token=pk.eyJ1IjoidmljdG9yLWJvdXZldCIsImEiOiJja3V3cmhzc2kwY2YzMnJsYTN0MXBxM2E2In0.kep5OU_n5FEEJRqBmZ5ZOw") /* mapbox recupere les données de l'adresse dont les coordonnées GPS*/
        .then(function (response) {
            return response.json(); /* jsonMapbox renvoie un dictionnaire de données */
        }).then(function (json) {
            conversion_adresse = json.features[0].geometry.coordinates; /* geometry est une liste dans le dictionnaire de données renvoyé par l'api */
        });
    longitude = conversion_adresse[0]; /* premiere valeur de la liste geometry (à l'indice 0) */
    latitude = conversion_adresse[1]; /* deuxieme valeur de la liste geometry (à l'indice 1) */
    
    var lngCPE = 4.869708583119824
    var latCPE = 45.784302234847644

    var distance = 0

    var coordsGPS = lngCPE + "," + latCPE + ";" + longitude + "," + latitude

    jsonDriving = fetch("https://api.mapbox.com/directions/v5/mapbox/driving/" + coordsGPS + "?geometries=geojson&access_token=pk.eyJ1IjoidmljdG9yLWJvdXZldCIsImEiOiJja3V3cmhzc2kwY2YzMnJsYTN0MXBxM2E2In0.kep5OU_n5FEEJRqBmZ5ZOw")
        .then(function (response) {
            return response.json(); /* jsonMapbox renvoie un dictionnaire de données */
        }).then(function (json) {
            distance = (json.routes[0].distance) / 1000; /* distance en km par la route */
            console.log("distance : " + distance)
            if (distance > 20) { /* condition pour la distance entre le client et l'entreprise supérieur à 20kms */
                let Prixdistance = 5 + 0.05 * distance; /* calcul calcul des frais de port */
                let prix_distance = Prixdistance.toFixed(2) /* arrondi à 2 décimales */
                console.log(prix_distance)
                localStorage.setItem('prix_distance', prix_distance);
            }
            else {
                let prix_distance = 0;
                localStorage.setItem('prix_distance', prix_distance);
            }
        });
}

function LivraisonExpress() {
    if (document.getElementById("livraisonExpress").checked === true) {
        var LivraisonExpress = 8;
    }
    else {
        var LivraisonExpress = 0;
    }
    localStorage.setItem('LivraisonExpress', LivraisonExpress);
}

function MajPrix() {
    console.log('test')
    prixtotal = Number(localStorage.getItem("prixHorsFrais")) + Number(localStorage.getItem("prix_distance")) + Number(localStorage.getItem("LivraisonExpress"));
    var prixtotal = localStorage.setItem("prixtotal", prixtotal)
    console.log(Number(localStorage.getItem("prixtotal")));
    document.getElementById("frais").innerHTML = Number(localStorage.getItem("prixtotal"))+"€";
}

function resetPrix() {
    var prix_distance = 0;
    var LivraisonExpress = 0;
    localStorage.setItem('LivraisonExpress', LivraisonExpress);
    localStorage.setItem('prix_distance', prix_distance);
}