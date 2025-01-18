const express = require('express')
const req = require("express/lib/request");
const app = express()
const port = 5000

app.use(bodyParser.json())

// I need ai logic to generate tag

app.get('verify', (req, res) => {

})

app.get('/', (req, res) => {
    res.send('Welcome to the Cloud Data App')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})

app.get('/user', (req, res) => {

})

app.put('/user', (req, res) => {

})

app.post("/register", (req, res) => {
    const { username, email, password_hash, created_at } = req.body

})

app.post("/login", (req, res) => {
    const { email, password } = req.body
})

// Images tags logic

app.get('/image_tag', (req, res) => {
    const { name } = req.body
})

app.post("/image_tag", (req, res) => { // create tag
    const { file_id } = req.body
})

app.put("/image_tag", (req, res) => { // will check if it have it already and will regenerate

})

app.delete("/image_tag", (req, res) => {

})


// Folder logic

app.get('/folders', (req, res) => { // Get folders name

})

app.get('/folder', (req, res) => {})

app.post("/folder", (req, res) => {

})

app.delete("/folder", (req, res) => {

})


app.post("/image_to_folder", (req, res) => {

})

app.put("/folder", (req, res) => { // Name change
    const { folder_id, new_name } = req.body
})

// File logic

app.get("/files", (req, res) => { // Get files of currently logged user
    
})

app.get("/file", (req, res) => {

})

app.post("/file", (req, res) => {

})

app.delete("/file", (req, res) => {

})
