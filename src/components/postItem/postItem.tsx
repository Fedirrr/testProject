import React, { FC } from "react";
import { ItemsProps } from "../../types";
import "./postItem.css";


const PostItem: FC<ItemsProps> = ({ items }) => {
    return (
        <div className="postListWrapper">
            <div className="postItem">
                {
                    items.map(({ id, title, body }) => (
                        <div key={id} className="postWrapper">
                            <p>Post {id}</p>
                            <b>{title}</b>
                            <p>{body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PostItem;
