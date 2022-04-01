
import {useEffect,useState} from 'react'
import { getNews } from '../service/api'
import { Art } from './Art'
import InfiniteScroll from "react-infinite-scroll-component"

export const Article = () => {

    const[news,getNew] = useState([])
    const [page,setPage] = useState(0)
     
    useEffect(()=>{
      dailyNews()
    },[page])

    const dailyNews = async () =>{
       const resp = await getNews(page)
       getNew([...news,...resp.data])
    }

  return (
    <InfiniteScroll
    dataLength={news.length}
    next={()=>setPage(page=>page+1)}
    hasMore={true}
    >
    {
    news.map(article => {
      return  <Art article={article}/>
    })
   }
   </InfiniteScroll>
  )
}
