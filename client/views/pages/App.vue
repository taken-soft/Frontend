<template>
    <div v-cloak>
        <Header :dashboardName="getDashboard()"></Header>
        <div class="navhead flex">
            <svg v-on:click="hide" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30">
                <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
            </svg>
            <!-- <span :innerHTML="getDashboard()"> </span> -->
        </div>
        <!-- nav inner-->
        <div :class="menuClass" v-bind:style="{ display: displayStyle }">
            <img @click="hide()" width="27" src="../../resources/images/close.png" alt="" />
            <div>
                <Menu></Menu>
            </div>
        </div>
        <div :class="divClass">
            <router-view />
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Modal from "../pages/main/Modal.vue";
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
//import Menu from "../layout/Menu.vue";
import Menu from "../layout/menu/Menu.vue";
import { getDashboardList } from "../../axios/dashboardListAxios";

import { useDashboardStore } from "../../stores/dashboardStore";
import { useWidgetDataStore } from "../../stores/widgetDataStore";
import { useModeStore } from "../../stores/modeStore";

const App = {
    data: () => {
        return {
            modalVisible: false,
            showDiv: false,
            displayStyle: "block",
            divClass: "mainwrap expand",
            divOn: true,
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
            this.divOn = !this.divOn;
            if (!this.divOn) {
                console.log("menu close");
                setTimeout(() => {
                    this.displayStyle = this.displayStyle === "none" ? "block" : "none";
                    this.divClass = this.divClass === "mainwrap" ? "mainwrap expand" : "mainwrap";
                }, 200);
            } else {
                this.displayStyle = this.displayStyle === "none" ? "block" : "none";
                this.divClass = this.divClass === "mainwrap" ? "mainwrap expand" : "mainwrap";
            }
        },
    },
    watch: {},
    computed: {
        menuClass() {
            return `nav flex + ${this.divOn ? " menuCreate" : " menuClose"}`;
        },
    },
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
        const widgetDataStore = useWidgetDataStore();
        const modeStore = useModeStore();

    modeStore.startInterval(setInterval(widgetDataStore.getSensorDataList, 1000));

        getDashboardList()
            .then((result) => {
                dashboardStore.setDashboardList(result.data);
            })
            .catch((err) => {
                console.log(err);
            });

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
    padding-top: 0rem;
    padding-bottom: 0rem;
    margin-bottom: 0rem;
    width: 100%;
    height: calc(100vh - 8.5rem);
    background: rgba(0, 0, 0, 0);
    background-size: 200% 100%;
    animation: gradientAnimation 5s infinite alternate;
}
@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
}
@media (max-width: 700px) {
    .mainwrap {
        overflow: auto;
    }
}

.mainwrap.expand {
    width: calc(100% - 300px);
}

.menuCreate {
    animation: slideLeft 0.2s ease-in-out;
}

@keyframes slideLeft {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0%);
        opacity: 1;
    }
}

.menuClose {
    animation: slideRight 0.2s ease-in-out;
}

@keyframes slideRight {
    0% {
        transform: translateX(0%);
        opacity: 0;
    }
    100% {
        transform: translateX(100%);
        opacity: 1;
    }
}
</style>
