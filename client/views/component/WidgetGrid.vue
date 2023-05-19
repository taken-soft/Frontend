<template>
    <div class="widgetGrid">
        <div v-for="y in ySize" :key="y" class="gridOut">
            <div
                v-for="x in xSize"
                :key="x"
                class="gridIn"
                @mousedown="gridClick((y - 1) * ySize + x)"
                @mouseup="gridOver((y - 1) * ySize + x)"
                @mouseenter="gridDrag((y - 1) * ySize + x)"
            >
                <!-- {{y}}  {{x}} -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => {
        return {
            xSize: 23,
            ySize: 10,
            widgets: [],
            widget: {
                type: "",
                start: 0,
                end: 0,
            },
            onDrag: false,
            widgetTypes: ["text", "chart", "rectangle"],
        };
    },
    methods: {
        setGrid: () => {
            let grid = [];
        },
        gridClick: function (startPos) {
            //console.log(x+ ","+y)
            this.widget.start = startPos;
            this.widget.end = startPos;
            this.onDrag = true;

            // console.log(this.widget.start, this.widget.end);
        },
        gridDrag: function (endPos) {
            if (this.onDrag) {
                this.widget.end = endPos;
                // console.log(this.widget.start, this.widget.end);
            }
        },
        gridOver: function (endPos) {
            this.onDrag = false;
            if (endPos < this.widget.start) {
                this.widget.end = this.widget.start;
                this.widget.start = endPos;
            }
            // console.log(this.widget.start, this.widget.end);
        },
        selectType: function (type) {
            this.widget.type = type;
        },
        addWidget: function () {
            let newWidget = {
                type: this.widget.type,
                start: this.widget.start,
                end: this.widget.end,
            };
            this.widgets.push(newWidget);
            this.widget = {
                type: "",
                start: { x: 0, y: 0 },
                end: { x: 0, y: 0 },
            };
        },
        innerStyle: function (widget) {
            return {
                left: Math.min(widget.start.x - 1, widget.end.x - 1) * 70 + "px",
                top: Math.min(widget.start.y - 1, widget.end.y - 1) * 70 + "px",
                width: (Math.abs(widget.end.x - widget.start.x) + 1) * 70 + "px",
                height: (Math.abs(widget.end.y - widget.start.y) + 1) * 70 + "px",
            };
        },
    },
    mounted() {
        // console.log("hi")
    },
};
</script>
<style scoped>
.widgetGrid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.gridIn {
    border: 1px solid rgb(180, 180, 180);
    width: calc(100% / 23);
    height: 100%;
}
.gridOut {
    position: relative;
    width: 100%;
    height: calc(100% / 10);
    display: flex;
}
</style>
