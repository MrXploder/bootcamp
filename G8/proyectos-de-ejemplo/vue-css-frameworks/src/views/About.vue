<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="container">
      <div class="row">
        <div class="col-4">H</div>
        <div class="col-4">M</div>
        <div class="col-4">C</div>
      </div>
    </div>

    <b-container>
      <b-row>
        <b-col>H</b-col>
        <b-col>M</b-col>
        <b-col>C</b-col>
      </b-row>
    </b-container>

    <BContainer>
      <BRow>
        <BCol>H</BCol>
        <BCol>M</BCol>
        <BCol>C</BCol>
      </BRow>
    </BContainer>

    <b-button v-b-tooltip.hover title="Tooltip directive content"> Hover Me </b-button>
    <b-button id="tooltip-target-1"> Hover Me </b-button>
    <b-tooltip target="tooltip-target-1" triggers="hover"> I am tooltip <b>component</b> content! </b-tooltip>
  </div>
</template>
