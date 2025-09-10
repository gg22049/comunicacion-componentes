<template>
    <q-page>
        <div class="q-pa-sm">
            <q-toggle label="Modo Lista" v-model="viewList" color="primary"/>
        </div>
        <div class="q-pa-sm" v-if="viewList">
            <q-list>
                <q-item v-for="user in users" v-bind="user" :key="user.id">
                    <q-item-section avatar top>
                        <q-avatar>
                            <q-img :src="user.avatar" alt="foto del usuario"/>
                        </q-avatar>
                    </q-item-section>
                    <q-item-section top >
                        <q-item-label class="text-weight-bold">{{ user.nombre }}</q-item-label>
                        <q-item-label>{{ user.email }}</q-item-label>
                        <q-item-label caption>{{ user.bio }}</q-item-label>
                    </q-item-section>
                    <q-item-section top side>
                        <q-btn-dropdown flat dense round no-icon-animation dropdown-icon="more_vert">
                            <q-list>
                                <q-item clickable v-close-popup>
                                    <q-item-section avatar>
                                        <q-avatar icon="delete"/>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>
                                            Eliminar
                                        </q-item-label>
                                    </q-item-section>
                                </q-item>
                                <q-item clickable v-close-popup>
                                    <q-item-section avatar>
                                        <q-avatar icon="edit"/>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>
                                            editar
                                        </q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-btn-dropdown>
                    </q-item-section>
                </q-item>
            </q-list>
        </div>
        <div class="q-pa-sm q-col-gutter-md row items-start" v-else >
            <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12" v-for="user in users" v-bind="user" :key="user.id">
                <q-card>
                    <q-card-section>
                        <q-item>
                            <q-item-section avatar>
                                <q-avatar>
                                    <img :src="user.avatar" alt="foto del usuario">
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label class="text-h6">{{ user.nombre }}</q-item-label>
                                <q-item-label class="text-subtitle2">{{ user.email }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-card-section>
                    <q-card-section>
                        <q-item>
                            <q-item-section>
                                <q-item-label class="text-center" caption>{{ user.bio }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-card-section>
                    <q-card-actions align="right">
                        <q-btn flat dense round icon="delete"/>
                        <q-btn flat dense round icon="edit"/>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script setup>
import { ref } from 'vue'
// Variable de estado reactiva
const viewList = ref(false)
// Datos de usuarios
const users = [
    {
    id: 1,
    nombre: 'Ana García',
    email: 'ana.garcia@email.com',
    bio: 'Desarrolladora de software con 5 años de experiencia en aplicaciones web.',
    avatar: 'https://cdn.quasar.dev/img/avatar.png',
    },
    {
    id: 2,
    nombre: 'Luis Pérez',
    email: 'luis.perez@email.com',
    bio: 'Diseñador gráfico, experto en UI/UX y creador de ilustraciones.',
    avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',
    },
    {
    id: 3,
    nombre: 'Marta Díaz',
    email: 'marta.diaz@email.com',
    bio: 'Gerente de proyectos con amplia experiencia en metodologías ágiles.',
    avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',

    },
    {
    id: 4,
    nombre: 'Pedro Gómez',
    email: 'pedro.gomez@email.com',
    bio: 'Analista de datos con especialidad en aprendizaje automático.',
    avatar: 'https://cdn.quasar.dev/img/avatar4.jpg',
    },
    {
    id: 5,
    nombre: 'Sofía Ramos',
    email: 'sofia.ramos@email.com',
    bio: 'Especialista en marketing digital y gestión de redes sociales.',
    avatar: 'https://cdn.quasar.dev/img/avatar5.jpg',
    },
    {
    id: 6,
    nombre: 'Javier Castro',
    email: 'javier.castro@email.com',
    bio: 'Arquitecto de soluciones en la nube, experto en AWS y Azure.',
    avatar: 'https://cdn.quasar.dev/img/avatar6.jpg',
    },
    {
    id: 7,
    nombre: 'Elena Vega',
    email: 'elena.vega@email.com',
    bio: 'Redactora de contenidos técnicos y guionista de videos.',
    avatar: 'https://cdn.quasar.dev/img/avatar.png',
    },
    {
    id: 8,
    nombre: 'Carlos Ruiz',
    email: 'carlos.ruiz@email.com',
    bio: 'Ingeniero de ciberseguridad, experto en pruebas de penetración.',
    avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',
    },
    {
    id: 9,
    nombre: 'Laura Soto',
    email: 'laura.soto@email.com',
    bio: 'Profesora de matemáticas y desarrolladora de aplicaciones educativas.',
    avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
    },
    {
    id: 10,
    nombre: 'Jorge Morales',
    email: 'jorge.morales@email.com',
    bio: 'Director de recursos humanos, especializado en reclutamiento IT.',
    avatar: 'https://cdn.quasar.dev/img/avatar4.jpg',
    },
    {
    id: 11,
    nombre: 'María Fernández',
    email: 'maria.f@email.com',
    bio: 'Fotógrafa profesional, con enfoque en retratos y paisajes.',

    avatar: 'https://cdn.quasar.dev/img/avatar5.jpg',
    },
    {
    id: 12,
    nombre: 'Andrés López',
    email: 'andres.lopez@email.com',
    bio: 'Contador público, experto en auditorías y finanzas corporativas.',
    avatar: 'https://cdn.quasar.dev/img/avatar6.jpg',
    },
    {
    id: 13,
    nombre: 'Isabel Cánovas',
    email: 'isabel.c@email.com',
    bio: 'Entrenadora personal y especialista en nutrición deportiva.',
    avatar: 'https://cdn.quasar.dev/img/avatar.png',
    },
    {
    id: 14,
    nombre: 'Ricardo Valls',
    email: 'ricardo.valls@email.com',
    bio: 'Chef de cocina internacional, con 10 años de experiencia.',
    avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',
    },
    {
    id: 15,
    nombre: 'Juana Mendiola',
    email: 'juana.m@email.com',
    bio: 'Abogada corporativa, especializada en derecho de propiedad intelectual.',
    avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
    },
    {
    id: 16,
    nombre: 'Pablo Cifuentes',
    email: 'pablo.c@email.com',
    bio: 'Piloto de drones y topógrafo, experto en levantamientos aéreos.',
    avatar: 'https://cdn.quasar.dev/img/avatar4.jpg',
    },
    {
    id: 17,
    nombre: 'Silvia Beltrán',
    email: 'silvia.b@email.com',
    bio: 'Diseñadora de interiores, experta en espacios minimalistas.',
    avatar: 'https://cdn.quasar.dev/img/avatar5.jpg',
    },
    {
    id: 18,
    nombre: 'Diego Molina',
    email: 'diego.molina@email.com',
    bio: 'Desarrollador de videojuegos, con experiencia en Unreal Engine.',
    avatar: 'https://cdn.quasar.dev/img/avatar6.jpg',
    },
    {
    id: 19,
    nombre: 'Elena Gárate',
    email: 'elena.g@email.com',

    bio: 'Veterinaria, especializada en cuidado de animales exóticos.',
    avatar: 'https://cdn.quasar.dev/img/avatar.png',
    },
    {
    id: 20,
    nombre: 'Félix Soler',
    email: 'felix.soler@email.com',
    bio: 'Consultor de negocios y estratega de startups tecnológicas.',
    avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',
    },
]

</script>