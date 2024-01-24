const fSys = require('fs');     // core module for file system (fs)

fSys.writeFileSync("some.txt","Here is some text.");
fSys.appendFileSync("some.txt","Appended text is here.")