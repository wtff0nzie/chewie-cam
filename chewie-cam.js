var shell = require('shelljs'),
    counter = 0;


const takePic = () => {
    counter++;
    console.log('Cliicckkkkkk...');

    shell.exec('sudo raspistill -t 2000 -o /home/pi/work/chewie-cam/www/fecklet.jpg');
};


if (!process.env.server) {
    setInterval(takePic, 30 * 1000);
}