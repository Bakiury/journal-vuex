import { computed } from 'vue'
import { useStore } from 'vuex'

const useAuth = () => {
    const store = useStore()

    const createUser = async (user) => {
        const resp = await store.dispatch('auth/createUser', user)

        return resp
    }

    const loginUser = async (user) => {
        const resp = await store.dispatch('auth/signInUser', user)

        return resp
    }

    const checkAuthStatus = async () => {
        const resp = await store.dispatch('auth/checkAuthentication')

        return resp
    }

    const logOut = () => {
        store.commit('auth/logOut')
        store.commit('journal/clearEntries') // Clean entries
    }

    return {
        checkAuthStatus,
        createUser,
        loginUser,
        logOut,

        authStatus: computed(() => store.getters['auth/currentState']),
        userName: computed(() => store.getters['auth/userName']),
    }
}

export default useAuth