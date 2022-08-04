import {createStore} from "vuex";
import counterModule from './counterModule'

export default createStore({
    state: {counterState: counterModule.state},
    mutations: {},
    actions: {},
    modules: {
        counterModule
    },
    getters: {
        getCounterState: function (state) {
            return state.counterState.counter
        }
    }
})


// const counterModule = {
//     namespaced: true,
//     state: {
//         counter: {count: 10}
//     },
//     mutations: {
//         INCR_COUNTER: function (state) {
//             state.counter.count += 1
//         },
//         DICR_COUNTER: function (state) {
//             state.counter.count -= 1
//         },
//         INCRBY_COUNTER: function (state, payload) {
//             state.counter.count += payload.value
//         },
//     },
//     actions: {
//         incrementCounter: function ({commit}) {
//             return commit("INCR_COUNTER")
//         },
//         dicrementCounter: function ({commit}) {
//             return commit("DICR_COUNTER")
//         },
//         incrementByCounter: function ({commit}, payload) {
//             return commit("INCRBY_COUNTER", payload)
//         }
//     },
// }