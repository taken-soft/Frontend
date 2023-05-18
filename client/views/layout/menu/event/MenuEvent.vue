<template>
  <div class="m-b">
    <label for="" class="m-r" :innerHTML="menuEntity.text"></label>
    <menu-dropdown :menu-entity=menuEntity.type></menu-dropdown>
    <menu-color :menu-entity=menuEntity.color></menu-color>
    <menu-input :menu-entity=menuEntity.over></menu-input>
    <menu-input :menu-entity=menuEntity.less></menu-input>
  </div>
</template>
<script>
import MenuEventEntity from "./menuEventEntity";

import MenuDropdown from "../dropdown/MenuDropdown.vue";
import MenuColor from "../color/MenuColor.vue";
import MenuInput from "../input/MenuInput.vue";

export default {
  props: {
    menuEntity: MenuEventEntity,
  },
  components: {
    MenuDropdown: MenuDropdown,
    MenuColor: MenuColor,
    MenuInput: MenuInput,
  },
}
</script>
<style scoped></style>