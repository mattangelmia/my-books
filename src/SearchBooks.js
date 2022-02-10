import React from 'react'
import ListBooks from './ListBooks'
import {Link} from 'react-router-dom'

export default function SearchBooks(props) {
  return (
    <div>
<div>
      <div style={{display: 'flex'}}>
        <Link to='/'>
      <img src="https://4r6l7rrmjx.csb.app/icons/arrow-back.svg" alt="backarrow" style={{height: '40px'}}></img>
      </Link>
      <input type="text" value={props.searchString} onChange={props.searchBooks} style={{width: '100vw'}}></input>
      <button onClick={props.getBooks} disabled={props.isButtonDisabled}>search</button>
      </div>
    </div>

<ListBooks results={props.results} booksLength={props.booksLength}/>
        
    </div>
  )
}
