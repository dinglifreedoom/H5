<!--运营分析-->
<style>

    ul, li, dl, dt, dd {
        list-style: none;
    }

    #ope-report-con #ope-report {
        font-size: 15px;
        margin: 15px 15px 0;
        padding-bottom: 15px;
    }

    #ope-report-con .ope-bg {
        padding-top: 19px;
        border-bottom: 1px solid #cecece;
        /* background: rgb(255, 129, 101); */
    }

    #ope-report-con .nav {
        position: absolute;
        z-index: 20;
        background: #fff;
        width: 100%;
        top: 64px;
    }

    #ope-report-con .nav li {
        float: left;
        height: 50px;
        width: 50%;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
        font-size: 16px;
        color: rgb(115, 115, 115);
        -webkit-tap-highlight-color: rgba(115, 115, 115, 0)

    }

    #ope-report-con .nav .active {
        /* color: rgb(253, 158, 65); */
        /* border-bottom: 2px solid rgb(253, 158, 65); */
          color: #499DF2;
          border-bottom:2px solid #499DF2;
    }

    #ope-report-con #ope-report .details-con {
        padding: 23px 20px 0;
        border-radius: 8px;
        margin-bottom: 15px;
        background: #fff;
    }

    #ope-report-con #ope-report .details-con h1 {
        font-size: 16px;
        color: rgb(77, 77, 77);
        padding-left: 5px;
        line-height: 18px;
        margin-bottom: 20px;
        border-left: 6px solid #499DF2;

    }

    #ope-report-con #ope-report .details-con div {
        margin-bottom: 20px;
    }

    #ope-report-con #ope-report .details-con .container {
        width: 200px;
        height: 200px;
        margin: auto;
        margin-bottom: 30px;

    }

    #ope-report-con #ope-report .details-con .gathering-title {
        margin-bottom: 12px;
    }

    #ope-report-con #ope-report .details-con .gathering-title li {
        float: left;
        margin-bottom: 8px;
        width: 50%;
    }

    #ope-report-con #ope-report .details-con .gathering-title li span {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 2px;
        margin-top: 8px;
        margin-right: 5px;
        background: #C7E3FF;
    }

    #ope-report-con #ope-report .details-con .gathering-title li:nth-child(2) span {
        background: #88C4FF;
    }

    #ope-report-con #ope-report .details-con .gathering-title li:nth-child(3) span {
        background: #499DF2;
    }

    #ope-report-con #ope-report .details-con .gathering-title li:nth-child(4) span {
        background: url(../../static/images/hideRate.png);
    }

    #ope-report-con #ope-report .details-con .gathering-title li.rentNum {
        width: 100%;
        text-align: center;
    }

    #ope-report-con #ope-report .details-con .gathering-title li span.unNormal {
        background: #499DF2;
        /* background: rgb(255, 129, 101); */
    }

    #ope-report-con #ope-report .details-con .gathering-title li span.normal {
        /* background: rgb(255, 204, 194); */
        background: #C7E3FF;        
    }

    #ope-report-con #ope-report .details-con .financial-title {

    }

    #ope-report-con #ope-report .details-con .financial-title {
        width: 202px;
        margin: 0 auto 20px;
    }

    #ope-report-con #ope-report .details-con .financial-title a {
        display: inline-block;
        width: 56px;
        height: 20px;
        color: rgb(245, 245, 245);
        line-height: 20px;
        border-radius: 4px;
        margin: 0 22px;
        background: #499DF2;
        /* background: rgb(255, 127, 102); */
    }

    #ope-report-con #ope-report .details-con .financial-title a div {
        float: left;
        width: 6px;
        height: 6px;
        margin: 7px 6px 0;
        background: rgb(255, 255, 255);
        border-radius: 60%;

    }

    #ope-report-con #ope-report .details-con .financial-title a:nth-child(2) {
        /* background: rgb(255, 174, 82); */
        background: #4AC885;
    }

    #ope-report-con #ope-report .details-con .financial-title a:nth-child(2).active {
        /* color: rgb(255, 174, 82); */
        color: #4AC885 ;
    }

    #ope-report-con #ope-report .details-con .financial-title a:nth-child(2).active div {
        /* background: rgb(255, 174, 82); */
        background:#4AC885 ;
    }

    #ope-report-con #ope-report .details-con .financial-title a.active {
        color: #499DF2;
        background: rgb(255, 255, 255);

    }

    #ope-report-con #ope-report .details-con .financial-title a.active div {
        background: #499DF2;;
    }

    #ope-report-con #ope-report .details-con .uprate-title a {
        display: block;
        width: 70px;
        height: 22px;
        margin: auto;
        line-height: 22px;
        color: rgb(245, 245, 245);
        border-radius: 4px;
        /* background: rgb(255, 127, 102); */
        background: #499DF2;

    }

    #ope-report-con #ope-report .details-con .uprate-title a div {
        float: left;
        width: 6px;
        height: 6px;
        margin: 7px 6px 0;
        background: rgb(255, 255, 255);
        border-radius: 60%;

    }

    #ope-report-con #ope-report #ope_report_Fin {
        display: none;
    }

    #ope-report-con #ope-report #ope_report_Fin .con-rate {
        position: relative;
    }

    #ope-report-con #ope-report #ope_report_Fin .con-rate ul {
        position: absolute;
        left: 0;
        right: 50px;
        top: 12px;
        bottom: 0;
        z-index: 10;
    }

    #ope-report-con #ope-report p {
        font-size: 13px;
        margin-left: 15px;
    }

    #ope-report-con #ope-report .uprate-con {
        position: relative;
    }

    #ope-report-con #ope-report .uprate-con p {
        position: absolute;
        margin: 0;
        right: -6px;
        bottom: 12px;
    }

    #ope-report-con #ope-report #ope_report_Fin .con-rate ul li {
        height: 58px;
        line-height: 58px;
        text-align: center;
        color: rgb(255, 255, 255);
    }

    #ope-report-con #ope-report #ope_report_Fin .con-rate ul li:first-child {
        color: #499DF2;
    }

    .clearfix:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden
    }
