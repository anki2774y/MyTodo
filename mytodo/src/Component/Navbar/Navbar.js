import { useDispatch, useSelector } from "react-redux";
import { todoActions, todoReducer, todoSelector } from "../../Redux/slice/todoSlice";

function Navbar() {

    const disptach = useDispatch(todoReducer);
    

    const handleSearch = (inputVal) => {
        disptach(todoActions.searchTodo(inputVal));
    }

    return (
        <>
            <div>
                <div>
                    <h3>MyTodo</h3>
                </div>
                <div>
                    <input type="text" onChange={(e)=>handleSearch(e.target.value)} />
                </div>
                <div>
                    <div>
                        <p>MyTodo</p>
                    </div>
                    <div>
                        <p>MyLabel</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;