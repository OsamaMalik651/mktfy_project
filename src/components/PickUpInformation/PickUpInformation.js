import React, { useEffect } from 'react'
import styles from "./PickUpInformation.module.css"
import PlaceholderImage from "../../assets/placeholder-image.png"
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import Button from '../Button/Button'
import { useNavigate, useLocation } from 'react-router-dom'
import { getSeller, requestListing } from '../../services'
import { normalizePhoneNumber } from '../../utils'
const PickUpInformation = ({ checkout }) => {
    let navigate = useNavigate();
    let location = useLocation();
    const product = location.state
    const [seller, setSeller] = React.useState({})

    const buyProduct = () => {
        requestListing(product.id).then(res => {
            if (res) {
                navigate(`/home/${product.category}/product/pickup-information`, { state: product })
            }
        }
        )
    }
    //Check on page load if product is passed as props or not. If not, redirect to homepage.
    useEffect(() => {
        if (!product) {
            navigate('/')
        }
    }, [])

    //Check if 
    useEffect(() => {
        if (checkout) {
            getSeller(product.userId).then(res => setSeller(res))
        }
    }, [checkout]);

    return (
        <div className={styles.PickUpInformationPage}>
            <div className={styles.BreadCrumb_Section}>
                <BreadCrumb />
            </div>
            <div className={styles.PickUpInformation}>

                <div className={styles.PickUpInformation_Top}>
                    <h1>Pickup Information</h1>
                    <div className={styles.MyListingCard}>
                        <img src={PlaceholderImage} alt="" className={styles.Image} />
                        <div className={`${styles.Details} ${styles.Purchases}`}>

                            <div className={styles.Detail}>
                                <p className={styles.Heading}>{product?.title}</p>
                                <p className={styles.Price}>$ {product?.price}</p>
                                <p className={styles.Condition}>
                                    <span className={styles.Circle}></span>
                                    Condition - {product?.condition}</p>
                            </div>
                        </div>
                    </div >

                </div>
                {checkout && seller ? <div className={styles.PickUpInformation_Bottom}>
                    <p>Pick up</p>
                    <div className={styles.SellerInfo}>
                        <div className={styles.SellerInfo_Left}>
                            <div className={styles.Profile}>
                                <h1>{seller?.firstName.charAt(0)}</h1>
                            </div>
                            <div className={styles.ProfileDetails}>
                                <h1>{seller?.firstName + " " + seller?.lastName} </h1>
                                <p>{normalizePhoneNumber(seller?.phone)}</p>
                            </div>
                        </div>

                        <div className={styles.SellerInfo_Right}></div>
                    </div>
                    <div className={styles.Address}>
                        <p>Please pick up your purchase at {seller.address || "user address"}, {seller.city || "City"}, Alberta</p>
                    </div>
                </div> : <div className={styles.PickUpConfirm}>
                    <Button
                        color="#6318AF"
                        // onClick={() => { navigate("/home/category/product/pickup-information") }}
                        onClick={() => { buyProduct() }}
                    >Confirm
                    </Button>
                </div>}
            </div>
        </div>

    )
}

export default PickUpInformation