import {Navigate} from '@/pages/navigate'
import {Home} from '@/pages/home'
const routes = [
  {
    path: '/',
    component: Navigate
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '*',
    component: Navigate
  },
]

export default routes