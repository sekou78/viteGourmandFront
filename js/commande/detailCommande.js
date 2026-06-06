// affichage Résumé de commande
const numeroDetailCommandeDisplay = document.getElementById(
  "numeroDetailCommande",
);
const dateDetailCommandeDisplay = document.getElementById("dateDetailCommande");
const etatDetailCommandeDisplay = document.getElementById("etatDetailCommande");
const totalDetailCommandeDisplay = document.getElementById(
  "totalDetailCommande",
);
const paiementDetailCommandeDisplay = document.getElementById(
  "paiementDetailCommande",
);
const livraisonDetailCommandeDisplay = document.getElementById(
  "livraisonDetailCommande",
);
// affichage Détail des menus commandés
const menuDetailCommandeDisplay = document.getElementById("menuDetailCommande");
const imgMenuDetailCommandeDisplay = document.getElementById(
  "imageDetailCommande",
);
const entreeDetailCommandeDisplay = document.getElementById(
  "entreeDetailCommande",
);
const platDetailCommandeDisplay = document.getElementById("platDetailCommande");
const dessertDetailCommandeDisplay = document.getElementById(
  "dessertDetailCommande",
);
const quantiteDetailCommandeDisplay = document.getElementById(
  "quantiteDetailCommande",
);
const prixDetailCommandeDisplay = document.getElementById("prixDetailCommande");
const allMenuDetailCommandeDisplay = document.getElementById(
  "allDetailCommandeDisplay",
);
// affichage Récapitulatif prix
const sousTotalDetailCommandeDisplay = document.getElementById(
  "sousTotalDetailCommande",
);
const livraisonPrixDetailCommandeDisplay = document.getElementById(
  "livraisonPrixDetailCommande",
);
// affichage Adresse de livraison
const adresseDetailCommandeDisplay = document.getElementById(
  "adresseDetailCommande",
);
// affichage Suivi de commande
const suiviDetailCommandeNumeroDisplay = document.getElementById(
  "suiviDetailCommandeNumero",
);
const heureSuiviDetailCommandeDisplay = document.getElementById(
  "heureSuiviDetailCommande",
);
const dateSuiviDetailCommandeDisplay = document.getElementById(
  "dateSuiviDetailCommande",
);
const commentaireSuiviDetailCommandeDisplay = document.getElementById(
  "commentaireSuiviDetailCommande",
);

function afficherDetailCommande() {
  const commande = {
    numero: "1024",
    date: "31/05/2022",
    etat: "En attente",
    total: "78",
    paiement: "Paypal",
    livraison: "Livraison gratuite",
    menus: [
      {
        nom: "Menu Gourmet",
        image: "../../assets/images/menus/img_menu_1.avif",
        entree: "Entréé de saison",
        plat: "plat de poisson",
        dessert: "Dessert du jour",
        quantite: 5,
        prix: 120,
      },
      {
        nom: "Menu Gourmet",
        image: "../../assets/images/menus/img_menu_2.avif",
        entree: "oeuf mayo",
        plat: "Poulet rognon",
        dessert: "Crème brûlée",
        quantite: 1,
        prix: 78,
      },
      {
        nom: "Menu Signature",
        image: "../../assets/images/menus/img_menu_3.avif",
        entree: "Salade",
        plat: "Boeuf",
        dessert: "Tiramisu",
        quantite: 2,
        prix: 96,
      },
    ],
  };

  // inject infos générales
  numeroDetailCommandeDisplay.textContent = commande.numero;
  dateDetailCommandeDisplay.textContent = commande.date;
  etatDetailCommandeDisplay.textContent = commande.etat;
  totalDetailCommandeDisplay.textContent = commande.total;
  paiementDetailCommandeDisplay.textContent = commande.paiement;
  livraisonDetailCommandeDisplay.textContent = commande.livraison;

  // reset container
  allMenuDetailCommandeDisplay.innerHTML = "";

  // render menus
  commande.menus.forEach((menu, index) => {
    const card = document.createElement("div");

    card.className = "card shadow-sm border-0";

    card.innerHTML = `
    <div class="card-body">
      <div class="row align-items-center">

        <div class="col-md-2">
          <h5 class="mb-2 text-secondary">${menu.nom}</h5>

          <img
            src="${menu.image}"
            class="img-fluid rounded img-menu-detail-commande"
            alt="${menu.nom}">
        </div>

        <div class="col-md-7">
          <p class="text-muted mb-1">
            <span>${menu.entree}</span>
            +
            <span>${menu.plat}</span>
            +
            <span>${menu.dessert}</span>
            </p>
        </div>

        <div class="col-md-2 text-muted text-end">
          <span class="mt-2">Nbre de personnes : ${menu.quantite} </span>
        </div>

        <div class="col-md-2 text-end text-primary fw-bold">
          <span>
            Prix-total : ${menu.prix} €
          </span>
        </div>

      </div>
    </div>
  `;

    allMenuDetailCommandeDisplay.appendChild(card);

    // Ajouter une ligne sauf après le dernier menu
    if (index < commande.menus.length - 1) {
      const separator = document.createElement("hr");
      separator.className = "my-3 text-secondary opacity-50";

      allMenuDetailCommandeDisplay.appendChild(separator);
    }
  });
}

// Appeler la fonction pour afficher les détails de la commande
afficherDetailCommande();
