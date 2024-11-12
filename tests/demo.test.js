// Importation des fonctions à tester depuis les modules correspondants
import { add } from '../src/demo';
import { sleep } from '../src/timer';

// Utilisation de 'describe' pour regrouper les tests liés à une fonctionnalité spécifique
describe('Pack démo', () => {
    // Utilisation de 'test' pour définir un test unitaire
    // 'test' est un alias de 'it'
    test('addition de 2 + 3 doit être égale à 5', () => {
        // Utilisation de 'expect' pour définir une assertion
        // 'toBe' est un matcher qui vérifie l'égalité stricte
        expect(add(2, 3)).toBe(5);
    });
});

// Utilisation de 'describe' pour regrouper les tests liés à une autre fonctionnalité
describe('Timer', () => {
    // Utilisation de 'it.concurrent' pour définir un test qui peut être exécuté en parallèle
    it.concurrent('should wait 1 seconds', async () => {
        const t = Date.now();
        await sleep(1);
        // Utilisation de 'toBeGreaterThanOrEqual' pour vérifier que la valeur est supérieure ou égale à 1000
        expect(Date.now() - t).toBeGreaterThanOrEqual(1000);
    });

    // Un autre test concurrent pour démontrer l'exécution en parallèle
    it.concurrent('should wait 1 seconds', async () => {
        const t = Date.now();
        await sleep(1);
        expect(Date.now() - t).toBeGreaterThanOrEqual(1000);
    });

    // Utilisation de 'it.skip' pour sauter ce test lors de l'exécution
    it.skip('should wait 1 seconds', async () => {
        const t = Date.now();
        await sleep(1);
        expect(Date.now() - t).toBeGreaterThanOrEqual(1000);
    });

    // Utilisation de 'it.only' pour exécuter uniquement ce test et ignorer les autres
    it.only('should wait 1 seconds', async () => {
        const t = Date.now();
        await sleep(1);
        expect(Date.now() - t).toBeGreaterThanOrEqual(1000);
    });
});
