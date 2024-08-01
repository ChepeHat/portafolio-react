import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import BasePage from './pages/BasePage'
import Formacion from './pages/Formacion'
import NotFoundPage from './pages/NotFoundPage';
import Trabajos from './pages/Trabajos';

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<BasePage />}>
                <Route index element={<Home />} />
                <Route path="*" element={ <NotFoundPage/> } />
                <Route path="formacion" element={<Formacion />} />
                <Route path="experiencia" element={<Trabajos />} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
