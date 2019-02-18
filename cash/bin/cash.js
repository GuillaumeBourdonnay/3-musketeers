'use strict';

const got = require('got');
const money = require('money');
const chalk = require('chalk');
const ora = require('ora');
const currencies = require('../lib/currencies.json'); //Json file to get more info about every currency

const {API} = require('./constants'); //API for exhange rates between currencies

const cash = async command => {
	const {amount} = command;
	const from = command.from.toUpperCase(); 
	const to = command.to.filter(item => item !== from).map(item => item.toUpperCase());

	console.log();
	const loading = ora({
		text: 'Converting...',
		color: 'green',
		spinner: {
			interval: 150,
			frames: to
		}
	}); 

	loading.start();
	//Loading the data
	await got(API, { //Using the API
		json: true
	}).then(response => {
		money.base = response.body.base;
		money.rates = response.body.rates;

		to.forEach(item => {
			if (currencies[item]) { //If there are information about the currency in the currencies.json file, and load them 
				loading.succeed(`${chalk.green(money.convert(amount, {from, to: item}).toFixed(3))} ${`(${item})`} ${currencies[item]}`);
			} else {
				loading.warn(`${chalk.yellow(`The "${item}" currency not found `)}`);
			}
		});

		console.log(chalk.underline.gray(`\nConversion of ${chalk.bold(from)} ${chalk.bold(amount)}`));
	}).catch(error => { //Dealing with errors
		if (error.code === 'ENOTFOUND') {
			loading.fail(chalk.red('Please check your internet connection!\n'));
		} else {
			loading.fail(chalk.red(`Internal server error :(\n${error}`));
		}
		process.exit(1);
	});
};

module.exports = cash; //print using the module.exports Node command
