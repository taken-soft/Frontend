<template>
	<div class="flex title" @click="menuEntity.onClick">
		<p :innerHTML="menuEntity.text"></p>
		<img class="img-l" @click="menuEntity.onIconClick" :src="require(`../../../../resources/images/${menuEntity.icon}.png`)" alt="" />
	</div>
</template>
<script>
import MenuButtonEntity from './menuButtonEntity';

export default {
	props: {
		menuEntity:MenuButtonEntity
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