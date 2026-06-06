// User Profil
const userProfileForm = document.getElementById("formProfil");
const prenomUserProfilInput = document.getElementById("prenomUserProfil");
const nomUserProfilInput = document.getElementById("nomUserProfil");
const emailUserProfilInput = document.getElementById("emailUserProfil");
const telephoneUserProfilInput = document.getElementById("telephoneUserProfil");
const adresseUserProfilInput = document.getElementById("adresseUserProfil");
const btnUpdateUserProfil = document.getElementById("btnUpdateProfil");
// Display du profil informations
const profilPrenomDisplay = document.getElementById("profilPrenomDisplay");
const profilNomDisplay = document.getElementById("profilNomDisplay");
const profilEmailDisplay = document.getElementById("profilEmailDisplay");
const profilTelephoneDisplay = document.getElementById(
  "profilTelephoneDisplay",
);
const profilAdresseDisplay = document.getElementById("profilAdresseDisplay");
// Commandes
const numeroCommandeUser = document.getElementById("NumeroCommandeUserProfil");
const etatCommandeUser = document.getElementById("EtatCommandeUserProfil");
const dateCommandeUser = document.getElementById("DateCommandeUserProfil");
const prixCommandeUser = document.getElementById("PrixCommandeUserProfil");
const btnVoirDetailsCommandesUser = document.getElementById(
  "btnVoirDetailsCommandeUserProfil",
);
const btnAnnulerCommandeUser = document.getElementById(
  "btnAnnulerCommandeUserProfil",
);
// Suivi Commande
const btnVoirSuiviCommandeUser = document.getElementById(
  "btnVoirSuiviCommandeUserProfil",
);
const heureSuiviCommandeUser = document.getElementById(
  "heureSuiviCommandeUserProfil",
);
const dateSuiviCommandeUser = document.getElementById(
  "dateSuiviCommandeUserProfil",
);
const commentaireSuiviCommandeUser = document.getElementById(
  "commentaireSuiviCommandeUserProfil",
);
const numeroSuiviCommandeModal = document.getElementById("suiviCommandeNumero");
const heureSuiviCommandeModal = document.getElementById("suiviHeure");
const dateSuiviCommandeModal = document.getElementById("suiviDate");
const commentaireSuiviCommandeModal =
  document.getElementById("suiviCommentaire");
// Avis Commande
const formAvisCommandeUser = document.getElementById(
  "formAvisCommandeUserProfil",
);
const noteAvisUser = document.getElementById("noteAvisUserProfil");
const commentaireAvisUser = document.getElementById(
  "commentaireAvisUserProfil",
);
const btnEnvoyerAvisCommandeUser = document.getElementById(
  "btnEnvoyerAvisCommandeUserProfil",
);

// Validate User Profil Form
prenomUserProfilInput.addEventListener("keyup", validateUserProfilForm);
nomUserProfilInput.addEventListener("keyup", validateUserProfilForm);
emailUserProfilInput.addEventListener("keyup", validateUserProfilForm);
telephoneUserProfilInput.addEventListener("keyup", validateUserProfilForm);
adresseUserProfilInput.addEventListener("keyup", validateUserProfilForm);
btnUpdateUserProfil.addEventListener("click", updateUserProfil);
btnUpdateUserProfil.disabled = true;
btnVoirDetailsCommandesUser.addEventListener("click", voirDetailsCommandesUser);
btnAnnulerCommandeUser.addEventListener("click", annulerCommandeUser);
btnVoirSuiviCommandeUser.addEventListener("click", voirSuiviCommandeUser);

function validateUserProfilForm() {
  const prenomOK = validateInputUserProfilRequired(prenomUserProfilInput);
  const nomOK = validateInputUserProfilRequired(nomUserProfilInput);
  const emailOK = validateInputUserProfilRequired(emailUserProfilInput);
  const EmailOK = validateMailInputUserProfil(emailUserProfilInput);
  const telephoneOK = validateInputUserProfilRequired(telephoneUserProfilInput);
  const TelephoneOK = validateTelephoneUserProfil(telephoneUserProfilInput);
  const adresseOK = validateInputUserProfilRequired(adresseUserProfilInput);
  const AdresseOK = validateAdresseUserProfil(adresseUserProfilInput);

  if (
    prenomOK &&
    nomOK &&
    emailOK &&
    EmailOK &&
    telephoneOK &&
    TelephoneOK &&
    adresseOK &&
    AdresseOK
  ) {
    btnUpdateUserProfil.disabled = false;
  } else {
    btnUpdateUserProfil.disabled = true;
  }
}

