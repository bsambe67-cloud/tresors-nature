/*=========================================
        MENU RESPONSIVE
=========================================*/

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


/*=========================================
    FERMETURE DU MENU AU CLIC
=========================================*/

const menuLinks = document.querySelectorAll("nav ul li a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/*=========================================
        PRODUITS WHATSAPP + DESCRIPTIONS
=========================================*/

const WHATSAPP_NUMBER = "221777904909";

const productDescriptions = {
    "Anis Étoilé": "Épice aromatique aux notes douces, favorise la digestion et apaise les inconforts stomachiques.",
    "Anis Vert Feuilles": "Plante aromatique aux feuilles fraîches, idéale en infusion pour le bien-être digestif.",
    "Argile Verte": "Argile purifiante pour masques visage et soins du corps, adaptée aux peaux mixtes à grasses.",
    "Camomille Fleurs": "Fleurs séchées apaisantes, parfaites en infusion ou pour les soins des peaux sensibles.",
    "Cèdre de l'Atlas": "Huile essentielle boisée, purifiante et tonifiante pour la peau et les cheveux.",
    "Graines de Chia": "Super-aliment riche en oméga-3 et fibres, idéal pour smoothies et nutrition quotidienne.",
    "Cumin Poudre": "Épice en poudre aux propriétés digestives et antioxydantes reconnues.",
    "Curcuma Poudre": "Poudre anti-inflammatoire naturelle, utilisée en cuisine et en soins beauté.",
    "Eucalyptus Poudre": "Poudre de feuilles pour bains de vapeur et soins respiratoires naturels.",
    "Fenugrec Poudre": "Poudre fortifiante pour cheveux et peau, riche en protéines végétales.",
    "Graines de Nigelle": "Graines précieuses (habba sawda) aux bienfaits pour l'immunité et la beauté.",
    "Graines de Moringa": "Graines nutritives de l'arbre miracle, source de vitamines et minéraux.",
    "Huile d'Ail": "Huile macérée aux propriétés antifongiques et fortifiantes pour les soins naturels.",
    "Huile d'Amande Douce": "Huile douce pour hydrater peau et cheveux, convient aux peaux sensibles.",
    "Huile d'Arbre à Thé": "Huile essentielle purifiante, idéale pour les peaux à imperfections.",
    "Huile d'Armoise": "Huile aux vertus apaisantes et tonifiantes, parfaite pour les massages.",
    "Huile de Camomille": "Huile apaisante pour peaux sensibles, irritées ou réactives.",
    "Huile Capillaire": "Mélange d'huiles pour nourrir le cuir chevelu et stimuler la pousse.",
    "Huile de Chanvre": "Huile hydratante riche en acides gras essentiels pour peau et cheveux.",
    "Huile de Coco": "Huile nourrissante multi-usages pour cheveux, peau et soins capillaires.",
    "Huile de Gingembre": "Huile stimulante et réchauffante pour massages et soins du corps.",
    "Huile de Menthe": "Huile rafraîchissante aux propriétés tonifiantes et digestives.",
    "Huile de Neem": "Huile purifiante pour peau et cheveux, lutte contre les imperfections.",
    "Huile de Nigelle": "Huile précieuse aux vertus immunitaires et beauté reconnues.",
    "Huile de Pépin de Raisin": "Huile légère antioxydante, non comédogène pour le visage.",
    "Huile de Ricin": "Huile fortifiante pour favoriser la pousse des cheveux et des cils.",
    "Huile de Rose": "Huile précieuse hydratante et parfumée pour peau mature et sensible.",
    "Huile d'Eucalyptus": "Huile essentielle décongestionnante pour les voies respiratoires.",
    "Lavande Feuilles": "Feuilles aromatiques apaisantes pour infusions et soins relaxants.",
    "Leydour Poudre": "Poudre traditionnelle africaine pour soins capillaires et masques.",
    "Graines de Lin": "Graines riches en oméga-3 pour nutrition et soins capillaires.",
    "Maxi Pousse Hair": "Soin capillaire formulé pour stimuler et accélérer la pousse des cheveux.",
    "Moringa Poudre": "Super-aliment en poudre, riche en vitamines, minéraux et antioxydants.",
    "Nep Nep Poudre": "Poudre traditionnelle pour soins de la peau et des cheveux.",
    "Nila Poudre": "Poudre indigo naturelle pour soins et embellissement de la peau.",
    "Poudre de Girofle": "Épice antiseptique et tonifiante pour cuisine et soins bucco-dentaires.",
    "Qasil Poudre": "Poudre de feuilles de goyavier, gommage naturel pour une peau éclatante.",
    "Romarin Feuille": "Plante tonifiante stimulant la circulation et la pousse capillaire.",
    "Graines de Sésame": "Graines nutritives riches en calcium et antioxydants naturels.",
    "Shampoing": "Shampoing naturel doux pour un lavage capillaire respectueux du cuir chevelu.",
    "Spiruline": "Algue micro-nutriments pour énergie, immunité et vitalité au quotidien.",
    "Verveine Feuilles": "Feuilles calmantes idéales en infusion pour favoriser la détente."
};

function buildWhatsAppLink(productName, description) {
    const message =
        `Bonjour,\n\nJe souhaite commander le produit suivant :\n\n` +
        `*${productName}*\n${description}\n\nMerci !`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll(".product-card").forEach(card => {
    const img = card.querySelector("img");
    const title = card.querySelector("h3");

    if (!img || !title) return;

    const productName = title.textContent.trim();
    const description =
        productDescriptions[productName] ||
        "Produit naturel de qualité, soigneusement sélectionné en boutique.";

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "product-image";

    const badge = document.createElement("span");
    badge.className = "product-badge";
    badge.textContent = "Naturel";

    const overlay = document.createElement("div");
    overlay.className = "product-overlay";

    const whatsappBtn = document.createElement("a");
    whatsappBtn.className = "btn-whatsapp";
    whatsappBtn.href = buildWhatsAppLink(productName, description);
    whatsappBtn.target = "_blank";
    whatsappBtn.rel = "noopener noreferrer";
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Commander sur WhatsApp';

    overlay.appendChild(whatsappBtn);
    img.parentNode.insertBefore(imageWrapper, img);
    imageWrapper.appendChild(img);
    imageWrapper.appendChild(badge);
    imageWrapper.appendChild(overlay);

    const desc = document.createElement("p");
    desc.className = "product-desc";
    desc.textContent = description;
    title.insertAdjacentElement("afterend", desc);
});


/*=========================================
        RECHERCHE PRODUITS
=========================================*/

const search = document.getElementById("search");
const products = document.querySelectorAll(".product-card");

search.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    products.forEach(product => {

        let name = product.querySelector("h3").textContent.toLowerCase();
        let desc = product.querySelector(".product-desc")?.textContent.toLowerCase() || "";

        if (name.includes(value) || desc.includes(value)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

});


/*=========================================
        BOUTON RETOUR EN HAUT
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

        topBtn.style.justifyContent = "center";
        topBtn.style.alignItems = "center";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================
        ANIMATION AU DÉFILEMENT
=========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

const hiddenElements = document.querySelectorAll(
    ".product-card, .why-card, .liste-card, .about-image, .about-text, .info-box"
);

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


/*=========================================
        EFFET HEADER AU SCROLL
=========================================*/

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.padding = "10px 8%";
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.10)";

    } else {

        header.style.padding = "15px 8%";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";

    }

});


/*=========================================
        ANNÉE AUTOMATIQUE FOOTER
=========================================*/

const footerText = document.querySelector(".footer-bottom p");

if (footerText) {

    footerText.innerHTML =
        `© ${new Date().getFullYear()} Les Trésors de la Nature | Tous droits réservés.`;

}


/*=========================================
        MESSAGE BIENVENUE
=========================================*/

window.addEventListener("load", () => {

    console.log("Bienvenue sur Les Trésors de la Nature 🌿");

});