// export * from "./b.js";
// export * from "./a.js";

const b = require("./b.js");
const a = require("./a.js");

module.exports = {
  ...b,
  ...a,
};
