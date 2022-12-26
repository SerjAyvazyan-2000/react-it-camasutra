import React from "react";
import "./style.scss"
import bodyBuilding from "../../../assets/image/BODY-BUILDING.jpg"
import weightLefting from "../../../assets/image/WEIGHT-LEFTING.jpg"
import muscleBuilding from "../../../assets/image/MUSCLE-BUILDING.jpg"



const PracticeSort = () => {

    return <section className=" practice-sort">
         <div className="G-container">
               <div className="practice-images">

                   <div className="images-sort-fon">
                       <div className="images-sort" style={{backgroundImage:`url(${bodyBuilding})`}}></div>

                       <div className="practice-info">
                             <h1>BODY BUILDING</h1>
                           <p>Sed amet tempor amet sit kasd sea lorem dolor ipsum
                               elitr dolor amet kasd elitr duo vero amet amet stet</p>
                           <span>READ MORE</span>

                       </div>
                   </div>

                   <div className="images-sort-fon">
                       <div className="images-sort" style={{backgroundImage:`url(${weightLefting})`}}></div>
                       <div className="practice-info">
                         <h1>WEIGHT LEFTING</h1>
                           <p>Sed amet tempor amet sit kasd sea lorem dolor
                                ipsum elitr dolor amet kasd elitr duo vero amet amet stet</p>
                           <span>READ MORE</span>

                       </div>

                   </div>

                   <div className="images-sort-fon">
                       <div className="images-sort" style={{backgroundImage:`url(${muscleBuilding})`}}></div>
                       <div className="practice-info">
                        <h1>MUSCLE BUILDING</h1>
                           <p>Sed amet tempor amet sit kasd sea lorem dolor
                               ipsum elitr dolor amet kasd elitr duo vero amet amet stet</p>
                             <span>READ MORE</span>
                       </div>

                   </div>


               </div>
             
             <div className="practice-info-hateful">
                    <h1>30% DISCOUNT FOR THIS SUMMER</h1>
                     <button>BECOME A MEMBER</button>
             </div>
         </div>
    </section>
}

export default PracticeSort