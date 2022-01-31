import React, { useState } from "react";
import PostItem from "../postItem/postItem";
import Pagination from "../pagination/pagination";
import SearchPanel from "../searchPanel/searchPanel";

const PostsList = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPost = items.slice(firstPostIndex, lastPostIndex);

    return (
        <>
            <SearchPanel setItems={setItems}/>
            <PostItem items={currentPost}/>
            {items.length ? (
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={items.length}
                        setCurrentPage={setCurrentPage}
                    />
                ) : (
                    <div>Posts not found...</div>
                )
            }
        </>
    );
};

export default PostsList;
