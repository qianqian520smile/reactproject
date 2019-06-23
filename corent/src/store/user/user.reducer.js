import {
    GET_USER_INTO
}  from  '../action.type'
const user=(state={
    info:{}
},action)=>{
    let newState={...state,info:{...state.info}}
    switch(action.type){
        case  GET_USER_INTO:
            newState.info = action.info
     return newState;
     default:
         return state;
    }
}

export default user;