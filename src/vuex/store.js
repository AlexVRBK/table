import axios from 'axios'
// import Vue from 'vue'
import Vuex from 'vuex'

// Vue.use(Vuex)

export default new Vuex.Store( {
state:{
    users: []
},
mutations:{
    SET_USERS_TO_VUEX: (state, users) => {
        state.users = users
    }
},
actions:{
    GET_USERS_FROM_API({commit}) {
        return axios('http://localhost:3000/users', {
            method: 'GET'
        })
        .then((response) => {
            commit('SET_USERS_TO_VUEX', response.data)
        })
    }
},

getters:{
    USERS(state) {
        return state.users;
    }
}
})

