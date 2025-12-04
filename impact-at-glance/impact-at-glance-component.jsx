import React from "react";
import { ImpactAtGlanceStyle } from "./impact-at-glance-style";

const ImpactAtGlanceComponent = () => {
  return (
    <ImpactAtGlanceStyle>
                <img className="decorative-image-1" src=	"https://aptitudeguruhem.com/static/media/Spiral.d128c4aa0751f3539470.png" alt="Decorative Dots" />

      <h1 className="title">
        Impact at a <span>Glance</span>
      </h1>

      <div className="grid">
        <div className="card pink">
          <div>
            <p className="label">Colleges</p>
            <h2 className="value">100+</h2>
          </div>
          
          <img
            src="https://aptitudeguruhem.com/static/media/school.534dd7db3daaf4c66eff.png"
            alt="Colleges"
          />
        </div>

        {/* Students */}
        <div className="card blue">
          <div>
            <p className="label">Students</p>
            <h2 className="value">1,00,000</h2>
          </div>
          <img
            src="https://aptitudeguruhem.com/static/media/bag.52185bac9246c85ed48f.png"
            alt="Students"
          />
        </div>

        {/* Study Materials */}
        <div className="card green">
          <div>
            <p className="label">Study Materials</p>
            <h2 className="value">1000+</h2>
          </div>
          <img
            src="	https://aptitudeguruhem.com/static/media/books.d290f0589bd8ed867b77.png"
            alt="Books"
          />
        </div>
        {/* Trainers */}
        <div className="card yellow">
          <div>
            <p className="label">Professional Trainers</p>
            <h2 className="value-1">150</h2>
          </div>
          <img
            src="	https://aptitudeguruhem.com/static/media/people.0b6f76ebbf0b209884e7.png"
            alt="Trainers" 
          />
        </div>

      </div>
    </ImpactAtGlanceStyle>
  );
};

export default ImpactAtGlanceComponent;
