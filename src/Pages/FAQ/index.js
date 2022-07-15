import React from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Layout from '../../components/Layout/Layout';
import styles from "./FAQ.module.css"
import { FAQS } from '../../dummyData/FAQ';
import { useState } from 'react';
import { ReactComponent as RightArrow } from "../../assets/arrow_right-24px.svg"
const FAQ = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(0);
    return (
        <div className={styles.FAQ}>
            <Layout>
                <div className={styles.FaqContainer}>
                    <BreadCrumb />
                    <div className={styles.headingSection}>
                        <h1>Frequently Asked Questions</h1>
                    </div>
                    <div className={styles.FaqCard}>
                        <div className={styles.FaqCard_Questions}>
                            {FAQS.map((faq, index) => {
                                return (
                                    <div className={`${styles.Faq_Question} ${selectedQuestion === index ? styles.Active : ""}`}
                                        key={index}
                                        onClick={() => setSelectedQuestion(index)}
                                    >
                                        <p
                                        >
                                            {faq.question}
                                        </p>
                                        <RightArrow />

                                    </div>

                                );
                            })}
                        </div>
                        <div className={styles.FaqCard_Answers}>
                            <h1>{FAQS[selectedQuestion].question}</h1>
                            {FAQS[selectedQuestion].answer.map((answer, index) => <p key={index}>{answer}</p>)}
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default FAQ;