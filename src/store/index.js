import Vue from "vue";
import Vuex from "vuex";

import { getField, updateField } from "vuex-map-fields";

// import state from "./state";
// import mutations from "./mutations";
// import actions from "./actions";
// import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "Kevin",
    fieldB: "",
    percent: "25",
    showPercent: "true",
    connectionName: "Sprint",
    connectionType: "LTE",
    airplaneMode: "",
    message: ["This is a test message"],
  },
  getters: {
    // Add the `getField` getter to the
    // `getters` of your Vuex store instance.
    getField,
  },
  mutations: {
    // Add the `updateField` mutation to the
    // `mutations` of your Vuex store instance.
    updateField,
    addMessageField(state) {
      state.message.push("");
    },
  },
});
