import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from '@/store';
import {Provider} from 'react-redux';
import './static/iconfont/iconfont.css'
import 'antd/lib/date-picker/style/css'; // 加载 CSS
import '@/static/css/common.scss'; 
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

