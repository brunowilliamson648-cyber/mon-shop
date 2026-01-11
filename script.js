/* ==========================================
   ZONE DE CONFIGURATION (MODIFIE ICI)
   ========================================== */

// 1. Ton numéro WhatsApp (J'ai mis le tien ici)
const monNumeroWhatsApp = "18498674019"; 

// 2. Tes Produits
const mesProduits = [
    {
        id: 1,
        nom: "Air Jordan Black", // J'ai changé le nom ici
        prix: "120 €",
        image: "chaussure.jpg", // Assure-toi que ta photo s'appelle bien comme ça
        description: "Le style légendaire. Confort et performance au rendez-vous."
    },
    {
        id: 2,
        nom: "Air Jordan Grey", 
        prix: "120 €",
        image: "chaussure.jpg", // Tu pourras mettre une autre photo plus tard
        description: "Un coloris sobre et efficace pour tous les jours."
    }
];

/* ==========================================
   FIN DE LA ZONE MODIFIABLE (NE TOUCHE PAS EN DESSOUS)
   ========================================== */

// Chargement des produits
const grid = document.getElementById('product-grid');

mesProduits.forEach(produit => {
    // Création du lien WhatsApp pré-rempli
    const message = `Bonjour, je suis intéressé par : ${produit.nom} à ${produit.prix}`;
    const lienWhatsapp = `https://wa.me/${monNumeroWhatsApp}?text=${encodeURIComponent(message)}`;

    // Création de la carte produit HTML
    const carte = document.createElement('div');
    carte.className = 'product-card';
    carte.innerHTML = `
        <img src="${produit.image}" alt="${produit.nom}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${produit.nom}</h3>
            <p class="product-price">${produit.prix}</p>
            <a href="${lienWhatsapp}" target="_blank" class="btn-whatsapp">
                <i class="fab fa-whatsapp"></i> Commander
            </a>
        </div>
    `;
    grid.appendChild(carte);
});

// Configuration du bouton flottant général
document.getElementById('whatsapp-float').href = `https://wa.me/${monNumeroWhatsApp}`;