import React from 'react';
// import request from '@/utils/request'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as userAction from '../store/user/user.action'
const islogin = (Com)=>{
   class Islogin extends React.Component{
        state={
            loginOpen:false
        }
        render(){
            let {loginOpen}=this.state;
            return loginOpen && <Com {...this.props} />
        }
    componentDidMount(){
        // console.log(2111)
     this.props.getUserInfo(this)
    }
}
  return  connect(
        state=>({}),
        dispatch=>bindActionCreators(userAction,dispatch)
  )(Islogin)
}
export default islogin