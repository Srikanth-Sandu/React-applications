import React from 'react'
function Todo(t){
    let v=t.eachitem.status
    console.log(t.eachitem.title);
    return <li className={v&&'donestatus'}>{t.eachitem.title}
    <button onClick={()=>t.deltodo(t.index)}>Delete</button>
    <button onClick={()=>t.donetodo(t.index)}>Done</button>
    <button onClick={()=>t.undotodo(t.index)}>Undo</button>
    </li>
    }
export default React.memo(Todo);