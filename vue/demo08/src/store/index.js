import Vue from 'vue'   //vue.js
import Vuex from 'vuex' //vuex.js
// vue中使用vuex
Vue.use(Vuex);

// 创建vuex对象
const store = new Vuex.Store({
    // 定义共享数据
    // state 这个属性用来全局管理共享数据
    state: {
        username: "leomaokai",
    },
    // mutation 这个属性用来书写对共享数据修改方法
    mutations: {
        changeNameStore(state, name) {
            state.username = name;
        }
    },
    // getters  这个属性用来对共享数据的计算属性(computed)
    getters: {

    }

});

// 暴露对象
export default store;