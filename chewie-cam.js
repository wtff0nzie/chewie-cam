'use strict';

var shell = require('shelljs'),
    watch = require('node-watch'),
    request = require('request'),
    fs = require('fs'),
    filePath = './www/fecklet.jpg',
    counter = 0;


// Watch for file changes --------------------------
watch(filePath, {recursive: true}, (evt, name) => {
    console.log('Watcher', evt, name);
    uploadPic();
});


// Upload a pic ------------------------------------
const uploadPic = () => {
    let fileStream = fs.createReadStream(filePath);

    fileStream.on('error',  (err) => {
        console.error('UploadPic error', err);
    });

    fileStream.pipe(request.put('https://chewie-cam-dev.herokuapp.com/update'));
};


// Take a pic --------------------------------------
const takePic = () => {
    counter++;
    shell.exec('sudo raspistill -t 1000 -o /home/pi/work/chewie-cam/www/fecklet.jpg');
};


if (!process.env.server || !process.env.dev) {
    setInterval(takePic, 30 * 1000);
}