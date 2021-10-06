// 用户身份相关接口

import http from '../http/interface'
const Set = {
	
	// 获取详情
	GetGoodsInfo:(data,base) => {
	    return http.request({
	        url: '/api/Shop/ShopGoods/GetGoodsInfo',
	        method: 'GET', 
	        data,
			baseUrl:base
			// handle:true
	    })
	},	
	
	
}
export default Set