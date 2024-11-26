"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const Button = ({ label, onClick, style }) => {
    return (react_1.default.createElement("button", { onClick: onClick, style: style }, label));
};
Button.propTypes = {
    label: prop_types_1.default.string.isRequired,
    onClick: prop_types_1.default.func,
    style: prop_types_1.default.object,
};
Button.defaultProps = {
    onClick: () => { },
    style: {},
};
exports.default = Button;
