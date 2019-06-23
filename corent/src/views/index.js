 import React from 'react';

import loadable from 'react-loadable';

function Loading(){
    return <div>loading......</div>
}

export  const Login =loadable({    //抛出的是一个组件    按需加载
    loading:Loading,     
    loader:()=>import('./login/index')
})

export  const Home =loadable({  
    loading:Loading,     
    loader:()=>import('./home/index')
})

export  const HomeIndex =loadable({    
    loading:Loading,     
    loader:()=>import('./home/components/index')
})

export  const HomeOrder=loadable({    
    loading:Loading,     
    loader:()=>import('./home/components/order')
})