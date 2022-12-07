import styles from'./App.module.css';
import Logo from './components/Logo.jsx';
import ListToDo from './components/ListToDo';

function App() {
  return (
    <div className={styles.App}>
      <Logo />

      <div className={styles.taskContainer}>
        <h1>My ToDo List</h1>

        <ListToDo />
      </div>
    </div>
  );
}

export default App;
