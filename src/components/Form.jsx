import React, { useState } from 'react';
import styles from '../styles/Form.module.css';
import { v4 as uuidv4 } from 'uuid'

function Form(props) {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    const newToDo = {
      id: uuidv4(),
      text: input,
      finished: false
    }

    props.onSubmit(newToDo);
  }

  return (
    <form 
      className={styles.form}
      onSubmit={handleSubmit}    
    >
      <input 
        className={styles.inputForm}
        type='text'
        placeholder='Write a ToDo'
        onChange={handleChange}
      />

      <button
        className={styles.buttonForm}
        type='submit' >
          Add
      </button>
    </form>
  )
}

export default Form;