#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const date = new Date();

yargs(hideBin(process.argv))
	.command(
		'current',
		'retuns current date',
		(yargs) => {
			return yargs
		}, (argv) => {
			if (argv.year) {
				console.log(`Current year is: ${date.getFullYear()}`)
			} else if (argv.month) {
				console.log(`Current month is: ${date.getMonth() + 1}`)
			} else if (argv.date) {
				console.log(`Current date is: ${date.getDate()}`)
			} else {
				console.log(date)
			}
		})
	.command(
		'add',
		'returns future date',
		(yargs) => {
			return yargs
		}, (argv) => {
			let futureDate;
			if (argv.year) {

				futureDate = new Date(date.setFullYear(date.getFullYear() + argv._[1]))

			} else if (argv.month) {
				futureDate = new Date(date.setMonth(date.getMonth() + argv._[1]))

			} else if (argv.date) {
				futureDate = new Date(date.setDate(date.getDate() + argv._[1]))

			}
			console.log(`Future date is: ${futureDate.toISOString()}`)

		}
	)
	.command(
		'sub',
		'returns past date',
		(yargs) => {
			return yargs
		}, (argv) => {
			let pastDate;
			if (argv.year) {
				pastDate = new Date(date.setFullYear(date.getFullYear() - argv._[1]))

			} else if (argv.month) {
				pastDate = new Date(date.setMonth(date.getMonth() - argv._[1]))

			} else if (argv.date) {
				pastDate = new Date(date.setDate(date.getDate() - argv._[1]))

			}
			console.log(`Past date is: ${pastDate.toISOString()}`)

		}
	)
	.option('year', {
		alias: 'y',
		type: 'boolean',
		description: 'Current year'
	})
	.option('month', {
		alias: 'm',
		type: 'boolean',
		description: 'Current month'
	})
	.option('date', {
		alias: 'd',
		type: 'boolean',
		description: 'Current month'
	})
	.argv