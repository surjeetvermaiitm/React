import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function Expenseitem(props) {
  //   const expenseDate = new Date(2022, 10, 16);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 2500000;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </Card>
  );
}

export default Expenseitem;
