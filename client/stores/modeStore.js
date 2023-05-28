import { defineStore } from "pinia";

export const useModeStore = defineStore("modeStore", {
  state: () => {
    let isEditMode = false;
    let interval;
    return {
			isEditMode,
      interval
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
		},
    startInterval(interval) {
      this.interval = interval;
    },
    endInterval() {
      clearInterval(this.interval);
    }
  },
});
