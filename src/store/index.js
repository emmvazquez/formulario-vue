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
        //console.warn("Se agregó al arreglo" + formulario)
        //console.error(state.arregloMateria)
        localStorage.setItem('materias', JSON.stringify(state.arregloMateria))
    },
    mutacionDelete(state,id){
        state.arregloMateria = state.arregloMateria.filter(item => item.id != id)
        console.error("Borrando" + state.arregloMateria)
        localStorage.setItem('materias', JSON.stringify(state.arregloMateria))
    },
    cargar(state, materias){
      state.arregloMateria= materias
    }
  },
  actions: {
    cargarLocalStorage({commit}){
      if(localStorage.getItem('materias')){
        const materias = JSON.parse(localStorage.getItem('materias'))
        commit('cargar',materias)
        return
      }
      else{
        localStorage.setItem('materias', JSON.stringify([]))
      }

      
    },
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
