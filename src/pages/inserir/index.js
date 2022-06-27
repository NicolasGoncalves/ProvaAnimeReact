import { useState } from "react"
import { InserirAnimes } from "../../api/animeAPI"

import { useNavigate } from "react-router-dom";

export default function Index(){
    const [nome,setNome ]= useState('');
    const navigate=useNavigate();

    async function clickCadastrar(){
        try {
            const resp=await InserirAnimes(nome);

            alert('Anime cadastrado com sucesso')
        } catch (err) {
            alert(err.message)
        }
        
    }

    function clickHome(){
        navigate('../')
    }

    return(
        <main>
            <h1> Cadastrar Animes </h1>
            <div>
                <input type='text' placeholder="Nome do Anime" value={nome} onChange={e => setNome(e.target.value)}/>
            </div>
            <div>
                <button onClick={clickCadastrar}>
                    Cadastrar
                </button>
            </div>

            <div>
                <button onClick={clickHome}>
                    Home
                </button>
            </div>
        </main>
    )
}