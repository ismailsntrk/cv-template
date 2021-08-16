import React from "react";
import "./Navi.css";
import logo from "../../assets/ylogob.png";
import { Link } from "react-router-dom";
const Navi = () => {

  

  return (
    <div className="naviCont">
      <div id="navi-part-one">
        <div id="logo-container">
          <img id="logo" src={logo} alt="company-logo"></img>
        </div>
      </div>

      <div id="navi-part-two">
        <div id="button-section">
          <Link id="btn-lnk" to="/ankara"><div  className="btn-cls">Deneme</div></Link>
          <Link id="btn-lnk" to="/ankara"><div  className="btn-cls">Deneme</div></Link>
          <Link id="btn-lnk" to="/ankara"><div  className="btn-cls">Deneme</div></Link>
          <Link id="btn-lnk" to="/ankara"><div  className="btn-cls">Deneme</div></Link>
          <Link id="btn-lnk" to="/ankara"><div  className="btn-cls">Deneme</div></Link>
        </div>
      </div>
    </div>
  );
};

export default Navi;
