const program = require('commander');
const Historical = require('./src/historical');
const config = require('./configuration');


function toDate () {
    return new Date(val * 1e3);
}

const now = new Date();
const yesterday = new Date(now.getTime() - (24 * 60 * 60 * 1e3)); //because javascript is in milliseconds

program.version('1.0.0')
    .option('-i, --interval [interval]', 'Interval in seconds for candlesticks', 300)
    .option('-p, --product [product]', 'Product identifier', 'ETH-BTC')
    .option('-s, --start [start]', 'Start time in Unix seconds', toDate, yesterday)
    .option('-e, --end [end]', 'End time in Unix seconds', toDate, now)
    .parse(process.argv);

//configuration

const main = async function () {
    const { interval, product, start, end } = program;
    console.log(typeof interval);
    const service = new Historical({ product, start, end, interval });

    const data = await service.getData();
    console.log(data);

    
}

main();
