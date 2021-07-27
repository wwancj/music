import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    musiclist:[],
    musicids:[],
    num:1111111111111
  },
  actions: {
    findmusic(context,value){
     context.commit("baocunmusic",value)
    },
    jia(context,value){
   context.commit("JIA",value)
    },
    musicids(context,value){
      
      context.commit("MIDS",value)
    }
  },

  mutations: {
    baocunmusic(state,value){
        state.musiclist=value
    },
    JIA(state,value){
        state.num+=value
    },
    MIDS(state,value){
   state.musicids=value
    }
  },

  modules: {
  },
});
