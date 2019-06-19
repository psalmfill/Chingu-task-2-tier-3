import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import SearchResult from '@/components/SearchResult'

Vue.use(Router);
export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component: Search,
            name: 'Search'
        },
        {
            path:'/search',
            component : SearchResult,
            name: 'SearchResult'
        }
    ]
});