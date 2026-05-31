const contactForm = document.getElementById("formulaireContact");
const contactEmail = document.getElementById("emailContactInput");
const contactTitre = document.getElementById("titreContactInput");
const contactMessage = document.getElementById("messageContactInput");
const btnSendContact = document.getElementById("btn-send-contact");

contactEmail.addEventListener("keyup", validateContactForm);
contactTitre.addEventListener("keyup", validateContactForm);
contactMessage.addEventListener("keyup", validateContactForm);

btnSendContact.addEventListener("click", sendContact);
btnSendContact.disabled = true;

function validateContactForm() {
  const emailOK = validateInputContactRequired(contactEmail);
  const EmailOK = validateMailInputContact(contactEmail);
  const titreOK = validateInputContactRequired(contactTitre);
  const messageOK = validateInputContactRequired(contactMessage);

  if (emailOK && EmailOK && titreOK && messageOK) {
    btnSendContact.disabled = false;
  } else {
    btnSendContact.disabled = true;
  }
}

//Demande de remplissage du champs requis
function validateInputContactRequired(input) {
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
function validateMailInputContact(input) {
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

function sendContact() {
  alert(
    "Merci pour votre message ! Nous vous répondrons dans les meilleurs délais.",
  );
  contactForm.reset();
  // reset classes Bootstrap après envoi
  [contactEmail, contactTitre, contactMessage].forEach((input) => {
    input.classList.remove("is-valid", "is-invalid");
  });
}
