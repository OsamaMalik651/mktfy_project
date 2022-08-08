import React from 'react'
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import styles from "./CreateListingCard.module.css"
import uploadIcon from "../../assets/add_a_photo-24px.svg"
import PlaceholderImage from "../../assets/placeholder-image.png"
import { Input } from '../Input/Input'
import Select from '../Select/Select'
import { useState } from 'react'
import Button from '../Button/Button'
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import UploadImageModal from '../UploadImageModal/UploadImageModal';
import { ReactComponent as CloseIcon } from '../../assets/icon_close_red.svg';

const categories = ["Select category", "Cars & Vehicle", "Funiture", "Electronics", "Real Estate"]
const conditions = ["Select condition", "Used", "New"]
const CITY_OPTIONS = ["Select city", "Calgary", "Brooks", "Camrose"];
const CreateListingCard = () => {
    const [category, setCategory] = useState("")
    const [condition, setCondition] = useState("");
    const [city, setCity] = useState("");
    const [showModal, setShowModal] = useState(false);

    //Image upload modal states
    const [previewImages, setPreviewImages] = useState(Array(5).fill({ imageURL: "", showPreview: false, imageID: "" }));
    const [index, setIndex] = useState(0);


    const changeLoginModalState = () => {
        setShowModal(true)
    };

    return (
        <div className={styles.CreateListingCard}>
            <BreadCrumb />
            <h1>Create Listing</h1>
            <div className={styles.CreateListingCard_Body}>
                <div className={styles.CreateListingCard_Left}>
                    <div className={styles.CreateListingCard_Left_MainImage} onClick={() => { setIndex(0); changeLoginModalState() }}>
                        {previewImages[0].showPreview ? (
                            <div className={styles.Uploaded}>
                                <img src={previewImages[0].imageURL} alt="" />
                                <CloseIcon />
                            </div>
                        ) : <div className={styles.UploadPhoto} >
                            <img src={uploadIcon} alt="" />
                            <p>Choose or drag up to 5 photos</p>
                        </div>}

                    </div>
                    <div className={styles.CreateListingCard_Left_images}>

                        {previewImages.filter((obj, index) => index !== 0).map((image, index) => {
                            return (
                                <div className={styles.UploadPhoto_Small} key={index} onClick={() => { setIndex(index + 1); changeLoginModalState() }}>
                                    {image.showPreview ? <div className={styles.UploadedSmall}>
                                        <img src={image.imageURL} alt="" className={styles.image} />
                                        <CloseIcon />
                                    </div> : <img src={uploadIcon} alt="" />}
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
                <div className={styles.CreateListingCard_Right}>
                    <Input type="text"
                        label="Product Name"
                        placeholderText="Enter Product Name"
                        required={true}
                        maxLength="320"
                        minLength="6"
                    />
                    <Input type="text"
                        label="Description"
                        placeholderText="Enter Product Description"
                        required={true}
                        maxLength="320"
                        minLength="6"
                    />
                    <Select
                        name="Category"
                        setValue={setCategory}
                        options={categories}
                        value={category}
                        className={styles.large}
                    />
                    <div className={styles.SmallInputs}>
                        <Select
                            name="Condition"
                            setValue={setCondition}
                            options={conditions}
                            value={condition}
                            className={styles.small}
                        />
                        <Input
                            type="number"
                            label="Price"
                            placeholderText="Type the price"
                            required={true}
                            className={styles.small}
                        />
                    </div>

                    <Input
                        type="text"
                        label="Address"
                        placeholderText="Enter Address"
                        required={true}
                    />
                    <Select
                        name="city"
                        setValue={setCity}
                        options={CITY_OPTIONS}
                        value={city}
                        className={styles.large} />
                    <div className={styles.CreateListingCard_Right_Buttons}>
                        <Button disabled={false} color="#6318AF" className={styles.large} >Post your listing</Button>
                        <Button disabled={false} className={styles.outline}>Cancel</Button>
                    </div>
                </div>
            </div>
            {showModal && <UploadImageModal
                close={() => setShowModal(!showModal)}
                setPreviewImages={setPreviewImages}
                previewImages={previewImages}
                index={index}
            />
            }
        </div >
    )
}

export default CreateListingCard