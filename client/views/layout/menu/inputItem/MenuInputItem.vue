<template>
    <div class="flex title dashboardTitle" @click="onClickTitle">
        <p :innerHTML="menuEntity.text" v-if="!menuEntity.isClicked"></p>
        <div class="flex" v-if="menuEntity.isClicked">
            <!-- <div class="flex"> -->
            <input type="text" :placeholder="menuEntity.placeholder" :value="menuEntity.currentValue" @change="menuEntity.onValueChange" />
        </div>
        <img class="img-l" @click="menuEntity.onIconClick" :src="require(`../../../../resources/images/${menuEntity.icon}.png`)" alt="" />
    </div>
</template>
<script>
import MenuInputItemEntity from "./MenuInputItemEntity";

export default {
    props: {
        menuEntity: MenuInputItemEntity,
    },
    methods:{
        onClickTitle(){
            this.menuEntity.onClick();
            this.$forceUpdate();
        }
    }
};
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
input {
    margin-top: 0;
    font-size: 2rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 0.1rem solid #cfd5db ;
}
p {
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
    margin-left: 0.5rem;
}
.dashboardTitle{
    margin-bottom: 4rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #cfd5db;
}
</style>