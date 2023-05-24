import { defineStore } from "pinia";

export const useEditMenuStore = defineStore("editMenuStore", {
  state: () => {
    let editMenuRouter = [];
    return {
      editMenuRouter,
    };
  },
  getters: {
    curruentRoute() {
      return this.editMenuRouter[this.editMenuRouter.length - 1].route();
    },
  },
  actions: {
    clear() {
      this.editMenuRouter = [];
    },
    push(editMenu) {
      this.editMenuRouter.push(editMenu);
    },
    pop() {
      this.editMenuRouter.pop();
    },
    replace(editMenu) {
      this.editMenuRouter.pop();
      this.editMenuRouter.push(editMenu);
    },
    refresh() {
      this.editMenuRouter.push(this.editMenuRouter.pop());
    }
  },
});
