<template>
    <div class="m-b">
        <label class="m-r" :innerHTML="menuEntity.text"></label>
        <label class="m-r" :innerHTML="장치"></label>
        <select
            :class="selectClass"
            name=""
            id=""
            @change="
                (event) => {
                    onDeviceChange(event);
                }
            "
        >
            <option
                v-for="(_, key) in menuEntity.device"
                v-bind:value="key"
                :innerHTML="key"
                v-bind:key="key"
                :selected="menuEntity.currentValue[0] == key"
            ></option>
        </select>
        <label class="m-r" :innerHTML="센서"></label>
        <select
            :class="selectClass"
            name=""
            id=""
            @change="
                (event) => {
                    onSensorChange(event);
                }
            "
        >
            <option
                v-for="(equipment, key) in menuEntity.sensor()"
                v-bind:value="equipment"
                :innerHTML="key"
                v-bind:key="key"
                :selected="menuEntity.currentValue[1] == key"
            ></option>
        </select>
    </div>
</template>
<script>
import MenuSensorEntity from "./menuSensorEntity";

import MenuItem from "../item/MenuItem.vue";
import MenuButton from "../button/MenuButton.vue";
import MenuInput from "../input/MenuInput.vue";
import MenuDropdown from "../dropdown/MenuDropdown.vue";
import MenuFile from "../file/MenuFile.vue";
import MenuColor from "../color/MenuColor.vue";

export default {
    data() {
        return {
            selectClass: "none",
        };
    },
    props: {
        menuEntity: MenuSensorEntity,
    },
    methods: {
        onDeviceChange(event) {
            this.menuEntity.onDeviceChange(event.target.value);
            this.$forceUpdate();
            if (event.target.value == "없음") {
                this.selectClass = "none";
            } else {
                this.selectClass = "selected";
            }
        },
        onSensorChange(event) {
            this.menuEntity.onSensorChange(event.target.value);
            if (event.target.value == "없음") {
                this.selectClass = "none";
            } else {
                this.selectClass = "selected";
            }
        },
    },
    components: {
        MenuItem: MenuItem,
        MenuButton: MenuButton,
        MenuInput: MenuInput,
        MenuDropdown: MenuDropdown,
        MenuFile: MenuFile,
        MenuColor: MenuColor,
    },
    mounted(){
        console.log("rerender")
        if (this.menuEntity.currentValue != "없음") {
            this.selectClass = "selected";
        }
    }
};
</script>
<style scoped>
.selected {
    background: linear-gradient(to right, #ffffff, #9280b5, #a89bc2);
    background-size: 300% 100%;
    animation: gradientAnimation 3s forwards;
}

@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
        background-color: #ffffff; /* 시작 색상 - 흰색 */
    }
    100% {
        background-position: 100% 50%;
        background-color: #a89bc2; /* 종료 색상 - 진한 보라색 */
    }
}

.none {
    background-color: white;
}
</style>
