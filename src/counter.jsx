import React from "react";
function Counter(){
    var [count,setCount]=React.useState(0);
    function inc(){
        setCount(count+1);
    }
    function dec(){
        setCount(count-1);
    }

    return (
        <div>
            <h1>Counter:<span>{count}</span></h1>
            <button onClick={()=>{inc()}}>Increment</button>
            <button onClick={()=>{dec()}}>Decrement</button>

        </div>
    )
    }
    export default Counter