// Importation de la fonction à tester depuis le module correspondant
import { sleep } from "../src/timer";

// Utilisation de 'describe' pour regrouper les tests liés à une fonctionnalité spécifique
describe('Timer2', () => {
    // Utilisation de 'it' pour définir un test unitaire
    it('should wait 1 seconds', async () => {
        // Enregistrement du timestamp actuel avant d'appeler la fonction sleep
        const t = Date.now();

        // Appel de la fonction sleep avec un délai de 1 seconde
        await sleep(1);

        // Utilisation de 'expect' pour vérifier que le temps écoulé est supérieur ou égal à 1000 millisecondes (1 seconde)
        expect(Date.now() - t).toBeGreaterThanOrEqual(1000);
    });
});
