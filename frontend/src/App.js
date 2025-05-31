import './App.css';
import FolderList from "./Folders/FolderList";
import FileGrid from "./Images/FileGrid";
import UserBar from "./UserBar/UserBar";
import {useEffect, useState} from "react";
import axios from 'axios'

function App() {
    const [Images, setImages] = useState([]);
    const [allUserFolders, setAllUserFolders] = useState([]);
    const [currentFolder, setCurrentFolder] = useState(null);
    const [sortOrder, setSortOrder] = useState('name');
    const [sortDirection, setSortDirection] = useState('asc');


    const fetchImages = async () => {
        try {
            const response = await fetch('http://localhost:5000/files');
            if (response.ok) {
                const data = await response.json();
                setImages(data);
            } else {
                console.error('Failed to fetch images:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };



    const fetchFolders = async () => {
        try {
            const response = await fetch('http://localhost:5000/folders');
            if (response.ok) {
                const data = await response.json();
                setAllUserFolders(data);
            } else {
                console.error('Failed to fetch folders:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching folders:', error);
        }
    };



    const fetchImagesFromFolder = async (folderId) => {
        if (!folderId) {
            console.error('Folder ID is required');
            return;
        }
        try {
            const response = await fetch(`http://localhost:5000/image_from_folder?folderId=${folderId}`);
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error fetching images:', errorData.error);
                return;
            }
            const data = await response.json();
            console.log(data)
            setImages(data);
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    useEffect(() => {
        fetchFolders();
    }, []);

    useEffect(() => {
        console.log(currentFolder)
        if (currentFolder) {
            fetchImagesFromFolder(currentFolder);
        } else {
            fetchImages();
        }
    }, [currentFolder]);

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

    const handleSortOrderChange = (order) => {
        setSortOrder(order);
    };

    const handleSortDirectionChange = (direction) => {
        setSortDirection(direction);
    };
        return (
            <div className="App">
                <div className="Folder-left-list">
                    <FolderList
                        folders={allUserFolders}
                        setCurrentFolder={setCurrentFolder}/></div>
                <div className="Split"></div>
                <div className="Image-view">
                    <UserBar
                        folders={allUserFolders}
                        setSortOrder={handleSortOrderChange}
                        setSortDirection={handleSortDirectionChange}
                        sortOrder={sortOrder}
                        sortDirection={sortDirection}
                        setCurrentFolder={setCurrentFolder}
                    />
                    <FileGrid listOfAllFolders={allUserFolders}
                              images={Images}
                                /></div>
            </div>
        );
    }

export default App;
