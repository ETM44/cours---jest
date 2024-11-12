# Initialisation de node :

- npm init -y

# Installation de jest :

- npm install --save-dev jest

# Installation de la documentation de jest :

- npm install @types/jest

# Installation de babel :

- npm install --save-dev @babel/preset-env babel-jest

## et création du fichier "babel.config.js" :

module.exports = {
presets: [
['@babel/preset-env', {targets: {node: 'current'}}],
],
};

# Mettre à jour package.json :

- Remplacer :

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},

- Par :

"scripts": {
"test": "jest"
}

# Lancement des tests :

- npm test

# Pour installer axios :

- npm install axios

# Pour mocker fetch :

- npm install jest-fetch-mock
- npx jest --init
- - It seems that you already have a jest configuration, do you want to override it? » Y
- - Would you like to use Typescript for the configuration file? » N
- - Choose the test environment that will be used for testing » - Use arrow-keys. Return to submit. > node
- - Do you want Jest to add coverage reports? » N
- - Which provider should be used to instrument code for coverage? » - Use arrow-keys. Return to submit. > v8
- - Automatically clear mock calls, instances, contexts and results before every test? » N

- Ajouter dans le fichier jest.config.js :
  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: [
  './setupJest.js'
  ],

- Création d'un fichier setupJest.js :
  global.fetch = require('jest-fetch-mock')

# Installastion de jsdom :

- npm install --save-dev jest-environment-jsdom
