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
import { createListing } from '../../services/CreateListing';

const categories = ["Select category", "Cars & Vehicle", "Funiture", "Electronics", "Real Estate"]
const conditions = ["Select condition", "Used", "New"]
const CITY_OPTIONS = ["Select city", "Calgary", "Brooks", "Camrose"];
const CreateListingCard = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState("")
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [condition, setCondition] = useState("");
    const [status, setStatus] = useState("active");
    // const [images, setImages] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    //Image upload modal states
    const [previewImages, setPreviewImages] = useState(Array(5).fill({ imageURL: "", showPreview: false, imageID: "" }));
    const [index, setIndex] = useState(0);


    const changeImageModalState = () => {
        setShowModal(true)
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, description, price, category, city, address, condition, status)
        const body = {
            title,
            description,
            price: parseInt(price),
            category,
            city,
            address,
            condition,
            status
        }
        createListing(body)
    }

    return (
        <div className={styles.CreateListingCard}>
            <BreadCrumb />
            <h1>Create Listing</h1>
            <div className={styles.CreateListingCard_Body}>
                <div className={styles.CreateListingCard_Left}>
                    <div className={styles.CreateListingCard_Left_MainImage} >
                        {previewImages[0].showPreview ? (
                            <div className={styles.Uploaded}>
                                <img src={previewImages[0].imageURL} alt="" />
                                <CloseIcon />
                            </div>
                        ) : <div className={styles.UploadPhoto} onClick={() => { setIndex(0); changeImageModalState() }} >
                            <img src={uploadIcon} alt="" />
                            <p>Choose or drag up to 5 photos</p>
                        </div>}

                    </div>
                    <div className={styles.CreateListingCard_Left_images}>

                        {previewImages.filter((obj, index) => index !== 0).map((image, index) => {
                            return (
                                <div className={styles.UploadPhoto_Small} key={index} >
                                    {image.showPreview ? <div className={styles.UploadedSmall}>
                                        <img src={image.imageURL} alt="" className={styles.image} />
                                        <CloseIcon />
                                    </div> : <img src={uploadIcon} alt="" onClick={() => { setIndex(index + 1); changeImageModalState() }} />}
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
                        maxLength="40"
                        minLength="3"
                        value={title}
                        setValue={setTitle}
                        error={errorMessage}
                        setError={setErrorMessage}
                    />
                    <Input type="text"
                        label="Description"
                        placeholderText="Enter Product Description"
                        required={true}
                        maxLength="100"
                        minLength="20"
                        value={description}
                        setValue={setDescription}
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
                            type="text"
                            label="Price"
                            placeholderText="Type the price"
                            required={true}
                            className={styles.small}
                            value={price}
                            setValue={setPrice}
                        />
                    </div>

                    <Input
                        type="text"
                        label="Address"
                        placeholderText="Enter Address"
                        required={true}
                        maxLength="60"
                        minLength="3"
                        value={address}
                        setValue={setAddress}

                    />
                    <Select
                        name="city"
                        setValue={setCity}
                        options={CITY_OPTIONS}
                        value={city}
                        className={styles.large} />
                    <div className={styles.CreateListingCard_Right_Buttons}>
                        <Button disabled={false} color="#6318AF" className={styles.large} onClick={handleSubmit}>Post your listing</Button>
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