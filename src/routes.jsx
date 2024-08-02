import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import BasePage from './pages/BasePage'
import Formacion from './pages/Formacion'
import NotFoundPage from './pages/NotFoundPage';
import Trabajos from './pages/Trabajos';
import Proyectos from './pages/Proyectos'
import InfoProyecto from './pages/InfoProyecto'

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<BasePage />}>
                <Route index element={<Home />} />
                <Route path="*" element={ <NotFoundPage/> } />
                <Route path="formacion" element={<Formacion />} />
                <Route path="experiencia" element={<Trabajos />} />
                <Route path="proyectos" element={<Proyectos />}>
                    <Route path="proyectos/:proyecto" element={<InfoProyecto />} />
                </Route>
            </Route>
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
