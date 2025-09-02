<template>
    <q-card flat bordered>
        <q-img
        :src=props.picture
        >
        <div class="absolute-bottom text-subtitle1 text-center">{{ props.name }}</div>
        </q-img>
    </q-card>
</template>

<script setup>
const props = defineProps({
    name:{
        type: String,
        default: "chepe"
    },
    picture:{
        type: String,
        default: "/src/assets/images/player.webp"
    }
})
</script>