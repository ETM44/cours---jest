// Importation des modules nécessaires
import axios from "axios";
import Users from "../src/users";

// Utilisation de 'jest.mock' pour mocker le module 'axios'
jest.mock('axios');

describe('Users', function () {
    // Utilisation de 'beforeEach' pour exécuter du code avant chaque test
    beforeEach(() => {
        // Réinitialisation des mocks d'axios avant chaque test
        axios.mockClear();
    });

    // Définition d'une réponse fictive pour les tests
    const fakeResponse = [{ name: 'John Doe' }];

    it('should return last user', async () => {
        // Configuration du mock pour la méthode 'get' d'axios afin de retourner une promesse résolue avec la réponse fictive
        axios.get.mockResolvedValue({ data: fakeResponse });

        // Utilisation de 'expect' pour vérifier que la méthode 'getLastUserName' retourne 'John Doe'
        expect(await Users.getLastUserName()).toBe('John Doe');
    });

    it('should return last user with fetch', async () => {
        // Configuration du mock pour la méthode 'fetch' afin de retourner une réponse JSON avec la réponse fictive
        fetch.mockResponseOnce(JSON.stringify(fakeResponse));

        // Utilisation de 'expect' pour vérifier que la méthode 'getLastUserNameFetch' retourne 'John Doe'
        expect(await Users.getLastUserNameFetch()).toBe('John Doe');
    });
});
