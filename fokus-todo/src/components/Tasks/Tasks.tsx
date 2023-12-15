import { useState } from "react";
import './Tasks.css';
import addLilas from '../../assets/Add_lilas.png';
import deleteImg from '../../assets/delete.png';

function Tasks() {

  const [inputTask, setInputTask] = useState<string>('');
  const [listTask, setListTask] = useState<Array<string>>([]);
  
  const handleClick = () => {
    if (inputTask === '') {
      alert('Digite uma tarefa');
      return;
    } else {
    setListTask([...listTask, inputTask]);
    setInputTask('');
    }
  }

  const deleteTask = (taskToDelete: string) => {
    setListTask(listTask.filter((task) => task !== taskToDelete));
  }

  return (
    <>
    <div className="container-tasks">
      <div className="task-list">
        <h1 className="task-list-text">Lista de tarefas:</h1>
         {listTask.map((task, index) => 
        <div className="add-task" key={index}>
          <input className="check-list" type="checkbox" name="completed" id="completed" />
          <h1>{task}</h1>
          <img
                className="btn-del"
                src={ deleteImg }
                alt="Ícone de deletar"
                onClick={() => deleteTask(task)}
              />
        </div>
        )
      }
      </div>
      <div className="add-input-task">
      <h1>Adicionando tarefa</h1>
      <label htmlFor="task"></label>
      <input 
        type="text" 
        name="task" 
        id="task" 
        placeholder="No que você está trabalhando?"
        value={ inputTask }
        onChange={(event) => setInputTask(event.target.value)}
      />
      </div>
    </div>
      <div>
        <button className="add-btn" onClick={ handleClick }><img src={addLilas} alt="sinal de adicionar"/>Adicionar nova tarefa</button>
      </div>
    </>
  )
}
    
    export default Tasks;
    
    