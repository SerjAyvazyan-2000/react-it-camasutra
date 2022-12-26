import React, {useState} from "react";
import "./index.scss"
import img from "../../../../assets/image/carousel-1.jpg";
import ImageText from "../../../components/content-image-text";

const Clases = () => {

    const [contnet , setContent] = useState([
        {
            img:img,
            title:"CLASSES",
            backlink:"ABOUT",
            thislink:"CLASSES"
        }
    ])


    return <div className="clases-section">
        {contnet.length?contnet.map((item,index) =>{
            return <ImageText item={item} key={index}/>
        }) : null}
    </div>
}
export default Clases