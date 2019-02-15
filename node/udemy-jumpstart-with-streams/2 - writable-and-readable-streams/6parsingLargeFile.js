const fs = require('fs');

fs.readFileSync('./newFile', fs.writeFileSync('./largeFile')); // above ~ 2 gb
// RangeError [ERR_FS_FILE_TOO_LARGE]: File size (8,980,398,080) is greater than possible buffer (2,147,483,647)

fs.createReadStream('./largeFile')
    .pipe('./newFile');

