"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeServer = exports.ResponseObject = void 0;
const mongoose_1 = require("mongoose");
const config_1 = require("../config");
class ResponseObject {
    constructor(response, status, body) {
        this.build = () => {
            return this.response.status(this.status).json(this.body || {});
        };
        this.response = response;
        this.status = status;
        this.body = body;
    }
}
exports.ResponseObject = ResponseObject;
const initializeServer = (app) => {
    mongoose_1.default.set('debug', true);
    mongoose_1.default.Promise = Promise;
    mongoose_1.default
        .connect(config_1.MONGODB_URL)
        .then(() => app.listen(config_1.IAM_SERVICE_PORT, () => {
        console.log(`[Server]: IAM running at PORT ${config_1.IAM_SERVICE_PORT}`);
    }))
        .catch((error) => {
        console.error(error.message);
        process.exit(1);
    });
};
exports.initializeServer = initializeServer;
//# sourceMappingURL=index.js.map