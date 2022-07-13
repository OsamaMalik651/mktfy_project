import React from 'react'
import Lottie from 'react-lottie-player'
import "./SuccessAnimation.css"
import logo from "../../assets/logo.svg";
import animationData from "../../assets/successAnimation.json"
import { useNavigate } from 'react-router-dom';
const SuccessAnimation = () => {
    let navigate = useNavigate()
    const redirectToHomePage = () => {
        console.log("redirect")
        navigate("/home")
    }
    return (
        <div className='SuccessAnimation'>
            <div className="Logo">
                <img src={logo} alt="market for you logo" />
            </div>
            <div className="Animation">
                <Lottie
                    loop={false}
                    speed={0.8}
                    animationData={animationData}
                    play
                    style={{ width: 362, height: 362 }
                    }
                    onComplete={() => redirectToHomePage()}
                />
            </div>


        </div>
    )
}

export default SuccessAnimation