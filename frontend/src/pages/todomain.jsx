import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Todolist from '../components/todolist/todolist';
import Todosearch from '../components/todolist/todosearch';
import Todostatus from '../components/todolist/todostatus';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Todomain(){
    const [todos, setTodos] = useState([]);
    const [errors, setErrors] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  
  
  
    useEffect(() => {
        const userId = localStorage.getItem("user");
        console.log(userId);
        axios.get(`/search?user_id=${userId}`)
          .then(res => {setTodos(res.data);toast.success("Welcome");})
          .catch(err => setErrors(err.message));
      }, []);
      
      
    
    

    let deletetodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id))
      axios.delete("/search/" + id)
        .catch(err => setErrors(err.message))
    }
  
    let addtodo = (data) => {
      const userId = localStorage.getItem("user");
    
      data = {
        ...data,
        list_user: userId,
        list_status: "notcompleted" 
      };
    
      axios.post("/search/", data)
        .then(res => {
          axios.get(`/search?user_id=${userId}`)
            .then(res => setTodos(res.data))
            .catch(err => setErrors(err.message));
        })
        .catch(err => setErrors(err.message));
    };
    
    
  
    let updatetodo = (e, id, new_task, todo) => {
      let updateduser = { ...todo, list_item: new_task, list_status: "notcompleted" };
      setTodos(todos.map(t => t.id === id ? updateduser : t));
      const updatedtodo = { ...todo, list_item: new_task }
      axios.patch("/search/" + id, updatedtodo)
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }
  
    const completetodo = (e, id, todo) => {
      if (e.target.checked) {
        console.log("okay")
        setTodos(todos.map(todo => todo.id == id ? { ...todo, list_status: "completed" } : todo))
        const updatedtodo = { ...todo, list_status: "completed" }
        axios.patch("/search/" + id, updatedtodo)
      } else {
        console.log("notokay")
        setTodos(todos.map(todo => todo.id == id ? { ...todo, list_status: "notcompleted" } : todo))
        const updatedtodo = { ...todo, list_status: "completed" }
        axios.patch("/search/" + id, updatedtodo)
      }
    }
  
    let filtertodo = (text) => {
      setTodos(todos.filter(todo => todo.list_status === text))
    }
    
    const resetTodo = () => {
      const userId = localStorage.getItem("user");
      axios.get(`/search?user_id=${userId}`)
        .then(res => setTodos(res.data))
        .catch(err => setErrors(err.message));
    };
    
  
    return(
        <div>
          <ToastContainer />
            <Todostatus filter_todo={filtertodo} reset_todo={resetTodo} is_LoggedIn={isLoggedIn} />
            <Todosearch add_todo={addtodo} />
            <Todolist todos={todos} delete_todo={deletetodo} updated_todo={updatetodo} complete_todo={completetodo} />   
        </div>
    );
}

export default Todomain;
