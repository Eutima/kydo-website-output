"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = require("./generator");
const missing_i18n_1 = require("./missing-i18n");
const GENERATE_COMMAND = 'generate';
const MISSING_I18N_COMMAND = 'missing-i18n';
const command = process.argv.slice(2, 3);
function printHelp() {
    console.log(`Available commands:

    ${GENERATE_COMMAND}         : generate the website
    ${MISSING_I18N_COMMAND}     : finds missing translations
`);
}
if (command.length) {
    if (command[0] === GENERATE_COMMAND) {
        const parser = new generator_1.Generator();
        try {
            console.log('🛠️   INITIALIZING DATA');
            parser.init();
            console.log('🕵️   PARSING TEMPLATES');
            parser.parse();
            console.log('\n🎉  COMPLETED SUCCESSFULLY  🎉');
        }
        catch (e) {
            console.error(`\n💀  UNEXPECTED ERROR: ${e}`);
        }
    }
    else if (command[0] === MISSING_I18N_COMMAND) {
        new missing_i18n_1.MissingI18nFinder().findMissingKeys();
    }
    else {
        printHelp();
    }
}
else {
    printHelp();
}
