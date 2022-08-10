import React, { useEffect } from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Layout from '../../components/Layout/Layout';
import styles from "./FAQ.module.css"
import { FAQS } from '../../dummyData/FAQ';
import { useState } from 'react';
import { ReactComponent as RightArrow } from "../../assets/arrow_right-24px.svg"
import { getFaqs } from '../../services/Faq';
const FAQ = () => {
    const [selectedQuestion, setSelectedQuestion] = useState("0");
    const [faqs, setFaqs] = useState([]);

    const faqData = async () => {
        const faqs = await getFaqs();
        return faqs
    }

    useEffect(() => {
        faqData().then(faqs => {
            if (faqs) {
                setFaqs(faqs)
                setSelectedQuestion(faqs[0])
            }
            return;
        })
    }, [])

    return (
        <div className={styles.FAQ}>
            <div className={styles.FaqContainer}>
                <BreadCrumb />
                <div className={styles.headingSection}>
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className={styles.FaqCard}>
                    <div className={styles.FaqCard_Questions}>
                        {faqs?.length && faqs.map((faq) => {
                            return (
                                <div className={`${styles.Faq_Question} ${selectedQuestion.id === faq.id ? styles.Active : ""}`}
                                    key={faq.id}
                                    onClick={() => setSelectedQuestion(faq)}
                                >
                                    <p
                                    >
                                        {faq.title}
                                    </p>
                                    <RightArrow />

                                </div>

                            );
                        })}
                    </div>
                    <div className={styles.FaqCard_Answers}>
                        <h1>{selectedQuestion.title}</h1>
                        {selectedQuestion.description?.split(".").map((sentence, index) => {
                            return (
                                <p key={index}>{sentence}{"."}</p>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;