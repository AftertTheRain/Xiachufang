import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/scss/index.scss'
import axios from '@/utils/axios'
import 'virtual:svg-icons-register'
import iconSvg from '@/components/icon-svg/index.vue'
import '@/mock'
import { Swiper,SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Button } from 'vant';

const app = createApp(App)
// 创建iconSvg全局组件
app.component('iconSvg', iconSvg).component('Swiper',Swiper).component('SwiperSlide',SwiperSlide)
// 全局引入axios
app.config.globalProperties.$axios = axios

app.use(Button).use(router).use(store).mount('#app')
