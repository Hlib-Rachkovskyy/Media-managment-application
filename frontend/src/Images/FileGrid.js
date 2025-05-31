import './FileGrid.css';
import { useState, useEffect } from "react";
import ImagePopup from "./ImagePopup";

function FileGrid({  images }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 12;

    const totalPages = Math.ceil(images.length / imagesPerPage);

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    const handlePopupClick = (image) => {
        setCurrentImage(image);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [images]);

    return (
        <div>
            <div className='gallery'>
                {currentImages.map((image) => (
                    <img
                        key={image.id}
                        src={image.path}
                        alt={`Image ${image.id}`}
                        onClick={() => handlePopupClick(image)}
                        className="image-container"
                    />
                ))}
            </div>

            {isPopupOpen && <ImagePopup image={currentImage} closePopup={closePopup} />}

            <div className="pagination-controls">
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>
          Page {currentPage} of {totalPages}
        </span>
                <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default FileGrid;
