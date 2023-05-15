<template>
  <div v-cloak>
    <Header></Header>
    <div class="navhead flex">
      <svg
        v-on:click="hide"
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        viewBox="0 96 960 960"
        width="30"
      >
        <path
          d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
        />
      </svg>
      <span>
        여기에 대시보드 이름 추가 예정
      </span>
    </div>
    <!-- nav inner-->
    <div class="nav flex" v-bind:style="{ display: displayStyle }">
      <svg
        v-on:click="hide"
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        viewBox="0 96 960 960"
        width="30"
      >
        <path
          d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
        />
      </svg>
      <div><Menu></Menu></div>
    </div>
    <div :class="divClass">
      <router-view />
    </div>
  </div>
</template>

<script>
import Modal from "../pages/main/Modal.vue";
import Header from "../layout/Header.vue";
import Menu from "../layout/Menu.vue";
import Footer from "../layout/Footer.vue";

const App = {
  data: () => {
    return {
      modalVisible: false,
      showDiv: false,
      displayStyle: "block",
      divClass: 'mainwrap expand'
    };
  },
  methods: {
   showModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    hide() {
      this.displayStyle = this.displayStyle === "none" ? "block" : "none";
      this.divClass =
        this.divClass === "mainwrap" ? "mainwrap expand" : "mainwrap";
    },
  },
  watch: {},
  computed: {},
  components: {
    Header: Header,
    Menu: Menu,
    Footer: Footer,
    Modal: Modal,
  },
  mounted: () => {
    console.log("Vue mounted");
  },
};

export default App;
</script>

<style scoped>
[v-cloak] {
  display: none;
}

.mainwrap {
  margin: 20px 0px;
  padding: 1.5rem;
  width: 100%;
}
.mainwrap.expand {
  width: calc(100% - 300px);
}
</style>
