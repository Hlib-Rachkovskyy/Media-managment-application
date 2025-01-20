import './App.css';
import FolderList from "./Folders/FolderList";
import FileGrid from "./Images/FileGrid";
import UserBar from "./UserBar/UserBar";
import {useEffect, useState} from "react";

function App() {
    // Add all images
    // Files Table

    const [Images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('http://localhost:5000/files'); // Replace with your API URL
                const data = await response.json();
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);;



// Folder Table
    const FolderNamesAndIndexes = [
        {
            "id": 1,
            "name": "Folder1",
            "created_at": "2024-12-16T19:44:34.757Z"
        },
        {
            "id": 2,
            "name": "Folder2",
            "created_at": "2024-12-16T19:45:34.757Z"
        }
    ];

// FileFolder Table (many-to-many between Files and Folder)
    const fileFolder = [
        {
            "FileFolder_id": 1,
            "Files_id": 1
        },
        {
            "FileFolder_id": 1,
            "Files_id": 2
        }
    ];





    const [allUserFolders, setAllUserFolders] = useState(FolderNamesAndIndexes);

    const [currentFolder, setCurrentFolder] = useState('Main');
    const [sortOrder, setSortOrder] = useState('name'); // Default to 'name'
    const [sortDirection, setSortDirection] = useState('asc'); // Default to 'ascending'

    const handleSortOrderChange = (order) => {
        setSortOrder(order);
    };

    const handleSortDirectionChange = (direction) => {
        setSortDirection(direction);
    };

    useEffect(() => {
        const sortedImages = [...Images].sort((a, b) => {
            let valueA, valueB;

            if (sortOrder === 'name') {
                valueA = a.name.toLowerCase();
                valueB = b.name.toLowerCase();
            } else if (sortOrder === 'date') {
                valueA = new Date(a.upload_date);
                valueB = new Date(b.upload_date);
            } else if (sortOrder === 'size') {
                valueA = a.size;
                valueB = b.size;
            }

            if (sortDirection === 'asc') {
                return valueA > valueB ? 1 : -1;
            } else {
                return valueA < valueB ? 1 : -1;
            }
        });

        setImages(sortedImages);
    }, [sortOrder, sortDirection]);


  return (
    <div className="App">
      <div className="Folder-left-list"><FolderList folders ={FolderNamesAndIndexes} /></div>
        <div className="Split"></div>
      <div className="Image-view">
          <UserBar
              folders={FolderNamesAndIndexes}
              setSortOrder={handleSortOrderChange}
              setSortDirection={handleSortDirectionChange}
              sortOrder={sortOrder}
              sortDirection={sortDirection}
              setCurrentFolder={setCurrentFolder}
          />
          <FileGrid listOfAllFolders = {allUserFolders} currentFolder = {currentFolder} images = {Images}/></div>
    </div>
  );
}

export default App;
