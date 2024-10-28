// import { B } from "./modules.js";
// export const A = "Test";
// B();

const C = require("./modules.js");

exports.A = "Test";

console.log("circular dependency", C);
