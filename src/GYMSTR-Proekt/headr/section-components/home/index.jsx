import React, {useState} from "react";
import "./index.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carusel from  "../../../../assets/image/carousel-1.jpg"
import carusel1 from  "../../../../assets/image/carousel-2.jpg"
import  welcomeImg from "../../../../assets/image/component.jpeg.1.jpg"

import Slider from "react-slick"
import Components from "./components-slider";
import WelcomeGymster from "../../../components/welqome-gymster";
import PracticeSort from "../../../components/practice-sort";

const Home = () => {
    const [infoCarusel] = useState({
         title:'BEST GYM CENTER',
         desqription:"BUILD YOUR BODY STRONG WITH GYMSTER",
         buttonName:"JOUIN US",
         buttonContakt:"CONTAKT US"
    })
    const [infoCarusel1] = useState({
        title:'BEST GYM CENTER',
        desqription:"GROW YOUR STRENGTH WITH OUR TRAINERS",
        buttonName:"JOUIN US",
        buttonContakt:"CONTAKT US"
    })
    const [welcome,setWelcome] = useState([{
         img:welcomeImg,
         sectionName:'ABOUT',
         title:"WELCOME TO GYMSTER",
         description:"Diam dolor diam ipsum tempor sit. Clita erat ipsum" +
             " et lorem stet no labore lorem sit clita duo justo magna dolore",
        news:"Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo at ut. Tempor sit lorem sit" +
            " magna ipsum duo. Sit eos dolor ut sea rebum, diam sea rebum lorem kasd ut ipsum dolor est ipsum. Et stet amet justo amet clita erat, ipsum sed at ipsum eirmod labore lorem.",


    }])


    const[setings,setSetings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        arrows:false,

    })
    return <>
        {/*SLIDER SECTION START*/}
    <div className="home-section">
        <Slider {...setings}>
            <div>
               <div  className="slider-img" style={{backgroundImage:`url(${carusel})`}}>
                   <div className="slider-bg">
                       <Components info = {infoCarusel}/>
                   </div>
               </div>

            </div>
            <div>
                <div className="slider-img" style={{backgroundImage:`url(${carusel1})`}}>
                    <div className="slider-bg">
                        <Components info={infoCarusel1}/>
                    </div>
                </div>

            </div>
        </Slider>
    </div>
        {/*SLIDER SECTION END*/}

        {/*WELCOME TO GYMSTER START*/}
        <div className="G-container">
            <div className="welcome-gymster">
                {welcome.map((item,index) =>{
                    return <WelcomeGymster item ={item} key={index}/>
                })}
            </div>
        </div>

        {/*WELCOME TO GYMSTER END*/}

        {/*PRACTICE SORT  START*/}
         <PracticeSort/>


        {/*PRACTICE SORT END*/}


    </>
}
export default Home