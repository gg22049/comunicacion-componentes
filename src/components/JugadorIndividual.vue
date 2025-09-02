<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">{{ props.nombre }} {{ props.apellido }}</div>
      <div class="text-subtitle2">ID: {{ props.id }}</div>
      <div class="text-subtitle2">Edad: {{ comp }}</div>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <div class="q-pa-md">
        <q-input type="number" filled v-model="copiaAnio" label="Fecha Nacimiento" />
      </div>
      <q-btn color="primary" @click="guardar">Guardar</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import {  ref, defineProps, defineEmits, computed, toRaw, watch } from 'vue'

// Definimos las props que el componente hijo espera,
// el padre le debe pasar esta data
const props = defineProps({
id:{
  type: Number,
  required: true
},
  nombre:{
    type: String,
    required: true,
  },
  apellido:{
    type: String,
    required: true
  },
  anioNacimiento:{
    type: Number,
    required: true
  }
})

// Definimos los eventos que el componente hijo puede emitir
//el hijo lanzará un evento
const emit = defineEmits(["guardar"])

// Creamos una copia local reactiva de la propiedad para permitir la edición
const copiaAnio = ref(props.anioNacimiento)

// Debemos pensar en como sincronizar esto con la prop original
//hay varias técnicas, podemos usar watch o tambien computed
watch(() => props.anioNacimiento, (nuevo) => copiaAnio.value = nuevo)

// Propiedad computada para calcular la edad basada en la props
const comp = computed(() => {
  return new Date().getFullYear() - props.anioNacimiento;
})

// Método para emitir el evento
const guardar = () => {
  const plano = { ...toRaw(props) }
  plano.anioNacimiento = Number(copiaAnio.value)
  emit("guardar", plano)  
}
</script>