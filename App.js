import logo from './logo.svg';
 import React,{useState,useEffect} from 'react'
const mainUrl = "https://jsonplaceholder.typicode.com/posts?";
const App = () => {
 
  const [Allpost, setAllPost] = useState([])
  const [pagelimit, setPageLimit] = useState(16);
  const [pagecount, setPageCount] = useState(0);
 
  const fectData = async () => {
    const url = `${mainUrl}_limit=${pagelimit}&_page=${pagecount}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(pagecount,"n")
    setAllPost((oldpage) => {
       
      if (pagecount === 1) {
        return data;
      }
      else {
        return [...Allpost, ...data];
      }
    });
  }
    
  useEffect(() => {
    fectData()
  }, [pagecount]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      const {scrollTop, clientHeight,scrollHeight } = document.documentElement;
      // console.log(scrollTop+clientHeight, "d")
        
      // console.log(scrollHeight, "d2")
      if (scrollTop + clientHeight >= scrollHeight - 2) {
        alert("d")
        setPageCount((oldpage)=>oldpage+1)
      }
    })
    return () => { window.removeEventListener('scroll', event); }
  
  }, [])
  return (
    <main className="main">
    <div className="main-div">
      {Allpost.map((post) => <h1>{ post.title}</h1>)}
    </div>
  </main>
  );
}

export default App



 