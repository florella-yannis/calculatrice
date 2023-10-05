const info = document.querySelector('.infos');

const allBtns = document.querySelectorAll('input[type="button"]');

// Fonction appelée lorsqu'un bouton est cliqué
function val(resultat){
    // Ajoutez la valeur du bouton au champ de texte
    form.fenetre.value = form.fenetre.value + resultat;
}

// Fonction appelée lorsqu'on clique sur le bouton "="
function calcule(){
    // Vérifiez si le champ de texte est vide
    if(form.fenetre.value == ""){
        // Affichez un message d'erreur
        info.innerText = `Veuillez écrire un chiffre`;

        // Ajoutez un gestionnaire d'événements à chaque bouton
        allBtns.forEach(btn => {
            btn.addEventListener('click', function(){
                info.innerText = ""; // Effacez le message d'erreur
            });
        });
    } else {
        // mettez le résultat dans le champ 
        form.fenetre.value = eval(form.fenetre.value);
    }
}

// Fonction appelée lorsqu'on clique sur le bouton "suppr"
function suppr(){
    // Effacez le contenu du champ de texte
    form.fenetre.value = "";
}
