import React from 'react'
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const ErrorModal = ({ error, setShowError, setError }) => {
    return (
        <Modal>
            <div className="ErrorModal">
                <h1>{error.title.toUpperCase()}</h1>
                <p>{error.description}</p>
                <Button
                    className="Button"
                    onClick={() => { setShowError(false); setError("") }}
                >Close</Button>

            </div>

        </Modal>
    )
}

export default ErrorModal