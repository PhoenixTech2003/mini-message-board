const {Client} = require('pg')



const SQL = `CREATE TABLE messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    users VARCHAR(255),
    message VARCHAR(255)

);

INSERT INTO messages ("users", "message") 
VALUES
('Chichi', 'hello world'),
('Timothy', 'Timoue Here');


`
async function main (){
    const client = new Client({
        connectionString: 'postgresql://mini-message-board_owner:SVH7gLioY8EM@ep-round-bar-a5ihxhet.us-east-2.aws.neon.tech/mini-message-board?sslmode=require'
    })
    console.log("Seeding the database.....")
    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log('Seeding complete')

}

main()