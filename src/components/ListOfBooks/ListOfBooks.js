import React from 'react';
import BookItem from '../BookItem/BookItem';
import classes from './ListOfBooks.module.scss';


const ListOfBooks = (props) => {
    const list = props.books.map((book)=>(
      <BookItem
        className={classes.item}
        key={book.id}
        book={book}
      />
    ))
    return (
      <div className={classes.row}>
       {list}
      </div>
    )
}




export default ListOfBooks;
