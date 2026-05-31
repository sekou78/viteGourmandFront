// Information client commande menu
const commandeMenuForm = document.getElementById("formCommandeMenu");
const prenomClientCommandeInput = document.getElementById("prenomClient");
const nomClientCommandeInput = document.getElementById("nomClient");
const emailClientCommandeInput = document.getElementById("emailClient");
const telephoneClientCommandeInput = document.getElementById("telephoneClient");
// Information commande livraison
const adresseLivraisonCommandeInput =
  document.getElementById("adresseLivraison");
const dateLivraisonCommandeInput = document.getElementById("dateLivraison");
const heureLivraisonCommandeInput = document.getElementById("heureLivraison");
// Information commande menu
const menuCommandeChoisiInput = document.getElementById("menuChoisi");
// Information nombres de personnes
const nombrePersonnesCommandeInput = document.getElementById("nbPersonnes");
const personnesMinimumRequis = document.getElementById("minPersonnesRequis");
// Récapitulatif commande
const prixMenuChoisiDisplay = document.getElementById("prixMenu");
const affNbresPersonnesDisplay = document.getElementById("affichagePersonnes");
const prixLivraisonDisplay = document.getElementById("prixLivraison");
const totalCommandeDisplay = document.getElementById("totalCommande");

// Bouton commander
const btnCommanderMenu = document.getElementById("btnCommander");

prenomClientCommandeInput.addEventListener("keyup", validateCommandeForm);
nomClientCommandeInput.addEventListener("keyup", validateCommandeForm);
emailClientCommandeInput.addEventListener("keyup", validateCommandeForm);
telephoneClientCommandeInput.addEventListener("keyup", validateCommandeForm);
adresseLivraisonCommandeInput.addEventListener("keyup", validateCommandeForm);
nombrePersonnesCommandeInput.addEventListener("keyup", validateCommandeForm);

btnCommanderMenu.addEventListener("click", commanderMenu);
btnCommanderMenu.disabled = true;

//Demande de remplissage du formulaire
function validateCommandeForm() {
  const prenomOK = validateInputCommandeRequired(prenomClientCommandeInput);
  const nomOK = validateInputCommandeRequired(nomClientCommandeInput);
  const emailOK = validateInputCommandeRequired(emailClientCommandeInput);
  const EmailOK = validateMailInputCommande(emailClientCommandeInput);
  const telephoneOK = validateInputCommandeRequired(
    telephoneClientCommandeInput,
  );
  const TelephoneOK = validateTelephoneCommande(telephoneClientCommandeInput);
  const adresseOK = validateInputCommandeRequired(
    adresseLivraisonCommandeInput,
  );
  const AdresseOK = validateAdresseCommande(adresseLivraisonCommandeInput);
  const personnesOK = validateInputCommandeRequired(
    nombrePersonnesCommandeInput,
  );
  const PersonnesOK = validateIntegerNbresPersInput(
    nombrePersonnesCommandeInput,
  );

  if (
    prenomOK &&
    nomOK &&
    emailOK &&
    EmailOK &&
    telephoneOK &&
    TelephoneOK &&
    adresseOK &&
    AdresseOK &&
    personnesOK &&
    PersonnesOK
  ) {
    btnCommanderMenu.disabled = false;
  } else {
    btnCommanderMenu.disabled = true;
  }
}

//Demande de remplissage du champs requis
function validateInputCommandeRequired(input) {
  if (input.value.trim() != "") {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Demande de remplissage du champs au bon format email requis
function validateMailInputCommande(input) {
  //definir le regex du champs mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailUser = input.value;
  if (mailUser.match(emailRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Demande de remplissage du champs au bon format telephone
function validateTelephoneCommande(input) {
  const telephoneRegex =
    /^(?:(?:\+33|0033)\s?[1-9]|0[1-9])(?:[\s.-]?\d{2}){4}$/;

  if (telephoneRegex.test(input.value.trim())) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Demande de remplissage du champs au bon format adresse
function validateAdresseCommande(input) {
  const adresse = input.value.trim();

  if (adresse.length >= 8) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Demande de remplissage du champs au bon format nombre de personnes
function validateIntegerNbresPersInput(input) {
  const integerRegex = /^\d+$/;

  if (integerRegex.test(input.value.trim())) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Commander le menu
function commanderMenu() {
  alert("Votre commande a été prise en compte !");
}
