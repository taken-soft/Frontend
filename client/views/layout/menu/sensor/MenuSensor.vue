<template>
  <div class="m-b">
    <label for="" class="m-r" :innerHTML="menuEntity.text"></label>
    <label for="" class="m-r" :innerHTML="장치"></label>
    <select name="" id="" @change="(event) => {
        menuEntity.onDeviceChange(event.target.value);
        this.$forceUpdate();
      }">
      <option v-for="(_, key) in menuEntity.device" v-bind:value="key" :innerHTML="key" v-bind:key="key"
        :selected="menuEntity.currentValue[0] == key">
      </option>
    </select>
    <label for="" class="m-r" :innerHTML="센서"></label>
    <select name="" id="" @change="(event) => {
        menuEntity.onSensorChange(event.target.value);
      }">
      <option v-for="(equipment, key) in menuEntity.sensor()" v-bind:value="equipment" :innerHTML="key" v-bind:key="key"
        :selected="menuEntity.currentValue[1] == key">
      </option>
    </select>
  </div>
</template>
<script>
import MenuSensorEntity from "./menuSensorEntity";

import MenuItem from "../item/MenuItem.vue";
import MenuButton from "../button/MenuButton.vue";
import MenuInput from "../input/MenuInput.vue";
import MenuDropdown from "../dropdown/MenuDropdown.vue";
import MenuFile from "../file/MenuFile.vue";
import MenuColor from "../color/MenuColor.vue";

export default {
  props: {
    menuEntity: MenuSensorEntity
  },
  methods: {

  },
  components: {
    MenuItem: MenuItem,
    MenuButton: MenuButton,
    MenuInput: MenuInput,
    MenuDropdown: MenuDropdown,
    MenuFile: MenuFile,
    MenuColor: MenuColor,
  },
}
</script>
<style scoped></style>