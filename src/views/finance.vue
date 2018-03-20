<!--财务流水 一览-->
<style>
    #finance .weui-col-33 {
        line-height: 41px;
        height: 41px;
        width: 33.333333333333336%;
        font-size: 16px;
    }

    #finance .weui-infinite-scroll {
        font-size: 14px;
        display: none;
    }

    #finance .weui-col-33:nth-child(1), #finance .weui-col-33:nth-child(2) {
        border-right: 1px rgb(224, 224, 224) solid;
    }

    #finance .weui-col-33 span {
        background: url("../../static/images/1x/drop-down.png") no-repeat right center;
        background: -webkit-image-set(url(../../static/images/1x/drop-down.png) 1x,
        url(../../static/images/2x/drop-down.png) 2x,
        url(../../static/images/3x/drop-down.png) 3x) no-repeat right center;
        padding-right: 12px;
    }

    #finance .weui-col-33 .open {
        color: rgb(73, 157, 242);
        background: url("../../static/images/1x/close up.png") no-repeat right center;
        background: -webkit-image-set(url(../../static/images/1x/close up.png) 1x,
        url(../../static/images/2x/close up.png) 2 x,
    url(../../static/images/3x/close up.png) 3 x) no-repeat right center;
        padding-right: 12px;
    }

    #finance .weui-col-33:nth-child(3) span {
        background: url("../../static/images/1x/arrow.png") no-repeat right center;
        background: -webkit-image-set(url(../../static/images/1x/arrow.png) 1x,
        url(../../static/images/2x/arrow.png) 2x,
        url(../../static/images/3x/arrow.png) 3x) no-repeat right center;
    }

    #finance #finance_top {
        position: absolute;
        width: 100%;
        z-index: 20;
        top: 44px;
    }

    #finance .weui_mask {
        z-index: 0;
    }

    #finance #top .weui_cell {
        padding: 0px;
    }

    #finance .weui-col-25 {
        width: 25%;
    }

    #finance .weui-col-25:nth-child(1), #finance .weui-col-25:nth-child(2), #finance .weui-col-25:nth-child(3) {
        border-right: 1px rgb(224, 224, 224) solid;
    }

    #finance #count .weui_cell {
        padding: 18px 0px;
    }

    #finance #list .weui_cells {
        margin-top: 10px;
    }

    #finance #list {
        position: absolute;
        z-index: 1;
        top: 189px;
        bottom: 0px;
        left: 0;
        width: 100%;
        overflow: hidden;
    }

    #finance #list .noResults {
        height: 100%;
        background: url("../../static/images/1x/wuliushui.png") no-repeat center;
        background: -webkit-image-set(url(../../static/images/1x/wuliushui.png) 1x,
        url(../../static/images/2x/wuliushui@2x.png) 2x,
        url(../../static/images/3x/wuliushui@3x.png) 3x) no-repeat center;
    }
</style>
<template>
    <div id="finance">
        <header>
            财务流水
            <a class="header-add" v-link="'add-finance'"></a>
        </header>
        <finance-filter :incomes='incomes|switchMoney'
                        :payout='payout|switchMoney'
                        :profit='profit|switchMoney'
                        :profit_rate='profit_rate'>
        </finance-filter>
        <div id="list">
            <div class="wrapper" v-if="moneyflows">
                <p class="refresh weui-infinite-scroll"><span class="infinite-preloader"></span>下拉刷新</p>
                <div class="weui_cells  xsdApp-bg-white" v-for='item in moneyflows'>
                    <a v-link="'finance-detail?id='+item.id" class="weui_cell xsdApp-margin-top6">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-label xsdApp-font-size15 xsdApp-color-black xsdApp-label-income"
                               v-if="item.attributes.flow_type=='收入'">{{item.attributes.trade_info}}</p>
                            <p class="xsdApp-label xsdApp-font-size15 xsdApp-color-black xsdApp-label-spend" v-else>
                                {{item.attributes.trade_info}}</p>
                            <p class="xsdApp-label xsdApp-color-gray xsdApp-font-size14">{{item.attributes.fee_type}}&nbsp;{{item.attributes.trade_at}}</p>
                        </div>
                        <div class="weui_cell_ft">
                            <p class="xsdApp-font-size18 xsdApp-color-green" v-if="item.attributes.real_amount>=0">
                                ¥{{item.attributes.real_amount}}</p>
                            <p class="xsdApp-font-size18 xsdApp-color-red" v-else>¥{{item.attributes.real_amount}}</p>
                        </div>
                    </a>
                </div>
                <p class="weui-infinite-scroll loading" v-show='pages>1'><span class="infinite-preloader"></span>加载更多</p>
            </div>
            <div class="noResults" v-else>

            </div>
        </div>
    </div>
