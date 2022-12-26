import React from "react";
import "./index.scss"

const ImageText = ({item}) => {

    return <div style={{backgroundImage:`url(${item.img})`}} className="content-image-text G-container">
        <div className="content-bg">
            <div className="content-information">
                <h1>{item.title}</h1>
                <a style={{backgroundColor:"red"}} href="">{item.backlink}</a>
                <a style={{backgroundColor:"white"}} href="">{item.thislink}</a>
            </div>
        </div>
        </div>

}
export default ImageText