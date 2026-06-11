// =======================
// DATA TEST
// =======================
let commandes = [
  {
    id: 1024,
    client: "Jean Dupont",
    menu: "Menu Signature",
    statut: "En attente",
    total: 78,
    avisValide: false,
  },
  {
    id: 1025,
    client: "Marie Martin",
    menu: "Menu Gourmet",
    statut: "En préparation",
    total: 52,
    avisValide: false,
  },
  {
    id: 1026,
    client: "Sadio Camara",
    menu: "Menu Deluxe",
    statut: "En livraison",
    total: 98,
    avisValide: false,
  },
];

let menus = [
  { id: 1, nom: "Menu Signature", prix: 25 },
  { id: 2, nom: "Menu Gourmet", prix: 35 },
];

let avis = [
  { id: 1, client: "Jean", note: 5, commentaire: "Excellent", valide: false },
  { id: 2, client: "Marie", note: 3, commentaire: "Bien", valide: false },
];

// =======================
// INIT SAFE (DOM READY)
// =======================

const btnFiltrer = document.getElementById("btnFiltrer");
const btnConfirmCancel = document.getElementById("btnConfirmCancel");
const ordersContainer = document.getElementById("ordersContainer");
const menusContainer = document.getElementById("menusContainer");
const avisContainer = document.getElementById("avisContainer");

if (btnFiltrer) {
  btnFiltrer.addEventListener("click", afficherCommandes);
}

if (btnConfirmCancel) {
  btnConfirmCancel.addEventListener("click", confirmerAnnulation);
}

initNavigation();

afficherCommandes();
updateStats();
afficherMenus();
afficherAvis();

// =======================
// COMMANDES EVENTS (delegation)
// =======================
if (ordersContainer) {
  ordersContainer.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const id = Number(btn.dataset.id);
    const action = btn.dataset.action;

    if (action === "cancel") {
      document.getElementById("cancelOrderId").value = id;
      new bootstrap.Modal(document.getElementById("cancelModal")).show();
      return;
    }

    const mapStatuts = {
      accept: "Acceptée",
      prep: "En préparation",
      delivery: "En livraison",
      done: "Terminée",
    };

    const commande = commandes.find((c) => c.id === id);

    if (commande && mapStatuts[action]) {
      commande.statut = mapStatuts[action];
    }

    afficherCommandes();
  });
}

// =======================
// MENUS EVENTS
// =======================
if (menusContainer) {
  menusContainer.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-menu-id]");
    if (!btn) return;

    const id = Number(btn.dataset.menuId);
    menus = menus.filter((m) => m.id !== id);

    afficherMenus();
  });
}

// =======================
// AVIS EVENTS
// =======================
if (avisContainer) {
  avisContainer.addEventListener("click", (e) => {
    const validateBtn = e.target.closest("[data-avis-id]");
    const deleteBtn = e.target.closest("[data-avis-delete]");

    if (!validateBtn && !deleteBtn) return;

    if (validateBtn) {
      const id = Number(validateBtn.dataset.avisId);
      const a = avis.find((x) => x.id === id);
      if (a) a.valide = true;
    }

    if (deleteBtn) {
      const id = Number(deleteBtn.dataset.avisDelete);
      avis = avis.filter((x) => x.id !== id);
    }

    afficherAvis();
  });
}

// =======================
// STATS
// =======================
function updateStats() {
  document.getElementById("statAttente").textContent = commandes.filter(
    (c) => c.statut === "En attente",
  ).length;

  document.getElementById("statPreparation").textContent = commandes.filter(
    (c) => c.statut === "En préparation",
  ).length;

  document.getElementById("statLivraison").textContent = commandes.filter(
    (c) => c.statut === "En livraison",
  ).length;

  document.getElementById("statAvis").textContent = commandes.filter(
    (c) => !c.avisValide,
  ).length;
}

