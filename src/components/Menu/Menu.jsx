import { useContext } from "react";
import { React } from "react";
import { LangContext } from "../../contexts/LangContext";
import Text from "../../helpers/lang/Text";
import './Menu.css'

export const Menu = () =>{
    const title = ["<Jean"," Carlos/>"]

    const { handleChangeLanguages, actualLanguage } = useContext(LangContext);

    return(
        <nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand text-white fs-2 fw-700" href="#"><span className="text-primary">{title[0]}</span><span className="text-danger">{title[1]}</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-white fs-6 menu-item" aria-current="page" href="#"><Text tid='navHome'/></a>
        </li>        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {actualLanguage==="en"?"🇺🇸":"🇩🇴"}
          </a>
          <ul className="dropdown-menu drop-width bg-dark">
            {actualLanguage==="en"?<li><a className="dropdown-item" href="#" onClick={()=>handleChangeLanguages("es")}>{"🇩🇴"}</a></li>:<li><a className="dropdown-item" href="#" onClick={()=>handleChangeLanguages("en")}>{"🇺🇸"}</a></li>}
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}