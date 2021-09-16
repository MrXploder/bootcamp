import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules'

@Module({})
export default class AppModule extends VuexModule {
  public sidebar = {
    value: false,
    miniVariant: false,
    clipped: false
  }

  @Mutation
  public SET_SIDEBAR_VALUE(newValue: boolean) {
    this.sidebar.value = newValue
  }

  @Mutation
  public SET_SIDEBAR_MINIVARIANT(value: boolean) {
    this.sidebar.miniVariant = value
  }

  @Mutation
  public SET_SIDEBAR_CLIPPED(value: boolean) {
    this.sidebar.clipped = value
  }

  @Action
  public toggleSidebar() {
    this.SET_SIDEBAR_VALUE(!this.sidebar.value)
  }
}
