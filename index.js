const program = require('commander');
const CoinbasePro = require ('coinbase-pro');
const config = require('./configuration');

program.version('1.0.0')
    .option('-i, --interval [interval', 'Interval in seconds for candlesticks', parseInt, 300)
    .parse(process.argv);

//configuration

const main = async function () {
    const { interval } = program
}

const key = config.get('COINBASE_API_KEY');
const secret = config.get('COINBASE_API_SECRET');
const passphrase = config.get('COINBASE_API_PASSPHRASE');
const apiUrl = config.get('COINBASE_API_URL');

const client = new CoinbasePro.PublicClient();
const authedClient = new CoinbasePro.AuthenticatedClient(key, secret, passphrase, apiUrl);

const product = 'ETH-BTC';

async function historicalRate () {
    const results = await client.getProductHistoricRates(product, {
        granularity: 300
    })
    console.log(results[0]);


}

// historicalRate();
main();
