<template>
  <div class="m-b">
    <label for="" class="m-r" :innerHTML="menuEntity.text"></label>
    <menu-dropdown :menu-entity=menuEntity.device></menu-dropdown>
    <menu-dropdown :menu-entity=menuEntity.sensor></menu-dropdown>
  </div>
</template>
<script>
import MenuSensorEntity from "./menuSenorEntity";

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