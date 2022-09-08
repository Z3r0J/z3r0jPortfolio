import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Projects } from "../components/Projects/Projects";
import Index  from "../components/Index/Index";
import { SocialLinks } from "../components/SocialLinks/SocialLinks";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/social" element={<SocialLinks/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="*" element={<Index/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;