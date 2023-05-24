<template>
	<div class="flex title" @click="menuEntity.onClick">
		<p :innerHTML="menuEntity.text" v-if="!getIsClicked" @click="menuEntity.changeIsClicked"></p>
    <div class="flex" v-if="getIsClicked">
      <input type="text" :placeholder="menuEntity.placeholder" :value="menuEntity.currentValue" @change="menuEntity.onValueChange"/>
    </div>
    <img class="img-l" @click="menuEntity.onIconClick" :src="require(`../../../../resources/images/${menuEntity.icon}.png`)" alt="" />
	</div>
</template>
<script>
import MenuInputItemEntity from './MenuInputItemEntity';

export default {
  computed: {
    getIsClicked() {
      console.log(this.menuEntity.isClicked);
      return this.menuEntity.isClicked;
    }
  },
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