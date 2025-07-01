/** backend/jest.config.js */
module.exports = {
    // Environnement Node pour tester une API Express
    testEnvironment: "node",

    // Dossiers où Jest doit chercher les tests
    roots: [
        "<rootDir>", // le dossier backend
        "<rootDir>/../tests", // le dossier tests à la racine du projet
    ],

    // Fichiers reconnus comme tests
    testMatch: ["**/*.test.js", "**/*.spec.js"],
};
