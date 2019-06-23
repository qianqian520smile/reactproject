import {
    GET_NAV_TOP,
    REMOVE_NAV_TOP
} from '../action.type'
export const addNavData=(path,name)=>{
    return {
        type:GET_NAV_TOP,
        path,
        name
    }
}
export const removeNavData=(path)=>{
    return {
        type:REMOVE_NAV_TOP,
        path
    }
}