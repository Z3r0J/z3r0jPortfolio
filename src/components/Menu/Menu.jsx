import { useContext } from "react";
import { React } from "react";
import { LangContext } from "../../contexts/LangContext";
import Text from "../../helpers/lang/Text";
import { FaClipboardCheck, FaCode, FaGraduationCap, FaList } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import './Menu.css'

export const Menu = () =>{
    const title = ["<Jean"," Carlos/>"]

    const { handleChangeLanguages, actualLanguage } = useContext(LangContext);

    return(
      <nav className="navbar navbar-expand-lg bg-dark text-white">
  <div className="container-fluid">
    <a className="navbar-brand text-white fs-2 fw-700" href="/"><span className="text-primary">{title[0]}</span><span className="text-danger">{title[1]}</span></a>
    <button className="navbar-toggler outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FaList className="navbar-toggler-icon text-white"/>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-white fs-6 menu-item" aria-current="page" href="/"><IoHomeSharp className="me-2"/><Text tid='navHome'/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fs-6 menu-item" aria-current="page" href="/#education"><FaGraduationCap className="me-2"/><Text tid='education'/></a>
        </li>       
        <li className="nav-item">
          <a className="nav-link text-white fs-6 menu-item" aria-current="page" href="/#skills"><FaClipboardCheck className="me-2"/><Text tid='programmingLang'/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fs-6 menu-item" aria-current="page" href="/projects"><FaCode className="me-2"/><Text tid='navProjects'/></a>
        </li>        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
