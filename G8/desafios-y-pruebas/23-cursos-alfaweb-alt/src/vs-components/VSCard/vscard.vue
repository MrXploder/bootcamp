<template>
  <div class="vs-card" :class="`vs-card--type-${type}`" @click="$emit('click', $event)">
    <div class="vs-card__img">
      <img :src="imgSrc" alt="" />
    </div>
    <div class="vs-card__text">
      <div class="vs-card__title">
        <h3>{{ title }}</h3>
      </div>
      <p>
        {{ subTitle }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class VSCard extends Vue {
  @Prop({ type: String })
  public readonly type!: 'issue' | 'feature-request' | 'help-wanted' | 'feedback'

  @Prop({ type: String })
  public readonly imgSrc!: string

  @Prop({ type: String })
  public readonly title!: string

  @Prop({ type: String })
  public readonly subTitle!: string
}
</script>

<style lang="scss" scoped>
.vs-card {
  overflow: hidden;
  max-width: 350px;
  width: 100%;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  transition: all 0.25s ease;
  cursor: pointer;
  position: relative;
  color: white;
  &--type {
    &-issue {
      background-color: #8a00f3;
    }

    &-feature-request {
      background-color: #04c7e9;
    }

    &-help-wanted {
      background-color: #6758e7;
    }

    &-feedback {
      background-color: #383996;
    }
  }

  &__text {
    font-size: 13.6px;
    padding: 0 15px 15px;
  }

  &__title {
    padding-top: 10px;
    padding-bottom: 5px;
  }

  &:hover {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.05);
    transform: translateY(5px);
    & .vs-card__img img {
      transform: scale(1.15);
    }
  }

  &__img {
    img {
      width: 350px;
    }
    border-radius: 20px;
    transition: all 0.25s ease;
    max-height: 250px;
    overflow: hidden;
    justify-content: center;
    display: flex;
    align-items: center;
  }
}
</style>
