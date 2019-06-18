import Vue from 'vue'
import Vuex from 'vuex'
/**
 *attach vuex to Vue
 */
Vue.use(Vuex)
const baseURI = 'https://images-api.nasa.gov/search?q='

const store = {
    data:{}
}
const mutators = {
    ADD_DATA : (state,searchData)=>{
        this.$http.get(baseURI+searchData)
        .then((result) => {
        this.users = result.data
        })

       state.data = payload 
    },
    CLEAR_DATA : (state)=>{
        state.data = {}
    }
}

const getters = {
    getItems:(state)=>{
        return state.data.collection.items;
    },
    getTotalHit:(state)=>{
        return state.data.metadata.total_hits;
    },
    getHref:(state)=> {
        return state.data.collection.href;
    }
}

const actions = {
    searchData:(state,query)=>{

    }
}

export default {
    store,
    mutators,
    getters,
    actions
}