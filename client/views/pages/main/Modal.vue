<template>
  <div class="modal" v-if="modalController.visible">
    <div class="modal-content">
      <div class="flex modal_header">
            <h2>{{ modalController.title }}</h2>
            <button @click="() => modalController.close()">
                <!-- <img class="img-l" @click="showDiv = !showDiv" src="../../../resources/images/close.png" alt="" /> -->
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30">
                    <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                </svg>
            </button>
        </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ModalController from "./modalController"
export default {
  props: {
    modalController: ModalController
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: rgba(0, 0, 0, 0.5); */
}

.modal-content {
  background-color: white;
  /* padding: 20px; */
  border-radius: 5px;
  border: 1px solid black;
}
</style>
