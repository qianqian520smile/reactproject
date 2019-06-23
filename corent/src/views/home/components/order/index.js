import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as listAction from '@/store/list/list.action';
import {bindActionCreators} from 'redux';
import { Table } from 'antd';
import orderCol,{handleState} from '@/mock/orderCol';
import SelectedBox from "./components/selectedBox.js";
class Order extends Component {
    state = {
        page: {
            defaultPageSize: 15,//每个页面显示几条数据
            showTotal:(a)=>{//共有多少条数据
                return '共'+a+'条'
            }
        }
    }
    render() {
        let {match,listdata} =this.props;
        let { page } = this.state;
        // console.log(listdata)
        listdata.map((item, key) => {
            item.key = key;
            item.handleState = handleState(item.handleState);
            return item
        })
        return (
           
            <div>
                <div style={{ padding: 10 }}>
                    <SelectedBox/>
                </div>
                <div style={{padding:10}}>
                    <Table columns={orderCol} 
                    dataSource={listdata} 
                    scroll={{ x: 1300 }} 
                    pagination={page}/>
                </div>
           
            </div>
        );
    }
    componentDidMount(){

      this.props.getlistdata(this.getOrderId
        (this.props.location.name));
        this.props.history.listen((location,method)=>{
            //路由变化时执行
            let changename=this.getOrderId(location.pathname);
            changename &&   this.props.getlistdata(changename);
            // console.log('路由变化了',this.getOrderId
            // (location.pathname));
        })
    }


    // componentWillReceiveProps(nextProps){
    //    let nextOrder=nextProps.match.params.name;
    //    let curOrder=this.props.match.params.name;
    //    (nextOrder!==curOrder) && this.props.getlistdata
    //  (this.getOrderId(this.props.match.params.name)) 
    
    // }
    getOrderId(odername){
        switch(odername){
            case '/home/order/dk':
                return 1;
            case '/home/order/zd':
                return 2;
            case '/home/order/bx':
                 return 3
            default :
               return false
        }
    }

}

export default connect(
    state=>({
        ...state.list
    }),
    dispatch=>bindActionCreators(listAction,dispatch)
)(Order);