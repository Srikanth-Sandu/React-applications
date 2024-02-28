import React from "react";
import {connect} from 'react-redux'
function Counter(props){
    return <div className="mybox"> 
        <h1>Counter:{props.counter.count}</h1>
        <button onClick={()=>{props.dispatch({type:'INCREMENT'})}}>Inc</button>
        <button onClick={()=>{props.dispatch({type:'DECREMENT'})}}>Dec</button>
        <button onClick={()=>{props.dispatch({type:'RESET'})}}>Reset</button>
    </div>
}
export default connect(store=>{ return store})(Counter);