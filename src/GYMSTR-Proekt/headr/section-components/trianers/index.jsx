import React, {useState} from "react";
import "./index.scss"
import img from "../../../../assets/image/carousel-1.jpg";
import ImageText from "../../../components/content-image-text";

const Trainers = () => {
    const [contnet , setContent] = useState([
        {
            img:img,
            title:"TRAINERS",
            backlink:"ABOUT",
            thislink:"TRAINERS"
        }
    ])

    return <div className="trainers-section">
        {contnet.length?contnet.map((item,index)=>{
             return <ImageText item={item} key={index}/>
        }) : null}
    </div>
}
export default Trainers