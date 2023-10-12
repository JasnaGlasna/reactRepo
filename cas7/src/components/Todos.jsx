import React, {useEffect , useState} from 'react';

export const Todos = () => {
    const [todos, setTodos] = useState([]);

    function getTodos(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response=> response.json())
        .then(json => setTodos(json))
        .catch((err)=>alert(err));

    };
    useEffect(()=>{
        getTodos()
    },[]) //componentDidMount

    const handleCheckBox = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        }));
    }
    return(
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={()=>handleCheckBox(todo.id)}
                    />
                    {todo.title}

                </li>
            ))}
        </ul>

    )
}
export default Todos;