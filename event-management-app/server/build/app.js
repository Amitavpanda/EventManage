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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = __importDefault(require("./utils/connect"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = process.env.PORT || 1337;
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`App is running at http://localhost:${port}`);
    try {
        yield (0, connect_1.default)();
        (0, routes_1.default)(app);
    }
    catch (error) {
        console.log('Error during database connection:', error);
        process.exit(1);
    }
}));
exports.default = app;
