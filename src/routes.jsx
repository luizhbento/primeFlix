import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filmes from "./pages/Filmes";
import Header from "./components/Header";
import Error from "./pages/Error";
import Favoritos from "./pages/Favoritos";

import React from 'react'

const RoutesApp = () => {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/primeFlix/" element={<Home/>} />
            <Route path="/primeFlix/filme/:id" element={<Filmes/>} />
            <Route path="/primeFlix/favoritos" element={<Favoritos/>} />

            <Route path="primeFlix/*" element={<Error/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp