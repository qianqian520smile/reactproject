import request from '@/utils/request';
import {
    GET_USER_INTO
} from '../action.type';

export const getUserInfo =function(that){
    return dispatch=>{
        request.get('/api/islogin').then(res=>{
            dispatch({
                type:GET_USER_INTO,
                info:res.info
            })
            that.setState({loginOpen:true})
        }).catch(res=>{
            if(res.status===401){
                that.props.history.push('/login')
            }
        })
    }
}