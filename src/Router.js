import VueRouter from 'vue-router'

import Table from './components/Table'
import Teams from './components/Teams'
import Matches from './components/Matches'

const routes = [
    {path: '/table', component: Table},
    {path: '/teams', component: Teams},
    {path: '/matches', component: Matches}
]

export default function(Vue) {
    Vue.use(VueRouter);
    return new VueRouter({routes});
}