<template>
	<div>
		<div v-for="(item, index) in menuList" :key="index">
			<menu-item :menu-entity=item v-if="item.type == 'item'"></menu-item>
			<menu-button :menu-entity=item v-if="item.type == 'button'"></menu-button>
		</div>
	</div>
</template>
<script>
import MenuItem from "./MenuItem.vue";
import MenuButton from "./MenuButton.vue";
import MenuEntity from "./menuEntity";

export default {
	data() {
		return {
		};
	},
	props: {
		menuList: Array
	},
	components: {
		MenuItem: MenuItem,
		MenuButton: MenuButton,
	}
}
</script>
<style scoped></style>