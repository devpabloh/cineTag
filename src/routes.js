import Inicio from "pages/Inicio.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRouters (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouters;