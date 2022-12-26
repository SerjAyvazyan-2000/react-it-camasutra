import React, {useState} from "react";
import img from "../../../../assets/image/carousel-1.jpg"
import ImageText from "../../../components/content-image-text";
import WelcomeGymster from "../../../components/welqome-gymster";
import welcomeImg from "../../../../assets/image/component.jpeg.1.jpg";
import PracticeSort from "../../../components/practice-sort";

const About = () => {
    const [contnet , setContent] = useState([
        {
            img:img,
            title:"ABOUT US",
            backlink:"HOME",
            thislink:"ABOUT"
        }
    ])

    const [welcome,setWelcome] = useState([{
        img:welcomeImg,
        sectionName:'ABOUT',
        title:"WELCOME TO GYMSTER",
        description:"Diam dolor diam ipsum tempor sit. Clita erat ipsum" +
            " et lorem stet no labore lorem sit clita duo justo magna dolore",
        news:"Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo at ut. Tempor sit lorem sit" +
            " magna ipsum duo. Sit eos dolor ut sea rebum, diam sea rebum lorem kasd ut ipsum dolor est ipsum. Et stet amet justo amet clita erat, ipsum sed at ipsum eirmod labore lorem.",


    }])

    return <section className="about-section G-container">
        {contnet.length? contnet.map((item,index)=>{
            return <ImageText item={item} key={index}/>
        }) :null}
        {welcome.length ? welcome.map((item,index)=>{
             return <WelcomeGymster item = {item} key={index}/>
        }):null}
        <PracticeSort/>
    </section>
}
export default About