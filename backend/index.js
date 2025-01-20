const express = require('express')
const req = require("express/lib/request");
const {useState} = require("react");
const app = express()
const port = 5000


// I need ai logic to generate tag
// FileLoading

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
    // getUserId-> getFolderNameById
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
    const files = [
        {
            id: 123,
            name: 'pexels-834935256-20516041.jpg',
            path: '/file/pexels-834935256-20516041.jpg',
            size: 5000,
            upload_date: '2024-12-16T19:44:34.757Z',
            Users_id: 1
        },
        {
            id: 2,
            name: 'pexels-anna-2037514238-30271337.jpg',
            path: '/file/pexels-anna-2037514238-30271337.jpg',
            size: 3000,
            upload_date: '2024-12-16T19:45:34.757Z',
            Users_id: 2
        },
        {
            id: 562,
            name: 'pexels-ivan-samkov-8952192.jpg',
            path: '/file/pexels-ivan-samkov-8952192.jpg',
            size: 2500,
            upload_date: '2024-12-16T19:46:34.757Z',
            Users_id: 1
        },
        {
            id: 24,
            name: 'pexels-klement-doda-208940425-11718642.jpg',
            path: '/file/pexels-klement-doda-208940425-11718642.jpg',
            size: 4500,
            upload_date: '2024-12-16T19:47:34.757Z',
            Users_id: 2
        },
        {
            id: 23,
            name: 'pexels-njeromin-30095370.jpg',
            path: '/file/pexels-njeromin-30095370.jpg',
            size: 3500,
            upload_date: '2024-12-16T19:48:34.757Z',
            Users_id: 1
        },
        {
            id: 21,
            name: 'pexels-riste-spiroski-2147701595-30151932.jpg',
            path: '/file/pexels-riste-spiroski-2147701595-30151932.jpg',
            size: 4000,
            upload_date: '2024-12-16T19:49:34.757Z',
            Users_id: 2
        },
        {
            id: 7,
            name: 'pexels-anna-danilina-241843489-30142098.jpg',
            path: '/file/pexels-anna-danilina-241843489-30142098.jpg',
            size: 4200,
            upload_date: '2024-12-16T19:50:34.757Z',
            Users_id: 1
        },
        {
            id: 8,
            name: 'pexels-apasaric-4344756.jpg',
            path: '/file/pexels-apasaric-4344756.jpg',
            size: 3100,
            upload_date: '2024-12-16T19:51:34.757Z',
            Users_id: 2
        },
        {
            id: 9,
            name: 'pexels-cz-jen-3774356-15613791.jpg',
            path: '/file/pexels-cz-jen-3774356-15613791.jpg',
            size: 3300,
            upload_date: '2024-12-16T19:52:34.757Z',
            Users_id: 1
        },
        {
            id: 10,
            name: 'pexels-daria-agafonova-2147746189-30166569.jpg',
            path: '/file/pexels-daria-agafonova-2147746189-30166569.jpg',
            size: 3600,
            upload_date: '2024-12-16T19:53:34.757Z',
            Users_id: 2
        },
        {
            id: 11,
            name: 'pexels-eslames1-28718329.jpg',
            path: '/file/pexels-eslames1-28718329.jpg',
            size: 3900,
            upload_date: '2024-12-16T19:54:34.757Z',
            Users_id: 1
        },
        {
            id: 12,
            name: 'pexels-jan-van-der-wolf-11680885-29652098.jpg',
            path: '/file/pexels-jan-van-der-wolf-11680885-29652098.jpg',
            size: 4700,
            upload_date: '2024-12-16T19:55:34.757Z',
            Users_id: 2
        },
        {
            id: 13,
            name: 'pexels-vo-van-ti-n-2037497312-30191653.jpg',
            path: '/file/pexels-vo-van-ti-n-2037497312-30191653.jpg',
            size: 5300,
            upload_date: '2024-12-16T19:56:34.757Z',
            Users_id: 1
        },
        {
            id: 14,
            name: 'pexels-jan-van-der-wolf-11680885-29652098.jpg',
            path: '/file/pexels-jan-van-der-wolf-11680885-29652098.jpg',
            size: 5300,
            upload_date: '2024-12-16T19:56:34.757Z',
            Users_id: 1
        }
    ]
    res.send(files)
})

app.get("/file", (req, res) => {

})

app.post("/file", (req, res) => {

})

app.delete("/file", (req, res) => {

})
