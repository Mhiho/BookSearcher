import React from 'react';
import BookItem from '../BookItem/BookItem';
import classes from './ListOfBooks.module.scss';
import ErrorBoundary from '../ErrorBoundary';
import _ from 'lodash';

const ListOfBooks = (props) => {
    const list = _.map(props.books,book=>(
      <BookItem
        key={book.id}
        className={classes.item}
        title={book.title}
        img={book.thumbnail}
        authors={book.authors}
        description={book.description}
      />
    ))
    console.log(_.map(props.books, book => book.id))
    return (
      <ErrorBoundary className={classes.row}>
       {list}
      </ErrorBoundary>
    )
}


export default ListOfBooks;
