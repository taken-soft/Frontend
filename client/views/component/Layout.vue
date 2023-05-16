<template>
    <div class="layout">
        <!-- {{ item }} -->
        <!-- 23:10 -->
        <div class="layoutContainer">
            <div class="layoutContent">
                {{ layoutSeq }}
            </div>
            
        </div>
    </div>
</template>
<script>
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
</style>