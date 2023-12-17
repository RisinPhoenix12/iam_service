"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readyService = void 0;
const utils_1 = require("../utils");
const readyService = (req, res, next) => {
    try {
        return new utils_1.ResponseObject(res, 200, {
            message: 'Hey there!! You are using IAM Service',
        }).build();
    }
    catch (error) {
        return next(error);
    }
};
exports.readyService = readyService;
//# sourceMappingURL=index.js.map