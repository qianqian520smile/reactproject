import request from '@/utils/request';
import {
    GET_LIST_DATA
}from '../action.type'
export const getlistdata=(order)=>{
    return dispatch=>{
        request.get('/api/list',{
            order
        }).then(res=>{
            dispatch({
                type:GET_LIST_DATA,
                data:res.data
            })
        })
    }
}