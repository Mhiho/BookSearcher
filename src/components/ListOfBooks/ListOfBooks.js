import React from 'react';
import BookItem from '../BookItem/BookItem';
import classes from './ListOfBooks.module.scss';
import ErrorBoundary from '../ErrorBoundary';
import _ from 'lodash';

const ListOfBooks = (props) => {
    const list = _.map(props.books,book=>(
      <BookItem
        className={classes.item}
        key={book.id}
        title={book.title}
        img={book.thumbnail}
        authors={book.authors}
        description={book.description}
      />
    ))
    return (
      <ErrorBoundary className={classes.row}>
       {list}
      </ErrorBoundary>
    )
}


export default ListOfBooks;
