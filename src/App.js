import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import ListBooks from './ListBooks';
import BookShelfs from './BookShelfs';
import {BrowserRouter as Router,Link, Route, Routes} from 'react-router-dom'
import SearchBooks from './SearchBooks';

function App() {
const [searchString, setSearchString] = useState('')
const [results, setResults] = useState([])
const [isButtonDisabled, setIsButtonDisabled] = useState(true)

const [booksLength, setBookLength] = useState(0)


const searchBooks = (e) =>{

  setSearchString(e.target.value)
  if(searchString.length<3){
    setIsButtonDisabled(true)
  }

  else{
    setIsButtonDisabled(false)
  }

  console.log(e.target.value)

}


  const getBooks= ()=>{
    setSearchString('')
    setIsButtonDisabled(true)

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
      <h1>My Books</h1>
    
      <Routes>
      <Route  path='/' element={<BookShelfs/>}></Route>
      <Route path='/find' element={<SearchBooks booksLength={booksLength} results={results} searchString={searchString} searchBooks={searchBooks} getBooks={getBooks} isButtonDisabled={isButtonDisabled} />}></Route>
      </Routes>
     
   
    
  
  
    </div>
  );
}

export default App;
