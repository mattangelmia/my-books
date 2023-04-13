import React from 'react';
import ListBooks from './ListBooks';
import { Link } from 'react-router-dom';

export default function SearchBooks(props) {
  return (
    <div>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem'
          }}
        >
          <Link to="/">
            <img
              src="https://4r6l7rrmjx.csb.app/icons/arrow-back.svg"
              alt="backarrow"
              style={{ height: '40px' }}
            ></img>
          </Link>
          <div
            style={{
              flex: '1',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <input
              type="text"
              value={props.searchString}
              onChange={props.searchBooks}
              style={{
                width: '100%',
                height: '40px',
                padding: '0.5rem',
                border: 'none',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
              }}
              placeholder="Search for books"
            ></input>
          </div>
          <button onClick={props.getBooks} disabled={props.isButtonDisabled} style={{backgroundColor: '#3498db', border: 'none', color: '#fff', padding: '10px 20px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', borderRadius: '5px', cursor: 'pointer', transition: 'all 0.3s ease'}}>
  search
</button>

        </div>
      </div>

      <ListBooks
        results={props.results}
        booksLength={props.booksLength}
        selectStatus={props.selectStatus}
        getStatus={props.getStatus}
      />
    </div>
  );
}
