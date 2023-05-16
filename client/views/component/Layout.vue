<template>
    <div class="layout">
        <!-- {{ item }} -->
        <!-- 23:10 -->
        <div class="layoutContainer">
            <div class="layoutContent">
                    {{ layoutSeq }}
            </div>
        </div>
        <div class="layoutSelector" @click="selectLayout()"></div>
    </div>
</template>

<script>
import { useEditorStore } from '../../stores/store'
import { onMounted } from 'vue'

export default {
    data() {
        return {
            
        }
    },
    props:[
        "layoutSeq"
    ],
    components:{

    },
    setup() {
        const editorStore = useEditorStore();

        onMounted(() => {
            editorStore.setSelectedLayout(this.layoutSeq);
            console.log(editorStore.getSelectedLayout());
        });

        const selectLayout = () => {
            console.log(this.layoutSeq);
            console.log(editorStore.getSelectedLayout());
        };

        return {
            selectLayout
        };
    }
}
</script>

<style scoped>
.layout{
    background: white;
    min-height: 20rem;
    border-radius: 5px;
    height: calc(50vh - 6rem);
}
.layoutContainer{
    position: relative;
    width: 100%;
    padding-bottom: calc(100% * 10 / 23);
}
.layoutContent{
    position: absolute;
    background: #f5f5f5;
    border-color: #f0f0f0;
    border-width: 1px;
    border-radius: 5px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.layoutSelector{
    position: relative;
    width: 100%;
    height: 100%;
}
</style>