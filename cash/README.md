# cash
L'objectif du fichier cash.js est de faire la conversion entre les devises.
Le fichier utilise donc constants.js, qui utilise une AP permettant d'obtenir les taux de change de chaque devise par rapport à l'euro. 
Il utilise également currencies.json afin d'avoir plus d'informations à afficher concernant le nom de la devise. 

## Install 

```
$ npm install i
```

## Usage

- In the cash/bin file, write down the following elements to modify something:
		$ node index <amount> <from> <to>
		$ node index <options>

- In the constant.js file, you can also add more currencies values to the DEFAULT_TO_CURRENCIES variable

## Examples

		$ node index.js 
		$ node index.js 10 usd eur pln
		$ node index.js --set usd aud
		& node index.js save usd aud