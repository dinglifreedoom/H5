/*
 * author:jo.li
 * 说明:路由配置模块
 * */
module.exports = function (router) {
    router.map({
        '/login': {
            name: 'login',
            component: require('./views/login.vue'),
        },
        '/order': {
            name: 'order',
            component: require('./views/order.vue'),
        },
        '/add-order': {
            name: 'add-order',
            component: require('./views/add-order.vue'),
        },
        '/read-meter': {
            name: 'read-meter',
            component: require('./views/read-meter.vue')
        },
        '/finance': {
            name: 'finance',
            component: require('./views/finance.vue')
        },
        '/finance-detail': {
            name: 'finance-detail',
            component: require('./views/finance-detail.vue')
        },

        '/add-finance': {
            name: 'add-finance',
            component: require('./views/add-finance.vue')
        },
        '/message': {
            name: 'add-finance',
            component: require('./views/message.vue')
        },
        '/message-detail': {
            name: 'message-detail',
            component: require('./views/message-detail.vue')
        },
        '/data-count': {
            name: 'data-count',
            component: require('./views/data-count.vue')
        },
        '/statement': {
            name: 'statement',
            component: require('./views/statement.vue')
        },
        '/service': {
            name: 'service',
            component: require('./views/service.vue')
        },
        '/report-ad': {
            name: 'report-ad',
            component: require('./views/report-ad.vue')
        },
        '/day-report': {
            name: "day-report",
            component: require('./views/day-report.vue')
        },
        '/operation-analyze': {
            name: 'operation-analyze',
            component: require('./views/operation-analyze.vue')
        },
        '/operation-report': {
            name: "operation-report",
            component: require('./views/operation-report.vue')
        },
        '/power_bi': {
            name: "power_bi",
            component: require('./views/power_bi.vue')
        },
        '/survey': {
            name: "survey",
            component: require('./views/survey.vue')
        },
        '/month-report': {
            name: "month-report",
            component: require('./views/month-report.vue')
        },
        '/select-date': {
            name: "select-date",
            component: require('./views/select-date.vue')
        },
        '/member': {
            name: 'member',
            component: require('./views/member.vue')
        },
        '/announcement': {
            name: 'announcement',
            component: require('./views/announcement.vue')
        },
        '/morning-read': {
            name: 'morning-read',
            component: require('./views/morning-read.vue')
        },
        '/signup': {
            name: 'signup',
            component: require('./views/signup.vue')
        },
        '/clause': {
            name: 'clause',
            component: require('./views/clause.vue')
        },
        '/ads': {
            name: 'ads',
            component: require('./views/ads.vue')
        },
        '*': {
            name: '404',
            component: require('./views/signup.vue')
            // component: require('./components/404.vue')
        },


    });

    window.routeList = [];

    router.beforeEach(function (transition) {
        console.log('before---------------');
        //可以通过在路由中的自定义字段来验证用户是否需要登陆
        if (transition.to.auth) {
            console.log('需要登录');
            //router.go("/login")
        }

        // //如果是中止，这里可以判断用户登录
        // //if(transition.to.path === '/forbidden'){
        if (transition.to.name == '/') {
            router.app.authenticating = true
            setTimeout(function () {
                router.app.authenticating = false
                alert('此路由在全局中设置为中止');
                transition.abort();
            }, 1500);
        }

        //if(routeList.length > 1 && transition.to.name==routeList[routeList.length-2]['name']){
        //	router.app.effect='back';
        //	routeList.splice(routeList.length-1,1);
        //	console.log(routeList);
        //} else {
        //	router.app.effect='fade';
        //	routeList.push({
        //		name : transition.to.name,
        //		path : transition.to.path,
        //		query : transition.to.query,
        //		params : transition.to.params,
        //		timer: +new Date
        //	});
        //}

        /*-------视图切换的延迟处理-------*/
        // setTimeout(function(){
            transition.next();
        // },1000);
    });


    //可以记录访问路径
    router.afterEach(function (transition) {
        console.log('-----------------after');
        for (var i = 0; i < routeList.length; i++) {
            console.log(routeList[i].name);
        }
    });
}