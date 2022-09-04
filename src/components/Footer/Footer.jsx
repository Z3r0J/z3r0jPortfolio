import React from "react";
import { FaLinkedin,FaGithub,FaInstagram } from "react-icons/fa";
import SocialNetwork from "../../helpers/SocialNetwork";

export const Footer = () =>{
    let date = new Date();
    let siteName = "<Jean Carlos/>";
    return(
        <div className="row position-relative">
        <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark position-absolute" style={{height:"145px"}}>
            <div className="col-md-4 d-flex align-items-center">
                <img src="/icon_jc.png" style={{width:"32px"}}/>
                <span className="text-white ms-3 h4">&copy; {date.getFullYear()} {siteName}</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                {
                    SocialNetwork.map(sn=>{
                        return(
                            <li className="ms-2 me-2" key={sn.icon}>
                            <a className={sn.class} href={sn.url} target="_blank">
                            {sn.icon === "FaLinkedin"?<FaLinkedin/>:""}
                            {sn.icon === "FaGithub"?<FaGithub/>:""}
                            {sn.icon === "FaInstagram"?<FaInstagram/>:""}
                            </a>
                            </li>
                        )
                    }
                    )
                }
            </ul>
        </footer>
        </div>
    )
}