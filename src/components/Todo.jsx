import React from "react";
import styles from '../styles/Todo.module.css';
import { AiOutlineClose } from "react-icons/ai";

function Todo({ id, text, finished, finishToDo, deleteToDo }) {
  return (
    <div className={
      finished 
      ? `${styles.todoContainer} ${styles.finishedIt}`
      : styles.todoContainer
    }>
      <div 
        className={styles.todoText}
        onClick={() => finishToDo(id)}
      >
        {text}
      </div>

      <div onClick={() => deleteToDo(id)} >
        <AiOutlineClose className={styles.todoIcon} />
      </div>
    </div>
  )
}

export default Todo;