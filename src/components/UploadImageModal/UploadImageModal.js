import React from 'react'
import Modal from '../Modal/Modal'
import closeIcon from "../../assets/icon_close.svg"
import backIcon from "../../assets/icon_back.svg"
import { useNavigate } from 'react-router-dom'
import "./UploadImageModal.css"
import Button from '../Button/Button'
const UploadImageModal = ({ close }) => {
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
                    <div className="ChooseFile">
                        {/* wire onClick to upload image login */}
                        <button>
                            Choose Files
                        </button>
                        {/* NAme of the file uploaded to be shown here */}
                        <p> No File Chosen</p>
                    </div>
                    <div className="ImageDrop">
                        <h1>Drop files here</h1>
                    </div>
                    <div className="Upload_Button">
                        <Button color="#6318AF">Upload</Button>
                    </div>

                </div>
            </div>
        </Modal>
    )
}

export default UploadImageModal