import React from "react";
import './todosearch.css';
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoSearch = ({ add_todo }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    return (
        <div className="maincontainer">
            <div id="box1">
                <form action="" onSubmit={handleSubmit((data) => {
                    add_todo(data);
                    reset()
                })}>
                    <div className="container2">
                        <input className="task" id="inputbox" type="text" placeholder="Enter Task" {...register("list_item", { required: true })} />
                        <div className="btncontainer">
                            <button id="btn">ADD</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default TodoSearch;
