const { Pool } = require("pg")

const db = new Pool ({
    //kita siapa
    user: "postgres",
    password: "postgres",
    //Mau connect ke DB mana?
    host: "localhost",
    database: "h8",
    port: 5432
})

module.exports = db;