"use strict";
// lower case
let personName = "Samreen";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toLocaleUpperCase());
// Title case
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
