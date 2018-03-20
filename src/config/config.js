export const H2Sites = {}
// headers config
H2Sites.HEADERS = {
    VND_API_JSON: "application/vnd.api+json",
    cross_url: "*/*",
    form_urlencoded: "application/x-www-form-urlencoded; charset=UTF-8",
}

H2Sites.APIS = {
    // add-finance  添加财务流水
    HOUSES_SEARCH: "api/v1/houses?search=",//
    MONEYFLOWS: "api/v2/moneyflows",//
    APARTMENTINDS: "api/v1/apartmentinds",//
    CONCENTRATEDHOUSES_APARTMENT: "api/v1/concentratedhouses?apartment=",//

    // add-order    添加账单

    // ads  广告

    // announcement 公告
    ANNOUNCEMENTS: "api/v2/announcements/",//
    RATEINFO: "api/v2/rateinfo",//

    // clause   注册条款
    // data-count   经营数据统计
    // day-report   日经营报表
    // finance  财务流水
    // finance-detail   财务流水详情
    // member   会员介绍
    // message  通知消息
    // message-detail   消息详情
    // month-report 月经营报表
    MONTHREPORTS: "api/v2/monthreports",//
    // morning-read 早读
    MORNING_READ: "api/m/morning/read",//
    VIP_APPLY: "api/v2/vip/apply",//
    // operation-analyze    运营分析
    APPLY_STATUS: "api/v2/vip/apply/status",//
    // operation-report 运营分析
    FINANCES: "api/v2/statistics/finances",//
    OPERATIONS: "api/v2/statistics/operations",//
    API_V1_TYPE_ID: "api/v1/{type}/{id}",//
    SENDROOMORDERS: "api/v1/sendroomorders/{id}",//

    // order    账单详情
    API_V1_TYPE_ID: "api/v1/{type}/{id}",//
    PERMISSIONS: "api/v1/permissions",//


    // read-meter   抄表
    ROOMORDERS_METER: "api/v1/roomorders/{q.id}?is_meter=1",//

    // report-ad    报表广告
    VIP_APPLY: "api/v2/vip/apply",//
    APPLY_STATUS: "api/v2/vip/apply/status",//

    // select-date  报表日期选择


    // service  用户服务协议


    // signup   用户注册
    PHONE_CHECK: "api/v1/users/{phone}/check",//
    VERIFYCODE: "api/v1/verifycode",//
    USERS: "api/v1/users",//

    // statement    免责声明

    // app download url app应用商店地址
    APP_DOWNLOAD:{
        appStore:"https://itunes.apple.com/cn/app/%E6%B0%B4%E6%BB%B4%E7%AE%A1%E5%AE%B6-%E6%88%BF%E4%B8%9C%E4%BA%BA%E7%9A%84%E6%8E%8C%E4%B8%8A%E5%85%AC%E5%AF%93%E7%AE%A1%E7%90%86app/id1144337669?mt=8#",
        myappStore:"http://sj.qq.com/myapp/detail.htm?apkName=com.shuidiguanjia.missouririver",
        imttStore:"http://imtt.dd.qq.com/16891/F4F9E3F46A6EB6EA4B8D20450D8DE8AC.apk?fsname=com.shuidiguanjia.missouririver_2.5.6_256.apk&csr=1bbd",
    }

}


console.log(H2Sites);