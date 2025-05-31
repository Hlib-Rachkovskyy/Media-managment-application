const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));
app.use(express.json());  // To parse JSON request bodies

// Import database functions
const dbService = require('./dbComunication');

app.get('/', (req, res) => {
    res.send('Welcome to the Cloud Data App');
});

// Folder logic

// Get all folders for a user
app.get('/folders', async (req, res) => {
    const userId = 1; // Replace with actual logged-in user ID logic
    if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
    }

    try {
        const folders = await dbService.getFoldersByUserId(userId);
        if (folders.length === 0) {
            return res.status(404).json({ message: 'No folders found for this user' });
        }
        res.json(folders);
    } catch (error) {
        console.error("Error fetching folders:", error);  // Log the full error

        res.status(500).json({ error: 'Error fetching folders' });
    }
});

// Create a new folder
app.post('/folder', async (req, res) => {
    const userId = 1; // Replace with actual logged-in user ID logic
    const { folderName } = req.body;
    if (!folderName) {
        return res.status(400).json({ error: 'Folder name is required' });
    }
    try {
        const newFolder = await dbService.createFolder(userId, folderName);
        res.status(201).json(newFolder);
    } catch (error) {
        res.status(500).json({ error: 'Error creating folder' });
    }
});

// Delete a folder
app.delete('/folder', async (req, res) => {
    const { folderId } = req.body;
    if (!folderId) {
        return res.status(400).json({ error: 'Folder ID is required' });
    }
    try {
        const result = await dbService.deleteFolder(folderId);
        if (!result) {
            return res.status(404).json({ error: 'Folder not found' });
        }
        res.status(200).json({ message: 'Folder deleted', folderId: result });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting folder' });
    }
});

// Add an image to a folder
// Remove an image from a folder (use DELETE and pass fileId, folderId as query parameters)
app.delete('/image_from_folder', async (req, res) => {
    const { fileId, folderId } = req.query;  // Use query params instead of req.body for DELETE
    if (!fileId || !folderId) {
        return res.status(400).json({ error: 'File ID and Folder ID are required' });
    }
    try {
        const result = await dbService.removeImageFromFolder(fileId, folderId);
        if (!result) {
            return res.status(404).json({ error: 'Image not found in folder' });
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error removing image from folder' });
    }
});

// Get images for a folder (use GET and pass folderId as query parameters)
app.get('/image_from_folder', async (req, res) => {
    const { folderId } = req.query; // Using query parameters for the folder ID
    if (!folderId) {
        return res.status(400).json({ error: 'Folder ID is required' });
    }
    try {
        const images = await dbService.getImagesByFolderId(folderId); // Call the service to fetch images by folder ID
        if (!images) {
            return res.status(404).json({ error: 'No images found for the given folder' });
        }
        res.status(200).json(images); // Return the images as a JSON response
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving images from the folder' });
    }
});


// Get all images for a user
app.get('/files', async (req, res) => {
    const userId = 1; // Replace with actual logged-in user ID logic
    try {
        const files = await dbService.getImagesByUserId(userId);
        res.json(files);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error fetching files' });
    }
});

// Placeholder for adding and deleting files (implement logic as needed)
app.post('/file', (req, res) => {
    res.status(501).send('Add file logic not implemented yet');
});

app.delete('/file', (req, res) => {
    res.status(501).send('Delete file logic not implemented yet');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});
