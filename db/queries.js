const pool = require("./pool")


async function getPgVersion() {
    
    const result = await pool.query('SELECT version()');
    return (result.rows[0]);

}

module.exports= {
    getPgVersion
}