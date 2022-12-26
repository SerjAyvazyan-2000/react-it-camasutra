import React from "react";
import "./index.scss"


const Components = ({info}) => {

     return <div className="info-slider">
         <p>{info.title}</p>
         <h1>{info.desqription}</h1>
         <button style={{backgroundColor:"#d43f3f"}}>{info.buttonName}</button>
         <button style={{backgroundColor:"white"}}>{info.buttonContakt}</button>
     </div>
}

export  default Components