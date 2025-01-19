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
            <Route path="/" element={<Home/>} />
            <Route path="/filme/:id" element={<Filmes/>} />
            <Route path="/favoritos" element={<Favoritos/>} />

            <Route path="*" element={<Error/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp