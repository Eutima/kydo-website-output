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
exports.MissingI18nFinder = void 0;
const fs = __importStar(require("fs"));
const utils = __importStar(require("./utils"));
const data = __importStar(require("./_data.json"));
const constants_1 = require("./constants");
class MissingI18nFinder {
    constructor() {
        this.I18N_PATTERN = new RegExp(/i18n\.[a-zA-Z0-9-_]+/g);
    }
    findMissingKeys() {
        console.log('🕵️   LOOKING FOR MISSING I18N KEYS');
        const i18nKeysFromFromTemplates = this.collectI18nKeysFromTemplates();
        const i18nKeysFromFromTranslations = this.collectI18nKeysFromTranslations();
        let hasMissingKeys = false;
        for (const lang of constants_1.LANGUAGES) {
            const availableKeys = i18nKeysFromFromTranslations[lang];
            i18nKeysFromFromTemplates.forEach(i118nKey => {
                if (!availableKeys.some(k => k === i118nKey)) {
                    hasMissingKeys = true;
                    console.log(`    👮 missing key [${lang}] "${i118nKey}"`);
                }
            });
        }
        if (!hasMissingKeys) {
            console.log('🎉  NO MISSING I18N KEY FOUND  🎉');
        }
    }
    collectI18nKeysFromTemplates() {
        var _a;
        const i18nKeys = new Set();
        this.filesWithTranslation = utils.findFiles(constants_1.WEBSITE_PATH_SRC, constants_1.PARSABLE_EXTENSIONS_WITH_TRANSLATION);
        (_a = this.filesWithTranslation) === null || _a === void 0 ? void 0 : _a.forEach(file => {
            const content = fs.readFileSync(file).toString();
            const matches = content.match(this.I18N_PATTERN);
            matches === null || matches === void 0 ? void 0 : matches.forEach(r => i18nKeys.add(r));
        });
        return i18nKeys;
    }
    collectI18nKeysFromTranslations() {
        const i18nKeys = {};
        constants_1.LANGUAGES.forEach(l => {
            i18nKeys[l] = [];
            const translations = data.i18n[l];
            this.flattenKeys(`i18n`, translations, i18nKeys[l]);
        });
        return i18nKeys;
    }
    flattenKeys(parentKey, parentObj, i18nKeys) {
        for (const key of Object.keys(parentObj)) {
            const obj = parentObj[key];
            const currentI18nKey = `${parentKey}.${key}`;
            if (typeof obj === 'string') {
                i18nKeys.push(currentI18nKey);
            }
            else {
                this.flattenKeys(currentI18nKey, obj, i18nKeys);
            }
        }
    }
}
exports.MissingI18nFinder = MissingI18nFinder;
