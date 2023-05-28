<template>
    <div class="m-b">
        <label for="" class="m-r" :innerHTML="menuEntity.text"></label>
        <img src="../../../../resources/images/color-wheel.png" class="colorWheel" @click="()=>{onColorPicker = !onColorPicker}" width="27">
        <div class="colorDiv">
            <!-- <img src="../../../../resources/images/color-wheel.png" @click="()=>{onColorPicker = !onColorPicker}"> -->
            <input type="text" :placeholder="menuEntity.placeholder" :value="color" @change="menuEntity.onValueChange" :style="{backgroundColor:color}"/>
        </div>
        <div class="colorPicker" v-if="onColorPicker">
            <ColorPicker color="hsl(120 100% 50% / 1)" @color-change="updateColor"></ColorPicker>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";
import MenuColorEnity from "./menuColorEntity";
import { ColorPicker } from "vue-accessible-color-picker";

export default {
    data() {
        return {
            color: "#00ff00ff",
            onColorPicker: false
        };
    },
    props: {
        menuEntity: MenuColorEnity,
    },
    components: {
        ColorPicker,
    },
    computed: {
        hexColor() {
            return `#${this.color.r}${this.color.g}${this.color.b}`;
        },
    },
    methods: {
        updateColor(eventData) {
            this.color = (eventData.colors.hex)
        },
    },
};
</script>
<style scoped>
.img-l {
    width: 25px;
    height: 25px;
}

img {
    width: 20px;
    height: 20px;
}

.colorPicker{
    position: absolute;
    width: 25.5rem;
    z-index: 9999;
}

.colorDiv{
    margin-bottom: 1.5rem;
    margin-top: 1rem
}

.colorWheel{
    position: absolute;
    margin-left: 1.5rem;
    z-index: 1;
}
</style>
