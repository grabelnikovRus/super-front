const path = require("path")

const resolvePath = (...args) =>
    path.resolve(__dirname, "..", "..", "..", "src", ...args)

module.exports = resolvePath;
