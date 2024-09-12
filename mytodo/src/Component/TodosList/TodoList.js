import { useDispatch, useSelector } from "react-redux"
import {  filteredTodoSelector, todoReducer, todoSelector } from "../../Redux/slice/todoSlice"
import { useEffect } from "react";
import { todoActions } from "../../Redux/slice/todoSlice";
import TodoChild from "../TodoChild/TodoChild";

function TodoList() {

    const todos = useSelector(todoSelector);
    const filteredTodos = useSelector(filteredTodoSelector);

    const disptach = useDispatch(todoReducer);

    useEffect(() => {
       
    }, [todos, filteredTodos])

    return (
        <>
            <div>
                {filteredTodos.length != 0 ?
                        filteredTodos.map((todo) => (

                            <TodoChild todo={todo} />
                        ))
                    :
                        todos.map((todo) => (
                            <TodoChild todo={todo} />
                        ))
                }
            </div>
        </>
    )
}

export default TodoList;