import React from "react";
export default [
  {
    title: ' 订单号',
    width: 100,
    dataIndex: 'id',
    key: '1',
  },
  {
    title: '下单时间',
    width: 200,
    dataIndex: 'date',
    key: '2',
  },
  {
    title: '用户名称',
    dataIndex: 'customerName',
    key: '3'
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    key: '4'
  },
  {
    title: '转单类型',
    dataIndex: 'type',
    key: '5'
  },
  {
    title: '贷款金额(万元)',
    dataIndex: 'money',
    key: '6'
  },
  {
    title: '订单状态',
    dataIndex: 'handleState',
    key: '7'
  },
  {
    title: '客服',
    dataIndex: 'serviceName',
    key: '8'
  },
  {
    title: '操作',
    key: '9',
    fixed: 'right',
    width: 100,
    render: () => <a href="javascript:;">...</a>,
  },
];


export const handleStateData = ['新订单','未审核','已核单','已完成','暂无状态']

export const handleState = (id) => {
    return handleStateData[id]
}


export const type =['信用贷','押房贷','房乐贷','车乐贷'];

export const serviceName =["李大维",'李小冉','李莉','张玲','李家豪'];
