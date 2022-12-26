import React, {useState} from "react";
import img from "../../../../assets/image/carousel-1.jpg";
import ImageText from "../../../components/content-image-text";

const Pages = () => {
    const [contnet , setContent] = useState([
        {
            img:img,
            title:"PAGES",
            backlink:"HOME",
            thislink:"PAGES"
        }
    ])

    return <div className="pages-section">
        {contnet.length?contnet.map((item,index)=>{
            return <ImageText item={item} key={index}/>
        }) : null}
    </div>
}
export default Pages