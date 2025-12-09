import React from "react";

import { Routes, Route } from "react-router-dom";
import TrustedByComponent from "./trusted-by/Trusted-By-Component.jsx";
import { TrustedByData } from "./trusted-by/data.js";
import HelloWorldComponent from "./hello-world/hello-world-component";
import CoursesComponent from "./course/course-component";
import SymbolOfExcellenceComponent from "./symbol-of-excellence/symbol-of-execllence-component";
import PromiseComponent from "./promise/Promise-Component.jsx";
import { OurpromisesData } from "./promise/data.js";
import LeadersTomorrowComponent from "./leaders-tomorrow/leaders-tomorrow-component";
import ImpactAtGlanceComponent from "./impact-at-glance/impact-at-glance-component";
import NotFoundComponent from "./404/404-component.jsx";
import NavBar from "./navbar/navbar-component.jsx";
import UsestateformComponent from "./form/form-component.jsx";
import SignUpComponent from "./sign-up-form/sign-up-component.jsx";
import FetchApiComponent from "./fetch-api/fetch-api-component";

function App() {
  return (
    <div>
     {/* <HelloWorldComponent/>
      <SymbolOfExcellenceComponent />
      <LeadersTomorrowComponent />  
      <CoursesComponent />
     <OurPromisesComponent />
      <TrustedByComponent />
      <ImpactAtGlanceComponent />
      <UsestateformComponent />
      <SignUpComponent /> */}

     <Routes>
        <Route path="/course" element={<><NavBar/><CoursesComponent/></>} />
        <Route path="/promise" element={<><NavBar/><PromiseComponent data={OurpromisesData}/></>} />
        <Route path="/trusted" element={<><NavBar/><TrustedByComponent data={TrustedByData} color="black" size="50px"/></>} />

        <Route path="/" element={<><NavBar/><HelloWorldComponent/></>} />
        <Route path="/impact" element={<><NavBar/><ImpactAtGlanceComponent/></>} />
        <Route path="/excellence/:id" element={<><NavBar/><SymbolOfExcellenceComponent/></>} />
        <Route path="/login" element={<><NavBar/><UsestateformComponent/></>} />
        <Route path="/sign-up" element={<><NavBar/><SignUpComponent/></>} />
        <Route path="/api-fetch" element={<><NavBar/><FetchApiComponent /></>} />

        <Route path="*" element={<NotFoundComponent/>}/>
      </Routes>
      </div>
  );
}
export default App;