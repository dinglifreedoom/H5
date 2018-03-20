<!--月经营报表-->
<style>
    .report-bg {
        padding-top: 19px;
        border-bottom: 1px solid #cecece;
        /* background: rgb(255, 174, 82); */
    }

    ul, li, dl, dt, dd {
        list-style: none;
    }

    #cont {
        position: absolute;
        width: 100%;
        top: 126px;
        bottom: 0;
        overflow: hidden;
        padding-bottom: 49px;
        -webkit-transform: translate3d(0, 0, 0);
    }

    #month-warp {
        -webkit-transform: translate3d(0, 0, 0);
    }

    #month-report {
        font-size: 15px;
        margin: 15px 15px 15px;
    }

    #month-report-con .header-btn {
        top: 34px;
    }

    #month-report-con .header-btn img {
        width: 20px;
        height: 20px;
    }

    #month-report-con .nav {
        position: absolute;
        z-index: 20;
        background: #fff;
        width: 100%;
        top: 74px;
    }

    #month-report-con .nav li {
        float: left;
        height: 50px;
        width: 50%;

        text-align: center;
        line-height: 50px;
        cursor: pointer;

        font-size: 16px;
        color: rgb(115, 115, 115);

    }

    #month-report-con .nav .active {
        /* color: rgb(253, 158, 65); */
        /* border-bottom: 2px solid rgb(253, 158, 65); */
           color: #499DF2;
           border-bottom: 2px solid #499DF2;
    }

    #month-report-con #month-report {
        padding-bottom: 15px;
    }

    #month-report-con #month-report .details-con {
        padding: 23px 20px 0;
        border-radius: 8px;
        margin-bottom: 15px;
        background: #fff;
    }

    #month-report-con #month-report .details-con h1 {
        font-size: 16px;
        color: rgb(77, 77, 77);
        padding-left: 5px;
        line-height: 18px;
        margin-bottom: 20px;
        /* border-left: 6px solid rgb(255, 127, 102); */
        border-left: 6px solid #499DF2;
        
    }

    #month-report-con #month-report .details-con div {
        margin-bottom: 20px;
    }

    #month-report-con #month-report .details-con div p {
        text-align: center;
    }

    #month-report-con #month-report .details-con div p:last-child {
        font-size: 18px;
        /* color: rgb(255, 174, 82) */
        color:#499DF2;
    }

    #month-report-con #month-report .details-con ul {
        margin-right: -20px;
        margin-left: -20px;
    }

    #month-report-con #month-report .details-con ul li {
        float: left;
        position: relative;
        margin-bottom: 15px;
        width: 50%;
    }

    #month-report-con #month-report .details-con .bottom-line {
        width: 100%;
        border-bottom: 1px solid rgb(206, 206, 206);
    }

    #month-report-con #month-report .details-con ul .line:after {
        content: '';
        position: absolute;
        height: 20px;
        right: 0px;
        top: 18px;
        border-right: 1px solid rgb(206, 206, 206);
    }

    #month-report-con #month-report .details-con ul li p {
        text-align: center;
        margin-bottom: 2px;

    }

    #month-report-con #month-report .details-con ul li p:last-child {
        font-size: 18px;
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
    <div id="month-report-con">
        <header class="report-bg">
            <div class="big-btn" v-on:touchstart="close()">
                <a class="header-back"></a>
            </div>
            {{monthData}}月经营报表
            <div class="big-btn" v-on:touchstart="refreshTo()">
                <a class="header-btn"><img src="../../static/images/spread/dataimg.png"></a>
            </div>
        </header>
        <ul class="nav">
            <li class="active" v-on:touchstart="reportSwitch('operation')">运营</li>
            <li v-on:touchstart="reportSwitch()">财务</li>
        </ul>
        <div id="cont">
            <div id="month-warp">
                <div id="month-report">
                    <div v-if="operation">
                        <div class="details-con ">
                            <h1>房源状况</h1>
                            <div>
                                <p>入住率</p>
                                <p>{{reportDate.occupancy_rate}}%</p>
                            </div>
                            <ul class="clearfix">
                                <li class="line">
                                    <p>新签房间</p>
                                    <p>{{reportDate.new_contract}}间</p>
                                </li>
                                <li>
                                    <p>续租房间</p>
                                    <p>{{reportDate.renew_times}}间</p>

                                </li>
                                <li class="line">
                                    <p>平均出房价格</p>
                                    <p>¥{{reportDate.average_price}}</p>

                                </li>
                                <li>
                                    <p>平均出房时间</p>
                                    <p>{{reportDate.average_new_contract}}天</p>

                                </li>
                            </ul>
                            <div class="bottom-line"></div>
                            <ul class="clearfix">
                                <li class="line">
                                    <p>空置房间</p>
                                    <p>{{reportDate.empty}}间</p>
                                </li>
                                <li>
                                    <p>总空置天数</p>
                                    <p>{{reportDate.empty_total_days}}天</p>

                                </li>
                                <li class="line">
                                    <p>平均空置天数</p>
                                    <p>{{reportDate.average_empty_days}}天</p>

                                </li>
                                <li>
                                    <p>整月空置房间</p>
                                    <p>{{reportDate.empty_month}}间</p>

                                </li>
                            </ul>
                            <div class="bottom-line"></div>
                            <ul class="clearfix">
                                <li class="line">
                                    <p>总房间</p>
                                    <p>{{reportDate.total}}间</p>
                                </li>
                                <li>
                                    <p>删退房间</p>
                                    <p>{{reportDate.delete}}间</p>

                                </li>
                                <li class="line">
                                    <p>新增房间</p>
                                    <p>{{reportDate.new}}间</p>

                                </li>
                                <li>
                                    <p>在租房间数</p>
                                    <p>{{reportDate.rent}}间</p>

                                </li>
                            </ul>

                        </div>
                        <div class="details-con ">
                            <h1>账单处理情况</h1>
                            <div>
                                <p>总账单数</p>
                                <p>{{reportDate.total_bill}}个</p>
                            </div>
                            <ul class="clearfix">
                                <li class="line">
                                    <p>应收款账单数</p>
                                    <p>{{reportDate.receivable_bill}}个</p>
                                </li>
                                <li>
                                    <p>应付款账单数</p>
                                    <p>{{reportDate.payable_bill}}个</p>

                                </li>
                                <li class="line">
                                    <p>待收款账单数</p>
                                    <p>{{reportDate.unreceived_bill}}个</p>

                                </li>
                                <li>
                                    <p>待付款账单数</p>
                                    <p>{{reportDate.unpaid_bill}}个</p>

                                </li>
                            </ul>

                        </div>
                        <div class="details-con ">
                            <h1>业务情况</h1>
                            <ul class="clearfix">
                                <li class="line">
                                    <p>新增客户</p>
                                    <p>{{reportDate.new_customer}}个</p>

                                </li>
                                <li>
                                    <p>跟进中客户</p>
                                    <p>{{reportDate.follow_customer}}人</p>

                                </li>
                                <li class="line">
                                    <p>签约客户数</p>
                                    <p>{{reportDate.sign_customer}}人</p>

                                </li>
                                <li>
                                    <p>业务处理率</p>
                                    <p>{{reportDate.business_customer}}%</p>

                                </li>
                            </ul>

                        </div>
                    </div>
                    <div v-if="finance">
                        <div class="details-con ">
                            <h1>本月现金收支情况</h1>
                            <div>
                                <p>回款率</p>
                                <p>{{reportDate.returned_rate}}%</p>
                            </div>

                            <ul class="clearfix">
                                <li class="line">
                                    <p>应收已收</p>
                                    <p>¥{{reportDate.receivable_fee}}</p>

                                </li>
                                <li>
                                    <p>应收未收</p>
                                    <p>¥{{reportDate.unreceived_fee}}</p>

                                </li>
                            </ul>
                            <div class="bottom-line"></div>

                            <div>
                                <p>现金总收入</p>
                                <p>¥{{reportDate.total_income}}</p>
                            </div>
                            <ul class="clearfix">
                                <li class="line">
                                    <p>租金收入</p>
                                    <p>¥{{reportDate.rental_income}}</p>

                                </li>
                                <li>
                                    <p>押金收入</p>
                                    <p>¥{{reportDate.deposit_income}}</p>

                                </li>
                                <li>
                                    <p>杂费收入</p>
                                    <p>¥{{reportDate.utilities_income}}</p>

                                </li>
                            </ul>
                            <div class="bottom-line"></div>

                            <div>
                                <p>现金总支出</p>
                                <p>¥{{reportDate.total_outlay}}</p>
                            </div>
                            <ul class="clearfix">
                                <li class="line">
                                    <p>租金支出</p>
                                    <p>¥{{reportDate.rental_outlay}}</p>

                                </li>
                                <li>
                                    <p>押金支出</p>
                                    <p>¥{{reportDate.deposit_outlay}}</p>

                                </li>
                                <li>
                                    <p>杂费支出</p>
                                    <p>¥{{reportDate.utilities_outlay}}</p>

                                </li>
                            </ul>

                        </div>
                        <div class="details-con ">
                            <h1>下月租金预期</h1>
                            <div>
                                <p>预计现金收支差</p>
                                <p>¥{{reportDate.forecast_exposure}}</p>
                            </div>
                            <ul class="clearfix">
                                <li class="line">
                                    <p>加:预计总现金收入</p>
                                    <p>¥{{reportDate.forecast_income}}</p>

                                </li>
                                <li>
                                    <p>减:预计总现金支出</p>
                                    <p>¥{{reportDate.forecast_outlay}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{

        data: function () {

            return {
                reportDate: "",
                monthData: "",
                operation: true,
                finance: false

            };

        },

        methods: {
            close: function () {
                appObj.closeFrame();

            },
            refreshTo: function () {
                this.$router.go({
                    name: 'select-date',
                });
            },
            reportSwitch: function (type) {
                $(event.currentTarget).addClass("active").siblings("li").removeClass("active");
                if (type == "operation") {
                    this.$set("operation", true);
                    this.$set("finance", false);
                } else {
                    this.$set("operation", false);
                    this.$set("finance", true);
                }
                let _this = this;
                setTimeout(function () {
                    _this.scroller.refresh();
                }, 200);

            },
            render: function () {
                let time = window.location.href.split("=")[1];
                let defMonth = new Date();
                if (time) {
                    let month = time.split("-")[1];
                    this.$set("monthData", month);
                } else {
                    defMonth.getMonth() == 0 ? 12 : defMonth.getMonth();
                    time = defMonth.getFullYear() + "-" + defMonth.getMonth();
                    this.$set("monthData", defMonth.getMonth());
                }

                let base_url = baseUrl;
                //如果是集中式,将url改成分散式
//                if (base_url.search("jz.api") !== -1) {
//                    base_url = base_url.replace('jz.api', 'api');
//                }
                let url = base_url + "api/v2/monthreports";
                this.$http.get(url, {
                    date: time
                }, {
                    headers: {
                        "Accept": "application/vnd.api+json"
                    }
                }).then(function (response) {
                    this.$set("reportDate", response.data);

                }.bind(this)).catch(function (err) {
                    if (err.status == '404') {
                        $.toast("数据不存在", "forbidden");
                    } else if (err.status == '500') {
                        $.toast("服务器错误", "forbidden");
                    }
                });

            }

        },
        ready: function () {
            this.render();
            this.scroller = new IScroll('#month-report-con #cont');
            document.addEventListener('touchmove', function (e) {
                e.preventDefault();
            }, false);
            this.scroller.refresh();
        }
    }

</script>