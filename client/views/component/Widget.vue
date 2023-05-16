<template>
    <div>
        <component :is="widgetType" />
    </div>
</template>
  
<script>
import Text from "./Widgets/Text.vue";

export default {
    data() {
        return {
            widgetType: "Text"
        }
    },
    components: {
        Text
    },
};
</script>
  