import React, { useRef , useState} from "react";
import classes from "./MealsItemForm.css";
import Input from "../../UI/Input";

const MealsItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid,setAmountIsValid] = useState(true)
  const submitHandler = (event) => {

    event.preventDefault();

    const enteredAmout = amountInputRef.current.value;
    const enterdAmountNo = +enteredAmout;

    if (
      enteredAmout.trim().lenght === 0 ||
      enterdAmountNo < 1 ||
      enterdAmountNo > 5
    ) {
      setAmountIsValid(false)
      return;
    }

    props.onAddToCart(enterdAmountNo)
    
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>please enter currect value</p>}
    </form>
  );
};

export default MealsItemForm;
