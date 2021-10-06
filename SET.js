// let url = './set.json'
// let get= function(url){
//     return new Promise((resolve,reject)=>{
//         let xhr= new XMLHttpRequest();
//         xhr.open('get',url,true);
//         xhr.onload=function(){
//             if(xhr.status==200){
// 				console.log(xhr.responseText)
//                 resolve(JSON.parse(xhr.responseText));
//             }else{
//                 reject(null);
//             }
//         }
//         xhr.onerror = function(){
//             reject(null);
//         }
//         xhr.send(null);
//     });
// }
//  get(url)

let m = window.location.origin
console.log('gloabal',window.location,window.location.origin)

// 全局设置
export default {
	baseUrl:"",   //api业务接口域名
	mainUrl:m,      //项目域名
	// 测试环境
	wx_appid: 'wx73ea2c1ca903ba43',    //微信授权 appid  
	// wx_appid: 'wx09daee2f47e178aa',    //微信授权 appid  測試公衆號
	// wx_redirect_url:'http://192.168.1.11:8080/',
	wx_redirect_url: 'http://h5.gllo.com.cn',   //微信授权 回调页地址
	
	versionUrl:'/api/AppVersion/VersionCheck'   //app版本检测url   // 1是不更新 2是强制更新 3可选择更新 4//appstore更新
}