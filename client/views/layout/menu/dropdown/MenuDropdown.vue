<template>
  <div class="m-b">
    <label for="" class="m-r" :innerHTML="menuEntity.text"></label>
    <select name="" id="" @change="(event) => {
        menuEntity.currentValue = event.target.value;
        menuEntity.onValueChange(event.target.value);
      }">
      <option v-for="(item, index) in menuEntity.dropdownList" v-bind:value="item" :innerHTML="item" v-bind:key="index"
        :selected="menuEntity.currentValue == item">
      </option>
    </select>
  </div>
</template>
<script>
import MenuDropdownEntity from './menuDropdownEntity';
export default {
  props: {
    menuEntity: MenuDropdownEntity
  }
}
</script>
<style scoped></style>