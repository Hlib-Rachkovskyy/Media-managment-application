import './UserBar.css';
import { useState } from "react";
import CreateNewFolderPopup from "./CreateNewFolderPopup"; // maybe folders getting

function UserBar({ folders, setSortOrder, setSortDirection, sortOrder, sortDirection, setCurrentFolder }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); // State to hold selected image

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortOrder(value);  // Pass value to parent
    };

    const handleDirectionChange = () => {
        const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(newDirection); // Pass direction to parent
    };


    const handleAddFolderEvent = () => {
        setIsPopupOpen(true);
    }


    const handleDeleteFolderEvent = (id) => {

    }

    // Handles image upload (file selection)
    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the first selected file
        if (file) {
            // For now, we'll log the file, but you can replace this with an API call to upload the image
            console.log('Selected image:', file);
            setSelectedImage(URL.createObjectURL(file)); // Set the preview URL
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0]; // Get the dropped file
        if (file) {
            console.log('Dropped image:', file);
            setSelectedImage(URL.createObjectURL(file)); // Set the preview URL
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };


    return (
        <header className='user-bar'>
            <label>Sort by:</label>
            <select value={sortOrder} onChange={handleSortChange}>
                <option value="name">Name</option>
                <option value="date">Date</option>
                <option value="size">Size</option>
            </select>

            <button onClick={handleDirectionChange}>
                Sort: {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
            </button>

            <div
                className="upload-area"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{display: 'none'}} // Hide file input
                    id="fileInput"
                />
                <label htmlFor="fileInput" className="upload-area-label">
                    Drag & Drop your image here or click to select
                </label>
            </div>

            <button className='create-button' onClick={handleAddFolderEvent}>Create new folder</button>
            <select onChange={(e) => handleDeleteFolderEvent(e.target.value)}>
                <option value="">Delete Folder</option>
                {folders.map((folder) => (
                    <option key={folder.id} value={folder.id}>{folder.name}</option>
                ))}
            </select>
            <button className='main' onClick={setCurrentFolder('Main')}>Return to main page</button>

            {isPopupOpen && <CreateNewFolderPopup closePopup={() => setIsPopupOpen(false)}/>}
        </header>
    );
}

export default UserBar;
