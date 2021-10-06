import Vue from 'vue'
import App from './App'
import api from './utils/http'
import http from '@/utils/http/index.js';
Vue.config.productionTip = false

Vue.prototype.$api = api

App.mpType = 'app' 

const UI = {
	toast: function(text, duration, success) {

		// #ifdef H5
		uni.showToast({
			title: text,
			icon: success ? 'success' : 'none',
			duration: duration || 2000
		})
		// #endif
		// #ifdef APP-PLUS

		if (platform == "android") {
			plus.nativeUI.toast(text, {
				style: 'inline',
				icon: '/static/img/logo.png',
				iconWidth: '20px',
				iconHeight: '20px',
				
			})
		} else {
			plus.nativeUI.toast(text)
		}

		// #endif
	},
	showloading: function(text) {
		// #ifdef H5
		uni.showLoading({
			title: text
		})
		// #endif
		// #ifdef APP-PLUS
		plus.nativeUI.showWaiting(text = '请稍后...', {
			loading: {
				display: 'inline',
				// type:'snow'
			}
		})
		// #endif
	},
	hideloading: function() {
		// #ifdef H5
		uni.hideLoading()
		// #endif
		// #ifdef APP-PLUS
		plus.nativeUI.closeWaiting()
		// #endif
	},
	constNum: function() {
		const res = uni.getSystemInfoSync();
		return res.platform.toLocaleLowerCase() == "android" ? 300 : 0;
	},
	px: function(num) {
		return uni.upx2px(num) + 'px';
	}
}

Vue.prototype.$ui = UI


import tuiButton from '@/components/button/button.vue'
Vue.component('tuiButton', tuiButton)

// import cuCustom from '@/components/cu-custom/cu-custom.vue'
// Vue.component('cu-custom', cuCustom) 

import Icon from "@/components/icon/icon"
Vue.component('Icon', Icon)

import tuiIcon from "@/components/tui-icon/tui-icon"
Vue.component('tuiIcon', tuiIcon)

import tuiModal from "@/components/modal/modal"
Vue.component('tuiModal', tuiModal)

import tuiTag from '@/components/tag/tag'
Vue.component('tuiTag', tuiTag)

import tuiTips from '@/components/tui-tips/tui-tips'
Vue.component('tuiTips', tuiTips)
const app = new Vue({
    ...App
})
app.$mount()
