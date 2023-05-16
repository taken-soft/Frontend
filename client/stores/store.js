import { defineStore } from "pinia";

export const useEditorStore = defineStore("editorStore", {
    state: () => {
        return { selectedLayout: 0 };
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
