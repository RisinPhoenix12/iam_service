"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (error, req, res, next) => res.status(error.status || 500).json({
    error: {
        message: error.message || 'Oops! Something went wrong',
    },
});
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.js.map