<template>
    <!-- add+ 모달-->
    <modal :visible="modalVisible" @close="closeModal">
        <div class="flex modal_header">
            <h2>대시보드 생성</h2>
            <button @click="closeModal">
                <img class="img-l" @click="showDiv = !showDiv" src="../../resources/images/close.png" alt="" />
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30">
                    <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                </svg>
            </button>
        </div>

        <div class="modal_body">
            <p style="margin-bottom: 1rem">레이아웃 배치</p>
            <div class="flex">
                <select name="" id="" class="m-r" v-model="selectedLayout">
                    <option value="layout1">2*2</option>
                    <option value="layout2">4*2</option>
                </select>
                <button>생성</button>
            </div>
            <div v-if="selectedLayout === 'layout1'" class="layout"><Dashboard1></Dashboard1></div>
            <div v-else-if="selectedLayout === 'layout2'" class="layout"><Dashboard2></Dashboard2></div>
        </div>
    </modal>
    <!-- 대시보드 저장 모달 -->
    <modal :visible="modalVisible2" @close="closeModal2">
        <div class="flex modal_header">
            <h2>대시보드 저장</h2>
            <button @click="closeModal2">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30">
                    <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
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
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30">
                    <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
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
    <div style="margin-top: 3rem">
        <router-link to="/"><p class="m-b">메인</p></router-link>
        <router-link to="/Dashboard1.page">
            <div class="flex m-b">
                <p>대시보드 1</p>
                <img class="img-l" @click="showDiv = !showDiv" src="../../resources/images/edit.png" alt="" />

                <!-- 수정페이지 -->
                <div class="editpage" v-show="showDiv">
                    <div class="flex title">
                        <p>대시보드 1</p>
                        <img class="img-l" @click="showDiv = !showDiv" src="../../resources/images/back.png" alt="" />
                    </div>
                    <div class="flex m-b accordion">
                        <p>위젯 추가</p>
                        <img class="img-l" @click="showDiv2 = !showDiv2" src="../../resources/images/add.png" alt="" />

                        <!-- 위젯추가페이지 -->
                        <div class="addwidget" v-show="showDiv2">
                            <div class="accordion-item" v-for="(item, index) in items" :key="index">
                                <div class="flex m-b" v-on:click="toggleItem(index)">
                                    <p class="accordion-header">
                                        {{ item.title }}
                                    </p>
                                    <span v-if="item.showContent"><img src="../../resources/images/app.png" alt="" /></span>
                                    <span v-else><img src="../../resources/images/app.png" alt="" /></span>
                                </div>

                                <div v-if="item.showContent" class="accordion-content">
                                    <div class="title flex">
                                        <p class="">{{ item.content }}</p>
                                        <img v-on:click="toggleItem(index)" src="../../resources/images/back.png" alt="" />
                                    </div>
                                    <!-- 텍스트 추가 영역 -->
                                    <div v-show="item.content1">
                                        <div class="m-b">
                                            <label for="">장비명</label>
                                            <select name="" id="" v-model="selectedOption">
                                                <option value="">없음</option>
                                                <option value="option1">있음</option>
                                            </select>
                                            <div v-if="selectedOption === 'option1'" class="morepage">
                                                <div class="m-b">
                                                    <label class="flex m-r" for="">장비명<img src="../../resources/images/remove.png" alt="" /></label>
                                                    <select name="" id="" v-model="selectedOption">
                                                        <option value="">없음</option>
                                                        <option value="option1">있음</option>
                                                    </select>
                                                </div>
                                                <div class="m-b">
                                                    <label for="">센서명</label>
                                                    <select name="" id="" v-model="selectedOption">
                                                        <option value="">없음</option>
                                                        <option value="option1">있음</option>
                                                    </select>
                                                </div>
                                                <p class="m-b flex">센서추가<img src="../../resources/images/add.png" alt="" /></p>
                                                <div class="m-b">
                                                    <label for="">기본 색상 선택</label>
                                                    <input type="text" />
                                                </div>
                                                <div class="m-b">
                                                    <label for="" class="m-r">산술식</label>
                                                    <select name="" id="">
                                                        <option value="">평균</option>
                                                        <option value="">-</option>
                                                    </select>
                                                </div>
                                                <div class="m-b">
                                                    <label for="" class="m-r flex">이벤트 종류<img src="../../resources/images/remove.png" alt="" /></label>
                                                    <select name="" id="">
                                                        <option value="">배경색 변경</option>
                                                        <option value="">-</option>
                                                    </select>
                                                </div>

                                                <div class="m-b">
                                                    <label for="" class="m-r">색상 선택</label>
                                                    <input type="text" />
                                                </div>
                                                <div class="m-b">
                                                    <label for="" class="m-r">임계값 설정</label>
                                                    <div class="flex"><input type="text" placeholder="30이상" /><input type="text" placeholder="10미만" /></div>
                                                </div>
                                                <p class="flex">이벤트 추가<img src="../../resources/images/add.png" alt="" /></p>
                                            </div>
                                        </div>
                                        <div class="m-b">
                                            <label for="">텍스트</label>
                                            <input type="text" />
                                        </div>
                                        <div class="m-b">
                                            <label for="" class="m-r">기본 색상 선택</label>
                                            <select name="" id="">
                                                <option value="" class="red">red</option>
                                                <option value="" class="blue">blue</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- 이미지 추가 영역 -->
                                    <div v-show="item.content2">
                                        <div class="m-b">
                                            <label for="">이미지 업로드</label>
                                            <input type="file" />
                                        </div>
                                        <div class="m-b">
                                            <label for="" class="m-r">색상 선택</label>
                                            <select name="" id="">
                                                <option value="" class="red">red</option>
                                                <option value="" class="blue">blue</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- 사각형 추가 영역 -->
                                    <div v-show="item.content3">
                                        <div class="morepage">
                                            <div class="m-b">
                                                <label class="flex m-r" for="">장비명<img src="../../resources/images/remove.png" alt="" /></label>
                                                <select name="" id="" v-model="selectedOption">
                                                    <option value="">없음</option>
                                                    <option value="option1">있음</option>
                                                </select>
                                            </div>
                                            <div class="m-b">
                                                <label for="">센서명</label>
                                                <select name="" id="" v-model="selectedOption">
                                                    <option value="">없음</option>
                                                    <option value="option1">있음</option>
                                                </select>
                                            </div>
                                            <p class="m-b flex">센서추가<img src="../../resources/images/add.png" alt="" /></p>
                                            <div class="m-b">
                                                <label for="">기본 색상 선택</label>
                                                <input type="text" />
                                            </div>
                                            <div class="m-b">
                                                <label for="" class="m-r">산술식</label>
                                                <select name="" id="">
                                                    <option value="">평균</option>
                                                    <option value="">-</option>
                                                </select>
                                            </div>
                                            <div class="m-b">
                                                <label for="" class="m-r flex">이벤트 종류<img src="../../resources/images/remove.png" alt="" /></label>
                                                <select name="" id="">
                                                    <option value="">배경색 변경</option>
                                                    <option value="">-</option>
                                                </select>
                                            </div>

                                            <div class="m-b">
                                                <label for="" class="m-r">색상 선택</label>
                                                <input type="text" />
                                            </div>
                                            <div class="m-b">
                                                <label for="" class="m-r">임계값 설정</label>
                                                <div class="flex"><input type="text" placeholder="30이상" /><input type="text" placeholder="10미만" /></div>
                                            </div>
                                            <p class="flex">이벤트 추가<img src="../../resources/images/add.png" alt="" /></p>
                                        </div>
                                    </div>
                                    <!-- 원 추가 영역 -->
                                    <div v-show="item.content4">
                                        <div class="morepage">
                                            <div class="m-b">
                                                <label class="flex m-r" for="">장비명<img src="../../resources/images/remove.png" alt="" /></label>
                                                <select name="" id="" v-model="selectedOption">
                                                    <option value="">없음</option>
                                                    <option value="option1">있음</option>
                                                </select>
                                            </div>
                                            <div class="m-b">
                                                <label for="">센서명</label>
                                                <select name="" id="" v-model="selectedOption">
                                                    <option value="">없음</option>
                                                    <option value="option1">있음</option>
                                                </select>
                                            </div>
                                            <p class="m-b flex">센서추가<img src="../../resources/images/add.png" alt="" /></p>
                                            <div class="m-b">
                                                <label for="">기본 색상 선택</label>
                                                <input type="text" />
                                            </div>
                                            <div class="m-b">
                                                <label for="" class="m-r">산술식</label>
                                                <select name="" id="">
                                                    <option value="">평균</option>
                                                    <option value="">-</option>
                                                </select>
                                            </div>
                                            <div class="m-b">
                                                <label for="" class="m-r flex">이벤트 종류<img src="../../resources/images/remove.png" alt="" /></label>
                                                <select name="" id="">
                                                    <option value="">배경색 변경</option>
                                                    <option value="">-</option>
                                                </select>
                                            </div>

                                            <div class="m-b">
                                                <label for="" class="m-r">색상 선택</label>
                                                <input type="text" />
                                            </div>
                                            <div class="m-b">
                                                <label for="" class="m-r">임계값 설정</label>
                                                <div class="flex"><input type="text" placeholder="30이상" /><input type="text" placeholder="10미만" /></div>
                                            </div>
                                            <p class="flex">이벤트 추가<img src="../../resources/images/add.png" alt="" /></p>
                                        </div>
                                    </div>
                                    <!-- 막대 그래프 추가 영역 -->
                                    <div v-show="item.content5">
                                        <div class="morepage">
                                            <div class="m-b">
                                                <label class="flex m-r" for="">장비명<img src="../../resources/images/remove.png" alt="" /></label>
                                                <select name="" id="" v-model="selectedOption">
                                                    <option value="">없음</option>
                                                    <option value="option1">있음</option>
                                                </select>
                                            </div>
                                            <div class="m-b">
                                                <label for="">센서명</label>
                                                <select name="" id="" v-model="selectedOption">
                                                    <option value="">없음</option>
                                                    <option value="option1">있음</option>
                                                </select>
                                            </div>
                                            <div class="m-b">
                                                <label for="">막대 색상</label>
                                                <input type="text" />
                                            </div>
                                            <p class="m-b flex">센서추가<img src="../../resources/images/add.png" alt="" /></p>
                                            <div class="m-b">
                                                <label for="" class="m-r">기본 색상 선택</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 꺾은선 그래프 추가 영역 -->
                                    <div v-show="item.content6">
                                        <div class="morepage">
                                            <div class="m-b">
                                                <label class="flex m-r" for="">장비명<img src="../../resources/images/remove.png" alt="" /></label>
                                                <select name="" id="" v-model="selectedOption">
                                                    <option value="">없음</option>
                                                    <option value="option1">있음</option>
                                                </select>
                                            </div>
                                            <div class="m-b">
                                                <label for="">센서명</label>
                                                <select name="" id="" v-model="selectedOption">
                                                    <option value="">없음</option>
                                                    <option value="option1">있음</option>
                                                </select>
                                            </div>
                                            <div class="m-b">
                                                <label for="">꺾은선 색상</label>
                                                <input type="text" />
                                            </div>
                                            <p class="m-b flex">센서추가<img src="../../resources/images/add.png" alt="" /></p>
                                        </div>
                                    </div>

                                    <div class="flex-center content-btn">
                                        <button class="m-r">위젯 생성</button>
                                        <div title="드래그를 통해 위젯을&#13; 생성할 수 있습니다.">
                                            <img src="../../resources/images/help.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex m-b">
                        <p @click="showModal2">대시보드 저장</p>
                        <img class="img-l" @click="showModal2" src="../../resources/images/save.png" alt="" />
                    </div>

                    <div class="flex m-b">
                        <p @click="showModal3">대시보드 삭제</p>
                        <img class="img-l" @click="showModal3" src="../../resources/images/delete.png" alt="" />
                    </div>
                </div>
            </div>
        </router-link>
        <!-- <router-link to="/Dashboard2.page"
      ><div class="flex m-b">
       <p class="">대시보드 2</p><img
            class="img-l"
            @click="showDiv = !showDiv"
            src="../../resources/images/edit.png"
            alt=""
          />
      </div></router-link
    > -->
        <div class="flex-start m-b" @click="showModal">
            <p>ADD NEW</p>
            <img class="img-l" @click="showModal" src="../../resources/images/add.png" alt="" />
        </div>
    </div>
