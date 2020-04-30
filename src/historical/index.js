const CoinbasePro = require ('coinbase-pro');

class HistoricalService {
    constructor({ start, end, interval, product }) {
        this.client = new CoinbasePro.PublicClient()
        this.start = start;
        this.end = end;
        this.interval = interval;
        this.product = product
    }

    async getData() {
        this.createRequests();
    //   const results = await this.client.getProductHistoricRates(this.product, {
    //             start: this.start,
    //             end: this.end,
    //             granularity: this.interval
    //         });

    //     return results;
    }

    createRequests() {
        const max = 300;
        const delta = (this.end.getTime() - this.start.getTime()) * 1e-3;
        const numberIntervals = delta / this.interval;
        const numberRequests = Math.ceil(numberIntervals / 300);

        const intervals = Array(numberRequests).fill().map((_, reqNum) => {
            const size = this.interval * 300  * 1e3;
            const start = this.start.getTime() + (reqNum * size);
            const end = (reqNum + 1 === numberRequests)?  this.end : new Date(start.getTime() + size);

            return ( start, end )
        });
        
        return intervals;
    }

}

module.exports = HistoricalService;