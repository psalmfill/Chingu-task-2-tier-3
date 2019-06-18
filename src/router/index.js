import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import SearchResult from '@/components/SearchResult'

Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/',
            component: Search,
            name: 'Search'
        },
        {
            path:'/results',
            component : SearchResult,
            name: 'SearchResult'
        }
    ]
});