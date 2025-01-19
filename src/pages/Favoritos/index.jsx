import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './favoritos.css'

const Favoritos = () => {

    const [filmes, setFilmes] = useState([]);

    useEffect( () => {

        const filmesSalvos = localStorage.getItem("@primeFlix");
        setFilmes(JSON.parse(filmesSalvos) || []);

    }, [] );

    const excluirFilme = (id)=>{
        let filmesFiltro = filmes.filter((item)=>{
            return (item.id !== id);
        });
        setFilmes(filmesFiltro);
        localStorage.setItem("@primeFlix", JSON.stringify(filmesFiltro));
        toast.success("Filme excluído.")
    }

  return (
    <div className="meus-filmes">
        <h1>Meus filmes:</h1>

        {filmes.length === 0 && <span>Nenhum filme salvo.</span>}

        <ul>
            {filmes.map((filme)=>{
                return(
                    <li key={filme.id}>
                        <span>{filme.title}</span>
                        <div>
                            <Link to={`/filme/${filme.id}`} >Ver Detalhes</Link>
                            <button onClick={() => excluirFilme(filme.id)} >Excluir</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Favoritos