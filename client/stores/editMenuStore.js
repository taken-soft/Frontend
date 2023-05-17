import { defineStore } from "pinia";

export const useEditMenuStore = defineStore("editMenuStore", {
  state: () => {
    let editMenuRouter = new Array();
    return {
      editMenuRouter,
    };
  },
  getters: {
    curruentRoute() {
      return this.editMenuRouter[this.editMenuRouter.length - 1];
    },
  },
  actions: {
    clear() {
      this.editMenuRouter = [];
    },
    push(menuList) {
      this.editMenuRouter.push(menuList);
    },
    pop() {
      return this.editMenuRouter.pop();
    },
  },
});
