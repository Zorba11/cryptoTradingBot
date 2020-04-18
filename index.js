const Coinbase = require ('coinbase-pro');
const config = require('./configuration');

//configuration
const key = config.get('COINBASE_API_KEY');
const secret = config.get('COINBASE_API_SECRET');
const passphrase = config.get('COINBASE_API_PASSPHRASE');
const apiUrl = config.get('COINBASE_API_URL');
