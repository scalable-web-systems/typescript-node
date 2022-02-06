"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT) || 5000;
app.get('/', (req, res) => {
    return res.status(200).json({
        msg: 'typescript node rules!'
    });
});
app.listen(port, '0.0.0.0', () => {
    console.log(`Listening to the typscript Node server on port ${port}`);
});
//# sourceMappingURL=index.js.map