// =======================
// COMMANDES
// =======================
function afficherCommandes() {
  const container = document.getElementById("ordersContainer");
  if (!container) return;

  container.innerHTML = "";

  const client = (
    document.getElementById("filterClient")?.value || ""
  ).toLowerCase();

  const status = document.getElementById("filterStatus")?.value || "";

  const liste = commandes.filter(
    (c) =>
      c.client.toLowerCase().includes(client) &&
      (status === "" || c.statut === status),
  );

  liste.forEach((c) => {
    const card = document.createElement("div");
    card.className = "card shadow mb-3";

    card.innerHTML = `
      <div class="card-body">

        <div class="d-flex justify-content-between">
          <div>
            <h5>#${c.id}</h5>
            <small>${c.client}</small>
          </div>
          <span class="badge bg-secondary">${c.statut}</span>
        </div>

        <p>${c.menu} - ${c.total} €</p>

        <div class="d-flex gap-2 flex-wrap">

          <button class="btn btn-success btn-sm" data-action="accept" data-id="${c.id}">Accepter</button>
          <button class="btn btn-primary btn-sm" data-action="prep" data-id="${c.id}">Préparation</button>
          <button class="btn btn-info btn-sm" data-action="delivery" data-id="${c.id}">Livraison</button>
          <button class="btn btn-warning btn-sm" data-action="done" data-id="${c.id}">Terminée</button>
          <button class="btn btn-danger btn-sm" data-action="cancel" data-id="${c.id}">Annuler</button>

        </div>
      </div>
    `;
    container.appendChild(card);
  });

  updateStats();
}

// =======================
// MENUS
// =======================
function afficherMenus() {
  const container = document.getElementById("menusContainer");
  if (!container) return;

  container.innerHTML = "";

  menus.forEach((m) => {
    const card = document.createElement("div");
    card.className = "card shadow-sm mb-2";

    card.innerHTML = `
      <div class="card-body d-flex justify-content-between align-items-center">
        <div>
          <strong>${m.nom}</strong>
          <div class="text-muted">${m.prix} €</div>
        </div>

        <button class="btn btn-danger btn-sm" data-menu-id="${m.id}">
          Supprimer
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

// =======================
// AVIS
// =======================
function afficherAvis() {
  const container = document.getElementById("avisContainer");
  if (!container) return;

  container.innerHTML = "";

  avis.forEach((a) => {
    const card = document.createElement("div");
    card.className = "card shadow-sm mb-2";

    const badge = a.valide
      ? `<span class="badge bg-success">Validé</span>`
      : `<span class="badge bg-warning text-dark">En attente</span>`;

    card.innerHTML = `
      <div class="card-body">

        <div class="d-flex justify-content-between">
          <strong>${a.client}</strong>
          ${badge}
        </div>

        <p>${a.commentaire} (${a.note}/5)</p>

        <div class="d-flex gap-2">

          <button class="btn btn-success btn-sm" data-avis-id="${a.id}">
            Valider
          </button>

          <button class="btn btn-danger btn-sm" data-avis-delete="${a.id}">
            Refuser
          </button>

        </div>

      </div>
    `;

    container.appendChild(card);
  });
}

// =======================
// NAVIGATION
// =======================
function initNavigation() {
  document.querySelectorAll("[data-section]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll("[data-section]")
        .forEach((b) => b.classList.remove("active"));

      btn.classList.add("active");

      document
        .querySelectorAll(".employee-section")
        .forEach((s) => s.classList.add("d-none"));

      const section = document.getElementById(btn.dataset.section);

      if (section) {
        section.classList.remove("d-none");
      }
    });
  });
}

// =======================
// ANNULATION
// =======================
function confirmerAnnulation() {
  const id = Number(document.getElementById("cancelOrderId").value);
  const mode = document.getElementById("cancelContactMode").value;
  const reason = document.getElementById("cancelReason").value.trim();

  if (!mode || !reason) {
    alert("Champs obligatoires");
    return;
  }

  const commande = commandes.find((c) => c.id === id);

  if (commande) {
    commande.statut = "Annulée";
  }

  bootstrap.Modal.getInstance(document.getElementById("cancelModal")).hide();

  afficherCommandes();
}
