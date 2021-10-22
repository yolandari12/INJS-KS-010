const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({extended : true}))

const { User } = require("./models")

app.get("/users", (req, res) => {
  User.findAll({
  })
    .then(data => {
      // console.log(data)
      res.json(data)
    })
    .catch(err => {
      console.log(err)
    })
  // promise
})
app.post("/users", (req, res) => {
    const users = User.create({ name: req.body.name,createdAt: new Date(), updatedAt: new Date() });
    res.json({
        "message":"suksess data create",
    });
    // promise
  })


app.listen(port, () => {
  console.log("Listening on port:", port)
})