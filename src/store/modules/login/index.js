import Auth from '@/util/auth'


const state = {
    token: ''
};

const mutations = {
    setToken(state, data) {
        if (data) {
            Auth.setToken(data)
            Auth.setLoginStatus()
        } else {
            Auth.removeToken()
            Auth.removeLoginStatus()
        }
        state.token = data
    }
};

const actions = {
    updateToken(state, data) {
        state.commit('setToken', data)
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
