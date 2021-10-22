//Require
const express = require("express")
const { response } = require("express")
const app = express()
const port = 3000
const Admin = require("./models/admin")

// Middleweres
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.set('view engine', 'ejs')

// Routes
app.get("/", (req, res) => {
    res.json({
        project: "Belajar Rest API"
    })
})

// Create
app.post('/admin', Admin.create);

// Read
app.get("/admin",  Admin.read);

// Update
app.put("/users", (req, res) => {

})
// Delete
app.delete("/Admin", Admin.delete);



// Listen
app.listen(port, () => {
    console.log("Listening on port:", port);
})