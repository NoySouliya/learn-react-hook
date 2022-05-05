import { useState, useReducer } from 'react'
import logo from './logo.svg'
import './App.css'

// const UserContext = createContext();
  const initialTodos= [
    {
      id: 1,
      title: "Todo One",
      completed: false
    },
    {
      id: 2,
      title: "Todo Two",
      completed: false
    }
  ]

  const reducer = (state, action) => {
    switch (action.type){
      case 'COMPLETED':
        return state.map((todo) =>{
          if (todo.id === action.id){
            return {
              ...todo,
              completed: !todo.completed
            }
          }else{
            return todo;
          }
        })
      default:
        return state;
    }
  }

function App() {
  // const [count, setCount] = useState(0);
  // const [inputValue, setInputValue] = useState("");
  // const count = useRef(0);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
  //     .then(response => response.json())
  //     .then(data => setData(data))

  // }, [count]);

  // useEffect(()=>{
  //   count.current = count.current + 1;
  // })

  // const inputElement = useRef();

  // const focusInput = () => {
  //   inputElement.current.focus();
  // }

  // const [inputValue, setInputValue] = useState("");
  // const prevInputValue = useRef("");

  // useEffect(() => {
  //   prevInputValue.current = inputValue;
  // }, [inputValue]);
  
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleCompleted = (todo) => {
    dispatch({type: 'COMPLETED', id: todo.id})
  }

  console.log(todos);

  return (
    <div className="App">
        <h1>Hello World</h1>
        {todos.map((todo) =>(
          <div key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => handleCompleted(todo)}/>
            <span>{todo.title}</span>
          </div>
        ))}
    </div>
  )
}

// function ChildComponent1(){
//   return (
//     <div>
//       <h3>Child Component 1</h3>
//       <ChildComponent2/>
//     </div>
//   )
// }

// function ChildComponent2(){
//   return (
//     <div>
//       <h3>Child Component 2</h3>
//       <ChildComponent3/>
//     </div>
//   )
// }

// function ChildComponent3(){
//   return (
//     <div>
//       <h3>Child Component 3</h3>
//       <ChildComponent4/>
//     </div>
//   )
// }

// function ChildComponent4(){
//   return (
//     <div>
//       <h3>Child Component 4</h3>
//       <ChildComponent5/>
//     </div>
//   )
// }

// function ChildComponent5(){

//   const user = useContext(UserContext);

//   return (
//     <div>
//       <h3>Child Component 5</h3>
//       <p>Hello {user}</p>
//     </div>
//   )
// }

export default App
