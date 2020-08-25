import React, { useState, useEffect } from "react";
import logoImg from "../../assets/images/logo.svg";
import LandingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHardIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";
import { Link } from "react-router-dom";
import api from "../../services/api";

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      console.log(response);
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img
          src={LandingImg}
          alt="plataforma de estudos"
          className="hero-image"
        />
        <div className="buttons-container">
          <Link to="/give-classes" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/study" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas{" "}
          <img src={purpleHardIcon} alt="" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
