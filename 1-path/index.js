const path = require('node:path');

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

// console.log(path.join(__dirname,'templates',"main.js"));
console.log(path.resolve(__dirname,'/templates',"/main.js"));