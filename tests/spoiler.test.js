/**
 * @jest-environment jsdom
 */
// Utilisation de l'annotation '@jest-environment jsdom' pour spécifier que les tests doivent être exécutés dans un environnement jsdom.
// jsdom est une implémentation de l'API DOM en JavaScript, ce qui permet de tester le code qui interagit avec le DOM dans un environnement Node.js.

// Utilisation de 'test' pour définir un test unitaire
test('display content after click', () => {
    // Définition du contenu HTML du document pour le test
    document.body.innerHTML = `<div>Voici mon <span class="spoiler">contenu caché</span></div>`;

    // Importation du module à tester
    require('../src/spoiler.js');

    // Sélection des éléments du DOM nécessaires pour le test
    const spoilerButton = document.querySelector('.spoiler button');
    const spoilerText = document.querySelector('.spoiler span');

    // Utilisation de 'expect' pour vérifier que le bouton spoiler existe
    expect(spoilerButton).not.toBeNull();

    // Utilisation de 'expect' pour vérifier que le texte spoiler existe
    expect(spoilerText).not.toBeNull();

    // Utilisation de 'expect' pour vérifier que le texte spoiler n'a pas la classe 'visible'
    expect(spoilerText.classList.contains('visible')).toBe(false);

    // Simulation d'un clic sur le bouton spoiler
    spoilerButton.click();

    // Utilisation de 'expect' pour vérifier que le texte spoiler a maintenant la classe 'visible'
    expect(spoilerText.classList.contains('visible')).toBe(true);
});
