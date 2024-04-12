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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBookNowFormHandler = void 0;
const bookNowForm_service_1 = require("../service/bookNowForm.service");
function createBookNowFormHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        console.log("body inside controller", body);
        const product = yield (0, bookNowForm_service_1.createBookNowForm)({ body });
        console.log("product inside controller", product);
        return res.send(product);
    });
}
exports.createBookNowFormHandler = createBookNowFormHandler;
