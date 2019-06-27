import React from 'react';
import classes from './BookItem.module.scss';

const bookItem = ({book}) => (
  <div className={classes.item}>
    <h3 className={classes.title}>{book.title}</h3>
    <div className={classes.frame}>
    <img src={book.thumbnail} alt="photo"/>
    </div>
    <p className={classes.description}>{book.description? book.description.replace(/^(.{100}[^\s]*).*/, "$1") : "Brak opisu."}</p>
  </div>
)

export default bookItem;
