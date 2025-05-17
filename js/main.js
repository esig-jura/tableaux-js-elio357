/**
 * @author Steve Fallet
 * @since 2025.04.02
 */

'use strict'; // Active le mode strict pour éviter certaines erreurs

// Déclaration d'un tableau d'objets représentant des personnes
const personnes = [
    { nom: 'Doe', prenom: 'John', age: 25, localite: 'New York' },
    { nom: 'Ré', prenom: 'Jane', age: 30, localite: 'Los Angeles' },
    { nom: 'Mi', prenom: 'Jack', age: 28, localite: 'Chicago' },
    { nom: 'Fa', prenom: 'Jill', age: 35, localite: 'Miami' },
    { nom: 'Sol', prenom: 'Jim', age: 40, localite: 'San Francisco' }
];

// Sélection des éléments HTML nécessaires
const tableBodyPersonnes = document.querySelector('.personnes'); // Corps du tableau
const formulaire = document.querySelector('form'); // Formulaire d'ajout
const champPrenom = document.getElementById('prenom'); // Champ prénom
const champNom = document.getElementById('nom'); // Champ nom
const champAge = document.getElementById('age'); // Champ âge
const champLocalite = document.getElementById('localite'); // Champ localité
const champRechercher = document.getElementById('rechercher'); // Champ de recherche

/**
 * Affiche les personnes dans le tableau HTML, triées et filtrées selon la recherche
 */
function affichePersonnes () {
    // Valeur du champ recherche, nettoyée et en minuscule
    let recherche = champRechercher.value.trim().toLowerCase();
    // Tri par prénom
    let personnesTrieesParPrenomAsc = [...personnes].sort(
        (a, b) => a.prenom.localeCompare(b.prenom)
    );
    // Filtrage
    let personnesTrouvees = personnesTrieesParPrenomAsc.filter(
        pers => pers.prenom.toLowerCase().includes(recherche)
    );

    tableBodyPersonnes.innerHTML = ''; // Vide le tableau HTML
    // Ajoute une ligne pour chaque personne trouvée
    for (let pers of personnesTrouvees) {
        tableBodyPersonnes.innerHTML += `
            <tr>
                <td>${pers.prenom}</td>
                <td>${pers.nom}</td>
                <td>${pers.age}</td>
                <td>${pers.localite}</td>
            </tr>`;
    }
}

/**
 * Ajoute une nouvelle personne après validation du formulaire
 * @param event - l'événement de soumission du formulaire
 */
function ajouterNouvellePersonne (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupère et nettoie les valeurs saisies
    let prenom = champPrenom.value.trim();
    let nom = champNom.value.trim();
    let age = parseInt(champAge.value);
    let localite = champLocalite.value.trim();

    // Vérifie que tous les champs sont remplis correctement
    if (!prenom || !nom || isNaN(age) || !localite) {
        alert('Merci de remplir tous les champs correctement !');
        return;
    }

    // Ajoute la nouvelle personne au tableau
    personnes.push({ prenom: prenom, nom: nom, age: age, localite: localite });

    // Met à jour l'affichage du tableau
    affichePersonnes();
}

// Ajoute les gestionnaires d'événements pour le formulaire et la recherche
formulaire.addEventListener('submit', ajouterNouvellePersonne);
champRechercher.addEventListener('input', affichePersonnes);

// Affiche les personnes au chargement de la page
affichePersonnes();