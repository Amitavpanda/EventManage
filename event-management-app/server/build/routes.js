"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateResource_1 = __importDefault(require("./middleware/validateResource"));
const contactForm_schema_1 = require("./schema/contactForm.schema");
const contactForm_controller_1 = require("./controller/contactForm.controller");
const bookNowFormSchema_1 = require("./schema/bookNowFormSchema");
const bookNowForm_controller_1 = require("./controller/bookNowForm.controller");
function routes(app) {
    app.get('/healthcheck', (req, res) => res.sendStatus(200));
    // app.get("/api/check", (req: Request, res: Response) => console.log("app is runing"));
    app.post("/api/contactFormDetails", (0, validateResource_1.default)(contactForm_schema_1.contactFormSchema), contactForm_controller_1.createContactFormHandler);
    app.post('/api/bookNowFormDetails', (0, validateResource_1.default)(bookNowFormSchema_1.bookNowFormSchema), bookNowForm_controller_1.createBookNowFormHandler);
}
exports.default = routes;
