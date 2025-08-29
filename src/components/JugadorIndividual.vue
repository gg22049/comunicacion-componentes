<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">nombre apellido</div>
      <div class="text-subtitle2">ID: id</div>
      <div class="text-subtitle2">Edad: edad años</div>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <div class="q-pa-md">
        <q-input type="number" filled v-model="copiaAnho" label="Año de Nacimiento" />
      </div>
      <q-btn color="primary">Guardar</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'

// Definimos las props que el componente hijo espera,
// el padre le debe pasar esta data

// Definimos los eventos que el componente hijo puede emitir
//el hijo lanzará un evento

// Creamos una copia local reactiva de la propiedad para permitir la edición
const copiaAnho = ref(2000)

// Debemos pensar en como sincronizar esto con la prop original
//hay varias técnicas, podemos usar watch o tambien computed

// Propiedad computada para calcular la edad basada en la props

// Método para emitir el evento
</script>
