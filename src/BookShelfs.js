import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'

export default function BookShelfs(props) {
const [value, setValue] = useState('')

  return (
      
    <div>
      
    
         <div style={{borderBottom: '1px solid #dedede', paddingRight: '3%',paddingleft: '3%',margin: '5%'}}>
         <h1>{props.shelfTitle}</h1>
         </div>
         <div id="shelf" style={{display: 'flex',justifyContent: 'space-around'}}>
         {props.bookList.map(book=>
           <div key={book.id}>
           <img src={book.img} alt="book-cover"></img>
            <h5>
            {book.title}
            </h5>
            <select name="books" id="book-select" value={props.selectValue} style={{width: '40px'}} onChange={(e) =>{props.selectStatus(book);props.getStatus(e)}}>
                <option value="move" disabled>
            Move to...
          </option>
          <option onClick={(e)=> console.log(e.target)} value="currentlyReading">Currently Reading</option>
          <option onClick={(e)=> console.log(e.target)} value="wantToRead">Want to Read</option>
          <option onClick={(e)=> console.log(e.target)} value="read">Read</option>
          <option onClick={(e)=> console.log(e.target)} value="none">None</option>
</select>

           </div>  
              
                   )}
         </div>
     
       
    </div>
 
  )
}
