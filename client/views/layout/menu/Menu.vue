<template>
  <div>
    <div v-for="(item, index) in menuList" :key="index">
      <menu-item :menu-entity=item v-if="item.constructor.name == 'MenuItemEntity'"></menu-item>
      <menu-button :menu-entity=item v-if="item.constructor.name == 'MenuButtonEntity'"></menu-button>
      <menu-input :menu-entity=item v-if="item.constructor.name == 'MenuInputEntity'"></menu-input>
      <menu-dropdown :menu-entity=item v-if="item.constructor.name == 'MenuDropdownEntity'"></menu-dropdown>
      <menu-file :menu-entity=item v-if="item.constructor.name == 'MenuFileEntity'"></menu-file>
      <menu-color :menu-entity=item v-if="item.constructor.name == 'MenuColorEntity'"></menu-color>
      <menu-sensor :menu-entity=item v-if="item.constructor.name == 'MenuSensorEntity'"></menu-sensor>
    </div>
    <div></div>
  </div>
</template>
<script>
import MenuItem from "./item/MenuItem.vue";
import MenuButton from "./button/MenuButton.vue";
import MenuInput from "./input/MenuInput.vue";
import MenuDropdown from "./dropdown/MenuDropdown.vue";
import MenuFile from "./file/MenuFile.vue";
import MenuColor from "./color/MenuColor.vue";
import MenuSensor from "./sensor/MenuSensor.vue";

export default {
  props: {
    menuList: Array
  },
  components: {
    MenuItem: MenuItem,
    MenuButton: MenuButton,
    MenuInput: MenuInput,
    MenuDropdown: MenuDropdown,
    MenuFile: MenuFile,
    MenuColor: MenuColor,
    MenuSensor: MenuSensor,
  },
}
</script>
<style scoped>
.img-l {
  width: 30px;
  height: 30px;
}

img {
  width: 20px;
  height: 20px;
}
</style>