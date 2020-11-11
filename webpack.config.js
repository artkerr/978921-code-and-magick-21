const path = require("path");

module.exports = {
 entry: [
 "./js/backend.js",
 "./js/debounce.js",
 "./js/wizard.js",
 "./js/render.js",
 "./js/stat.js",
 "./js/util.js",
 "./js/dialog.js",
 "./js/validation.js",
 "./js/colorize.js",
 "./js/setup.js",
 "./js/avatar.js"
 ],
 output: {
   filename: "bundle.js",
   path: path.resolve(__dirname),
   iife: true
 },
 devtool: false
};
