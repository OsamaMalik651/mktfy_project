import React from 'react'
import styles from "./MyListingEdit.module.css"

import { useNavigate } from "react-router-dom";
import uploadIcon from "../../assets/add_a_photo-24px.svg"
import PlaceholderImage from "../../assets/placeholder-image.png"
import { Input } from '../Input/Input'
import Select from '../Select/Select'
import { useState } from 'react'
import Button from '../Button/Button'
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import deleteIcon from "../../assets/DeleteIcon.svg"
import TryAgain from '../TryAgainModal/TryAgain';


const categories = ["Cars & Vehicles", "Funiture", "Electronics", "Real State"]
const conditions = ["Used", "New"]
const CITY_OPTIONS = ["Calgary", "Brooks", "Camrose"];
const MyListingEdit = () => {
    const [category, setCategory] = useState("")
    const [condition, setCondition] = useState("");
    const [city, setCity] = useState("Select City");
    const [show, setShow] = useState(true)
    const [showModal, setShowModal] = useState(false)
    let navigate = useNavigate();
    const changeLoginModalState = () => {
        // setShowLoginModal(true);
        navigate("/upload-images");
        // setShowModal(true)
    };
    return (
        <div className={styles.MyListingEdit}>
            <div className={styles.BreadCrumb_Section}>
                <BreadCrumb />
            </div>
            <div className={styles.Heading_Section}>
                <h1>My Listing</h1>
            </div>
            <div className={styles.MyListingEdit_Body}>
                <div className={styles.MyListingEdit_Left}>
                    <div className={styles.MyListingEdit_Left_MainImage} >
                        {show ? (
                            <img src={PlaceholderImage} alt="" onClick={() => changeLoginModalState()} />
                        ) : <div className={styles.UploadPhoto} onClick={() => changeLoginModalState()}>
                            <img src={uploadIcon} alt="" />
                            <p>Choose or drag up to 5 photos</p>

                        </div>}
                        {show && <img src={deleteIcon} className={styles.DeleteIconLarge} onClick={() => setShow(false)} />}
                    </div>
                    <div className={styles.MyListingEdit_Left_images}>
                        <div className={styles.UploadPhoto_Small} onClick={() => changeLoginModalState()}>
                            {show ? <img src={PlaceholderImage} alt="" className={styles.Image} /> : <img src={uploadIcon} alt="" />}
                            {show && <img src={deleteIcon} className={styles.DeleteIcon} onClick={() => setShow(false)} />}
                        </div>
                        <div className={styles.UploadPhoto_Small}>
                            {show ? <img src={PlaceholderImage} alt="" className={styles.Image} /> : <img src={uploadIcon} alt="" />}
                            {show && <img src={deleteIcon} className={styles.DeleteIcon} onClick={() => setShow(false)} />}
                        </div>
                        <div className={styles.UploadPhoto_Small}>
                            {show ? <img src={PlaceholderImage} alt="" className={styles.Image} /> : <img src={uploadIcon} alt="" />}
                            {show && <img src={deleteIcon} className={styles.DeleteIcon} onClick={() => setShow(false)} />}
                        </div>
                        <div className={styles.UploadPhoto_Small}>
                            {show ? <img src={PlaceholderImage} alt="" className={styles.Image} /> : <img src={uploadIcon} alt="" />}
                            {show && <img src={deleteIcon} className={styles.DeleteIcon} onClick={() => setShow(false)} />}
                        </div>
                    </div>
                </div>
                <div className={styles.MyListingEdit_Right}>
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
                        className={styles.Large}
                    />
                    <div className={styles.SmallInputs}>
                        <Select
                            name="Condition"
                            setValue={setCondition}
                            options={conditions}
                            value={condition}
                            className={styles.Small}
                        />
                        <Input
                            type="number"
                            label="Price"
                            placeholderText="Type the price"
                            required={true}
                            className={styles.Small}
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
                        className={styles.Large} />
                    <div className={styles.MyListingEdit_Right_Buttons}>
                        <Button disabled={false} color="#FFBA00" className={styles.Large} >
                            Save changes</Button>
                        <Button disabled={false} color="#6318AF" className={styles.Large} >Confirm sold</Button>
                        <Button disabled={false} className={styles.Outline}
                            onClick={() => setShowModal(true)} >Cancel Listing</Button>
                    </div>
                </div>
            </div>
            {showModal && <TryAgain deletePrompt={true} closeModal={setShowModal} />}
        </div>
    )
}

export default MyListingEdit