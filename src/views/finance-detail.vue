<!--财务流水详情-->
<style>
    #detail .weui_cell:before {
        left: 0px;
    }

    #detail .warpper {
        position: absolute;
        width: 100%;
        top: 64px;
        bottom: 0px;
        z-index: 20;
        overflow: hidden;
    }
</style>
<template>
    <div id="detail">
        <header>
            <a v-link="'finance'" class="header-back"></a>
            财务流水详情
        </header>
        <div class="warpper">
            <div class="weui_cells  xsdApp-bg-white">
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15">流水金额</p>
                    </div>
                    <div class="weui_cell_ft">
                        <p class="xsdApp-font-size18 xsdApp-color-green" v-if="moneyflow.real_amount>=0">
                            ¥{{moneyflow.real_amount}}</p>
                        <p class="xsdApp-font-size18 xsdApp-color-red" v-else>¥{{moneyflow.real_amount}}</p>
                    </div>
                </div>
                <div class="weui_cell xsdApp-bg-gray">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15 xsdApp-label-disc xsdApp-label">流水记录</p>
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15">房源:&nbsp;&nbsp;{{moneyflow.trade_info}}</p>
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15">费用类型:&nbsp;&nbsp;{{moneyflow.fee_type}}</p>
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15">费用名称:&nbsp;&nbsp;{{moneyflow.fee_type}}</p>
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15">资产流向:&nbsp;&nbsp;{{moneyflow.flow_type}}</p>
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15">付款人:&nbsp;&nbsp;{{moneyflow.trader_name}}</p>
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15">
                            账单期:&nbsp;&nbsp;{{moneyflow.start_time}}至{{moneyflow.end_time}}</p>
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15">交易时间:&nbsp;&nbsp;{{moneyflow.trade_at}}</p>
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

                moneyflow: ""
            };
        },
        methods: {
            getMoneyflow: function () {
                this.$http.get(baseUrl + "api/v2/moneyflows/" + this.$route.query.id, {}, {
                    headers: {
                        "Accept": "application/vnd.api+json"
                    }
                }).then(function (response) {
                    this.$set('moneyflow', response.data.data.attributes);
                }.bind(this)).catch(function (err) {
                    if (err.status == '404') {
                        $.toast("流水不存在", "forbidden");
                    } else if (err.status == '500') {
                        $.toast("服务器错误", "forbidden");
                    }
                })
            },
        },
        ready: function () {
            this.getMoneyflow();
            var myScroll = new IScroll('#detail .warpper');
            document.addEventListener('touchmove', function (e) {
                e.preventDefault();
            }, false);

        }
    }
</script>
