<template>
  <q-page padding>
    <div class="q-pa-md q-gutter-md">
      <h2 class="text-h4">Equipo de Fútbol</h2>
      <div class="row q-gutter-md">
        <div v-for="jugador in jugadores" :key="jugador.id" class="col-12 col-md-5">
          <JugadorIndividual :jugador="jugador" @update-player="actualizarJugador" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import JugadorIndividual from './JugadorIndividual.vue'

// Usamos ref() para crear un arreglo reactivo
const jugadores = ref([
  { id: 1, nombre: 'Lionel', apellido: 'Messi', anioNacimiento: 1987 },
  { id: 2, nombre: 'Cristiano', apellido: 'Ronaldo', anioNacimiento: 1985 },
  { id: 3, nombre: 'Neymar', apellido: 'Jr', anioNacimiento: 1992 },
])

const actualizarJugador = (jugadorActualizado) => {
  const index = jugadores.value.findIndex((j) => j.id === jugadorActualizado.id)
  if (index !== -1) {
    // Actualizamos el objeto en el arreglo principal usando .value
    jugadores.value[index] = jugadorActualizado
    console.log('Jugador actualizado en el padre:', jugadorActualizado)
  }
}
</script>
