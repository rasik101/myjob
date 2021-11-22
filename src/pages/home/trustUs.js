import React from "react";
import Ather from "assets/client/ather.png";
import hyundai from "assets/client/hyundai.png";
import Bira from "assets/client/bira.png";
import carwale from "assets/client/carwale.png";
import dlf from "assets/client/dlf.png";
import dubicars from "assets/client/dubicars.png";
import swiggy from "assets/client/swiggy.png";
import oyo from "assets/client/oyo.png";

export default function TrustUs() {
  return (
    <div className="trustUs">
      <h3>companies who trust us</h3>
      <div className="flexContainer">
        <img src={Ather} alt="Ather" />
        <img src={hyundai} alt="Bayut" />
        <img src={Bira} alt="Bira" />
        <img src={carwale} alt="carwale" />
        <img src={dlf} alt="dlf" />
      </div>
      <div className="flexContainer">
        <img src={dubicars} alt="dubicars" />
        <img src={swiggy} alt="swiggy" />
        <img src={oyo} alt="oyo" />
      </div>
    </div>
  );
}
