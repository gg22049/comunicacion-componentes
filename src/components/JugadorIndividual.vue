<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">{{ jugadorCopia.nombre }} {{ jugadorCopia.apellido }}</div>
      <div class="text-subtitle2">ID: {{ jugadorCopia.id }}</div>
      <div class="text-subtitle2">Edad: {{ edad }} años</div>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <div class="q-pa-md">
        <q-input
          type="number"
          filled
          v-model="jugadorCopia.anioNacimiento"
          label="Año de Nacimiento"
        />
      </div>
      <q-btn color="primary" @click="guardarCambios">Guardar</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// Definimos las props que el componente hijo espera
const props = defineProps({
  jugador: {
    type: Object,
    required: true,
  },
})

// Definimos los eventos que el componente hijo puede emitir
const emit = defineEmits(['update-player'])

// Creamos una copia local reactiva de la prop para permitir la edición
const jugadorCopia = ref({ ...props.jugador })

// Usamos watch para re-sincronizar la copia si la prop cambia
watch(
  () => props.jugador,
  (newVal) => {
    jugadorCopia.value = { ...newVal }
  },
  { immediate: true },
)

// Propiedad computada para calcular la edad basada en la props
const edad = computed(() => {
  const anioActual = new Date().getFullYear()
  return anioActual - props.jugador.anioNacimiento
})

// Método para emitir el evento
const guardarCambios = () => {
  emit('update-player', jugadorCopia.value)
}
</script>
