import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import ListBooks from './ListBooks';

function App() {
const [searchString, setSearchString] = useState('')
const [results, setResults] = useState([])
const [booksLength, setBookLength] = useState(0)


const searchBooks = (e) =>{

  setSearchString(e.target.value)

}


  const getBooks= ()=>{
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchString}&startIndex=0&maxResults=25&key=AIzaSyCAeLhuL-3SApWpwdugiXCOO93F3utnx2w`)
    .then(response => response.json())
    .then(result => {
  
  setResults(result.items)
  setBookLength(1)
  console.log(results)
  console.log(booksLength)
  result.items.map(item=>console.log(item.volumeInfo.title))
  })
  }

  console.log(results)


  return (
    <div className="App">
    <h1>React Books</h1>
    <input type="text" value={searchString} onChange={searchBooks}></input>
    <button onClick={getBooks}>search</button>
    <ListBooks results={results} booksLength={booksLength}/>
  
    </div>
  );
}

export default App;
