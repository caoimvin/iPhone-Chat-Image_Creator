<template>
  <div id="phone">
    <div class="header">
      <div class="top">
        <div v-if="airplaneMode">
          <i class="fa fa-fighter-jet"></i>
        </div>
        <div v-else class="connection">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <p>{{ connectionName }} {{ connectionType }}</p>
        </div>
        <div class="time">
          <p>{{time}}</p>
        </div>
        <div class="battery">
          <p v-if="showPercent">{{ percent }}%</p>
          <div v-if="showBattery">
            <i v-if="percent <= 20" class="fa fa-battery-1" ref="battery"></i>
            <i v-else-if="percent <= 50" class="fa fa-battery-2" ref="battery"></i>
            <i v-else-if="percent <= 80" class="fa fa-battery-3" ref="battery"></i>
            <i v-else class="fa fa-battery-4" ref="battery"></i>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="first">
          <div></div>
          <p>Messages</p>
        </div>
        <p class="name">{{ name }}</p>
        <p>Details</p>
      </div>
    </div>
    <div class="messages" v-for="(mes, index) in message" :key="index">
      <div class="message" v-if="mes.length != 0">
        <p>{{ mes }}</p>
      </div>
    </div>
    <div class="footer">
      <i class="fa fa-camera"></i>
      <input class="message-input" type="text" placeholder="Type input please ..." disabled />
      <i class="fa fa-microphone"></i>
    </div>
  </div>
</template>

<script>
// import { mapMultiRowFields } from "vuex-map-fields";

// import { store } from "@/assets/store";
import { mapFields } from "vuex-map-fields";

export default {
  // data() {
  //   return {
  //     name: this.$store.state.name,
  //   };
  // },
  computed: {
    // The `mapFields` function takes an array of
    // field names and generates corresponding
    // computed properties with getter and setter
    // functions for accessing the Vuex store.
    ...mapFields([
      "name",
      "fieldB",
      "time",
      "percent",
      "showPercent",
      "showBattery",
      "connectionType",
      "airplaneMode",
      "connectionName",
      "message"
    ])
    // ...mapMultiRowFields(["message"]),
  },
  mounted() {
    // const battery = this.$refs.battery;
    // console.log(battery);
    // let percent = this.$store.state.percent;
    // battery.style.scale = percent;
  }
};
</script>

<style lang="scss">
$background-color: rgb(245, 245, 245);
$blue-color: rgb(0, 132, 255);

#phone {
  background: white;
  width: 50%;
  height: 80vh;
  position: relative;

  .header {
    height: 100px;
    background: $background-color;
    border-bottom: 1px solid grey;
    color: black;

    .top {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      align-items: center;
      position: relative;

      .connection {
        display: flex;

        div {
          background: white;
          border: 1px solid black;
          border-radius: 50%;
          width: 7px;
          height: 7px;
          margin: 8px 1px 0;

          &:nth-child(-n + 3) {
            background: black;
          }
        }
        p {
          margin-left: 5px;
        }
      }

      .time {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-weight: bold;
      }

      .battery {
        display: flex;

        i {
          margin: auto;
          margin-left: 5px;
          font-size: 1.4em;
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      font-size: 2em;
      color: $blue-color;
      font-weight: lighter;
      position: relative;

      .first {
        display: flex;
        div {
          border-left: 4px solid $blue-color;
          border-bottom: 4px solid $blue-color;
          width: 20px;
          height: 20px;
          transform: rotate(45deg);
          transform-origin: left, bottom;
          margin: auto;
          margin-left: 5px;
        }
      }

      .name {
        color: black;
        font-weight: bold;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .messages {
    position: relative;
    .message {
      display: inline-block;
      // position: absolute;
      background: rgb(245, 245, 245);
      border: 1px solid grey;
      padding: 10px;
      margin: 20px;
      p {
        // background: grey;
        // width: auto;
      }
    }
  }

  .footer {
    background: $background-color;
    display: flex;
    justify-content: space-between;
    height: 60px;
    border-top: 1px solid rgb(170, 170, 170);
    position: absolute;
    bottom: 0;
    width: 100%;

    .message-input {
      height: 50%;
      width: 70%;
      margin: auto;
      background: lighten($color: $background-color, $amount: 2);
      border: 1px solid rgb(170, 170, 170);
      border-radius: 5px;
      padding: 6px;
    }

    i {
      margin: auto;
      font-size: 2em;
    }
  }
}
</style>
