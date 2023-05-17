<template>
  <div class="m-b">
    <label for="" class="m-r" :innerHTML="menuEntity.text"></label>
    <div v-for="(item, index) in menuEntity.menuList" :key="index">
      <menu-item :menu-entity=item v-if="item.constructor.name == 'MenuItemEntity'"></menu-item>
      <menu-button :menu-entity=item v-if="item.constructor.name == 'MenuButtonEntity'"></menu-button>
      <menu-input :menu-entity=item v-if="item.constructor.name == 'MenuInputEntity'"></menu-input>
      <menu-dropdown :menu-entity=item v-if="item.constructor.name == 'MenuDropdownEntity'"></menu-dropdown>
      <menu-file :menu-entity=item v-if="item.constructor.name == 'MenuFileEntity'"></menu-file>
      <menu-color :menu-entity=item v-if="item.constructor.name == 'MenuColorEntity'"></menu-color>
    </div>
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