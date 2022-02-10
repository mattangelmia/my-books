import React from 'react'



export default function ListBooks(props) {




if(props.booksLength < 1){
  

    return (
        <div>
            
            <h2>No matching books</h2>
        </div>
    )

}

    return (
        
        <div className='container'>
              {props.results.map(book=>
            <div style={{display: 'flex', marginTop:'5vh'}} key={book.id}>
                <div style={{margin:'2Rem'}}>
                    <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book-cover"></img>
                <h5>{book.volumeInfo.title}</h5>
                <select name="books" id="book-select" style={{width: '40px'}}>
                <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
</select>
                </div>
    
  
    
        </div>
            )}
        </div>


      
        
      )


     
}
