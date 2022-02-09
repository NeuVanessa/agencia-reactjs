import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Destinos from './pages/Destinos';
import Promocoes from './pages/Promocoes';
import Contato from './pages/Contato';
import Adm from './pages/Adm';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/destinos" element={<Destinos/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="/promocoes" element={<Promocoes/>}/>
            <Route path="/adm" element={<Adm/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;