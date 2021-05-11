import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {

  // React manages state independent of component so it survives rerendering
  const [ titleInput, setTitleInput ] = useState("");
  const [ amountInput, setAmountInput ] = useState(""); // input field still returns string even if number

  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({title: titleInput, amount: amountInput});
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input 
              type="text" 
              id="title" 
              value={titleInput} 
              onChange={event => {
                setTitleInput(event.target.value);
              }} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input 
              type="number" 
              id="amount" 
              value={amountInput} 
              onChange={event => {
                setAmountInput(event.target.value);
              }} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
