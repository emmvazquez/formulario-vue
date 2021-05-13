<template>
  <table class="table table-striped">
      <thead>
          <th>Id</th>
          <th>Alumno</th>
          <th>Docente</th>
          <th>Semestre</th>
           <th>Materia</th>
          <th>vez</th>
          <th>Acciones</th>
      </thead>
      <tbody>
          <tr v-for="item in arregloMateria" :key="item.id">
              <td>{{item.id}}</td>
              <td>{{item.alumno}}</td>
              <td>{{item.docente}}</td>
              <td>{{item.semestre}}</td>
            <td>{{item.materia}}</td>
            <td>{{item.vez}}</td>
              <td>
                  <button class="btn btn-danger btn-sm"
                  @click="accionDelete(item.id)">Eliminar</button>
              </td>
          </tr>
      </tbody>
  </table>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    computed:{
        ...mapState(['arregloMateria'])
    },
    methods:{
        ...mapActions(['accionDelete'])
    }
}
</script>

<style>

</style>