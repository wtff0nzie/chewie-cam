var shell = require('shelljs'),
    counter = 0;


const takePic = () => {
    counter++;
    console.log('Cliicckkkkkk...');

    shell.exec('sudo raspistill -t 2000 -o /home/pi/work/chewie-cam/www/image-test-' + counter + '.jpg');
};


if (!process.env.server) {
    setInterval(takePic, 10 * 1000);
}