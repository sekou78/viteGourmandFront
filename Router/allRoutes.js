import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html", [], "/js/home.js"),
  new Route(
    "/listeMenu",
    "Liste des menus",
    "/pages/menu/listeMenu.html",
    [],
    "/js/menu/listeMenu.js",
  ),
  new Route(
    "/detailMenu",
    "Détail du menu",
    "/pages/menu/detailMenu.html",
    [],
    "/js/menu/detailMenu.js",
  ),
  new Route(
    "/inscription",
    "Inscription",
    "/pages/auth/inscription.html",
    [],
    "/js/auth/inscription.js",
  ),
  new Route(
    "/connexion",
    "Connexion",
    "/pages/auth/connexion.html",
    [],
    "/js/auth/connexion.js",
  ),
  new Route("/contact", "Contact", "/pages/contact.html", [], "/js/contact.js"),
];

//Le titre s'affiche comme ceci: Route.titre-websiteName
export const websiteName = "Dounkafa";
