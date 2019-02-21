const API = 'https://api.exchangeratesapi.io/latest';
const DEFAULT_TO_CURRENCIES = ['USD', 'EUR', 'GBP', 'JPY']; //Get the exchange rate of the currency, in comparison to the base currency in the index.js file
//If the base currency is also in the list, skip it.

module.exports = {
  API,
  DEFAULT_TO_CURRENCIES
}
