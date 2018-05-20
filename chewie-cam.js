const takePic = () => {
    console.log('Cliicckkkkkk...');
};


if (!process.env.server) {
    setInterval(takePic, 10 * 1000);
}