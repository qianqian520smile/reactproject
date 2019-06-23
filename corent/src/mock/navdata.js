const navdata=[
    {
        path:'/home/index',
        icon:'iconshouye',
        name:'首页'
    },
      {
       name:'管理',
       icon:'icondingdanguanli',
       children:[
           {
            path:'/home/order/dk',
            name:'贷款订单'
           },
           {
            path:'/home/order/zd',
            name:'转单订单'
           },
           {
            path:'/home/order/bx',
            name:'保险订单'
           }
       ]
    }
]
export default navdata;