const mysql = require('mysql2/promise');

// Database connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'my-secret-pw',
    database: 'mysql',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});



// Get all images for a user
async function getImagesByUserId(userId) {
    const query = `
    SELECT id, name, path, size, upload_date 
    FROM Files 
    WHERE Users_id = ?
  `;
    const [rows] = await pool.query(query, [userId]);

    return rows;
}

// Get all folders for a user
async function getFoldersByUserId(userId) {
    const query = `
    SELECT id, name, created_at 
    FROM Folder 
    WHERE Users_id = ?
  `;
    const [rows] = await pool.query(query, [userId]);
    return rows;
}

// Create a new folder for a user
async function createFolder(userId, folderName) {
    const query = `
    INSERT INTO Folder (name, Users_id, created_at)
    VALUES (?, ?, ?)
  `;
    const createdAt = new Date().toISOString();
    const [result] = await pool.query(query, [folderName, userId, createdAt]);
    return { id: result.insertId, name: folderName, created_at: createdAt };
}

// Delete a folder by ID
async function deleteFolder(folderId) {
    const query = `
    DELETE FROM Folder 
    WHERE id = ?
  `;
    const [result] = await pool.query(query, [folderId]);
    return result.affectedRows > 0 ? folderId : null;
}

// Add an image to a folder
async function addImageToFolder(fileId, folderId) {
    const query = `
    INSERT INTO folder_images (folder_id, file_id)
    VALUES (?, ?)
  `;
    const [result] = await pool.query(query, [folderId, fileId]);
    return { fileId, folderId, insertId: result.insertId };
}

// Remove an image from a folder
async function removeImageFromFolder(fileId, folderId) {
    const query = `
    DELETE FROM folder_images 
    WHERE folder_id = ? AND file_id = ?
  `;
    const [result] = await pool.query(query, [folderId, fileId]);
    return result.affectedRows > 0 ? { fileId, folderId } : null;
}

// Get all images for a specific folder
async function getImagesByFolderId(folderId) {
    const query = `
    SELECT f.id, f.name, f.path, f.size, f.upload_date
    FROM Files f
    JOIN FileFolder ff ON f.id = ff.Files_id
    WHERE ff.FileFolder_id = ?
  `;
    const [rows] = await pool.query(query, [folderId]);
    return rows;
}



// Export functions
module.exports = {
    getImagesByUserId,
    getFoldersByUserId,
    createFolder,
    deleteFolder,
    addImageToFolder,
    removeImageFromFolder,
    getImagesByFolderId
};
