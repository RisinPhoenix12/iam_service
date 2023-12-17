"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express = require("express");
const handlers_1 = require("../handlers");
const indexRouter = express.Router({ mergeParams: true });
exports.indexRouter = indexRouter;
indexRouter.route('/ready').get(handlers_1.readyService);
//# sourceMappingURL=index.js.map