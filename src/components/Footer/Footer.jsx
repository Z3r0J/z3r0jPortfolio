import React from "react";
import { FaLinkedin,FaGithub,FaInstagram } from "react-icons/fa";
import SocialNetwork from "../../helpers/SocialNetwork";

export const Footer = () =>{
    let date = new Date();
    let siteName = "<Jean Carlos/>";
    return(
  <footer className="py-5 position-absolute w-100 bottom-footer">
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p className="text-white">&copy; {date.getFullYear()} {siteName}, All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        {SocialNetwork.map(sn=>{return(
          <li> Hello</li>
        )})}
      </ul>
    </div>
  </footer>
    )
}