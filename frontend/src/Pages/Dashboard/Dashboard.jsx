import React, {useState} from 'react'
import { Navbar } from '../../Components/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import './Dashboard.css'

export const Dashboard = ({favorites, clearFavorites}) => {
  const[tasks, setTasks] = useState([]);
  const[newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {

    if (newTask.trim !== " ")
    {
      setTasks(t => [...t, newTask]);
      setNewTask("");      
    }
    
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_,i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if(index > 0) 
    {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if(index < tasks.length - 1) 
    {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className=' bg-white h-screen'>
        <Navbar /> 
        <main className='p-0'>
          <div className='dashboard_container'>


            <div className='todo_card hover:shadow-2xl  rounded-lg bg-blue-100 transition-all overflow-hidden overflow-y-auto'>
              <div className=' px-5 py-5 text-center '>
                <div className='flex justify-between'>
                  <h1 className=' text-5xl mb-6 font-serif text-blue-900'>My Tasks</h1>
                  <div className=' mb-5'>
                    <input className='text-xl bg-white outline outline-1 px-2 py-2 mr-2 rounded-xl'
                      type='text'
                      placeholder='Enter a task...'
                      value={newTask}
                      onChange={handleInputChange}/>
                      <button className=' bg-blue-400 hover:bg-blue-500 transition-all text-white rounded-xl' 
                        onClick={addTask}>
                        Add
                      </button>
                  </div>
                </div>
                
                <ol>
                  {tasks.map((task, index) => 
                    <li className='font-bold text-lg bg-gray-100 outline outline-1 rounded-md py-4 mb-5 flex items-center' key={index}>
                      <FontAwesomeIcon onClick={() => deleteTask(index)} icon={faSquareCheck} className='fa-2x ml-3 hover:cursor-pointer text-blue-600 hover:scale-105 transition-all' />
                      <span className='flex-1'>{task}</span>
                      <FontAwesomeIcon onClick={() => moveTaskUp(index)} icon={faArrowUp} className='fa-2x mr-3 hover:cursor-pointer text-green-600 hover:scale-105'/>
                      <FontAwesomeIcon onClick={() => moveTaskDown(index)} icon={faArrowDown} className='fa-2x mr-3 hover:cursor-pointer text-green-600 hover:scale-105'/>
                    </li>
                  )}
                </ol>
              </div>
            </div>

            <div className='sch_card p-2 bg-blue-100 hover:shadow-2xl transition-all'>
              <p className='text-xl text-blue-800 ml-2 '>Favorited scholarships</p>
              <button className=' self-end mb-5 hover:bg-blue-300 transition-all' onClick={clearFavorites}>clear</button>
              <ul className=' overflow-y-auto p-2'>
              {favorites.map((fav, index) => (
                  <li className=' flex items-center w-full h-10 bg-gray-100 outline outline-1 p-2 mb-1' key={index}>
                    <p className='flex-1'>{fav.title}</p>
                    <a href={fav.apply}><button className=' h-8 w-16 text-xs bg-blue-200 '>Apply</button></a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='col_card p-2 bg-blue-100 hover:shadow-2xl transition-all'>
              <p className='text-xl text-blue-800 ml-2 '>Favorited colleges</p>
              <button className=' self-end mb-5 hover:bg-blue-300 transition-all'>clear</button>
            </div>

            <div className='placeholder_card bg-blue-100 hover:shadow-2xl transition-all'>
                Placeholder
            </div>
          </div>
        </main>
    </div>
  )
}

export default Dashboard
