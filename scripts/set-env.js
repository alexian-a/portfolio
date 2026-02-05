const fs = require('fs');
const path = require('path');

const web3formsKey = process.env.WEB3FORMS_KEY || 'PLACEHOLDER_WEB3FORMS_KEY';

const envContent = `export const environment = {
    production: true,
    web3formsKey: '${web3formsKey}'
};
`;

const envPath = path.join(__dirname, '../src/environments/environment.prod.ts');

fs.writeFileSync(envPath, envContent);
console.log('Environment file generated successfully!');
console.log('Web3Forms key:', web3formsKey ? 'SET' : 'NOT SET');
