import {useState} from 'react';

function Counter(){
    const [count , setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }
    
    const reset = () => {
        setCount(0);
    }


    return(
        <>
        <h1>Counter React</h1>
        <p>Count : {count}</p>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </>
    );
}

export default Counter;
