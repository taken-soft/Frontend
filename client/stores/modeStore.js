import { defineStore } from "pinia";

export const useModeStore = defineStore("modeSore", {
  state: () => {
    let isEditMode = false;
    return {
			isEditMode,
    };
  },
  getters: {
    curruentMode() {
			return this.isEditMode;
    },
  },
  actions: {
		changeMode() {
			this.isEditMode = !this.isEditMode;
		}
  },
});
