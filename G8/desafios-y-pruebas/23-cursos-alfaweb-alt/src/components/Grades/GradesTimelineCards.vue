<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        lg="4"
        v-for="grade in $store.state.grades.grades.data"
        :key="grade.id"
      >
        <v-card max-width="350" class="mx-auto mb-4">
          <v-img height="330px" :src="grade.picture"> </v-img>

          <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">
              <h2 class="my-6">{{ grade.name }}</h2>
              {{ $t('views.grades.gradesTable.headers.description') }}
            </div>

            <v-timeline align-top dense>
              <v-timeline-item color="deep-purple lighten-1" small>
                <div>
                  <div class="font-weight-normal">
                    <span>
                      {{ $t('views.grades.gradesTable.headers.price') }}:
                      <strong>{{ grade.price }}</strong>
                    </span>
                  </div>
                  <span>
                    {{ $t('views.grades.gradesTable.headers.span') }}:
                    <strong>{{ grade.span }}</strong>
                  </span>
                </div>
              </v-timeline-item>

              <v-timeline-item color="green" small>
                <div>
                  <div class="font-weight-normal">
                    <span>
                      {{ $t('views.grades.gradesTable.headers.quotas') }}:
                      <strong>{{ grade.quotas }}</strong>
                    </span>
                  </div>
                  <span>
                    {{ $t('views.grades.gradesTable.headers.status') }}:
                    {{
                      grade.status === true
                        ? $t('views.grades.gradesTable.headers.statusTextTrue')
                        : $t('views.grades.gradesTable.headers.statusTextFalse')
                    }}
                  </span>
                </div>
              </v-timeline-item>

              <v-timeline-item color="deep-purple lighten-1" small>
                <div>
                  <div class="font-weight-normal">
                    <span>{{ $t('views.grades.gradesTable.headers.dateVerbose') }}:</span>
                  </div>
                  <span>{{ grade.date }}</span>
                </div>
              </v-timeline-item>

              <v-timeline-item color="green" small>
                <div>
                  <div class="font-weight-normal">
                    <span>{{ $t('views.grades.gradesTable.headers.description') }}: </span>
                  </div>
                  <span>{{ grade.description }}</span>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
