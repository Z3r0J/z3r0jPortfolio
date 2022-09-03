import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contacts } from "../components/Contacts/Contacts";
import Index  from "../components/Index/Index";
import { SocialLinks } from "../components/SocialLinks/SocialLinks";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/social" element={<SocialLinks/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;