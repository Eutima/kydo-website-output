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
exports.fileExists = exports.findFiles = exports.writeToFile = exports.makeDir = exports.copyFile = exports.pathJoin = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
function pathJoin(...paths) {
    return path.join(...paths);
}
exports.pathJoin = pathJoin;
function copyFile(from, to) {
    fs.cpSync(from, to, { recursive: true });
}
exports.copyFile = copyFile;
function makeDir(dir) {
    fs.mkdirSync(dir, { recursive: true });
}
exports.makeDir = makeDir;
function writeToFile(file, content) {
    const parent_dir = path.dirname(file);
    if (!fs.existsSync(parent_dir)) {
        makeDir(parent_dir);
    }
    fs.writeFileSync(file, content);
}
exports.writeToFile = writeToFile;
function findFiles(basePath, filePostFix) {
    return fs.readdirSync(path.join(basePath), { recursive: true })
        .map(file => path.join(basePath, file.toString()))
        .filter(file => fs.lstatSync(file).isFile())
        .filter(file => !filePostFix || !filePostFix.length || filePostFix
        .some(extension => file.endsWith(extension)));
}
exports.findFiles = findFiles;
function fileExists(file) {
    return fs.existsSync(file);
}
exports.fileExists = fileExists;
