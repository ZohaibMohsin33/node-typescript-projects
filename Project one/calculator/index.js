#!/usr/bin/env node 
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var chalk_1 = require("chalk");
var inquirer_1 = require("inquirer");
var chalk_animation_1 = require("chalk-animation");
// import chalkAnimation from "chalk-animation";
var stopper = function () {
    return new Promise(function (res) {
        setTimeout(res, 3000);
    });
};
function wrapper() {
    return __awaiter(this, void 0, void 0, function () {
        var title;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    title = chalk_animation_1["default"].rainbow('Welcome to my calculator');
                    return [4 /*yield*/, stopper()];
                case 1:
                    _a.sent();
                    title.stop();
                    console.log(chalk_1["default"].red("    _____________________\n    |  _________________  |\n    | | JO           0. | |\n    | |_________________| |\n    |  ___ ___ ___   ___  |\n    | | 7 | 8 | 9 | | + | |\n    | |___|___|___| |___| |\n    | | 4 | 5 | 6 | | - | |\n    | |___|___|___| |___| |\n    | | 1 | 2 | 3 | | x | |\n    | |___|___|___| |___| |\n    | | . | 0 | = | | / | |\n    | |___|___|___| |___| |\n    |_____________________|"));
                    return [2 /*return*/];
            }
        });
    });
}
//   calling function 
await wrapper();
repeater();
function showData() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, inquirer_1["default"]
                    .prompt([
                    {
                        type: "list",
                        name: "operator",
                        message: "What actions do you want to perform more \n",
                        choices: ["addition", "subtraction", "division", "multiplication"]
                    },
                    {
                        type: "number",
                        name: "num1",
                        message: "Kindly Enter number 1"
                    },
                    {
                        type: "number",
                        name: "num2",
                        message: "Kindly Enter number 2"
                    }
                ]).then(function (answers) {
                    //Action for the calculator
                    if (answers.operator === "addition") {
                        console.log("".concat(answers.num1, " + ").concat(answers.num2, " ="), answers.num1 + answers.num2);
                    }
                    else if (answers.operator === "subtraction") {
                        console.log("".concat(answers.num1, " - ").concat(answers.num2, " ="), answers.num1 - answers.num2);
                    }
                    else if (answers.operator === "division") {
                        console.log("".concat(answers.num1, " / ").concat(answers.num2, " ="), answers.num1 / answers.num2);
                    }
                    else if (answers.operator === "multiplication") {
                        console.log("".concat(answers.num1, " * ").concat(answers.num2, " ="), answers.num1 * answers.num2);
                    }
                })];
        });
    });
}
function repeater() {
    return __awaiter(this, void 0, void 0, function () {
        var repeater_variable;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, showData()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, inquirer_1["default"].prompt([
                            {
                                type: "input",
                                name: "repeat",
                                message: "If you to calculate again press Y/n"
                            }
                        ])];
                case 2:
                    repeater_variable = _a.sent();
                    _a.label = 3;
                case 3:
                    if (repeater_variable.repeat === "Yes" || repeater_variable.repeat === "Y" || repeater_variable.repeat === "yes" || repeater_variable.repeat === "y") return [3 /*break*/, 0];
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
