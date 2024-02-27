const path = require('path');
const express = require('express');

const app = express();

console.log(path.join(__dirname,'../file/style'));
const sttcpth1 = path.join(__dirname , '../file');

app.use(express.static(sttcpth1));

app.listen(3000, () =>
{
    console.log("Server is running on port 3000");
})