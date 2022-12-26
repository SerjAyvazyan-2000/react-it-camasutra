import React, {useEffect, useState} from "react";
import "./index.scss"
import {NavLink} from "react-router-dom"


const Headr = () => {
    let [openMenyu, setOpenMenyu] = useState(false)

    const handleClick = () => {
        setOpenMenyu(true)
        if (openMenyu) {
            setOpenMenyu(false)
        }

    }

    useEffect(()=>{

    })
    return <header className="headr-section">
        <div className='G-container'>
            <div className="headr-content ">
                <div className="name-content">
                    <a href=""><h1>GYMSTR</h1></a>
                </div>
                <div className="menyu-icon-content  ">
                    <div className="p-concat-internet">
                        <span>mail@domain.com</span>
                        <span>+012 345 6789</span>
                    </div>
                    <div className="p-menyu-list">
                            <ul className={openMenyu ? "ul-media" :null } >
                                <li>
                                    <NavLink to={"/home"}>HOME</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/about"}>ABOUT</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/clases"}>CLASES</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/trainers"}>TRAINERS</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/pages"}>PAGES</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/contakt"}>CONTAKT</NavLink>
                                </li>
                            </ul>
                            <div className="p-button">
                                <button>JOIN US</button>
                            </div>
                    </div>


                </div>
                <div onClick={handleClick} className="burger-menyu">
                    <div className="burger" ></div>
                    <div className="burger" ></div>
                    <div className="burger" ></div>
                </div>
            </div>
        </div>
    </header>

}
export default Headr