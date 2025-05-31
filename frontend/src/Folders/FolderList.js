import './FolderList.css';
import { useState } from "react";

function FolderList({ folders, setCurrentFolder }) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleClickEvent = (index, folderId) => {
        setSelectedIndex(index);
        setCurrentFolder(folderId);
    };

    return (
        <ul className='folder-list'>
            {folders.map((folder, index) => (
                <li
                    className={selectedIndex === index ? 'folder-list-item active' : 'folder-list-item'}
                    title={folder.name}
                    key={folder.id}
                    onClick={() => handleClickEvent(index, folder.id)}
                >
                    {folder.name}
                </li>
            ))}
        </ul>
    );
}

export default FolderList;
