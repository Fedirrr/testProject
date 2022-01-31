import React from "react";
import PostsList from "../postsList/postsList";
import Header from "../header/header";
import "./app.css";

const App = () => {
    return (
        <div className="wrapper">
            <div className="content">
                <Header/>
                <PostsList/>
            </div>
        </div>
    );
}

export default App;
