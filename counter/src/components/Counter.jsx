import {useState} from 'react';


function Counter(){
let [count, setCount]= useState(0);
const add= () => setCount(count+1);
const minus = () => setCount(count-1);


return(
<>
<h1>Counter: {count}</h1>
<button onClick={add}>+</button>
<button onClick={minus}>-</button>
</>
    )

}

export default Counter;