import { defineStore } from "pinia";

export const useNewWidgetStore = defineStore("newWidgetStore", {
    state: () => {
        return {
            selectedLayout: 0,
            startPos: 0,
            endPos: 0,
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
    },
});
