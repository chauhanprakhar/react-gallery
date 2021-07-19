import axios from 'axios';
import React,{useEffect, useState} from 'react'
import CardGrid from './components/imagesGrid.js'
import SearchBox from './components/search.js'
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loader,setLoader] = useState('flex')
  const [customSearchTitle, setCustomSearchTitle] = useState('');
  const [searchResultsTitle, setSearchResultsTitle] = useState('');
  
  const getData =(title)=> {
    const url = title ?`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5adc0ef7be763da42ce94e17d0a3b3cf&text=${title}&format=json&nojsoncallback=1` 
    : `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=5adc0ef7be763da42ce94e17d0a3b3cf&format=json&nojsoncallback=1`;
    axios.get(url)
    .then(Response => setData(Response.data.photos.photo))
    .then(err=> console.log(err))
    setLoader((data && !data.length) ? 'none' : 'flex');
    setSearchResultsTitle((data && data.length && title) ? `Showing results for "${title}"` : '');
    setCustomSearchTitle(title)
  }
  useEffect(() => {
    getData();
  }, []);
  
  console.log(data)
  return (
    <div className="App">
      <SearchBox fetchCustomImages={getData} searchResultsTitle={searchResultsTitle} />
      <InfiniteScroll
        dataLength={data}
        next={() => getData(customSearchTitle)}
        hasMore
        loader={(
          <img
            style={{ display: loader, objectFit: 'cover', margin: 'auto' }}
            className="img-fluid"
            src="https://media.giphy.com/media/kUTME7ABmhYg5J3psM/giphy.gif"
            alt="loading"
          />
        )}
        endMessage={(
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have browsed through all images.</b>
          </p>
        )}
      >
        <CardGrid image = {data}/>
      </InfiniteScroll>
    </div>
  );
}

export default App;
