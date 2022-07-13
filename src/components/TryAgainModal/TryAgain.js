import React from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import styles from "./TryAgainModal.module.css"
const TryAgain = ({ deletePrompt, closeModal }) => {

    return (
        <Modal>
            <div className={styles.TryAgainModal}>
                <h1>Heads Up!</h1>
                {deletePrompt ? <p>You are about to cancel your listing. Are you sure?</p> : <p>Something happened and your password hasn’t been changed</p>}
                <div className={styles.Buttons}>
                    <Button className={`${styles.Button} ${styles.CancelButton}`}
                        onClick={() => closeModal(false)}
                    >Cancel</Button>
                    <Button className={styles.Button} onClick={() => closeModal(false)}>Try again</Button>
                </div>
            </div>
        </Modal>

    )
}

export default TryAgain