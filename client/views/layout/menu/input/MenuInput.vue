<template>
  <div class="m-b">
    <label for="" class="m-r" :innerHTML="menuEntity.text"></label>
    <div class="flex">
      <input type="text" :placeholder="menuEntity.placeholder" :value="menuEntity.currentValue" @change="menuEntity.onValueChange"/>
    </div>
  </div>
</template>
<script>
import MenuInputEntity from './menuInputEntity';
export default {
  props: {
    menuEntity: MenuInputEntity
  }
}
</script>
<style scoped></style>