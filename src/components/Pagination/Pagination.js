import React from 'react'
import { Pagination } from "antd";
import "./Pagination.css"
import styles from "./Pagination.module.css"

const PaginationComponent = () => {
    return (
        <>
            <Pagination
                showTotal={false}
                showSizeChanger={false}
                className="styles.pagination"
                total={40}
                defaultPageSize={10}
            />
            {/* <Pagination
                showTotal={false}
                showSizeChanger={false}
                className={styles.pagination}
                total={40}
                defaultPageSize={10}
            /> */}
        </>
    )
}

export default PaginationComponent