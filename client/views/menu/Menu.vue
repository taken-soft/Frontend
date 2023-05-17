<template>
	<div>
		<div v-for="(item, index) in menuList" :key="index">
			<menu-item :menu-entity="item" v-if="item.type == MenuEntityType.ITEM"></menu-item>
			<menu-button :menu-entity="item" v-if="item.type == MenuEntityType.BUTTON"></menu-button>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import MenuEntity from "./MenuEntity";
import { MenuEntityType } from "./MenuEntityType";

import MenuItem from "./MenuItem.vue";
import MenuButton from "./MenuButton.vue";

export default defineComponent({
	data() {
		return {
			MenuEntityType: MenuEntityType,
		};
	},
	props: {
		menuList: {
			type: Array<MenuEntity>,
			required: true,
		},
	},
	components: {
		MenuItem: MenuItem,
		MenuButton: MenuButton,
	}
})
</script>
<style scoped></style>