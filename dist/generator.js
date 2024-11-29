"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generator = void 0;
const nunjucks = __importStar(require("nunjucks"));
const data = __importStar(require("./_data.json"));
const utils = __importStar(require("./utils"));
const constants_1 = require("./constants");
class Generator {
    init() {
        let error = false;
        if (utils.fileExists(constants_1.DIST_PATH)) {
            console.log(`    ✅ directory "${constants_1.DIST_PATH}" exists`);
            utils.copyFile('./src/website', constants_1.WEBSITE_PATH_DIST);
        }
        else {
            error = true;
            console.log(`    ❌ the directory "${constants_1.DIST_PATH}" does not exist`);
        }
        if (utils.fileExists(constants_1.WEBSITE_PATH_DIST)) {
            console.log(`    ✅ directory "${constants_1.WEBSITE_PATH_DIST}" exists`);
        }
        else {
            error = true;
            console.log(`    ❌ the directory "${constants_1.WEBSITE_PATH_DIST}" does not exist`);
        }
        if (!!constants_1.LANGUAGES.length) {
            console.log(`    ✅ languages found: [${constants_1.LANGUAGES.map(l => `"${l}"`).join(', ')}]`);
        }
        else {
            error = true;
            console.log(`    ❌ no languages are defined in "src/_data.json"`);
        }
        if (!!constants_1.DEFAULT_LANG) {
            console.log(`    ✅ default language found: "${constants_1.DEFAULT_LANG}"`);
        }
        else {
            error = true;
            console.log(`    ❌ default language is not defined in "src/_data.json"`);
        }
        if (!constants_1.LANGUAGES.some(language => language === constants_1.DEFAULT_LANG)) {
            error = true;
            console.log(`    ❌ invalid default language "${constants_1.DEFAULT_LANG}", not found in "i18n" in "src/_data.json"`);
        }
        if (error) {
            console.error(`\n💀  init failed due to invalid configuration`);
            process.exit(1);
        }
        this.filesWithTranslation = utils.findFiles(constants_1.WEBSITE_PATH_DIST, constants_1.PARSABLE_EXTENSIONS_WITH_TRANSLATION);
        console.log(`    ℹ️  found ${this.filesWithTranslation.length} templates with translation`);
        this.filesWithTranslation.forEach(f => console.log(`       📄 ${f}`));
        this.filesWithOutTranslation = utils.findFiles(constants_1.WEBSITE_PATH_DIST, constants_1.PARSABLE_EXTENSIONS_WITHOUT_TRANSLATION);
        console.log(`    ℹ️  found ${this.filesWithOutTranslation.length} templates without translation`);
        this.filesWithOutTranslation.forEach(f => console.log(`       📄 ${f}`));
    }
    parse() {
        var _a;
        const env = nunjucks.configure({});
        env.addFilter('keys', object => Object.keys(object));
        constants_1.LANGUAGES.forEach(lang => {
            var _a;
            const dataCopy = JSON.parse(JSON.stringify(data));
            dataCopy.i18n = data.i18n[lang];
            utils.makeDir(utils.pathJoin(constants_1.WEBSITE_PATH_DIST, lang));
            (_a = this.filesWithTranslation) === null || _a === void 0 ? void 0 : _a.forEach(file => {
                const language_path = file.replace(constants_1.WEBSITE_PATH_DIST, utils.pathJoin(constants_1.WEBSITE_PATH_DIST, lang));
                console.log(`    📝 ${language_path}`);
                const content = nunjucks.render(file, dataCopy);
                utils.writeToFile(language_path, content);
                if (lang === constants_1.DEFAULT_LANG) {
                    console.log(`    📝 ${file}`);
                    utils.copyFile(language_path, file);
                }
            });
        });
        (_a = this.filesWithOutTranslation) === null || _a === void 0 ? void 0 : _a.forEach(file => {
            console.log(`    📝 ${file}`);
            const content = nunjucks.render(file, data);
            utils.writeToFile(file, content);
        });
    }
}
exports.Generator = Generator;
