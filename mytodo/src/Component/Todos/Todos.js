import { useDispatch, useSelector } from "react-redux";
import { labelsSelector, todoActions, todoReducer, todoSelector } from "../../Redux/slice/todoSlice";
import { useEffect, useState } from "react";

function Todos(params) {

    const [todo, setTodo] = useState('');
    const [label, setLabel]  = useState('');
    const disptach = useDispatch(todoReducer);
    const todos = useSelector(todoSelector);
    const labels = useSelector(labelsSelector);
    
    const addTodo = () => {
        const data = {
            name: todo,
            label: label
        }
        disptach(todoActions.addTodo(data));
    }

    useEffect(() => {

    }, [todos])

    return (
        <>
            <div>
                <div>
                    <div>
                        <p> Add New Todo </p>
                    </div>
                    <div>
                        <div>
                            <textarea onChange={(e)=> setTodo(e.target.value)}></textarea>
                            <div>
                                <p>Add Label</p>
                                <textarea onChange={(e) => setLabel(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div>
                            <button type="submit" onClick={addTodo}> Sumit </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p> Filter By Label </p>
                    </div>
                    <div>
                        {labels.map((label) => (
                            <label key={label}>
                                <input type="checkbox" value={label} checked />
                                {label}
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todos;