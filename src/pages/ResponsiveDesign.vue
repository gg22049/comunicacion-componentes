<template>
    <q-page>
        <div class="row pd-pa-md justify-center items-center">
            <q-img 
            src="/src/assets/images/team.webp" 
            style="max-width: 80%;"
            class="rounded-borders"
            >
                <div class="absolute-top text-subtittle1 text-center">
                    <h1>Club FC</h1>
                </div>
            </q-img>

            <div class="row wrap q-col-gutter-md">
                <div class="q-pa-none col-xl-2 col-lg-3 col-md-12">
                    <h6>Coaching Staff</h6>
                    <div class="row justify-evenly">
                        <StaffCard v-for="staff in staffList" :key="staff.name" v-bind="staff"/>
                    </div>
                </div>

                        <div class="q-col-gutter-md col-xl-2 col-lg-2 col-md-3 col-6" v-for="pos in positions" :key="pos.title" >
                            <div>
                                <h6>{{ pos.title }}</h6>
                                <PlayerCard v-for="player in playerList" :key="player.name" v-bind="player" />
                            </div>
                        </div>
                
            </div>
        </div>  
    </q-page>
</template>

<script setup>
import StaffCard from "components/StaffCard.vue";
import PlayerCard from "components/PlayerCard.vue";

const staffList = [
    {name: "Trainer1", picture: "/src/assets/images/staff.webp"},
    {name: "Trainer2", picture: "/src/assets/images/staff.webp"},
    {name: "Trainer3", picture: "/src/assets/images/staff.webp"}
]

const playerList = [
    {name: "Player1", picture: "/src/assets/images/player.webp"},
    {name: "Player2", picture: "/src/assets/images/player.webp"},
    {name: "Player3", picture: "/src/assets/images/player.webp"},
    {name: "Player4", picture: "/src/assets/images/player.webp"},
]

const positions = [
    {title: "Forwards"},
    {title: "Wings"},
    {title: "Defenders"},
    {title: "Goalkeeper"}
]

</script>