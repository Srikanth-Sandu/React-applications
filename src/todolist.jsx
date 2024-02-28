import React from "react";
import { connect } from 'react-redux'
function Todolist(props) {
    var [newtodo, Setnewtodo] = React.useState(null);
    return <div className="mybox">
        <h1>Todolist</h1>
        <input type="text" placeholder="write todo" onChange={(event) => { return Setnewtodo(event.target.value) }} />
        <button onClick={() => { props.dispatch({ type: 'ADD TODO', payload: newtodo }) }}>Add todo</button><br />
        <input type="radio" name="filter" checked onChange={() => { props.dispatch({ type: 'ALL' }) }} />:All
        <input type="radio" name='filter' onChange={() => { props.dispatch({ type: 'COMP' }) }} />:Completed
        {/* <input type="radio" name='filter' />:Pending */}
        <ul>
            {props.todolist.todos.map((todo, ind) => {
                return <li><span>{todo.title}</span>
                    <button onClick={() => { props.dispatch({ type: 'DONE', payload: ind }) }}>done</button>
                    <button onClick={() => { props.dispatch({ type: 'UNDO', payload: ind }) }}>undo</button>
                    <button onClick={() => { props.dispatch({ type: 'DELETE', payload: ind }) }}>delete</button>
                </li>
            })}
        </ul>
    </div>
}
export default connect(store => store)(Todolist);