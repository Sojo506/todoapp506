import React, { useState } from "react";
import Form from "./Form.jsx";
import Todo from "./Todo.jsx";
import styles from "../styles/ListToDo.module.css";

function ListToDo() {
  const [toDos, setToDos] = useState([]);

  const addToDo = (toDo) => {
    console.log(toDo);
    if (toDo.text.trim()) {
      toDo.text = toDo.text.trim();
      setToDos([toDo, ...toDos]);
    }
  };

  const deleteToDo = (id) => {
    setToDos(toDos.filter((t) => t.id !== id));
  };

  const finishToDo = (id) => {
    const update = toDos.map((t) => {
      if (t.id === id) {
        t.finished = !t.finished;
      }
      return t;
    });
    setToDos(update);
  };

  return (
    <>
      <Form onSubmit={addToDo} />
      <div className={styles.listToDoContainer}>
        {toDos.map((toDo) => (
          <Todo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            finished={toDo.finished}
            finishToDo={finishToDo}
            deleteToDo={deleteToDo}
          />
        ))}
      </div>
    </>
  );
}

export default ListToDo;
