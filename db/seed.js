const {Client} = require('pg')



const SQL = `CREATE TABLE messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    users VARCHAR(255),
    message VARCHAR(255),
    time TIMESTAMP DEFAULT NOW()

);

INSERT INTO messages ("users", "message") 
VALUES
('Chichi', 'hello world'),
('Timothy', 'Timoue Here');


`
async function main (){
    const client = new Client({
        connectionString: ''
    })
    console.log("Seeding the database.....")
    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log('Seeding complete')

}

main()