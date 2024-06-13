"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Serve static files from the React app
app.use(express_1.default.static(path_1.default.join(__dirname, '../../build')));
// Handle React routing, return all requests to the React app
app.get('*', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../build', 'index.html'));
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
