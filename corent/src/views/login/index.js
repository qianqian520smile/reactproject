import React, { Component } from 'react';
import '../../static/css/login.scss';

import request from '@/utils/request';
import Cookie from 'js-cookie';
// console.dir(Cookie);
class Login extends Component {
    state = {
        checkcodebtnTip: '获取验证码',
        phone: '',
        checkcode: '',
        password: ''
    }
    render() {
        let { checkcodebtnTip, phone, checkcode, password } = this.state;
        return (
            <div className="wrap login-wrap">
                <div className="box">
                    <div className="left">
                        <p className="wel">
                            welcome
                    </p>
                        <p className="left-title">
                            赚赚金融开创信贷“1+N”模式的综合互联网金融服务共享平台
                    </p>
                    </div>
                    <div className="right">
                        <div className="login-icon">
                            <dl>
                                <dt>
                                    <i className="iconfont iconlogo"></i>
                                </dt>
                                <dd>赚赚金融渠道管理系统</dd>
                            </dl>
                        </div>
                        <div className="ipt-box">
                        <p>
                                <input type="text"
                                    value={phone}
                                    onChange={e => this.setState({ phone: e.target.value })}
                                    placeholder="手机号" />
                            </p>
                            <p>
                                <input type="password"
                                    value={password}
                                    onChange={e => this.setState({ password: e.target.value })}
                                    placeholder="登录密码" />
                            </p>
                            <p>
                                <input type="text"
                                    value={checkcode}
                                    onChange={e => this.setState({ checkcode: e.target.value })}
                                    placeholder="验证码" />
                                <span
                                    className="checkcodebtn"
                                    onClick={this.changeCheckCode}
                                >{checkcodebtnTip}</span>
                            </p>
                            <button onClick={this.login}>登录</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
       this.getCheckCode()
    }
    getCheckCode=()=>{
        //获取验证码
        request.get("/api/checkCode").then(data => {
            this.setState({
                checkcodebtnTip: data.Verification
            })
        })
    }
    changeCheckCode = () => {//点击验证码
        this.getCheckCode()
    }
    login = () => {//点击登录
        let {
            phone,
            checkcode,
            password
        } = this.state;
        request.post("/api/login", {
            phone,
            checkcode,
            password
        }).then(res => {
            console.log(res)
           if(res.code){
               alert(res.message);
           }else{
               Cookie.set('token',res.sessionId,{
                   expires:5
               });
               this.props.history.push('/home');
           }
        })
    }
}

export default Login;