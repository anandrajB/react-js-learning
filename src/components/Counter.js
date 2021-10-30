import React , {useState} from 'react'

function Counter() {

    const [count , setcount ] = useState(0)

    const adder = () => {
        setcount(count+1)
    };

    const subtracter = () => {
        if(count === 0){
            return;  
          }
          setcount(count - 1);
        };

    return (
        <div>
            <h1> {count} </h1>
            <button onClick={adder}>+</button>
             <button onClick={subtracter}> -  </button>
        </div>
    )
}

export default Counter

