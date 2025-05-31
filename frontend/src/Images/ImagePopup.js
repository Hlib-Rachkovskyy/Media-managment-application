import '../Popup.css'
import { useState } from "react";

function ImagePopup({ image, closePopup, listOfAllUserFolders = [], currentFolder }) {
    const [selectedFolder, setSelectedFolder] = useState('');

    const handleAddToFolder = () => {
        if (selectedFolder) {
            closePopup();
        }
        console.log(selectedFolder);
    };

    return (
        <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <img src={image.path} alt="Clicked"/>
                <button onClick={closePopup}>Close</button>

                <select value={selectedFolder} onChange={(e) => setSelectedFolder(e.target.value)}>
                    <option value="">Select Folder</option>
                    {listOfAllUserFolders && listOfAllUserFolders.length > 0 ? (
                        listOfAllUserFolders.map((folder) => (
                            <option key={folder.id} value={folder.id}>{folder.name}</option>
                        ))
                    ) : (
                        <option disabled>No folders available</option>
                    )}
                </select>
                <button type='submit' onClick={handleAddToFolder}>Add to Folder</button>
                {currentFolder !== 'Main' && (
                    <button className='button-to-delete-from-folder' onClick={handleDeleteFromFolder}>Delete from folder</button>
                )}
            </div>
        </div>
    );
};

export default ImagePopup;
