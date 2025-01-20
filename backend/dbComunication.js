const mysql = require('mysql2');
function connectToDatabase() { // Probably change to ORM or Pools
    const connection = mysql.createConnection({
        host: 'localhost',       // MySQL server address
        user: 'root',            // MySQL username
        password: 'my-secret-pw',// MySQL password
        database: 'mysql'   // Name of the database to connect to
    });
}

// UserBar functionality

async function login(email, password) {
    const [rows, fields] = await connection(`SELECT * FROM users WHERE email=${email}`);

}

function register(username, email, password_hash, created_at) {

}

function getUser(user_id){

}

function changeUserData(user_id){

}

// Main page functionality

function getFiles(sort_criteria=null, group_criteria=null){
    if (sort_criteria === null) {

    }
}


// One file functionality

function getFileData(file_id){

}

function addNewFile(user_id, name, path, size, upload_date, metadata){

}

function deleteFile(user_id, file_id){

}

// One folder functionality

function createFolder(name, created_at){

}

function changeFolderName(folder_id, new_name){

}

function deleteFolder(folder_id){

}

function addFileToFolder(file_id, folder_id){

}

// Tag functionality
// I have tag created table but it is more tag appointed

function addTag(tag_name, file_id){ // complex by changing, ai should generate it and then check if there is alread in database such tag we save it as from by who created perspective and as by which are used

}

function deleteTagFromFile(file_id){ // delete connection

}

function regenerateTag(file_id){} // two previous just in one

