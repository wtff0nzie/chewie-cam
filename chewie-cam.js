var shell = require('shelljs');


const takePic = () => {
    console.log('Cliicckkkkkk...');

    shell.exec('sudo raspistill -t 2000 -o image-test.jpg');
};


if (!process.env.server) {
    setInterval(takePic, 10 * 1000);
}