import {useState} from 'react';


function Counter(){
let [count, setCount]= useState(0);
const add= () => setCount(count+1);
console.log(count); //useState function is not run synchronously


return(
<>
<button onClick={add}>Click Me!{count}</button>
</>
    )

}

export default Counter;