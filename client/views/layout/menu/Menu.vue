<template>
	<div>
		<div v-for="(item, index) in menuList" :key="index">
			<menu-item :menu-entity=item v-if="item.type == 'item'"></menu-item>
			<menu-button :menu-entity=item v-if="item.type == 'button'"></menu-button>
		</div>
		<div></div>
	</div>
</template>
<script>
import MenuItem from "./MenuItem.vue";
import MenuButton from "./MenuButton.vue";


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
	},
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