/**
 * @author : 최정우
 * @since : 2022.10.19
 * @dscription : Vue를 활용한 Client단 구현의 시작점(Index) Component 입니다.
 */
import { createApp } from 'vue';

import AppRouter from './pages/AppRouter.js';
import App from './pages/App.vue';

const vue = createApp(App).use(AppRouter).mount('#root');

if (!APP_USER_HTTP_REQUEST_URL && APP_USER_HTTP_REQUEST_URL != '/') {
    console.log('index.js APP_USER_HTTP_REQUEST_URL : ', APP_USER_HTTP_REQUEST_URL);
    AppRouter.push({ path: APP_USER_HTTP_REQUEST_URL, query: {}})
}
