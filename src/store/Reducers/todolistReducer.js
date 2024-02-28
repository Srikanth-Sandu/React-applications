const initialState={
    todos:[]
}
const todolistReducer=function (state=initialState,action){
    if(action.type==='ADD TODO'){
        return {...state,todos:[...state.todos,{title:action.payload,status:false}]}
    }
    if(action.type==='DELETE'){
        return {...state,todos:[...state.todos.filter((t,i)=>i!==action.payload)]}
    }
    if(action.type==='DONE'){
        let temp=[...state.todos];
        return {temp:[...temp.filter((t,i)=>i===action.payload)]}
    }
    // console.log(temp);

    if(action.type=='ALL'){
        return {...state,todos:[...state.todos]}
    }
    if(action.type=='COMP'){
        return {...state,todos:[...state.todos]}
    }
    return state;
}
export default todolistReducer;