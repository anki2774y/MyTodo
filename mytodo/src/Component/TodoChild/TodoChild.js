import { useDispatch } from "react-redux"
import { todoReducer, todoActions } from "../../Redux/slice/todoSlice"

function TodoChild({todo}) {

    const disptach = useDispatch(todoReducer);


    const deleteTodo = (id) => {
        disptach(todoActions.deleteTodo(id))
    }
    console.log("Todo")

    console.log(todo);

    return (
        <div key={todo.id} style={{border: '2px solid red', width: '30%'}}>
            <div>
                <span>
                    <p>{todo.label}</p>
                        </span>
                            <span>
                                 <p>{todo.name}</p>
                            </span>
                        </div>
                         <div>
                            <button type="button" onClick={()=>{deleteTodo(todo.id)}} >Delete</button>
            </div>
        </div>
    )
}

export default TodoChild;