var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

/* On sélectionne tous les éléments qui ont la classe "acc-head" */
var onglets = document.getElementsByClassName("tab-link");
var i, tabContent, tabLink;

/* On boucle sur les éléments sélectionnés (les entêtes de tiroir) */
for (i = 0; i < onglets.length; i++) {
    /* On ajoute un Event Listener sur les entêtes */
    onglets[i].addEventListener("click", function (e) {

        // On cache tout les contenus pour en afficher qu'un seul par la suite
        tabContent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].className = tabContent[i].className.replace("current", " ");
        }

        // On enlève l'effet "onglet courant" à tous les boutons pour
        // l'appliquer à un seul par la suite
        tabLink = document.getElementsByClassName("tab-link");
        for (i = 0; i < tabLink.length; i++) {
            tabLink[i].className = tabLink[i].className.replace("current", " ");
        }

        /* On récupère le id du contenu à afficher dans l'attribut data-content */
        var activateId = this.getAttribute("data-content");
        var activateElement = document.getElementById(activateId);

        // On affiche le bon contenu et applique l'effet onglet courant
        activateElement.classList.add("current");
        e.currentTarget.classList.add("current");

    });
}


