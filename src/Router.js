import VueRouter from 'vue-router'

import Table from './components/Table'
import Teams from './components/Teams'
import Match from './components/Match'
import Matches from './components/Matches'

const routes = [
    {path: '/table', component: Table},
    {path: '/teams', component: Teams},
    {path: '/matches', component: Matches},
    {path: '/match/:id', component: Match}
]

export default function(Vue) {
    Vue.use(VueRouter);
    return new VueRouter({routes});
}