
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Inserir from './pages/inserir'
import Consultar from './pages/consultar'



export default function routes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/inserir" element={<Inserir/>}/>
                <Route path="/consultar" element={<Consultar/>}/>
            </Routes>
      </BrowserRouter>
    )
}