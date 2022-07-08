const pg = require('pg');
const client = new pg.Client('postgres://fgjtxsve:nOEFf0UiDweRSi-OqlhT-L1KPsWtBkAn@kesavan.db.elephantsql.com/fgjtxsve');

client.connect((erro) => {
    if (erro) {
        return console.log('Não foi possível se conectar com o ElephantSQL', erro);
    } else {
        return console.log('Conectado ao ElephantSQL!');
    }
});

module.exports = client;