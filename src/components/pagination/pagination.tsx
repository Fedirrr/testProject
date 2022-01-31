import React, { FC } from "react";
import { Button } from "antd";
import { PaginationType } from "../../types";
import "./pagination.css";

const Pagination: FC<PaginationType> = ({ postsPerPage, totalPosts, setCurrentPage }) => {
    const pageNumbers: Array<number> = [];
    const nextPage = () => setCurrentPage((pageNumber: number) => pageNumber === 10 ? 10 : pageNumber + 1);
    const prevPage = () => setCurrentPage((pageNumber: number) => pageNumber === 1 ? 1 : pageNumber - 1);

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="footer">
            <ul className="pagination">
                <Button onClick={prevPage}>&lt;</Button>
                {
                    pageNumbers.map(number => (
                        <li
                            key={number}
                            className="pageItem"
                            onClick={() => setCurrentPage(number)}
                        >
                            {number}
                        </li>
                    ))
                }
                <Button onClick={nextPage}>&gt;</Button>
            </ul>
        </div>
    );
};

export default Pagination;
