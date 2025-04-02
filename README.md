### **Étape 1 – Lecture seule d’un tableau (niveau débutant)**

**Objectifs** :
- Lire des données d’un tableau JavaScript
- Générer dynamiquement des lignes HTML dans un `<tbody>`

**Méthodes à utiliser** :
- [`forEach()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`querySelector()`](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector)
- [`innerHTML`](https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML)
- [`window.addEventListener('load', ...)`](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)

---

### **Étape 2 – Ajout dynamique via formulaire (niveau intermédiaire)**

**Objectifs** :
- Ajouter une nouvelle personne au tableau en JS depuis les champs d’un formulaire
- Rafraîchir l’affichage du tableau
- Réinitialiser le formulaire après l’envoi

**Méthodes à utiliser** :
- [`addEventListener('submit', ...)`](https://developer.mozilla.org/fr/docs/Web/API/HTMLFormElement/submit_event)
- [`event.preventDefault()`](https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault)
- [`push()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [`reset()`](https://developer.mozilla.org/fr/docs/Web/API/HTMLFormElement/reset)
- [`focus()`](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/focus)

---

### **Étape 3 – Filtrage du tableau (niveau avancé)**

**Objectifs** :
- Filtrer dynamiquement les résultats du tableau en fonction d’un champ de recherche
- Afficher uniquement les lignes contenant une chaîne correspondante

**Méthodes à utiliser** :
- [`filter()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [`includes()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
- [`toLowerCase()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [`input` event](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/input_event)

---

### **Étape 4 – Tri dynamique du tableau (niveau expert)**

**Objectifs** :
- Permettre à l’utilisateur de trier le tableau en cliquant sur les en-têtes de colonne
- Gérer les types `string` et `number` selon la colonne
- Appliquer un tri alphabétique ou numérique

**Méthodes à utiliser** :
- [`sort()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [`localeCompare()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
- [`dataset`](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/dataset)
- [`forEach()` + `addEventListener()` sur les `<th>`](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)
