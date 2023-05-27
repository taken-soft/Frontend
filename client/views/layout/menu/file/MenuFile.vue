<template>
  <div class="m-b">
    <label for="" class="m-r" :innerHTML="menuEntity.text"></label>
    <input class="imgInput" type="file" :accept="menuEntity.accept" @change="menuEntity.onValueChange"/>
  </div>
</template>
<script>
import MenuFileEntity from './menuFileEntity';
export default {
  props: {
    menuEntity: MenuFileEntity
  }
}
</script>
<style scoped>
.imgInput{
  background-color: #ffffff00;
  border: 0px;
}
</style>