import { useState, useEffect } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import { RiDeleteBin6Line } from 'react-icons/ri';
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
  // Проверка на колличество введеных знаков
  const setValueInputToState = (value) => {
    (task.length < 40)
    ? setTask(value)
    : alert("Слишком длинная запись!")
  };
  // Создание task
  const setTaskToState = () => {
    if(task && task.trim()) {
      setTasks([
        ...tasks, 
        {
          task,
          id: uniqueID(),
          color: getColor(),
          defaultPosition: { x:0, y:0 },
          isComplete: false,
          isWarrning: false,
        }        
      ]);
      setTask('');
    } else {
      alert('Введите задачу');
      setTask('');
    }
  };
  // Удаление task
  const onClickRemoveTask = (id) => {
    setTasks( tasks.filter((task) => task.id !== id) );
  };
  // Отметить task как "важная" 
  const onClickWarningTask = (id) => {
    const createWarningTasks = tasks.map((task) => (
      (task.id === id) 
      ? (task.isWarrning = !task.isWarrning) 
      : task
    ))
    setTasks(createWarningTasks);
  };
  // Отметить task как "Выполнено" 
  const onClickCompleteTask = (id) => {
    const createCompleteTasks = tasks.map((task) => (
      (task.id === id) 
      ? (task.isComplete = !task.isComplete) 
      : task
    ))
    setTasks(createCompleteTasks);
  };
  // Запоминание позиции каждой task при перемещении
  const updatePosition = (data, id) => {
    const createUpdatePosition = tasks.map((task) => (
      (task.id === id) 
      ? (task.defaultPosition = { x:data.x, y:data.y }) 
      : task
    ))
    setTasks(createUpdatePosition);
  };
  // Нажатием на клавишу 'Enter' добавляется новая task
  const keyPressOnInput = (e) => {
    e.key === 'Enter' && setTaskToState();
  };
  
  return (
    <div className="App">
      <div className="App__tasks">
        {tasks.map((task) => {
          return (
            <Draggable
              key={task.id}
              grid={[10, 10]}
              defaultPosition={task.defaultPosition}
              onStop={(_, data) => { updatePosition(data, task.id) }}
            >
              <div className="App__task-drag">
                <div 
                  style={{backgroundColor: task.color}}
                  className={!task.isComplete 
                    ? "App__task-title" 
                    : "App__task-title complete--active"} >
                  <p className="App__task-text">{task.task}</p>
                </div>
                <div className="App__btn-group">
                  <button
                    className={!task.isComplete 
                      ? "App__btn-complete" 
                      : "complete-btn--active"}
                    onClick={() => onClickCompleteTask(task.id)}
                    title="Выполнено"
                  >
                    <MdDone />
                  </button>
                  <button
                    className={!task.isWarrning 
                      ? "App__btn-warning" 
                      : "warning-btn--active"}
                    onClick={() => onClickWarningTask(task.id)}
                    title="Отметить как важное"
                  >
                    <RiErrorWarningLine />
                  </button>
                  <button
                    className="App__btn-remove"
                    onClick={() => onClickRemoveTask(task.id)}
                    title="Удалить"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </Draggable>
          )
        })}
      </div>
      <div className="App__header">
        <input
          className="App__input"
          type="text"
          value={task}
          placeholder="Введите задачу..."
          onChange={(e) => setValueInputToState(e.target.value)}
          onKeyPress={(e) => keyPressOnInput(e)}
        />
        <button
          className="App__btn-set"
          onClick={setTaskToState}
        >
          Добавить
        </button>
      </div>

        
    </div>
  );
}

export default App;
