import {
    GET_LIST_DATA
} from '../action.type'
const defaultState={
    listdata:[]
}
const list = (state=defaultState,action)=>{
  switch(action.type){
      case GET_LIST_DATA:
          state.listdata=action.data;
          return {
              ...state,
              liststate:[...state.listdata]
          }
          default:
              return state;
  }
}
export default list;