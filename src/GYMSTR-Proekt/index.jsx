import React from "react";
import "./index.scss"
import Headr from "./headr";
import {Routes,Route} from "react-router-dom"
import Home from "./headr/section-components/home";
import About from "./headr/section-components/about";
import Clases from "./headr/section-components/clases";
import Trainers from "./headr/section-components/trianers";
import Pages from "./headr/section-components/pages";
import Contakt from "./headr/section-components/contakt";

const Gamestr = () => {

    return <>
          <Headr/>
          <Routes>
              <Route path={"/home"} element={<Home/>}></Route>
              <Route path={"/about"} element={<About/>}></Route>
              <Route path={"/clases"} element={<Clases/>}></Route>
              <Route path={"/trainers"} element={<Trainers/>}></Route>
              <Route path={"/pages"} element={<Pages/>}></Route>
              <Route path={"/contakt"} element={<Contakt/>}></Route>
          </Routes>
    </>
}
export default Gamestr