import React from "react"
import Todo from './todo'
function Todolist(){
    var [todos,setTodos]=React.useState([])
    function addTodo(){
        var todo=document.getElementById('ip1');
        var todoobj={
            title:todo.value,
            status:false
        }
        setTodos([...todos,todoobj]);
    }
     const del=React.useCallback((i)=>{
            setTodos((te)=>{
                return te.filter((t,ind)=>{
                    return ind!==i
                })
            })
        },[])
    
    
    const done=function(i){
        var temp=[...todos];
        temp[i].status=true;
        setTodos([...temp]);
    }
    const undo=function(i){
        var temp=[...todos];
        temp[i].status=false;
        setTodos([...temp]);
    }
    return (
        <div className='mybox'><h1>Todolist</h1>
           <input id='ip1' type='text'/>
           <button onClick={()=>{addTodo()}}>Add Todo</button>
           <ul>
              {todos.map((eachitem,index)=><Todo eachitem={eachitem} index={index} deltodo={del} donetodo={done} undotodo={undo} />)
              }
           </ul>
        </div>

    )
}
export default Todolist