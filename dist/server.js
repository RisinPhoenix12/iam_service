"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const express = require("express");
const error_1 = require("./handlers/error");
const routes_1 = require("./routes");
const utils_1 = require("./utils");
const app = express();
const corsOptions = {
    origin: ['*'],
};
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(error_1.errorHandler);
/** Add all routes under /iam */
app.use('/iam', routes_1.indexRouter);
app.get('/*', (req, res) => {
    res.redirect('/iam/ready');
});
(0, utils_1.initializeServer)(app);
module.exports = app;
//# sourceMappingURL=server.js.map