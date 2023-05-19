<template>
    <div v-cloak>
        <Header></Header>
        <div class="navhead flex">
            <svg v-on:click="hide" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30">
                <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
            </svg>
            <span :innerHTML="getDashboard()"> </span>
        </div>
        <!-- nav inner-->
        <div class="nav flex" v-bind:style="{ display: displayStyle }">
            <svg v-on:click="hide" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30">
                <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
            </svg>
            <div>
                <Menu></Menu>
            </div>
        </div>
        <div :class="divClass">
            <router-view />
        </div>
    </div>
</template>

<script>
import Modal from "../pages/main/Modal.vue";
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
//import Menu from "../layout/Menu.vue";
import Menu from "../layout/menu/Menu.vue";

import { useDashboardStore } from "../../stores/dashboardStore";

const App = {
    data: () => {
        return {
            modalVisible: false,
            showDiv: false,
            displayStyle: "block",
            divClass: "mainwrap expand",
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
            this.divClass = this.divClass === "mainwrap" ? "mainwrap expand" : "mainwrap";
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
    setup() {
        const dashboardStore = useDashboardStore();

        const getDashboard = () => {
            return dashboardStore.getSelectedDashBoard;
        };

        return {
            getDashboard,
        };
    },
};

export default App;
</script>

<style scoped>
[v-cloak] {
    display: none;
}

.mainwrap {
    position: absolute;
    margin: 0px 0px;
    padding: 1.5rem;
    width: 100%;
    height: calc(100vh - 8.5rem);
    background: #f3f6ff;
}

.mainwrap.expand {
    width: calc(100% - 300px);
}
</style>
