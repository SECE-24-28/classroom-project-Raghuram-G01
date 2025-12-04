import React from "react";
import { SymbolStyle } from "./symbol-style";

const SymbolComponent = () => {
  return (
    <SymbolStyle>
      <div className="c1">
        <h1 className="heading">
          A Symbol of Excellence in Placement Training
        </h1>
        <p className="sub__heading">
          Aptitude Guru Hem was born from the aspiration to create a learning
          environment that inspires greatness. Our founder, driven by personal
          experiences and a desire to make a difference, established the company
          with a mission to empower students with the right skills and mindset
          for success.
        </p>

        <div className="vision-mission-wrapper">
          <div className="vision-box">
            <h2 className="vision-title">| Our Vision</h2>
            <p>
              Our vision is to empower individuals from diverse backgrounds to
              become accomplished professionals. At Aptitude Guru Hem, we
              believe that knowledge has the power to transcend boundaries.
            </p>
          </div>

          <div className="divider"></div>
 
           <div className="mission-box">
            <h2 className="mission-title">| Our Mission</h2>
            <p>
              Our mission is to revolutionize education by providing
              comprehensive training in aptitude, coding, and web/mobile
              development. We foster a culture of inclusivity and personal
              growth.
            </p>
          </div>
        </div>
      </div>
    </SymbolStyle>
  );
};

export default SymbolComponent;
