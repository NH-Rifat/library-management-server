"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickValidPropertyWithValue = void 0;
const pickValidPropertyWithValue = (obj, keys) => {
    const newObj = {};
    keys.forEach((key) => {
        if (obj && Object.hasOwnProperty.call(obj, key)) {
            newObj[key] = obj[key];
        }
    });
    return newObj;
};
exports.pickValidPropertyWithValue = pickValidPropertyWithValue;