// Validate Avis Commande Form
noteAvisUser.addEventListener("input", validateAvisCommandeForm);
commentaireAvisUser.addEventListener("input", validateAvisCommandeForm);

btnEnvoyerAvisCommandeUser.disabled = true;

btnEnvoyerAvisCommandeUser.addEventListener("click", envoyerAvisCommandeUser);

function validateAvisCommandeForm() {
  const noteOK = validateNoteAvisUser(noteAvisUser);
  const commentaireOK = validateCommentaireAvisUser(commentaireAvisUser);

  if (noteOK && commentaireOK) {
    btnEnvoyerAvisCommandeUser.disabled = false;
  } else {
    btnEnvoyerAvisCommandeUser.disabled = true;
  }
}

// Remplissage des champs du formulaire avec les données actuelles du profil
prenomUserProfilInput.value = profilPrenomDisplay.textContent;
nomUserProfilInput.value = profilNomDisplay.textContent;
emailUserProfilInput.value = profilEmailDisplay.textContent;
telephoneUserProfilInput.value = profilTelephoneDisplay.textContent;
adresseUserProfilInput.value = profilAdresseDisplay.textContent;

function updateUserProfil() {
  profilPrenomDisplay.textContent = prenomUserProfilInput.value;
  profilNomDisplay.textContent = nomUserProfilInput.value;
  profilEmailDisplay.textContent = emailUserProfilInput.value;
  profilTelephoneDisplay.textContent = telephoneUserProfilInput.value;
  profilAdresseDisplay.textContent = adresseUserProfilInput.value;

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("editProfilModal"),
  );

  modal.hide();

  alert("Profil mis à jour avec succès !");
}

function voirDetailsCommandesUser() {
  window.location.href = "/detailCommande";
}

function annulerCommandeUser() {
  alert("Votre commande a été annulée.");
}

function voirSuiviCommandeUser() {
  // Exemple : récupérer les données depuis la carte (ou plus tard API)
  const numeroCommande = "Commande #1012";
  const heure = heureSuiviCommandeUser.textContent;
  const date = dateSuiviCommandeUser.textContent;
  const commentaire = commentaireSuiviCommandeUser.textContent;

  // Injecter dans la modale (tu dois créer ces spans dans la modale)
  numeroSuiviCommandeModal.textContent = numeroCommande;
  heureSuiviCommandeModal.textContent = heure;
  dateSuiviCommandeModal.textContent = date;
  commentaireSuiviCommandeModal.textContent = commentaire;

  // Ouvrir la modale
  const modal = new bootstrap.Modal(document.getElementById("suiviModal"));
  modal.show();
}

function envoyerAvisCommandeUser() {
  alert("Merci pour votre avis.");

  const modalElement = document.getElementById("avisModal");
  const modal = bootstrap.Modal.getInstance(modalElement);

  if (modal) {
    modal.hide();
  }

  // Reset values
  noteAvisUser.value = "";
  commentaireAvisUser.value = "";

  // Reset validation styles
  noteAvisUser.classList.remove("is-valid", "is-invalid");
  commentaireAvisUser.classList.remove("is-valid", "is-invalid");

  // Reset button state
  btnEnvoyerAvisCommandeUser.disabled = true;
}

//Demande de remplissage du champs requis
function validateInputUserProfilRequired(input) {
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
function validateMailInputUserProfil(input) {
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
function validateTelephoneUserProfil(input) {
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
function validateAdresseUserProfil(input) {
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

//Demande de remplissage du champs au bon format commentaire
function validateCommentaireAvisUser(input) {
  const commentaire = input.value.trim();

  if (commentaire.length >= 10 && commentaire.length <= 500) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Demande de remplissage du champs au bon format note
function validateNoteAvisUser(input) {
  const value = Number(input.value);

  if (value >= 1 && value <= 5) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}
