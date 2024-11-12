import { ping } from "../src/discord";

describe('Discord exemple mock 1', () => {
    it('should dm the user', () => {
        // Création d'un mock avec 'jest.fn()' qui retourne toujours la valeur 7
        const mock = jest.fn().mockReturnValue(7);
        // Appel du mock et affichage de la valeur retournée
        console.log(mock());
    });
});

describe('Discord exemple mock 2', () => {
    it('should dm the user', () => {
        // Création d'un mock avec 'jest.fn()' qui retourne des valeurs différentes à chaque appel
        const mock = jest.fn()
            .mockReturnValueOnce(4)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(3);
        // Appel du mock et affichage des valeurs retournées
        console.log(mock());
        console.log(mock());
        console.log(mock());
        console.log(mock());
    });
});

describe('Discord exemple mock 3', () => {
    it('should dm the user', () => {
        // Création d'un mock avec 'jest.fn()' qui retourne toujours la valeur 7
        const mock = jest.fn().mockReturnValue(7);
        // Appel du mock et affichage de la valeur retournée
        console.log(mock());
        // Utilisation de 'expect' pour vérifier que le mock a été appelé
        expect(mock).toHaveBeenCalled();
    });
});

describe('Discord', () => {
    it('should dm the user', async () => {
        // Création d'un mock pour le canal de message
        const channelMock = {
            send: jest.fn()
        };
        // Création d'un mock pour la méthode createDM qui retourne une promesse résolue avec le canal de message
        const createDMMock = jest.fn().mockResolvedValue(channelMock);
        // Création d'un mock pour le message avec les méthodes delete, reply et author
        const message = {
            delete: jest.fn().mockResolvedValue({}),
            reply: jest.fn(),
            author: {
                createDM: createDMMock
            }
        };
        // Appel de la fonction ping avec le message mocké
        await ping(message);
        // Utilisation de 'expect' pour vérifier que la méthode delete a été appelée
        expect(message.delete).toHaveBeenCalled();
        // Utilisation de 'expect' pour vérifier que la méthode send a été appelée avec 'pong'
        expect(channelMock.send).toHaveBeenCalledWith('pong');
    });

    it('should reply to the user if dm are deactivated', async () => {
        // Création d'un mock pour la méthode createDM qui retourne une promesse rejetée
        const createDMMock = jest.fn().mockRejectedValue({});
        // Création d'un mock pour le message avec les méthodes delete, reply et author
        const message = {
            delete: jest.fn().mockResolvedValue({}),
            reply: jest.fn(),
            author: {
                createDM: createDMMock
            }
        };
        // Appel de la fonction ping avec le message mocké
        await ping(message);
        // Utilisation de 'expect' pour vérifier que la méthode delete a été appelée
        expect(message.delete).toHaveBeenCalled();
        // Utilisation de 'expect' pour vérifier que la méthode reply a été appelée avec 'pong'
        expect(message.reply).toHaveBeenCalledWith('pong');
    });
});