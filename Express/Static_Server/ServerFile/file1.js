const path = require('path');
const express = require('express');

const app = express();

console.log("\nDifferent paths of the file\n");
console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname , '..'));
console.log(path.join(__dirname,'../file'));

const sttcpth = path.join(__dirname,'../file');

app.use(express.static(sttcpth))

app.listen(3000, () =>
{
    console.log("Server is running on port 3000");
})