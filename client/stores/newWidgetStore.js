import { defineStore } from "pinia";

export const useNewWidgetStore = defineStore("newWidgetStore", {
    state: () => {
        return {
            widgetType: "BarChart",
            selectedLayout: 0,
            startPos: 1,
            endPos: 1,
        };
    },
    getters: {
        getSelectedLayout() {
            return this.selectedLayout;
        },
    },
    actions: {
        setSelectedLayout(layoutSeq) {
            this.selectedLayout = layoutSeq;
        },
        setWidgetType(type) {
          this.widgetType = type;
          console.log(this.widgetType);
        }
    },
});
