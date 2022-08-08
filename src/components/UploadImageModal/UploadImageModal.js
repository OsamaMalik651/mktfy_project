import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import closeIcon from "../../assets/icon_close.svg"
import backIcon from "../../assets/icon_back.svg"
import { useNavigate } from 'react-router-dom'
import "./UploadImageModal.css"
import Button from '../Button/Button'
import { uploadImages } from '../../services/CreateListing'
import { FileUploader } from 'react-drag-drop-files'

const UploadImageModal = ({ close }) => {
    const [selectedFile, setSelectedFile] = useState([]);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [previewImageUrl, setPreviewImageUrl] = useState([]);
    const [maxNumberOfFilesSelected, setMaxNumberOfFilesSelected] = useState(false);

    //File types for drag and drop
    const fileTypes = ["JPG", "PNG", "GIF"];

    const inputButtonChangeHandler = (event) => {
        setSelectedFile(event.target.files);
        setIsFilePicked(true);
    };
    const dragDropChangeHandler = (files) => {
        setSelectedFile(files);
        setIsFilePicked(true);
    };
    const handleSubmission = async () => {
        const images = new FormData();
        [...selectedFile].forEach(file => images.append('image', file));
        // const response = await uploadImages(images)
        // console.log(response)
    }

    //Set image url when one or more file is selected
    useEffect(() => {
        if (selectedFile.length > 0) {
            const imageURLS = [...selectedFile].map(file => URL.createObjectURL(file));
            setPreviewImageUrl(imageURLS);
            setMaxNumberOfFilesSelected(imageURLS.length >= 5 ? true : false);
        }
    }, [selectedFile])

    let navigate = useNavigate();
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
                    <div className={`ChooseFile ${maxNumberOfFilesSelected && "disabled"}`}>
                        <label htmlFor="file" className={maxNumberOfFilesSelected && "disabled"}>
                            <p>Choose File</p>
                            <p>{isFilePicked ? selectedFile[0].name : "No file Chosen"}</p>
                        </label>
                        <input
                            id='file'
                            type="file"
                            name='file'
                            multiple
                            onChange={(e) => !maxNumberOfFilesSelected && inputButtonChangeHandler(e)}
                        />
                    </div>
                    <div className="ImageDrop">
                        {!isFilePicked ? <FileUploader
                            handleChange={dragDropChangeHandler}
                            name="file"
                            label="Drop files here"
                            multiple
                            types={fileTypes}
                        /> :
                            <>
                                <img id="output" src={previewImageUrl[0]} alt="" className="displayImage" />
                                <div className="overlay" onClick={() => !maxNumberOfFilesSelected && setIsFilePicked(false)}>
                                    <div className="text">{maxNumberOfFilesSelected ? "Click Upload" : "Click to select more images"}</div>
                                </div></>}

                    </div>
                    <div className="Info">
                        <p>Number of Files selectes: {selectedFile.length}</p>
                        <button onClick={() => { setSelectedFile([]); setIsFilePicked(false); setMaxNumberOfFilesSelected(false) }} disabled={!maxNumberOfFilesSelected}>Clear images</button>
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