import React, { useState } from "react";
import './todolist.css';


const Todolist = ({ todos, delete_todo, updated_todo, complete_todo }) => {
    let [toggle, setToggle] = useState(false);
    let [todoitem, setTodoitem] = useState("");
    let [todoid, setTodoid] = useState(0);
    let[todo,setTodo]=useState({})

    const togglemodel = (item, id,todo) => {
        setToggle(true);
        setTodoitem(item);
        setTodoid(id);
        setTodo(todo)
    }

    return (
        <>
            <div className="taskboxcontainer">
                {todos.map(todo =>
                    <div id="taskbox" key={todo.id}>
                        <div className="box3">
                            <input type="checkbox" onChange={(e) => complete_todo(e, todo.id,todo)}/>
                            <p id="t_task" className={todo.list_status === "completed" ? "text-decoration-line-through" : ""}>{todo.list_item}</p>
                            <button className="btn2" onClick={() => togglemodel(todo.list_item, todo.id,todo)}>EDIT</button>
                            <button className="btn2" onClick={() => delete_todo(todo.id)}>DELETE</button>
                        </div>
                    </div>
                )}
            </div>

            {toggle && <div className="modal-container">
                <div className="modal">
                    <h1 id="title">Edit To-Do List App</h1>
                    <div className="box4">
                        <form onSubmit={(e) => {
                            updated_todo(e,todoid, todoitem);
                            setToggle(false);
                        }}>
                            <input id="inputbox" type="text" value={todoitem} onChange={(e) => setTodoitem(e.target.value)} />
                            <button  className="btn3">Save</button>
                        </form>
                        <button type="button" className="btn5" onClick={() => setToggle(false)}>Cancel</button>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Todolist;
