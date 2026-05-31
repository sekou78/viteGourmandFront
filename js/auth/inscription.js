const inputInscriptionPrenom = document.getElementById(
  "prenomInscriptionInput",
);
const inputInscriptionNom = document.getElementById("nomInscriptionInput");
const inputInscriptionEmail = document.getElementById("emailInscriptionInput");
const inputInscriptionTelephone = document.getElementById(
  "telephoneInscriptionInput",
);
const inputInscriptionAdresse = document.getElementById(
  "adresseInscriptionInput",
);
const inputInscriptionMdp = document.getElementById("mdpInscriptionInput");
const checkboxInscriptionMdp = document.getElementById("checkInscriptionmdp");
const inputInscriptionConfirmMdp = document.getElementById(
  "confirmMdpInscriptionInput",
);
const checkboxInscriptionConfirmMdp = document.getElementById(
  "checkInscriptionconfirmMdp",
);
const btnValidationInscription = document.getElementById(
  "btn-validation-inscription",
);
const formInscription = document.getElementById("formulaireInscription");

inputInscriptionPrenom.addEventListener("keyup", validateInscriptionForm);
inputInscriptionNom.addEventListener("keyup", validateInscriptionForm);
inputInscriptionEmail.addEventListener("keyup", validateInscriptionForm);
inputInscriptionTelephone.addEventListener("keyup", validateInscriptionForm);
inputInscriptionAdresse.addEventListener("keyup", validateInscriptionForm);
inputInscriptionMdp.addEventListener("keyup", validateInscriptionForm);
inputInscriptionConfirmMdp.addEventListener("keyup", validateInscriptionForm);
checkboxInscriptionMdp.addEventListener("click", showInscriptionMdp);
checkboxInscriptionConfirmMdp.addEventListener(
  "click",
  showInscriptionConfirmMdp,
);
btnValidationInscription.addEventListener("click", validInscription);
btnValidationInscription.disabled = true;

function validateInscriptionForm() {
  const prenomOK = validateInscriptionRequired(inputInscriptionPrenom);
  const nomOK = validateInscriptionRequired(inputInscriptionNom);
  const emailOK = validateInscriptionRequired(inputInscriptionEmail);
  const EmailOK = validateMailInscription(inputInscriptionEmail);
  const telephoneOK = validateTelephoneInscription(inputInscriptionTelephone);
  const adresseOK = validateAdresseInscription(inputInscriptionAdresse);
  const mdpOK = validateInscriptionRequired(inputInscriptionMdp);
  const MdpOK = validatePasswordInscription(inputInscriptionMdp);
  const confirmMdpOK = validateInscriptionRequired(inputInscriptionConfirmMdp);
  const ConfirmMdpOK = validateConfirmPasswordInscription(
    inputInscriptionMdp,
    inputInscriptionConfirmMdp,
  );

  if (
    prenomOK &&
    nomOK &&
    emailOK &&
    EmailOK &&
    telephoneOK &&
    adresseOK &&
    mdpOK &&
    MdpOK &&
    confirmMdpOK &&
    ConfirmMdpOK
  ) {
    btnValidationInscription.disabled = false;
  } else {
    btnValidationInscription.disabled = true;
  }
}

//Demande de remplissage du champs requis
function validateInscriptionRequired(input) {
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
function validateMailInscription(input) {
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

//Demande de remplissage du champs au bon format password
//(minimum 8 caractères composées des lettres, des chiffres et
//des symboles dont une lettre en majuscule) requis
function validatePasswordInscription(input) {
  //definir le regex du champs password
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{10,}$/;
  const passwordUser = input.value;
  if (passwordUser.match(passwordRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Demande de confirmation du mot de passe
function validateConfirmPasswordInscription(
  passwordInput,
  confirmPasswordInput,
) {
  if (
    confirmPasswordInput.value !== "" &&
    passwordInput.value === confirmPasswordInput.value
  ) {
    confirmPasswordInput.classList.add("is-valid");
    confirmPasswordInput.classList.remove("is-invalid");
    return true;
  } else {
    confirmPasswordInput.classList.remove("is-valid");
    confirmPasswordInput.classList.add("is-invalid");
    return false;
  }
}

//Demande de remplissage du champs au bon format telephone
function validateTelephoneInscription(input) {
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
function validateAdresseInscription(input) {
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

//Montrer le mot de passe ou masquer le mot de passe inscription
function showInscriptionMdp() {
  if (inputInscriptionMdp.type === "password") {
    inputInscriptionMdp.type = "text";
  } else {
    inputInscriptionMdp.type = "password";
  }
}

//Montrer le mot de passe ou masquer le mot de passe confirmation inscription
function showInscriptionConfirmMdp() {
  if (inputInscriptionConfirmMdp.type === "password") {
    inputInscriptionConfirmMdp.type = "text";
  } else {
    inputInscriptionConfirmMdp.type = "password";
  }
}

// Fonction principale : Enregistrer l'inscription
function validInscription() {
  alert(
    "Inscription validée ! (fonctionnalité de connexion automatique à implémenter)",

    window.location.replace("/connexion"),
  );
  //   let dataForm = new FormData(formInscription);

  //   const myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   const raw = JSON.stringify({
  //     email: dataForm.get("email"),
  //     password: dataForm.get("mdp"),
  //     pseudo: dataForm.get("pseudo"),
  //     roles: ["ROLE_USER"],
  //   });

  //   const requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   //Inscription
  //   fetch(apiUrl + "registration", requestOptions)
  //     .then((response) => {
  //       if (!response.ok) {
  //         return response.json().then((data) => {
  //           throw new Error(data.message || "Erreur lors de l'inscription");
  //         });
  //       }
  //       return response.json();
  //     })

  //     //Connexion automatique
  //     .then(() => {
  //       const loginHeaders = new Headers();
  //       loginHeaders.append("Content-Type", "application/json");

  //       const loginRaw = JSON.stringify({
  //         username: dataForm.get("email"),
  //         password: dataForm.get("mdp"),
  //       });

  //       return fetch(apiUrl + "login", {
  //         method: "POST",
  //         headers: loginHeaders,
  //         body: loginRaw,
  //         redirect: "follow",
  //       });
  //     })

  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Connexion automatique impossible.");
  //       }
  //       return response.json();
  //     })

  //     //Connexion réussie → redirection
  //     .then((loginResult) => {
  //       const token = loginResult.apiToken;
  //       setToken(token);
  //       setCookie(RoleCookieName, loginResult.roles[0], 7);

  //       afficherErreurModalBodyInscription(
  //         "Bravo " +
  //           dataForm.get("pseudo") +
  //           " ! Vous êtes maintenant connecté(e).",
  //       );

  //       window.location.replace("/espaceUtilisateur");
  //     })

  //     //Gestion des erreurs
  //     .catch((error) => {
  //       console.error(error);
  //       afficherErreurModalBodyInscription(
  //         "Une erreur est survenue : " + error.message,
  //       );
  //     });
}

function afficherErreurModalBodyInscription(message) {
  const errorModalBody = document.getElementById("errorModalBodyInscription");
  errorModalBody.textContent = message;

  // Initialiser et afficher la modal Bootstrap
  const errorModal = new bootstrap.Modal(document.getElementById("errorModal"));
  errorModal.show();
}
