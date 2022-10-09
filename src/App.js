// import logo from './logo.svg';
import './App.css';
import  Title  from './components/Title';
import { Suzi } from './components/Suzi';
import React, { useState } from 'react';
import { InputForm } from './components/InputForm';
import { TodoList } from './components/TodoList';
import { Sinobu } from './components/Sinobu';






function App() {

const [taskList, setTaskList] = useState([]);

const [suzi, setSuzi] = useState(0);

const [sinobu, hiramatu] = useState("sukebe");
  return (
    <div className="App">
     <Title />
     <Sinobu sinobu={sinobu} setSinobu={hiramatu} />
     <Suzi suzi={suzi} setSuzi={setSuzi}/>
     <InputForm taskList={taskList} setTaskList={setTaskList}/>
     <TodoList />
    </div>
  );
}

export default App;
