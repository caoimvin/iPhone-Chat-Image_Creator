<template>
  <div id="settings">
    <div class="header">
      <img src="@/assets/app-logo.png" alt />
      <div class="text">
        <p>iFake Text Message</p>
        <p>Create a Fake Text Message Conversation</p>
      </div>
    </div>

    <div class="conversation">
      <div class="collapse-header" @click="Conversation = !Conversation">
        <p>Text Message Conversation</p>
      </div>
      <transition name="smooth">
        <div class="collapse-card" v-if="Conversation">
          <div>
            <p>Name</p>
            <input v-model="name" type="text" placeholder="Name" />
          </div>
          <div v-for="(mes, index) in message" :key="index">
            <input
              type="text"
              v-model="message[index]"
              placeholder="Message..."
            />
            {{ mes.value }}
            <i></i>
            <i></i>
          </div>
          <div class="add-message">
            <p @click="addMessageField">+ Add Text Message</p>
          </div>
        </div>
      </transition>
    </div>

    <div class="settings">
      <div class="collapse-header" @click="Battery = !Battery">
        <p>Text Message Conversation</p>
      </div>
      <transition name="smooth">
        <div class="collapse-card" v-if="Battery">
          <div>
            <p>Battery Level</p>
            <p>{{ percent }}%</p>
            <input type="range" name id v-model="percent" />
          </div>
          <div>
            <p>Show Percent</p>
            <input type="checkbox" v-model="showPercent" />
          </div>
          <div>
            <p>Show Battery</p>
            <input type="checkbox" name id />
          </div>
        </div>
      </transition>
    </div>

    <div class="connection">
      <div class="collapse-header" @click="Connection = !Connection">
        <p>Connection</p>
      </div>
      <transition name="smooth">
        <div class="collapse-card" v-if="Connection">
          <div>
            <p>Signal Strength</p>
            <p>oooo</p>
            <input type="range" name id />
          </div>
          <div>
            <p>Network</p>
            <input type="text" name id v-model="connectionName" />
          </div>
          <div>
            <p>Connection Type</p>
            <select name id v-model="connectionType">
              <option value="LTE">LTE</option>
              <option value="4G">4G</option>
              <option value="3G">3G</option>
              <option value="Wifi">Wifi</option>
              <option value="none">None</option>
            </select>
          </div>
          <div>
            <p>Airplane Mode</p>
            <input type="checkbox" v-model="airplaneMode" name id />
          </div>
        </div>
      </transition>
    </div>

    <div class="settings">
      <div class="collapse-header" @click="Settings = !Settings">
        <p>Text Message Conversation</p>
      </div>
      <transition name="smooth">
        <div class="collapse-card" v-if="Settings">
          <div>
            <p>Time</p>
            <input type="text" name id />
          </div>
          <div>
            <p>Show Bluetooth</p>
            <input type="checkbox" name id />
          </div>
          <div>
            <p>Show Alarm</p>
            <input type="checkbox" name id />
          </div>
          <div>
            <p>Show Lock</p>
            <input type="checkbox" name id />
          </div>
          <div>
            <p>Show Do Not Disturb</p>
            <input type="checkbox" name id />
          </div>
          <div>
            <p>Blackout Name</p>
            <input type="checkbox" name id />
          </div>
          <div>
            <p>Send Button</p>
            <select name id>
              <option value>Microphone</option>
              <option value>Send</option>
            </select>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
// import { store } from "@/assets/store";
// import { mapMutations } from "vuex";
// import { mapMultiRowFields } from "vuex-map-fields";

import { mapFields } from "vuex-map-fields";

export default {
  data() {
    return {
      Conversation: true,
      Battery: false,
      Connection: false,
      Settings: false,
      // name: this.$store.getters.test,
    };
  },
  computed: {
    // The `mapFields` function takes an array of
    // field names and generates corresponding
    // computed properties with getter and setter
    // functions for accessing the Vuex store.
    ...mapFields([
      "name",
      "fieldB",
      "percent",
      "showPercent",
      "connectionType",
      "airplaneMode",
      "connectionName",
      "message",
    ]),
    // ...mapMultiRowFields(["message"]),
  },
  methods: {
    // ...mapMutations(["addMessageField"]),
    addMessageField() {
      this.$store.commit("addMessageField");
    },
  },
};
</script>

<style lang="scss">
$background-color: rgb(245, 245, 245);
$border-color: darken(
  $color: $background-color,
  $amount: 10,
);
$blue-color: rgb(0, 132, 255);

.smooth-enter-active,
.smooth-leave-active {
  transition: height 0.5s;
  overflow: hidden;
}
.smooth-enter,
.smooth-leave-to {
  height: 0;
}

#settings {
  // background: rgb(255, 255, 255);
  width: 50%;
  // min-height: 80vh;
  height: 100%;
  margin-bottom: 10vh;

  .header {
    background: $background-color;
    border: 1px solid $border-color;
    padding: 10px;
    display: flex;
    margin-bottom: 20px;

    img {
      width: 40px;
      height: 40px;
      margin: auto 0;
      margin-right: 20px;
    }

    .text {
      p:nth-child(1) {
        color: black;
        font-size: 1.8em;
        font-weight: bold;
      }
    }
  }

  .collapse-header {
    background: $background-color;
    border: 1px solid $border-color;
    padding: 10px;
    text-align: center;
    margin-top: 20px;

    p {
      color: black;
      font-weight: bold;
    }

    &:hover {
      cursor: pointer;
      background: darken($color: $background-color, $amount: 3);
    }
  }

  .collapse-card {
    // height: 0;
    // overflow: hidden;
    // transition: all 0.3s ease;
  }
  .collapse-card > div {
    background: rgb(255, 255, 255);
    border: 1px solid $border-color;
    border-top: none;
    display: flex;
    justify-content: space-between;
    padding: 10px;

    input {
      background: none;
      border: 1px solid rgb(219, 219, 219);
      padding: 5px;
    }
  }

  .conversation {
    .add-message {
      color: $blue-color;
      cursor: pointer;
    }
  }
}
</style>
