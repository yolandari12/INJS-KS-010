// Connect ke DB
const db = require('./db.js')

// Ascny -> Async, Await, Callback, Promise
// Setup
db.query(`
create table if not exits "Admin" (
    id serial primary key not null,
    nama char not null,
    jk char not null
);
`, (err, res) => {
    if(err) {
        console.log(err);
    } else {
        console.log(res.rows);
    }
})

