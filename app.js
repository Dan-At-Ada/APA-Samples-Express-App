const express = require("express")

// express instance
const app = express()

// get route for the root path
app.get("/", (req, res) => {
    console.log("[Express] GET /")
    res.send("Hello World!")
}
)

// listen on port 3000 (basically start the server), 
app.listen(3000, () => {
    console.log("Server is running on port 3000")

    fetch("http://localhost:3000")
        .then(response => response.text())
        .then(text => console.log(text))
        .catch(err => console.log(err))
}
)

