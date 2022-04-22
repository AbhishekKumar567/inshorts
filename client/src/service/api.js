import axios from 'axios'
 
const URL = "https://ichat-apps.herokuapp.com/"


export const getNews = async (page,size=5) =>{

    try{
        return await axios.get(`${URL}news?page=${page}&size=${size}`)

    }
    catch(e){
        console.log(e)
    }
}
