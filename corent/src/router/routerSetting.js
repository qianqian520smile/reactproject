
import { Login, HomeIndex, Home, HomeOrder } from '../views/';
import islogin from '@/components/islogin';
// console.log(islogin('1234'));
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: islogin(Home),
        children: [
            {
                path: '/hoem/index',
                component: HomeIndex
            },
            {
                path: '/home/order/:name',
                component: HomeOrder
            },
            {
                path: '/home',
                redirect: '/home/index'
            }

        ]
    }
]

export default routes;