<template>
  <div class="m-b">
    <label for="" class="m-r" :innerHTML="menuEntity.text"></label>
    <select name="" id="" @change="(event) => {
        menuEntity.currentValue = event.target.value;
        menuEntity.onValueChange(event);
      }">
      <option value="없음">없음</option>
      <option v-for="(equipment, key) in menuEntity.dropdownList" v-bind:value="key" :innerHTML="key" v-bind:key="key"
        :selected="menuEntity.currentValue == key">
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