</template>

<script>
import Modal from "../pages/main/Modal.vue";
import Dashboard1 from "../pages/main/Dashboard1.vue";
import Dashboard2 from "../pages/main/Dashboard2.vue";

export default {
    data() {
        return {
            selectedOption: "",
            selectedLayout: "",
            modalVisible: false,
            modalVisible2: false,
            modalVisible3: false,
            showDiv: false,
            showDiv2: false,
            showContent1: false,
            items: [
                {
                    title: "텍스트",
                    content: "텍스트 추가",
                    showContent: false,
                    content1: "텍스트",
                },
                {
                    title: "이미지",
                    content: "이미지 추가",
                    showContent: false,
                    content2: "이미지",
                },
                {
                    title: "사각형",
                    content: "사각형 추가",
                    showContent: false,
                    content3: "사각형",
                },
                {
                    title: "원",
                    content: "원 추가",
                    showContent: false,
                    content4: "원",
                },
                {
                    title: "막대 그래프",
                    content: "막대 그래프 추가",
                    showContent: false,
                    content5: "그래프",
                },
                {
                    title: "꺾은선 그래프",
                    content: "꺾은선 그래프 추가",
                    showContent: false,
                    content6: "그래프",
                },
            ],
        };
    },
    components: {
        Modal: Modal,
        Dashboard1: Dashboard1,
        Dashboard2: Dashboard2,
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
        },
    },
    watch: {},
    computed: {},
    mounted() {
        console.log("Menu mounted");
    },
};
</script>
<style scoped>
.layout {
    margin: 1rem;
}
.img-l {
    width: 30px;
    height: 30px;
}
img {
    width: 20px;
    height: 20px;
}
.accordion-content {
    background: #ffffff;
    border-left: 1px solid #dfdfdf;
    height: -webkit-fill-available;
    position: fixed;
    width: 300px;
    right: 0;
    top: 86px;
    padding: 2rem;
}
.addwidget {
    background: #ffffff;
    border-top: 1px solid #dfdfdf;
    border-left: 1px solid #dfdfdf;
    height: -webkit-fill-available;
    position: fixed;
    width: 300px;
    right: 0;
    top: 250px;
    padding: 2rem;
}
.graph {
    background: #ffffff;
    border: 1px solid #dfdfdf;
    height: 100%;
    position: fixed;
    width: 300px;
    right: 0;
    top: 85px;
    padding: 2rem;
    overflow: scroll;
    overflow-x: hidden;
}
.widget {
    min-height: 20rem;
    border: 1px solid #dfdfdf;
    margin-bottom: 1rem;
}
.morepage {
    position: absolute;
    top: 8rem;
    background: #ffffff;
    width: -webkit-fill-available;
    padding-right: 2rem;
}
.content-btn {
    position: absolute;
    width: -webkit-fill-available;
    bottom: 30px;
}
</style>
