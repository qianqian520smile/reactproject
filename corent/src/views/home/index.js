import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RouterView from '../../router/routerView';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as navAction from '@/store/nav/nav.action';
import homecss from '@/static/css/home.module.scss';
import { Layout,Menu } from 'antd';
// import { dispatch } from 'rxjs/internal/observable/pairs';
const { Header, Sider, Content } = Layout;
const { SubMenu }  = Menu;
// import { instanceOf } from 'prop-types';
// console.log(homecss)
class Home extends Component {
    render() {
        let { routes,info,navdata,selectedNavData } = this.props;
        // console.log(routes)
        return (
            
            <Layout className={homecss["Home"]}>
            <Sider>
              <dl className={homecss['userinfo']}>
                <dt>  
                  <img src={info.facePhoto}/>
                </dt>
                <dd>
                  {info.phone}
                </dd>
              </dl>

                <Menu
                  mode="inline"
                  theme="dark"
                >
                  {
                    navdata.map((item,key)=>{
                  return item.children ?  <SubMenu
                      key={key}
                      title={
                        <span>
                          <i className={`iconfont ${item.icon}`}></i>
                          <span> {item.name}</span>
                        </span>
                      }
                    >
                      {
                         item.children.map(item=>{
                           return   <Menu.Item key={item.path}
                           onClick={this.addNavTop.bind(this,
                            item.path,item.name)}>
                              <NavLink to={item.path}>{item.name}</NavLink></Menu.Item>       
                   
                         })
                      }
                     </SubMenu> : <Menu.Item key={item.path}
                     onClick={this.addNavTop.bind(this,
                     item.path,item.name)}>
                    
                        <NavLink to={item.path}>
                        <i className={`iconfont ${item.icon}`}></i>
                        {item.name}
                        </NavLink>
                      </Menu.Item>       
                     })
                  }
              
               </Menu>
                
            </Sider>
            <Layout>
              <Header className={homecss["navtop"]}
              >
                {
                  selectedNavData.map(item=><p key={item.path}>
                       <NavLink to={item.path} 
                       activeClassName={homecss['active']}>
                         {item.name}
                       </NavLink>
                       <span onClick={this.removeNav.bind(this,
                     item.path)}>x</span>
                  </p> )
                }
              </Header>
              <Content>
                 <RouterView routes={routes}/>
              </Content>
            </Layout>
        </Layout>
        );
    }
    addNavTop(path,name){
      this.props.addNavData(path,name);
      // console.log(path,name)
    }
    removeNav(path){
      this.props.removeNavData(path);
    }
}

export default connect(
  state=>{
    return {
      ...state.user,
      ...state.nav
    }
  },
  dispatch=>bindActionCreators(navAction,dispatch)
)(Home)