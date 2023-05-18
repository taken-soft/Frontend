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
      this.editMenuRouter.pop();
    },
    replace(menuList) {
      this.editMenuRouter.pop();
      this.editMenuRouter.push(menuList);
    },
    refresh() {
      this.editMenuRouter.push(this.editMenuRouter.pop());
    }
  },
});
