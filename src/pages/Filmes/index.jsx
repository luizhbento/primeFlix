import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import './filmes.css'
import { toast } from 'react-toastify'

const Filmes = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadFilme() {
      await api.get('/movie/'+id, {
        params:{
          api_key: "87089caa51a114a70fb2e6c3cb4594a2",
          language: "pt-br",
        }
      }).then((response)=>{
        setFilme(response.data);
        setLoading(false);
      }).catch(()=>{
        // Manda pra página inicial.
        navigate('/', { replace: true });
      })
    }

    loadFilme()
  }, [id, navigate])

  const salvarFilme = () => {
    const minhaLista = localStorage.getItem('@primeFlix');
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id );

    if(hasFilme){
      toast.warn("O filme já está salvo.")
      return;
    }
    
    filmesSalvos.push(filme);
    localStorage.setItem("@primeFlix", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo.")
    
  }

  if (loading) {
    return(
      <div className='filme-info'>
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }

  return (
    <div className='filme-info'>
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
      <h3>Sinopse:</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {(filme.vote_average.toFixed(1))} / 10</strong>
      <div className="area-button">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a target='_blank' rel='external' href={`https://www.youtube.com/results?search_query=${filme.title}`}>Trailer</a>
        </button>
      </div>
    </div>
  )
}

export default Filmes