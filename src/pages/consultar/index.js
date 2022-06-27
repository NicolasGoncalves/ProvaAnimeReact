import { useEffect, useState } from "react"
import { ConsultarAnimes } from "../../api/animeAPI"
import { useNavigate } from "react-router-dom";

export default function Index(){
    const [animes,setAnimes]=useState([]);
    const navigate=useNavigate();

    async function consultar(){
        const resp=await ConsultarAnimes();
        setAnimes(resp);
    }

    useEffect(() => {
        consultar()
    },[])

    function clickHome(){
        navigate('../')
    }

    return(
        <main>
            <h1> Consultar Animes </h1>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th> ID </th>
                            <th> Nome </th>
                        </tr>
                    </thead>

                    <tbody>
                    {animes.map(item=>
                            <tr>
                                <td>{item.id} </td>
                                <td>{item.nome} </td>
                            </tr>
                        )}
                        
                    </tbody>
                </table>
            </div>

            <div>
                <button onClick={clickHome}>
                    Home
                </button>
            </div>
        </main>
    )
}