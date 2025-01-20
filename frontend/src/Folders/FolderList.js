import './FolderList.css';
import {useState} from "react";


function FolderList({folders, }){
    // todo add + delete
    const [SelectedIndex, setSelectedIndex] = useState(-1) // setImages
    const handleClickEvent = (index) => setSelectedIndex(index); // add send to user images of folder


    return (<><ul className='folder-list'>
        {
            folders.map((folder, id) => (
                <li className={SelectedIndex === id ? 'folder-list-item active' : 'folder-list-item'} title={folder.name}  key={id} onClick={() => handleClickEvent(id)}>{folder.name}</li>
            ))}
        </ul></>)

}

export default FolderList;