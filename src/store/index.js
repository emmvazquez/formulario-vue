import { createStore } from 'vuex'

export default createStore({
  state: {
    arregloMateria:[],
    materia:{
      id:'',
      alumno :'',
      docente:'',
      semestre:0,
      vez:'',
      materia:''
    } 
  },
  mutations: {
    mutacionSetFormulario(state,formulario){
        state.arregloMateria.push(formulario)
        console.warn("Se agregó al arreglo" + formulario)
        console.error(state.arregloMateria)
    },
    mutacionDelete(state,id){
        state.arregloMateria = state.arregloMateria.filter(item => item.id != id)
        console.error("Borrando" + state.arregloMateria)
    }
  },
  actions: {
    accionSetFormulario({commit},formulario){
      commit('mutacionSetFormulario',formulario)
    },
    
    accionDelete({commit},id){
      commit('mutacionDelete',id)
    }
  },
  modules: {
  }
})
