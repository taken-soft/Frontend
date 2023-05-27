<template>
    <div class="m-b">
        <label for="" class="m-r" :innerHTML="menuEntity.text"></label>
        <select :class="selectClass" name="" id="" @change="onChangeEvent">
            <option value="없음">없음</option>
            <option
                v-for="(equipment, key) in menuEntity.dropdownList"
                v-bind:value="key"
                :innerHTML="key"
                v-bind:key="key"
                :selected="menuEntity.currentValue == key"
            ></option>
        </select>
    </div>
</template>
<script>
import MenuDropdownEntity from "./menuDropdownEntity";
export default {
    props: {
        menuEntity: MenuDropdownEntity,
    },
    data() {
        return {
            selectClass: "none",
        };
    },
    methods: {
        onChangeEvent(event) {
            this.menuEntity.currentValue = event.target.value;
            this.menuEntity.onValueChange(event);
            if (event.target.value == "없음") {
                this.selectClass = "none";
            } else {
                this.selectClass = "selected";
            }
        },
    },
};
</script>
<style scoped>
.selected {
    background: linear-gradient(to right, #ffffff, #9280b5 , #a89bc2);
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

.none{
    background-color: white;
}
</style>