</style>
<template>
    <div id="ope-report-con">
        <header class="ope-bg">
            <div class="big-btn" v-on:touchstart="close()">
                <a class="header-back"></a>
            </div>
            运营分析
        </header>
        <ul class="nav">
            <li v-on:touchstart="renderOpe()">财务</li>
            <li class="active" v-on:touchstart="renderFin()">运营</li>
        </ul>
        <div id="cont">
            <div id="warp">
                <div id="ope-report">
                    <div id="ope_report_ope">
                        <div class="details-con clearfix">
                            <h1>{{monthData}}.{{dayData}}日收款情况</h1>
                            <div class="container">
                                <div id="gathering"></div>
                            </div>
                            <ul class="gathering-title clearfix">
                                <li><span></span>应收：¥{{totalFee}}</li>
                                <li><span></span>已收：¥{{receivableFee}}</li>
                                <li><span></span>待收：¥{{unreceivedFee}}</li>
                            </ul>
                        </div>
                        <div class="details-con clearfix">
                            <h1>未来7日现金应收应付</h1>
                            <p>(元)</p>
                            <div class="uprate-con">
                                <div id="financialFlow"></div>
                                <p>(日)</p>
                            </div>
                            <div class="financial-title clearfix">
                                <a v-on:touchstart="funds('flag')">
                                    <div></div>
                                    应收</a><a class="active" v-on:touchstart="funds()">
                                <div></div>
                                应付</a>
                            </div>
                        </div>

                    </div>
                    <div id="ope_report_Fin">
                        <div class="details-con clearfix">
                            <h1>过去7日入住率</h1>
                            <p>(%)</p>
                            <div class="uprate-con">
                                <div id="uprate"></div>
                                <p>(日)</p>
                            </div>
                            <div class="uprate-title">
                                <a>
                                    <div></div>
                                    入住率</a>
                            </div>
                        </div>

                        <div class="details-con clearfix">
                            <h1>上月退租情况</h1>
                            <div class="container">
                                <div id="unRent"></div>
                            </div>
                            <ul class="gathering-title clearfix">
                                <li class="rentNum"><span></span>退租数量：{{unrent}}个</li>
                                <li><span class="unNormal"></span>中途退租：{{unnormalNnrent}}个</li>
                                <li><span class="normal"></span>到期退租：{{normalUnrent}}个</li>
                            </ul>
                        </div>

                        <div class="details-con clearfix">
                            <h1>{{befMonthData}}月业务转化率情况</h1>
                            <div class="con-rate">
                                <div id="conversionRate"></div>
                                <ul>
                                    <li>总客户{{totalCustomer}}%</li>
                                    <li>已跟进{{followCustomer}}%</li>
                                    <li>已签约{{signCustomer}}%</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <!--<li class="room-aver-pri">平均出房价格：<span>{{reportDay.average_price}}元</span></li>-->
                    <!--<li class="renting">在租房间数：<span>{{reportDay.rent}}间</span></li>-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export let isBasic = (it) => {
        return it === null || ( typeof it !== 'object' && typeof it !== 'array' );
    }

    export let clone = function (it) {
        if (isBasic(it)) {
            return it;
        }
        let result = Array.isArray(it) ? [] : {};
        for (let i in it) {
            result[i] = clone(it[i]);
        }
        return result;
    }
    let enable = true;
    export default{
        data: function () {
            return {
                copyInfo: null,
                financialFlow: null,
                reportDay: "",
                monthData: "",
                befMonthData: "",
                dayData: "",
                totalFee: '',
                receivableFee: '',
                unreceivedFee: '',
                unrent: '',
                normalUnrent: '',
                unnormalNnrent: '',
                unrentRate: '',
                totalCustomer: '',
                followCustomer: '',
                signCustomer: '',
                operation: true,
                finance: false
            };
        },

        methods: {
            close: function () {
                appObj.closeFrame();
            },
            /**
             * 报表切换
             * @param type
             */
            reportSwitch: function (type) {
                $(event.currentTarget).addClass("active").siblings("li").removeClass("active");
                if (type == "operation") {
                    this.$set("operation", true);
                    this.$set("finance", false);
                } else {
                    this.$set("operation", false);
                    this.$set("finance", true);
                }

            },
            funds: function (type) {
                $(event.currentTarget).removeClass("active").siblings("a").addClass("active");
                if (type == 'flag') {
                    enable = true;
                } else {
                    enable = false;
                }
                this.columnDraw(this.copyInfo, enable);


            },
            renderOpe: function () {
                $("#ope_report_Fin").hide();
                $("#ope_report_ope").show();
                $(".nav").find(".active").removeClass("active").siblings().addClass("active");


                //如果是集中式,将url改成分散式
                // if (base_url.search("jz.api") !== -1) {
                //  base_url = base_url.replace('jz.api', 'api');
                // }
                let base_url = baseUrl;
                let url = base_url + "api/v2/statistics/finances";
                this.$http.get(url, {
                    data: 0
                }, {
                    headers: {
                        "Accept": "application/vnd.api+json"
                    }
                }).then(function (response) {
                    this.copyInfo = clone(response.data);
                    this.lineDraw(response.data);
                    this.columnDraw(response.data, enable);

                    this.$set("reportDay", response.data);

                }.bind(this)).catch(function (err) {
                    if (err.status == '404') {
                        $.toast("数据不存在", "forbidden");
                    } else if (err.status == '500') {
                        $.toast("服务器错误", "forbidden");
                    }
                });

            },
            renderFin: function () {
                $("#ope_report_Fin").show();
                $("#ope_report_ope").hide();
                $(".nav").find(".active").removeClass("active").siblings().addClass("active");

                let base_url = baseUrl;

                let url = base_url + "api/v2/statistics/operations";
                this.$http.get(url, {
                    data: 0
                }, {
                    headers: {
                        "Accept": "application/vnd.api+json"
                    }
                }).then(function (response) {
                    this.drawFinance(response.data);
                    this.$set("reportDay", response.data);

                }.bind(this)).catch(function (err) {
                    if (err.status == '404') {
                        $.toast("数据不存在", "forbidden");
                    } else if (err.status == '500') {
                        $.toast("服务器错误", "forbidden");
                    }
                });
            },
            lineDraw: function (type) {
                let defTime = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
                this.$set("monthData", (defTime.getMonth() + 1));
                this.$set("dayData", defTime.getDate());
                this.$set('totalFee', type.total_fee);
                this.$set('receivableFee', type.receivable_fee);
                this.$set('unreceivedFee', type.unreceived_fee);
                let Highcharts = require('highcharts');
                // 在 Highcharts 加载之后加载功能模块
                require('highcharts/modules/exporting')(Highcharts);

                // 创建图表
                Highcharts.chart('gathering', {
                    // 菜单按钮设置
                    navigation: {
                        buttonOptions: {
                            enabled: false
                        }
                    },
                    chart: {
                        plotBackgroundColor: null,
                        height: 200,
                        width: 200,
                        plotBorderWidth: null,
                        plotShadow: false,
                        borderRadius: "60%",
                        backgroundColor: 'rgb(199,227,255)',

                    },
                    // 版权设置
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: null

                    },


                    tooltip: {
                        enabled: false,
                        headerFormat: '',
                        pointFormat: ''
                    },


                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            colors: [   // 饼图颜色控制
                                " rgb(73,157,242)",
                                "rgb(136,196,255) "
                            ],
                            states: {
                                hover: {
                                    enabled: false
                                }
                            },

                            slicedOffset: 10,         // 突出间距
                            point: {                  // 每个扇区是数据点对象，所以事件应该写在 point 下面
                                events: {
                                    // 鼠标滑过是，突出当前扇区
                                    mouseOver: function () {
                                        this.slice();
                                    },
                                    // 鼠标移出时，收回突出显示
                                    mouseOut: function () {
                                        this.slice();
                                    },
                                    // 默认是点击突出，这里屏蔽掉
                                    click: function () {
                                        return false;
                                    }
                                }
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: null,
                        data: [
                            {
                                name: '待收',
                                dataLabels: {
                                    enabled: true, // 显示数据点
                                    // 设置标签到饼图面基的距离
                                    distance: -40,
                                    // 标签百分比
                                    format: '{point.percentage:.1f} %',
                                    style: {
                                        color: 'rgb(255,255,255)' // 改变数据点的颜色
                                    },
                                },
                                y: type.unreceived_fee / type.total_fee * 100
                            },
                            {
                                name: '已收',
                                dataLabels: {
                                    enabled: true, // 显示数据点
                                    // 设置标签到饼图面基的距离
                                    distance: -40,
                                    // 标签百分比
                                    format: '{point.percentage:.1f} %',
                                    style: {
                                        color: 'rgb(255,91,54)' // 改变数据点的颜色
                                    },
                                },
                                y: type.receivable_fee / type.total_fee * 100,
                                sliced: true, // 突出显示这个点（扇区），用于强调。
                            }
                        ]
                    }]


                });
                test.refresh();
                $("tspan.highcharts-text-outline").css("fill", "none");
                $("tspan.highcharts-text-outline").css("stroke", "none");

            },
            columnDraw: function (type, enable) {
                let aftTime1 = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getDate();
                let aftTime2 = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 3).getDate();
                let aftTime3 = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 5).getDate();
                let aftTime4 = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 7).getDate();

                let futureOutlay = type.future_outlay.map((it) => {
                    return parseFloat(Object.values(it)[0]);
                });
                let futureOutlay_x = type.future_outlay.map((it) => {
                    return parseFloat(Object.keys(it)[0]);
                });
                futureOutlay_x[1] = '';
                futureOutlay_x[3] = '';
                futureOutlay_x[5] = '';
                console.log(futureOutlay);
                let futureIncome = type.future_income.map((it) => {
                    return parseFloat(Object.values(it)[0]);
                });
                console.log(futureIncome)
                let Highcharts = require('highcharts');
                // 在 Highcharts 加载之后加载功能模块
                require('highcharts/modules/exporting')(Highcharts);

                // 柱形图
                Highcharts.chart('financialFlow', {
                    // 设置柱形图的颜色
                    colors: ['rgb(73,157,242)', 'rgb(86,204,141)'],
                    chart: {
                        type: 'column',
                        borderRadius: 20,
                        height: 210

                    },
                    navigation: {
                        buttonOptions: {
                            enabled: false
                        }
                    },
                    title: {
                        text: null
                    },
                    credits: {
                        enabled: false
                    },
                    subtitle: {
                        // text: '数据来源: WorldClimate.com'
                        text: null

                    },
                    // 图例开关
                    legend: {
                        enabled: false
                    },
                    xAxis: {
                        gridLineWidth: 0,
                        // 去除刻度线的高度
                        tickmarkPlacement: 'on', // 调整刻度线位置
                        tickLength: 3, // 去除刻度线的高度
                        categories: futureOutlay_x,
                        crosshair: true
                    },
                    yAxis: {
                        min: 0,
                        lineWidth: 1,
                        allowDecimals: false,
                        title: {
                            // text: '降雨量 (mm)'
                            text: null
                        },
                        // 取消横轴线
                        gridLineWidth: 0,
                        tickmarkPlacement: 'on', // 调整刻度线位置
                        tickWidth: 1,
                        tickLength: 3,
                        // 刻度值
                        labels: {
                            formatter: function () {
                                if (this.value <= 100) {
                                    return this.value;
                                } else if (this.value > 100 && this.value <= 200) {
                                    return this.value;
                                } else {
                                    return this.value;
                                }
                            }
                        }

                    },
                    tooltip: {
                        enabled: false,
                        headerFormat: ' ',
                        pointFormat: ' ' +
                        ' ',
                        footerFormat: '',
                        shared: true,
                        useHTML: true
                    },
                    plotOptions: {

                        column: {
                            pointPadding: 0,
                            borderWidth: 0,
                            borderColor: "rgb(136,196,255) "

                        },
                        colors: [   // 饼图颜色控制
                            " rgb(73,157,242)",
                            "rgb(86,204,141)"

                        ]

                    },
                    series: [{
                        name: '应收',
                        dataLabels: {
                            enabled: enable, // dataLabels设为true
                            overflow: "none",
                            crop: false,
                            style: {
                                color: 'rgb(73,157,242)'
                            }
                        },

                        data: futureIncome
                    }, {
                        name: '应付',
                        dataLabels: {
                            enabled: !enable, // dataLabels设为true
                            overflow: "none",
                            crop: false,
                            style: {
                                color: "rgb(86,204,141)"
                            }
                        },
                        data: futureOutlay
                    }]
                });
                $("tspan.highcharts-text-outline").css("fill", "none");
                $("tspan.highcharts-text-outline").css("stroke", "none");
                test.refresh();

            },
            drawFinance: function (type) {
                let befMonthData = new Date().getMonth() == 0 ? 12 : new Date().getMonth();
                this.$set("befMonthData", befMonthData);
                let totalCustomer = type.follow_customer / type.total_customer * 100;
                let signCustomer = type.sign_customer / type.total_customer * 100;
//                let befTime4=new Date(new Date().getTime()-24*60*60*1000).getDate();
//                let befTime3=new Date(new Date().getTime()-24*60*60*1000*3).getDate();
//                let befTime2=new Date(new Date().getTime()-24*60*60*1000*5).getDate();
//                let befTime1=new Date(new Date().getTime()-24*60*60*1000*7).getDate();

                totalCustomer = totalCustomer.toFixed(2);
                signCustomer = signCustomer.toFixed(2);
                this.$set('unrent', type.unrent);
                this.$set('normalUnrent', type.normal_unrent);
                this.$set('unnormalNnrent', type.unnormal_unrent);
                this.$set('unrentRate', type.unrent_rate);
                this.$set('totalCustomer', type.total_customer / type.total_customer * 100);
                this.$set('followCustomer', totalCustomer);
                this.$set('signCustomer', signCustomer);

                let occupancyRate = type.occupancy_rate.map((it) => {
                    return parseFloat(Object.values(it)[0]);
                });
                let occupancyRate_x = type.occupancy_rate.map((it) => {
                    return parseFloat(Object.keys(it)[0]);
                });
                occupancyRate_x[1] = '';
                occupancyRate_x[3] = '';
                occupancyRate_x[5] = '';
                let Highcharts = require('highcharts');
                // 在 Highcharts 加载之后加载功能模块
                require('highcharts/modules/exporting')(Highcharts);

                // 折线图
                Highcharts.chart('uprate', {
                    colors: ['rgb(73,157,242)'],
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    subtitle: {
                        // text: '数据来源: WorldClimate.com'
                        text: null

                    },
                    chart: {
                        height: 210

                    },
                    // 图例开关
                    legend: {
                        enabled: false
                    },
                    navigation: {
                        buttonOptions: {
                            enabled: false
                        }
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: true,
                                style: {
                                    color: 'rgb(73,157,242)'
                                }
                            }
                        }
                    },
                    xAxis: {
                        gridLineWidth: 0,
                        tickmarkPlacement: 'on', // 调整刻度线位置
                        tickLength: 3, // 去除刻度线的高度
                        categories: occupancyRate_x
                    },
                    yAxis: {
                        // 取消横轴线
                        gridLineWidth: 0,
                        tickmarkPlacement: 'on', // 调整刻度线位置
                        tickWidth: 1,
                        tickLength: 3,
                        lineWidth: 1,
                        allowDecimals: false,
                        // 刻度值
//                        tickInterval:25,
                        title: {
                            text: null
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                    },
                    tooltip: {
                        enabled: false,
                        valueSuffix: ' '
                    },
                    series: [{
                        name: ' ',
                        data: occupancyRate
                    }]
                });

                Highcharts.chart('unRent', {
                    // 菜单按钮设置
                    navigation: {
                        buttonOptions: {
                            enabled: false
                        }
                    },
                    chart: {
                        plotBackgroundColor: null,
                        height: 200,
                        width: 200,
                        plotBorderWidth: null,
                        plotShadow: false,
                        borderRadius: "60%",
                        backgroundColor: 'rgb(199,227,255)',
                    },
                    // 版权设置
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: null

                    },

                    tooltip: {
                        enabled: false,
                        headerFormat: '',
                        pointFormat: ''
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            colors: [   // 饼图颜色控制
                                "rgb(73,157,242)",
                                "rgb(136,196,255) "
                            ],
                            states: {
                                hover: {
                                    enabled: false
                                }
                            },

                            slicedOffset: 10,         // 突出间距
                            point: {                  // 每个扇区是数据点对象，所以事件应该写在 point 下面
                                events: {
                                    // 鼠标滑过是，突出当前扇区
                                    mouseOver: function () {
                                        this.slice();
                                    },
                                    // 鼠标移出时，收回突出显示
                                    mouseOut: function () {
                                        this.slice();
                                    },
                                    // 默认是点击突出，这里屏蔽掉
                                    click: function () {
                                        return false;
                                    }
                                }
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: '',
                        data: [
                            {
                                name: '中途退租',
                                dataLabels: {
                                    enabled: true,

                                    // 设置标签到饼图面基的距离
                                    distance: -40,
                                    // 标签百分比
                                    format: '{point.percentage:.1f} %',
                                    style: {
                                        color: 'rgb(255,255,255)' || 'black'
                                    }
                                },
                                y: type.unnormal_unrent / type.unrent * 100,
                            },
//                        ['IE',       26.8],
                            {
                                name: '到期退租',
                                dataLabels: {
                                    enabled: true,

                                    // 设置标签到饼图面基的距离
                                    distance: -40,
                                    // 标签百分比
                                    format: '{point.percentage:.1f} %',
                                    style: {
                                        color: 'rgb(73,157,242)' || 'black'
                                    }
                                },
                                y: type.normal_unrent / type.unrent * 100,
                                sliced: true, // 突出显示这个点（扇区），用于强调。
                            }

                        ]
                    }]


                });

                require('highcharts/modules/funnel')(Highcharts);
                // 漏斗图
                Highcharts.chart('conversionRate', {
                    colors: ['rgb(199,227,255)', 'rgb(136,196,255)', 'rgb(73,157,242)'],
                    chart: {
                        type: 'funnel',
                        height: 200,
                        marginRight: 60
                    },
                    navigation: {
                        buttonOptions: {
                            enabled: false
                        }
                    },
                    // 版权设置
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: null

                    },

                    plotOptions: {
                        series: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>',
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                                softConnector: true
                            },
                            neckWidth: '60%',
                            neckHeight: '0'
                            //-- Other available options
                            // height: pixels or percent
                            // width: pixels or percent
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    series: [{
                        name: '用户',
                        data: [
                            [type.total_customer + '个', 1],
                            [type.follow_customer + '个', 1],
                            [type.sign_customer + '个', 1]

                        ]
                    }]
                });
                test.refresh();
                $("tspan.highcharts-text-outline").css("fill", "none");
                $("tspan.highcharts-text-outline").css("stroke", "none");
            }
        },

        ready: function () {
            this.renderOpe();
            window.test = new IScroll('#ope-report-con #cont');
            document.addEventListener('touchmove', function (e) {
                e.preventDefault();
            }, false);
        }
    }

</script>