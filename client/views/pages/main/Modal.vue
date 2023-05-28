<template>
  <div class="modal" v-if="modalController.visible">
    <div class="modalBackground" @click="modalCloser"></div>
    <div :class="[modalClass, { 'modalClose': isClosing }]">
      <div class="flex modal_header">
        <h2>{{ modalController.title }}</h2>
        <button @click="modalCloser">
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
  data() {
    return {
      modalClass: "modal-content",
      isClosing: false
    }
  },
  props: {
    modalController: ModalController
  },
  methods: {
    modalCloser() {
      this.isClosing = true;
      setTimeout(() => {
        this.modalController.close();
        this.isClosing = false;
      }, 500);
    }
  },
  mounted() {
    this.modalClass = "modal-content";
  }
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
}

@keyframes slideUp {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideDown {
  0% {
    transform: translateY(0%);
    opacity: 0;
  }
  100% {
    transform: translateY(100%);
    opacity: 1;
  }
}

.modal-content {
  position: fixed;
  z-index: 9999;
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
  animation: slideUp 1s ease-in-out;
}

.modalClose {
  position: fixed;
  z-index: 9999;
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
  animation: slideDown 1s ease-in-out;
}

.modalBackground {
  background-color: #00000090;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>
