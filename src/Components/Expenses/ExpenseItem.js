import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

//React uses Camel Sytle
const ExpenseItem = (props) => {
 
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React: ' + props.title);

    const clickHandler = () => {
      setTitle('Updated!');
      console.log('title: ' + title);
    }

  /*{react only allow return only one root element}
    you can use <div></div> around all the elements you want to return to follow this rule
    */
  return (
    /*
    The following html alike code is not html, it's 'javascript'
    Therefore, we don't use 'class=""' in <div> but 'className=""'
    */
   /*
   you can run basic javascript expression within the browser {}
   */
    <Card className="expense-item">
    <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
