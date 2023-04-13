import React from 'react';

export default function ListBooks(props) {
  if (props.booksLength < 1) {
    return (
      <div>
        <h2>No matching books</h2>
      </div>
    );
  }

  return (
    <div className='container'>
      {props.results.map(book => (
        <div style={{ display: 'flex', margin: '2rem', alignItems: 'center' }} key={book.id}>
          <img
            src={book.volumeInfo.imageLinks.smallThumbnail}
            alt={book.volumeInfo.title}
            style={{ marginRight: '2rem', width: '100px', height: 'auto' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h5 style={{ marginBottom: '0.5rem' }}>{book.volumeInfo.title}</h5>
            <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.5rem' }}>
              {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : ''}
            </p>
            <select
              name='books'
              id='book-select'
              style={{
                width: 'fit-content',
                padding: '0.5rem',
                backgroundColor: '#eee',
                borderRadius: '4px',
                border: 'none',
                outline: 'none',
              }}
              onChange={e => {
                props.getStatus(e, book);
              }}
            >
              <option value='move' disabled>
                Move to...
              </option>
              <option value='none'>None</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
}
