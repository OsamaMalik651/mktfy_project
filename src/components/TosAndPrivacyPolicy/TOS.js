import React from 'react'
import logo from "../../assets/logo.svg";
import "./TOS.css"
import backIcon from "../../assets/icon_back.svg"
import { useNavigate } from 'react-router-dom';
const TOS = ({ content }) => {
    let navigate = useNavigate();

    let TOS = {
        heading: "MKTFY Terms & Services",
        content: "These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity(“you”) and [business entity name] (“we,” “us” or “our”), concerning your access to and use of the[website name.com]website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto(collectively, the “Site”).You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service.If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.Supplemental Terms of Service or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference.We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason.We will alert you about any changes by updating the “Last updated” date of these Terms of Service, and you waive any right to receive specific notice of each such change.It is your responsibility to periodically review these Terms of Service to stay informed of updates.You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Service by your continued use of the Site after the date such revised Terms of Service are posted.The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country."
    }
    let PrivacyPolicy = {
        heading: "MKTFY Privacy Policy",
        content: "Privacy is the ability of an individual or group to seclude themselves or information about themselves, and thereby express themselves selectively. When something is private to a person, it usually means that something is inherently special or sensitive to them. The domain of privacy partially overlaps with security, which can include the concepts of appropriate use, as well as protection of information. Privacy may also take the form of bodily integrity. The right not to be subjected to unsanctioned invasions of privacy by the government, corporations or individuals is part of many countries' privacy laws, and in some cases, constitutions. In the business world, a person may volunteer personal details, including for advertising, in order to receive some sort of benefit. Public figures may be subject to rules on the public interest. Personal information which is voluntarily shared but subsequently stolen or misused can lead to identity theft. The concept of universal individual privacy is a modern concept primarily associated with Western culture, British and North American in particular, and remained virtually unknown in some cultures until recent times. Most cultures, however, recognize the ability of individuals to withhold certain parts of their personal information from wider society, such as closing the door to one's home. Privacy is the ability of an individual or group to seclude themselves or information about themselves, and thereby express themselves selectively. When something is private to a person, it usually means that something is inherently special or sensitive to them. The domain of privacy partially overlaps with security, which can include the concepts of appropriate use, as well as protection of information. Privacy may also take the form of bodily integrity. The right not to be subjected to unsanctioned invasions of privacy by the government, corporations or individuals is part of many countries' privacy laws, and in some cases, constitutions. In the business world, a person may volunteer personal details, including for advertising, in order to receive some sort of benefit. Public figures may be subject to rules on the public interest. Personal information which is voluntarily shared but subsequently stolen or misused can lead to identity theft. The concept of universal individual privacy is a modern concept primarily associated with Western culture, British and North American in particular, and remained virtually unknown in some cultures until recent times. Most cultures, however, recognize the ability of individuals to withhold certain parts of their personal information from wider society, such as closing the door to one's home."
    }
    return (
        <div className='Tos'>
            <div className="Banner">
                <div className="BannerLogo">
                    <img src={logo} alt="market for you logo" />
                </div>
            </div>
            <div className="BackButton">
                <button onClick={() => navigate(-1)}>
                    <img src={backIcon} alt="close button" />
                </button>
                <h1>{content === "TOS" ? TOS.heading : PrivacyPolicy.heading}</h1>
            </div>
            <div className="Content">
                <p>{content === "TOS" ? TOS.content : PrivacyPolicy.content}</p>
            </div>

        </div>
    )
}

export default TOS