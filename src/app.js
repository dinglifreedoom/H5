/*
 大撒旦
 * author:jo.li
 * 说明:项目主入口
 * */
require('./../node_modules/jquery-weui/dist/lib/weui.css');//加载公共样式
require('./../node_modules/jquery-weui/dist/css/jquery-weui.css');//加载公共样式
require('./../static/css/global.css');//加载公共样式
require('./../node_modules/animate.css/animate.min.css');//加载公共样式
$ = require('./../node_modules/jquery-weui/dist/lib/jquery-2.1.4.js');//加载jquery
// $ = require('zepto');
require('./../node_modules/jquery-weui/dist/js/jquery-weui.js');//加载jquery-weui
IScroll = require('./../static/js/iscroll.js');//加载iscroll
touch = require('./../static/js/touch.js');//touch.js


var Vue = require('vue');
// var VueTouch = require('./vtouch');
var VueRouter = require('vue-router');
var VueCookie = require('vue-cookie');
var vueResource = require('vue-resource')

var fastclick = require('fastclick');
fastclick.attach(document.body);
// // register filters 自定义过滤器  金额格式化，
// var filters = require('./filters');

// Object.keys(filters).forEach(function(k) {
//   Vue.filter(k, filters[k]);
// });

//根据不同的环境构建不同的baseUrl
// if(ENV.environment){
// 	baseUrl= 'http://api.shuidiguanjia.com/api/';
// }
// else{
// 	baseUrl = 'http://integrate.aidangjia.h2ome.cn/api/';
// }


var App = Vue.extend(require('./app.vue'));

//Vue.component('app', App);

/*
 如果还想声明一个vue实例
 要放在 Vue.use(VueRouter); 之前
 因为当使用了 Vue.use(VueRouter)后，改写了 Vue 的实例化方法。
 */

//var newV = new Vue();//注意看上面说明
Vue.use(VueRouter);
Vue.use(vueResource);
Vue.use(VueCookie);

// way 1
if (typeof appObj == "undefined") {

    let cookie = VueCookie.get('authToken') || '{}', access_token = JSON.parse(cookie)['access_token'] || null;
    // token = access_token ? 'token ' + access_token : 'token 0964f30900a3b6a18d4a36a0ca47c8e9ab3d48a1';//前测试人员TOKEN
    token = access_token ? 'token ' + access_token : 'token a6ac7859d22db57b1f1e6eba0cccfd7c8ee497b9';//fed TOKEN
   // token = 'token 5dcf3dd989c895671177ed82dd0b46d430ee34f1'
    // token = access_token ? 'token ' + access_token : 'Fed NOw';
    // Vue.http.headers.common['Access-Control-Allow-Origin'] = "*";
    Vue.http.headers.common['Authorization'] = token;

    // console.log(token)
    // Vue.http.interceptors.push((request,next)=>{
    //     request.credentials = true; // 接口每次请求会跨域携带cookie
    //     request.method= 'POST'; // 请求方式（get,post）
    //     request.headers.set('token','111') // 请求headers携带参数
    //     request.method= 'POST'; // 请求方式（get,post）
    //     request.headers.set('token','111') // 请求headers携带参数
    //     request.method= 'POST'; // 请求方式（get,post）
    //     request.headers.set('token','111') // 请求headers携带参数
    //     next(function(response){
    //         return  response;
    //     });
    // })

    baseUrl = 'http://api.shuidiguanjia.com/';
    // baseUrl = 'http://api.ih2ome.cn/';
    flag = true;
} else {
    token = appObj.getToken();
    // alert(token)
    if (typeof(token) === 'undefined') {
        alert("token 未定义");
    }
    Vue.http.headers.common['Authorization'] = token;
    baseUrl = appObj.getBaseUrl();

      //falg true 集中式
    try {
        if (appObj.getMode() === "centralize_mode") {
            flag = true;
        } else {
            flag = false;
        }
    } catch (e) {
        flag = false;
    }
}

var router = new VueRouter(
    {
        hashbang: false,  //为true的时候 example.com/#!/foo/bar ， false的时候 example.com/#/foo/bar
        //abstract:true,  //地址栏不会有变化
        //以下设置需要服务端设置
        //history: false,   //当使用 HTML5 history 模式时，服务器需要被正确配置 以防用户在直接访问链接时会遇到404页面。
        //saveScrollPosition: false
        linkActiveClass: 'custom-active-class' //全局设置连接匹配时的类名 参考http://vuejs.github.io/vue-router/en/link.html
    }
);

require('./router')(router);

router.start(App, '#app');