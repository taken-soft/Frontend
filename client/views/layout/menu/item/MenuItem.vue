<template>
	<div class="flex title" @click="menuEntity.onClick">
		<p :innerHTML="menuEntity.text"></p>
		<img class="img-l" @click="menuEntity.onIconClick" :src="require(`../../../../resources/images/${menuEntity.icon}.png`)" alt="" />
	</div>
</template>
<script>
import MenuItemEntity from '../item/menuItemEntity';

export default {
	props: {
		menuEntity: MenuItemEntity
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