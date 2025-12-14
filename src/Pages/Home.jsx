import React, { useState, useEffect } from "react";
import NewsItem from "../Component/NewsItem";
import { useSearchParams } from "react-router-dom"
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home() {
  let[page,setPage]=useState(1);
  let [articles, setArticles] = useState([]);
  let [totalResults, setTotalResults] = useState(0);
  let[q,setQ]=useState("");
  let [language,setLanguage]=useState("");
  let [searchParams]=useSearchParams();
  async function fetchNews(q,language) {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&pageSize=24&page=1&language=${language}&sortBy=publishedAt&apiKey=a5fc602c848d42f2b6cc70b23f7e2394`);
     response = await response.json();
     if(response.status==="ok"){
      setArticles(response.articles);
      setTotalResults(response.totalResults);
     }
    }
    async function fetchData(){
      setPage(page+1);
      let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&pageSize=24&page=${page}&language=${language}&sortBy=publishedAt&apiKey=a5fc602c848d42f2b6cc70b23f7e2394`);
     response = await response.json();
     if(response.status==="ok"){
      setArticles(articles.concat(response.articles));
      
     }

    }
  useEffect(() => {
    let q=searchParams.get("q") ?? "All";
    let language=searchParams.get("language") ?? "hi";
    setQ(q);
    setLanguage(language);
    fetchNews(q,language);
  }, [searchParams]);
  return (
    <>
      <div className="conatainer-fluid my-3">
        <h5 className="text-center p-2 bg-primary text-light text-capitalize">
          {q} News Articels
        </h5>
        <InfiniteScroll
  dataLength={articles.length} //This is important field to render the next data
  next={fetchData}
  hasMore={articles.length<totalResults}
  loader={<h4>Loading...</h4>}
>
        <div className="row">
          {articles.map((item, index) => {
            return <NewsItem key={index}
            source={item.source?.name}
            title={item.title}
            description={item.description}
            pic={item.urlToImage}
            url={item.url}
            date={item.publishedAt} 
             />;
          })}
        </div>
        </InfiniteScroll>
      </div>
    </>
  );
}
