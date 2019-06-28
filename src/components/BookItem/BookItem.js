import React from 'react';
import classes from './BookItem.module.scss';
import ErrorBoundary from '../ErrorBoundary';



const bookItem = (props) => (


  <ErrorBoundary  className={classes.item}>
    <div key={props.key}>
      <h3 className={classes.title}>{props.title ? props.title : "Brak tytułu"}</h3>
      <div className={classes.frame}>
      <img src={props.img} alt="pff"/>
      </div>
      <div className={classes.authors}>{props.authors ? props.authors.map(author=>( <h4>{author}</h4> )) : "Brak autora"}</div>
    <p className={classes.description}>{props.description? props.description.replace(/^(.{100}[^\s]*).*/, "$1") : "Brak opisu."}</p>
    </div>
  </ErrorBoundary>

)

export default bookItem;
