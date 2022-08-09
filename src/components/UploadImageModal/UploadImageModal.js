import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import closeIcon from "../../assets/icon_close.svg"
import backIcon from "../../assets/icon_back.svg"
import { useNavigate } from 'react-router-dom'
import "./UploadImageModal.css"
import Button from '../Button/Button'
import { uploadImages } from '../../services/CreateListing'
import { FileUploader } from 'react-drag-drop-files'

const UploadImageModal = ({ close, index, previewImages, maxNumberOfFilesSelected, setMaxNumberOfFilesSelected, setPreviewImages }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImageUrl, setPreviewImageUrl] = useState("");
    const [isFilePicked, setIsFilePicked] = useState(false);


    //File types for drag and drop
    const fileTypes = ["JPG", "PNG", "GIF"];

    const inputButtonChangeHandler = (event) => {
        if (!isFilePicked) {
            setSelectedFile(event.target.files[0]);
            setIsFilePicked(true);
        }
    };
    const dragDropChangeHandler = (files) => {
        setSelectedFile(files);
        setIsFilePicked(true);
    };

    const handleSubmission = async () => {
        const images = new FormData();
        images.append("image", selectedFile);

        // const response = await uploadImages(images)
        // console.log(response)

        /* Add modal close logic here */
        const newArray = [...previewImages].map((obj, newIndex) => {
            if (newIndex === index) {
                return {
                    ...obj,
                    imageID: "",
                    showPreview: true,
                    imageURL: previewImageUrl
                };
            } else return obj;
        });
        setPreviewImages(newArray);
        close();

    }
    //Set image url when file is selected
    useEffect(() => {
        if (selectedFile) {
            const imageURL = URL.createObjectURL(selectedFile);
            setPreviewImageUrl(imageURL);
        }
    }, [selectedFile])

    return (
        <Modal>
            <div className="UploadImageModal">
                <div className="UploadImageModal_Top">
                    <button onClick={() => close(true)}>
                        <img src={backIcon} alt="close button" />
                    </button>
                    <button onClick={() => close(true)}>
                        <img src={closeIcon} alt="close button" />
                    </button>
                </div>
                <div className="UploadImageModal_Bottom">
                    <h1>Upload Photo(s)</h1>
                    <div className={`ChooseFile ${maxNumberOfFilesSelected ? "disabled" : undefined}`}>
                        <label htmlFor="file" className={maxNumberOfFilesSelected ? "disabled" : undefined}>
                            <p>Choose File</p>
                            <p>{isFilePicked ? selectedFile[0]?.name : "No file Chosen"}</p>
                        </label>
                        <input
                            id='file'
                            type="file"
                            name='file'
                            onChange={(e) => !maxNumberOfFilesSelected && inputButtonChangeHandler(e)}
                        />
                    </div>
                    <div className="ImageDrop">
                        {!isFilePicked ? <FileUploader
                            handleChange={dragDropChangeHandler}
                            name="file"
                            label="Drop files here"
                            types={fileTypes}
                        /> :
                            <>
                                <img id="output" src={previewImageUrl} alt="" className="displayImage" />
                            </>
                        }

                    </div>
                    <div className="Upload_Button">
                        <Button color="#6318AF" onClick={handleSubmission}>Upload</Button>
                    </div>

                </div>
            </div>
        </Modal>
    )
}

export default UploadImageModal