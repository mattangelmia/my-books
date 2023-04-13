import React from 'react';

export default function BookShelfs(props) {
  return (
    <div>
      <div style={{ borderBottom: '1px solid #dedede', padding: '10px', margin: '5%' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>{props.shelfTitle}</h1>
      </div>
      <div
        id="shelf"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          backgroundColor: '#f5f5f5',
          padding: '20px',
          borderRadius: '5px',
        }}
      >
        {props.bookList.map((book) => (
          <div key={book.id} style={{ textAlign: 'center' }}>
            <img
              src={book.img}
              alt="book-cover"
              style={{ width: '120px', height: '180px', objectFit: 'cover', marginBottom: '10px' }}
            ></img>
            <h5 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>{book.title}</h5>
            <select
              name="books"
              id="book-select"
              value={props.selectValue}
              style={{
                width: '120px',
                height: '30px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                backgroundColor: '#fff',
                color: '#333',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                outline: 'none',
              }}
              onChange={(e) => {
                props.selectStatus(book);
                props.getStatus(e);
              }}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option onClick={(e) => console.log(e.target)} value="currentlyReading">
                Currently Reading
              </option>
              <option onClick={(e) => console.log(e.target)} value="wantToRead">
                Want to Read
              </option>
              <option onClick={(e) => console.log(e.target)} value="read">
                Read
              </option>
              <option onClick={(e) => console.log(e.target)} value="none">
                None
              </option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
