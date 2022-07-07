import React from 'react'
import Button from '../Button/Button'
import styles from "./Sidebar.module.css"
const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <section>
                <h1>Category</h1>
            </section>
            <section>
                <h2>All Categories:</h2>
                <p>Cars & Vehicles</p>
                <p>Furniture</p>
                <p>Electronics</p>
                <p>Real State</p>
            </section>
            <hr />
            <section>
                <h1>Location: Alberta</h1>
                <p>Calgary</p>
                <p>Brooks</p>
            </section>
            <hr /><section>
                <h1>Condition</h1>
                <p>New</p>
                <p>Used</p>
            </section>
            <hr />
            <section>
                <h1>Price</h1>
                <div className={styles.Inputs}>
                    <div className={styles.Sidebar_Input}>
                        <label htmlFor="From">From</label>
                        <input type='number' id='From' />
                    </div>
                    <div className={styles.Sidebar_Input}>
                        <label htmlFor="To">To</label>
                        <input type='number' id='To' />
                    </div>

                </div>
                <div className={styles.Sidebar_Button}>
                    <Button width={"8rem"} type={"submit"} color="#FFBA00" >
                        Update
                    </Button>
                </div>

            </section>


        </div>
    )
}

export default Sidebar