<template>
	<div class="flex title" @click="menuEntity.onClick">
		<p :innerHTML="menuEntity.text"></p>
		<img class="img-l" @click="menuEntity.onIconClick" :src="menuEntity.icon" alt="" />
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import MenuEntity from "./MenuEntity";

export default defineComponent({
	props: {
		menuEntity: {
			type: MenuEntity,
			required: true,
		}
	}
})
</script>
<style scoped></style>