import React from 'react'
import {Link} from 'react-router-dom'

export default function BookShelfs() {
  return (
    <div>
         <h1>React Books</h1>
         <Link to="/find">SearchBooks</Link>
    </div>
  )
}
