import React, { useEffect } from 'react'
import Button from '../Button/Button'
import ProductImage from '../ProductImage/ProductImage'
import OfferIcon from "../../assets/local_offer-24px.svg";
import styles from "./ProductCard.module.css"
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { getProduct, getSeller } from '../../services';

const ProductCard = ({ product }) => {
    const [seller, setSeller] = React.useState({});
    const [productToBuy, setProductToBuy] = React.useState({});

    let navigate = useNavigate();
    let { productID } = useParams();

    //Check on page load if product is passed as props or not. If not, get product from backend.
    useEffect(() => {
        if (!product) {
            getProduct(productID).then(res => {
                setProductToBuy(res)
            })
        } else {
            setProductToBuy(product)
        }

    }, [product])

    //When the product is loaded, get seller details from backend.
    useEffect(() => {
        if (product.userId) {
            getSeller(product.userId).then(res => setSeller(res))
        }
    }, [productToBuy]);

    return (
        <div className={styles.ProductCard}>
            <div className={styles.ProductCard_Left}>
                <ProductImage />
            </div>
            <div className={styles.ProductCard_Right}>
                <div className={styles.ProductCard_Right_Details}>
                    <h1>{productToBuy?.title}</h1>
                    <p className={styles.price}>$ {productToBuy?.price}</p>
                    <Button
                        disabled={false}
                        secondaryDisabled={false}
                        color="#6318AF"
                        width="33.25rem"
                        onClick={() => navigate(`/home/${productToBuy.category}/product/checkout`, { state: productToBuy })}
                    >
                        I want this</Button>
                    <p className={styles.condition}>{productToBuy?.condition}</p>
                    <p className={styles.details}>Details</p>
                    <p className={styles.description}>{productToBuy?.description}</p>
                </div>
                <div className={styles.ProductCard_Right_User}>
                    <div className={styles.ProductCard_Right_User_ProfilePhoto}>
                        <h1 className={styles.Avatar}>{seller?.firstName?.charAt(0)}</h1>
                    </div>
                    <div className={styles.ProductCard_Right_User_Details}>
                        <h1>{seller?.firstName + " " + seller?.lastName}</h1>
                        <div className={styles.Listings_Count}>
                            <img src={OfferIcon} alt="" />
                            <p> 2 listings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard