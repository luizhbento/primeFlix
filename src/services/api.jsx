//Base da URL: https://api.themoviedb.org/3/
//URL da API: movie/now_playing?api_key=87089caa51a114a70fb2e6c3cb4594a2&language=pt-BR

import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export default api;