import { defineStore } from "pinia";

export const useNewWidgetStore = defineStore("newWidgetStore", {
    state: () => {
        return {
            widgetType: null,
            selectedLayout: 0,
            startPos: 0,
            endPos: 0,
            zIndex:0
        };
    },
    getters: {
        getSelectedLayout() {
            return this.selectedLayout;
        },
        getWidgetType(){
          return this.widgetType
        }
    },
    actions: {
        setSelectedLayout(layoutSeq) {
            this.selectedLayout = layoutSeq;
        },
        setWidgetType(type) {
          this.widgetType = type;
        },
        deleteWidget(){
            this.widgetType =null
            this.startPos = 0
            this.endPos=0
            this.zIndex=0
        }
    },
});
