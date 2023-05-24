<template>
	<div class="flex title" @click="menuEntity.onClick">
		<!-- <p :innerHTML="menuEntity.text" v-if="!menuEntity.isClicked"></p> -->
    <!-- <div class="flex" v-if="menuEntity.isClicked"> -->
    <div class="flex">
      <input type="text" :placeholder="menuEntity.placeholder" :value="menuEntity.currentValue" @change="menuEntity.onValueChange"/>
    </div>
    <img class="img-l" @click="menuEntity.onIconClick" :src="require(`../../../../resources/images/${menuEntity.icon}.png`)" alt="" />
	</div>
</template>
<script>
import MenuInputItemEntity from './MenuInputItemEntity';

export default {
	props: {
		menuEntity: MenuInputItemEntity
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