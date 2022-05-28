import React from "react";
import styles from "./Counter.css"



const Counter =() => {

    const[count,setCount]= React.useState(0);

    const incrementCount=()=>{
        setCount(count+1)
    }

    
    const decrementCount=()=>{
        setCount(count-1)
    }

    const doubleCount=()=>{
        setCount(count*2)
    }

    return(
        <div>
            <h1 className={count%2==0 ? "style1":"style2"}>Counter App:{count}</h1>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={doubleCount}>Double</button>
        </div>
    )


}

export default Counter