</template>
<script>

    import FinanceFilter from './../components/finance-filter.vue'
    export default{

        data: function () {

            return {
                moneyflows: "",
                incomes: "0",
                payout: "0",
                profit: "0",
                profit_rate: "0",
                myScroll: "",
                page: 1,
                pages:0,
            };

        },

        components: {

            'finance-filter': FinanceFilter,
        },

        events: {

            getData: function (page, fee_type_rough, fee_type, flow_type) {

                this.getData(page, fee_type_rough, fee_type, flow_type);
            },

        },

        methods: {

            getData: function (page, fee_type_rough, fee_type, flow_type, callback) {

                if (!callback) {
                    $.showLoading('加载中');
                }
                this.$http.get(baseUrl + "api/v2/moneyflows", {
                    "fee_type_rough": fee_type_rough,
                    "fee_type": fee_type,
                    "flow_type": flow_type,
                    "page_size": 20,
                    "page": page


                }, {
                    headers: {
                        "Accept": "application/vnd.api+json"
                    }
                }).then(function (response) {
                    $.hideLoading();
                    if (page == 1) {

                        this.$set('moneyflows', response.data.data);
                        this.$set('incomes', response.data.meta.countinfos.incomes);
                        this.$set('payout', response.data.meta.countinfos.payout);
                        this.$set('profit', response.data.meta.countinfos.profit);
                        this.$set('pages', response.data.meta.pagination.pages);
                        this.$set('page', 1);
                        if (response.data.meta.countinfos.incomes != 0) {
                            this.$set('profit_rate', ((response.data.meta.countinfos.incomes - response.data.meta.countinfos.payout)*100 / response.data.meta.countinfos.incomes).toFixed(2));
                        } else {

                            this.$set('profit_rate', '0')
                        }
                        if(response.data.meta.pagination.count==0){

                            this.$set('moneyflows',null);

                        }
                    }else{
                      this.$set("page",page);
                      this.$set('moneyflows', this.$get('moneyflows').concat(response.data.data));
                    }

                    if (callback) {

                        callback()
                    }else{

                      this.myScroll.refresh();
                    }

                }.bind(this)).catch(function (err) {

                    if (err.status == '500') {
                        $.toast("服务器错误", "forbidden");
                    }
                })
            },

            getIscroll: function () {

                let _this = this;
                // 解决异步问题
                        setTimeout(function () {

                            _this.myScroll = new IScroll('#finance #list', {
                                click: true,
                            });
                            _this.myScroll.on("scrollStart", function () {

                                if (this.y >=0) {
                                    $("#finance .refresh").show()
                                    _this.myScroll.refresh();
                                } else if (this.y <= this.maxScrollY) {
                                    $("#finance .loading").show()
                                    _this.myScroll.refresh();
                                }
                            })
                            _this.myScroll.on("scrollEnd", function () {

                                if (this.y <= this.maxScrollY) {
                                    $("#finance .loading").hide()
                                    $("#finance .refresh").hide()
                                    let pageNum=_this.$get("page")+1
                                    if(pageNum>_this.$get("pages")){
                                        $.toast("没有更多了!");
                                        return;
                                    }
                                    _this.getData(pageNum,_this.$route.query.fee_type_rough, _this.$route.query.fee_type, _this.$route.query.flow_type);

                                } else if (this.y >= 0) {

                                    $("#finance .refresh").hide()
                                    _this.getData(1,_this.$route.query.fee_type_rough, _this.$route.query.fee_type, _this.$route.query.flow_type);
                                }
                            })
                        }, 50)


            }

        },
        route: {

            activate: function (transition) {
                //this.$root.$set('header',this.title);//给父级传参
                transition.next();
            }
        },
        filters: {

            switchMoney: function (value) {

                if (value / 10000 > 1 || value / 10000 < -1) {
                    return (value / 10000).toFixed(2) + "万"
                } else {
                    return "¥" + value;
                }

            },
        },

        ready: function () {

            this.getData(1, "", "", "", this.getIscroll);
        }
    }
</script>
