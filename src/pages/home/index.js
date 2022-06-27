import { useNavigate } from "react-router-dom"

export default function Index(){
    const navigate=useNavigate();

    function clickInserir(){
        navigate('./inserir')
    }

    function clickConsultar(){
        navigate('./consultar')
    }

    return(
        <main>
            <h1> Home </h1>

            <div>
                <button onClick={clickInserir}>
                    Cadastrar Animes
                </button>
            </div>

            <div>
                <button onClick={clickConsultar}>
                    Consultar Animes
                </button>
            </div>
        </main>
    )
}