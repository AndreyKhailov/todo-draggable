import { useState, useEffect } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';
import { MdDone } from 'react-icons/md';
import Draggable from 'react-draggable';

import './App.css';

import { uniqueID } from './asserts/uniqueID';
import { getColor } from './asserts/getColor';



function App() {
  // Состояния котпонента
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  // Если создается новая задача, то она записывается в localStorage браузера
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);
  // Создание task
  const setTaskToState = () => {
    if(task.trim() !== '') {
      setTasks([
        ...tasks, 
        {
          task,
          id: uniqueID(),
          color: getColor(),
          defaultPosition: { x:0, y:0 },
        }        
      ])
      setTask('');
    } else {
      alert('Введите задачу');
      setTask('');
    }
  };
  // Удаление task
  const removeTask = (id) => {
    setTasks( tasks.filter((task) => task.id !== id) );
  };
  // Редактирование task
  const editTask = () => {
    console.log("editTask");
  };
  // Отметить task как "важная" 
  const warningTask = () => {
    console.log("warningTask");
  };
  // Отметить task как "Выполнено" 
  const doneTask = () => {
    console.log("doneTask");
  };
  // Запоминание позиции каждой task при перемещении
  const updatePosition = (data, index) => {
    let newArr = [...tasks];
    newArr[index].defaultPosition = { x:data.x, y:data.y };
    setTasks(newArr);
  };
  // Нажатием на клавишу 'Enter' добавляется новая task
  const keyPressOnInput = (e) => {
    e.key === 'Enter' && setTaskToState();
  };

  return (
    <div className="App">
      <header className="App__header">
        <input
          className="App__input"
          type="text"
          value={task}
          placeholder="Введите задачу..."
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={(e) => keyPressOnInput(e)}
        />
        <button
          className="App__btn-set"
          onClick={setTaskToState}
        >
          Добавить
        </button>
      </header>
      {
        tasks.map((task, index) => {
          return (
            <Draggable
              key={index}
              defaultPosition={task.defaultPosition}
              onStop={(_, data) => { updatePosition(data, index) }}
            >
              <div className="App__task-drag">
                <span className="App__task-title">{task.task}</span>
                <div className="App__btn-group">
                  <button
                    className="App__btn-done"
                    onClick={() => doneTask(task.id)}
                    title="Выполнено"
                  >
                    <MdDone />
                  </button>
                  <button
                    className="App__btn-edit"
                    onClick={() => editTask(task.id)}
                    title="Править"
                  >
                    <BiEdit />
                  </button>
                  <button
                    className="App__btn-warning"
                    onClick={() => warningTask(task.id)}
                    title="Отметить как важное"
                  >
                    <RiErrorWarningLine />
                  </button>
                  <button
                    className="App__btn-remove"
                    onClick={() => removeTask(task.id)}
                    title="Удалить"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </Draggable>
          )
        })
      }

    </div>
  );
}

export default App;
