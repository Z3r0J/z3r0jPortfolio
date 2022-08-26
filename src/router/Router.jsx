import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "../components/Index/Index";
import { About } from "../components/About/About";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index/>}></Route>            
            <Route path="/about" element={<About/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;