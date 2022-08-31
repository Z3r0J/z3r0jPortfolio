import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index  from "../components/Index/Index";
import { Languages } from "../components/Languages/Languages";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index/>}></Route>            
            <Route path="/languages" element={<Languages/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;