import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function Expenseitem(props) {
  //   const expenseDate = new Date(2022, 10, 16);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 2500000;

  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem re-evaluated by react");

  // let title = props.title;

  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default Expenseitem;
