import axios from 'axios'
const api=axios.create({
    baseURL:'http://localhost:5001'
})

export async function InserirAnimes(nome){
    const resp=await api.post('/anime',{
        nome:nome
    })
    return resp.data
}

export async function ConsultarAnimes(){
    const resp=await api.get('/anime');
    return resp.data;
}