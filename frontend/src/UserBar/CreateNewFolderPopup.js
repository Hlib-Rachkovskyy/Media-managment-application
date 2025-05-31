import React, { useState } from "react";
import '../Popup.css';

const CreateNewFolderPopup = ({ closePopup, createFolder }) => {
    const [folderName, setFolderName] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFolderName(e.target.value);
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (folderName.trim().length === 0) {
            setError("Folder name is required.");
        } else if (folderName.length < 3 || folderName.length > 60) {
            setError("Folder name must be between 3 and 60 characters.");
        } else {
            createFolder(folderName);
            closePopup();
        }
    };

    return (
        <div className='popup-overlay'>
            <div className='popup-content'>
                <form id="createFolderForm" onSubmit={handleSubmit}>
                    <label htmlFor="folderName">Folder Name [3; 60]:</label>
                    <input
                        type="text"
                        id="folderName"
                        name="folderName"
                        value={folderName}
                        onChange={handleChange}
                        required
                    />
                    {error && <span id="folderNameError" className="error">{error}</span>}
                    <br />
                    <br />
                    <button type="submit">Create Folder</button>
                </form>
                <button onClick={closePopup}>Close</button>
            </div>
        </div>
    );
};

export default CreateNewFolderPopup;
