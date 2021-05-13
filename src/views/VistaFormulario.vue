<template>
  <h1>Formulario de registro</h1>
  <form @submit.prevent="leerDatos">
      <componente-formulario :materia="materia"/>
  </form>

  <tabla-materias />
</template>
<script>
import ComponenteFormulario from '../components/ComponenteFormulario.vue'
import {mapActions, mapState} from 'vuex'
import TablaMaterias from '../components/TablaMaterias.vue'
const shortid = require('short-id')

export default {
  data() {
    return {
      materia:{
        id:'',
        alumno :'',
        docente:'',
        semestre:0,
        vez:'',
        materiia:''
    } 
    }
  },
  components: { ComponenteFormulario, TablaMaterias },
  methods:{
    ...mapActions(['accionSetFormulario']),
        leerDatos(){
            this.materia.id = shortid.generate()
            this.accionSetFormulario(this.materia)
            this.materia = {
                id:'',
                alumno :'',
                docente:'',
                semestre:0,
                vez:'',
                materiia:''
            } 
            console.log(this.materia)
        }
    }
}
</script>