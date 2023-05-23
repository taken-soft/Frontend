<template>
  <div class="m-b">
    <label for="" class="m-r" :innerHTML="menuEntity.text"></label>
    <div class="flex">
      <input type="text" :placeholder="menuEntity.placeholder" :value="menuEntity.currentValue" @change="menuEntity.onValueChange"/>
    </div>
  </div>
</template>
<script>
import MenuColorEnity from './menuColorEntity';

export default {
  props: {
    menuEntity: MenuColorEnity
  }
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