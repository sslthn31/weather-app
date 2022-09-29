import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from "../Components/MainPage";
const RouterConfig = () => {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default RouterConfig;