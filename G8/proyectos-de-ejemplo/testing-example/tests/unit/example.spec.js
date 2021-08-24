import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
// import HelloWorld from "@/components/HelloWorld.vue";
import Listado from "@/components/Listado.vue";

import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    juegos: [],
  },
});

// describe("HelloWorld.vue", () => {
//   it("should renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg },
//     });
//     expect(wrapper.text()).to.include(msg);
//   });
// });

describe("Listado.vue", () => {
  it("should mount correctly", () => {
    const wrapper = shallowMount(Listado, { store });
    expect(wrapper.is(Listado)).to.be.true;
  });
});
