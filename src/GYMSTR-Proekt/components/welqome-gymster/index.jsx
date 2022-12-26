import React, {useState} from "react";
import "./index.scss"
import Components from "./components";

const WelcomeGymster = ({item}) =>{
    const [result , setResult] = useState([])

    const information = [
        {
            name:"ABOUT US",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
                "Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata " +
                "consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna",
            id:1
        },
        {
            name:"WHY CHOOSE US",
            text:"Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur" +
                " invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna",
            id:2
        }
    ]
    const handleClick = (name) => {
         let newInformation = information.filter(el => el.name === name)
        setResult(newInformation[0])

    }



     return <div className="gymster-content">
            <div style={{backgroundImage:`url(${item.img})`}}  className="content-image"></div>
            <div className="content-info-news">
                 <h3>{item.sectionName}</h3>
                 <h1>{item.title}</h1>
                 <h2>{item.description}</h2>
                 <p>{item.news}</p>
                <div className="information-block">
                    <button className={`${result.name === "ABOUT US" ? "activebtn" : null} `} onClick={()=>handleClick("ABOUT US")}>ABOUT US</button>
                    <button className={`${result.name === "WHY CHOOSE US" ? "activebtn" : null} `} onClick={()=>handleClick("WHY CHOOSE US")}> WHY CHOOSE US</button>
                    <Components item = {result}/>
                </div>

            </div>
     </div>
}
export default WelcomeGymster