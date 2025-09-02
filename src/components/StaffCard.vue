<template>
    <q-card flat bordered>
        <div class="text-center q-pa-none">
        <img :src=props.picture alt="trainer picture" style="max-width: 60%;">
        </div>
        <card-section>
            <q-label-item>{{ props.name }}</q-label-item>
        </card-section>
    </q-card>
</template>

<script setup>
const props = defineProps({
    name:{
        type: String,
        default: "chepe",
        required: true
    },
    picture: {
        type: String,
        default: "/src/assets/images/staff.webp"
    }
})
</script>