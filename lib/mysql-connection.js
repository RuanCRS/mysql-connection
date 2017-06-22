

var MySQL = require('mysql');

module.exports = function(P_Host, P_User, P_Password , P_Database){

    return MySQL.createConnection({
    host: `${P_Host}`,
    user: `${P_User}`,
    password: `${P_Password}`,
    database: `${P_Database}`
});

};
