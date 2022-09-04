import React from "react";
import './SocialLinks.css';
import SocialNetwork from "../../helpers/SocialNetwork";
import { FaLinkedin,FaGithub,FaInstagram } from "react-icons/fa";
import { Footer } from '../Footer/Footer';

export const SocialLinks = () =>{
    return (
        <div className="container-fluid mt-4 mb-4">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-4 col-lg-4 col-sm-8 col-md-12">
                    <div className="card bg-dark">
                        <div className="circular--portrait border border-success m-auto">
                            <img src="/profilephoto.jpg"/>
                        </div>
                        <span className="text-white text-center mt-3 h4 fw-900">Jean Carlos Reyes</span>
                        <span className="text-white text-center mt-3 h5 fw-900">@jean.020</span>
                    <div className="card-body">
                        {SocialNetwork.map(sn=>{
                            return(
                            <a className={`${sn.class} w-100 text-center mb-3 mt-2 rounded rounded-5 shadow shadow-3`} href={sn.url} target="_blank" key={sn.name}>
                            {sn.icon === "FaLinkedin"?<FaLinkedin/>:""}
                            {sn.icon === "FaLinkedin"?"LinkedIn":""}
                            {sn.icon === "FaGithub"?<FaGithub/>:""}
                            {sn.icon === "FaGithub"?"GitHub":""}
                            {sn.icon === "FaInstagram"?<FaInstagram/>:""}
                            {sn.icon === "FaInstagram"?"Instagram":""}
                                </a>
                            )
                        })}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}