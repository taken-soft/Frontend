<template>
  <!-- 모달 -->
  <modal :visible="modalVisible" @close="closeModal">
    <div class="flex modal_header">
      <h2>대시보드 생성</h2>
      <button @click="closeModal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          viewBox="0 96 960 960"
          width="30"
        >
          <path
            d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
          />
        </svg>
      </button>
    </div>

    <div class="modal_body">
      <p style="margin-bottom: 1rem">레이아웃 배치</p>
      <select name="" id="">
        <option value="">2*2</option>
        <option value="">4*2</option>
      </select>
      <button>생성</button>
    </div>
  </modal>
  <modal :visible="modalVisible2" @close="closeModal2">
    <div class="flex modal_header">
      <h2>대시보드 저장</h2>
      <button @click="closeModal2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          viewBox="0 96 960 960"
          width="30"
        >
          <path
            d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
          />
        </svg>
      </button>
    </div>

    <div class="modal_body">
      <p style="margin-bottom: 1rem">레이아웃 배치</p>
      <select name="" id="">
        <option value="">2*2</option>
        <option value="">4*2</option>
      </select>
      <button>생성</button>
    </div>
  </modal>
  <modal :visible="modalVisible3" @close="closeModal3">
    <div class="flex modal_header">
      <h2>대시보드 삭제</h2>
      <button @click="closeModal3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          viewBox="0 96 960 960"
          width="30"
        >
          <path
            d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
          />
        </svg>
      </button>
    </div>

    <div class="modal_body">
      <p style="margin-bottom: 1rem">레이아웃 배치</p>
      <select name="" id="">
        <option value="">2*2</option>
        <option value="">4*2</option>
      </select>
      <button>생성</button>
    </div>
  </modal>

  <!-- <svg
        v-on:click="hide"
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        viewBox="0 96 960 960"
        width="30"
      >
        <path
          d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
        />
      </svg> -->
  <div>
    <router-link to="/"><p class="m-b">메인</p></router-link>
    <router-link to="/Dashboard1.page">
      <div class="flex m-b">
        <p>대시보드 1</p>
        <svg
          @click="showDiv = !showDiv"
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          viewBox="0 96 960 960"
          width="30"
        >
          <path
            d="M180 876h44l443-443-44-44-443 443v44Zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"
          />
        </svg>

        <!-- 수정페이지 -->
        <div class="editpage" v-show="showDiv">
          <div class="flex title">
            <p>대시보드 1</p>
            <svg
              @click="showDiv = !showDiv"
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 96 960 960"
              width="30"
            >
              <path
                d="M480 896 160 576l320-320 42 42-248 248h526v60H274l248 248-42 42Z"
              />
            </svg>
          </div>
          <div class="flex m-b accordion">
            <p>위젯 추가</p>
            <svg
                @click="showDiv2 = !showDiv2"
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 96 960 960"
                width="30"
              >
                <path
                  d="M450 856V606H200v-60h250V296h60v250h250v60H510v250h-60Z"
                />
              </svg>
            <!-- 위젯추가페이지 -->          
          <div class=" addwidget">
            <div
            class=" accordion-item"
            v-show="showDiv2"
            v-for="(item, index) in items"
            :key="index"
          >
            <p class="accordion-header" v-on:click="toggleItem(index)">
              {{ item.title }}
              <span v-if="item.showContent">&#8722;</span>
              <span v-else>&#43;</span>
            </p>
            <p v-if="item.showContent" class="accordion-content">
              {{ item.content }}
            </p>
            <!-- <div class="widget">chart1</div>
                <div class="widget">chart2</div>
                <div class="widget">chart3</div>
                <div class="widget">chart4</div> -->
          </div>
              
          </div>
          </div>
          
          <div class="flex m-b">
            <p @click="showModal2">대시보드 저장</p>
            <svg
              @click="showModal2"
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 96 960 960"
              width="30"
            >
              <path
                d="M840 373v503q0 24-18 42t-42 18H180q-24 0-42-18t-18-42V276q0-24 18-42t42-18h503l157 157Zm-60 27L656 276H180v600h600V400ZM479.765 811Q523 811 553.5 780.735q30.5-30.264 30.5-73.5Q584 664 553.735 633.5q-30.264-30.5-73.5-30.5Q437 603 406.5 633.265q-30.5 30.264-30.5 73.5Q376 750 406.265 780.5q30.264 30.5 73.5 30.5ZM233 472h358V329H233v143Zm-53-72v476-600 124Z"
              />
            </svg>
          </div>

          <div class="flex m-b">
            <p @click="showModal3">대시보드 삭제</p>
            <svg
              @click="showModal3"
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 96 960 960"
              width="30"
            >
              <path
                d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </router-link>
    <router-link to="/Dashboard2.page"
      ><p class="m-b">대시보드 2</p></router-link
    >
    <div class="flex-start m-b" @click="showModal">
      <p>ADD NEW</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        viewBox="0 96 960 960"
        width="25"
      >
        <path d="M450 856V606H200v-60h250V296h60v250h250v60H510v250h-60Z" />
      </svg>
    </div>
  </div>
</template>

<script>
import Modal from "../pages/main/Modal.vue";

export default {
  data() {
    return {
      modalVisible: false,
      modalVisible2: false,
      modalVisible3: false,
      showDiv: false,
      showDiv2: false,
      items: [
        {
          title: '텍스트',
        },
        {
          title: '이미지',
          content: 'This is the content of item 2.',
          showContent: false
        },
        {
          title: '사각형',
          content: 'This is the content of item 2.',
          showContent: false
        },
        {
          title: '원',
          content: 'This is the content of item 2.',
          showContent: false
        },
        {
          title: '그래프',
          content: '<div>sdfsdfdsfdssdf</div>',
          showContent: false
        }
      ]
    };
  },
  components: {
    Modal: Modal,
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    showModal2() {
      this.modalVisible2 = true;
    },
    showModal3() {
      this.modalVisible3 = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    closeModal2() {
      this.modalVisible2 = false;
    },
    closeModal3() {
      this.modalVisible3 = false;
    },
    toggleItem(index) {
      this.items[index].showContent = !this.items[index].showContent;
    }
  },
  watch: {},
  computed: {},
  mounted() {
    console.log("Menu mounted");
  },
};
</script>
<style scoped></style>
