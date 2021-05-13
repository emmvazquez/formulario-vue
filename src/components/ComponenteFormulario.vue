<template>
      <div class="form-group">
        <label for="alumno">Alumno</label>
        <input type="text" v-model="materia.alumno" class="form-control" id="alumno">
      </div>

      <div class="form-group">
        <label for="docente">Docente</label>
        <input type="text" v-model="materia.docente" class="form-control" id="docente">
      </div>

      <div class="form-group">
        <label for="semestre">Semestre</label>
        <input type="number" v-model.number="materia.semestre" class="form-control" id="semestre">
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Materia</label>
        <select class="form-control" id="exampleFormControlSelect1" v-model="materia.materia">
            <option v-for="item in listaMaterias" :key="item">
                {{ item }}
            </option>
        </select>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="1" checked v-model="materia.vez">
        <label class="form-check-label" for="exampleRadios1">
            Primera vez
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="2"  v-model="materia.vez">
        <label class="form-check-label" for="exampleRadios2">
            Repetidor
        </label>
        </div>
        <button class="btn btn-success btn-block" 
        type="submit"
        :disabled="bloquear"
        >Enviar</button>
    <span class="badge badge-success">{{materia}}</span>  
</template>

<script>
export default {
    props:{materia:Object},
    data() {
        return {
            listaMaterias: [
                "fundamentos de programación",
                "programación orientada a objetos"
            ]
        }
    },
    computed:{
        bloquear(){
            return this.materia.alumno ===''  ? true : false
        }
    }
}
</script>

<style>

</style>