import React, {useState} from "react";
import img from "../../../../assets/image/carousel-1.jpg";
import ImageText from "../../../components/content-image-text";

const Contakt = () => {
    const [contnet , setContent] = useState([
        {
            img:img,
            title:"CONTACT",
            backlink:"HOME",
            thislink:"CONTACT"
        }
    ])

    return <div className="contakt-section">
        {contnet.length?contnet.map((item,index)=>{

            return <ImageText item={item} key={index}/>

        }) : null}
    </div>
}
export default Contakt