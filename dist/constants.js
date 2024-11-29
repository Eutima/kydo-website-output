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
exports.LANGUAGES = exports.DEFAULT_LANG = exports.PARSABLE_EXTENSIONS_WITHOUT_TRANSLATION = exports.PARSABLE_EXTENSIONS_WITH_TRANSLATION = exports.WEBSITE_PATH_SRC = exports.WEBSITE_PATH_DIST = exports.SRC_PATH = exports.DIST_PATH = void 0;
const utils = __importStar(require("./utils"));
const data = __importStar(require("./_data.json"));
exports.DIST_PATH = 'dist';
exports.SRC_PATH = 'src';
exports.WEBSITE_PATH_DIST = utils.pathJoin(exports.DIST_PATH, 'website');
exports.WEBSITE_PATH_SRC = utils.pathJoin(exports.SRC_PATH, 'website');
exports.PARSABLE_EXTENSIONS_WITH_TRANSLATION = ['.html', '.component.js'];
exports.PARSABLE_EXTENSIONS_WITHOUT_TRANSLATION = ['translation.js', 'robots.txt'];
exports.DEFAULT_LANG = data.defaultLanguage;
exports.LANGUAGES = Object.keys(data.i18n)
    .filter(key => !['default', 'defaultLanguage']
    .some(k => k === key));
