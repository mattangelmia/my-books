
import { useState } from 'react';
import './App.css';

import BookShelfs from './BookShelfs';
import {Link, Route, Routes} from 'react-router-dom'
import SearchBooks from './SearchBooks';

function App() {
const [read, setRead] = useState([
{
id: 1,
title: 'My First Coding Book',
img: 'http://books.google.com/books/content?id=qbygDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
}, 
])

const [reading, setReading] = useState([
  {
  id: 2,
  title: 'Coding For Dummies',
  img: 'http://books.google.com/books/content?id=gLVKDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
  }, 
  ])


  const [wantToRead, setWantToRead] = useState([
    {
    id: 3,
    title: 'Coding Literacy',
    img: 'http://books.google.com/books/content?id=YXQsDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
    },
    {
      id: 4,
      title: "Don't Teach Coding",
      img: 'http://books.google.com/books/content?id=rS7fDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
      } 
    ])
  


const [searchString, setSearchString] = useState('')
const [results, setResults] = useState([])
const [isButtonDisabled, setIsButtonDisabled] = useState(true)
const [book, setBook] = useState ({})
const [status, setStatus] = useState("")
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
  
  console.log(booksLength)
  result.items.map(item=>console.log(item.volumeInfo.title))
  })
  }


  const getStatus = (e) =>{
  setStatus(e.target.value)
    



  }

 


  const selectStatus = (book) =>{
    setBook(book)
   

  }


  const statusUpdate = (e,book)=> {
    setStatus(e.target.value)
  
    const selectStatus = (book) =>{
      setBook(book)
      console.log(book.volumeInfo.imageLinks.smallThumbnail)
    }
  
    selectStatus(book)
    if(e.target.value==='wantToRead'){
      console.log('wanna')
      setWantToRead(wantToRead.concat({id: wantToRead[wantToRead.length-1].id + 1, title: book.volumeInfo.title,img: book.volumeInfo.imageLinks.smallThumbnail}))
    }

    else if(e.target.value==='currentlyReading'){
      
      setReading(reading.concat({id: reading[reading.length-1].id + 1, title: book.volumeInfo.title,img: book.volumeInfo.imageLinks.smallThumbnail}))
console.log('reading')

    }

    else if(e.target.value==='read'){
      
console.log('read')
setRead(read.concat({id: read[read.length-1].id + 1, title: book.volumeInfo.title,img: book.volumeInfo.imageLinks.smallThumbnail}))

    }


    
 
    

    }
  


  if(reading.includes(book) && status==='wantToRead' ){
      
     console.log('currently in reading')
      setReading(reading.filter(books=>books !== book))
    setWantToRead(wantToRead.concat(book))
   console.log(status)
 
  }

  // else if(!reading.includes(book) && status==='currentlyReading' ){
      
  //   console.log(book.volumeInfo.title)
     

  
 
  // }





  else if(reading.includes(book) && status==='read' ){
      
    console.log('currently in reading')
    setReading(reading.filter(books=>books !== book))
    setRead(read.concat(book))
   console.log(status)
 
  }



  else if(wantToRead.includes(book) && status==='currentlyReading'){
      setWantToRead(wantToRead.filter(books=>books !== book))
      setReading(reading.concat(book))  
  }

  else if(wantToRead.includes(book) && status==='read'){
    setWantToRead(wantToRead.filter(books=>books !== book))
    setRead(read.concat(book))  
}


  else if(read.includes(book) && status==='currentlyReading'){
    setRead(read.filter(books=>books !== book))
    setReading(reading.concat(book))
  }


  else if(read.includes(book) && status==='wantToRead'){
    setRead(read.filter(books=>books !== book))
    setWantToRead(wantToRead.concat(book))
  }

// const getBookName = (book) =>{
//   console.log('book')
//   console.log(book)
// }

// const getStatusName = (e) => {
//   console.log(e.target.value)
// }




// if(status=== 'wantToRead'){
//   console.log(true)
//    setWantToRead(wantToRead.push(book))

// }
// else{
//   console.log(false)
// }

  return (
    <div className="App">
      <h1>My Books</h1>
      <Link to="/find" >SearchBooks</Link>
     
    
      <Routes>
      <Route exact path='/' element={<><BookShelfs selectValue={'read'} bookList={read} shelfTitle={'Read'} selectStatus={selectStatus} getStatus={getStatus}/><BookShelfs selectValue={'wantToRead'} bookList={wantToRead} shelfTitle={'Want to Read'} selectStatus={selectStatus} getStatus={getStatus}/><BookShelfs bookList={reading} shelfTitle={'Reading'} selectStatus={selectStatus} getStatus={getStatus}/></> }></Route>
      <Route exact path='/find' element={<SearchBooks getStatus={statusUpdate}   booksLength={booksLength} results={results} searchString={searchString} searchBooks={searchBooks} getBooks={getBooks} isButtonDisabled={isButtonDisabled} />}></Route>
      </Routes>

    </div>
  );
}

export default App;
