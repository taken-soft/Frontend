<template>
	<div class="flex title" @click="menuEntity.onClick">
		<p :innerHTML="menuEntity.text"></p>
		<img class="img-l" @click="menuEntity.onIconClick" :src="menuEntity.icon" alt="" />
	</div>
</template>
<script>
import MenuEntity from './menuEntity';

export default{
	props: {
		menuEntity:MenuEntity
	}
}
</script>
<style scoped></style>