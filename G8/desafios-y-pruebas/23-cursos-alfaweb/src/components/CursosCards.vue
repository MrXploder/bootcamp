<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" lg="4" v-for="(curso, index) in $store.state.cursos.data" :key="index">
        <v-card max-width="350" class="mx-auto mb-4">
          <v-img height="330px" :src="curso.imagen"> </v-img>

          <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">
              <h2 class="my-6">{{ curso.nombre }}</h2>
              Información
            </div>

            <v-timeline align-top dense>
              <v-timeline-item color="deep-purple lighten-1" small>
                <div>
                  <div class="font-weight-normal">
                    <span
                      >Costo: <strong>{{ curso.costo }}</strong></span
                    >
                  </div>
                  <span
                    >Duración: <strong>{{ curso.duracion }}</strong></span
                  >
                </div>
              </v-timeline-item>

              <v-timeline-item color="green" small>
                <div>
                  <div class="font-weight-normal">
                    <span
                      >Cupos: <strong>{{ curso.cupos }}</strong></span
                    >
                  </div>
                  <span>Completado: {{ curso.estado === true ? 'Si' : 'No' }}</span>
                </div>
              </v-timeline-item>

              <v-timeline-item color="deep-purple lighten-1" small>
                <div>
                  <div class="font-weight-normal">
                    <span>Fecha de registro:</span>
                  </div>
                  <span>{{ curso.fecha }}</span>
                </div>
              </v-timeline-item>

              <v-timeline-item color="green" small>
                <div>
                  <div class="font-weight-normal">
                    <span>Descripción: </span>
                  </div>
                  <span>{{ curso.descripcion }}</span>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
