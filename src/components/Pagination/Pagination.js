import React from 'react'
import { Pagination } from "antd";
import "./Pagination.css"
// import styles from "./Pagination.module.css"
import 'antd/dist/antd.css';

const PaginationComponent = ({ total, handleChange, pageNumber }) => {
    return (
        <>
            <Pagination
                showTotal={false}
                showSizeChanger={false}
                className="pagination"
                total={total}
                defaultPageSize={10}
                onChange={handleChange}
                current={pageNumber}
            />
        </>
    )
}

export default PaginationComponent