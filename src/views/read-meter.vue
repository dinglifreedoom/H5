<!--抄表-->
<style>
    #read-meter {
        position: absolute;
        width: 100%;
        z-index: 20;
        left: 0;
        top: 64px;
        bottom: 0;
        overflow: hidden;
    }

    #read-meter .weui_cell:before {
        left: 0;
    }

    #read-meter span {
        margin-right: 20px;
    }

    #refresh {
        position: absolute;
        font-size: 12px;
        color: #ffffff;
        right: 6px;
        padding: 2px;
        border-radius: 3px;
    }

    .weui-picker-container {
        z-index: 9999;
    }
</style>
<template>
    <header>
        <a v-link="'order?id='+order.id+'&&type='+order.type" class="header-back"></a>
        抄表
        <a v-on:touchstart="save()" class="header-btn">保存</a>
    </header>
    <div id="read-meter">
        <div>
            <div class="weui_cells  xsdApp-bg-white">
                <div v-show="order.attributes.water_charge=='by_meter'">
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size16 xsdApp-label xsdApp-label-blue">水费</p>
                        </div>
                        <div class="weui_cell_ft">
                            <p class="xsdApp-font-size16">¥{{water_fees}}</p>
                        </div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15"><span>水费单价</span><i
                                    class="xsdApp-color-gray">¥{{order.attributes.water_unit_price}}</i></p>
                        </div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15"><span>上次水表度数</span><i
                                    class="xsdApp-color-gray">{{order.attributes.water_meter_pre}}</i></p>
                        </div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15">
                                <span>本次水表读数</span>
                                <input type="number" v-model="water_meter">
                            </p>
                        </div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15"><span>上次抄表时间</span><i
                                    class="xsdApp-color-gray">{{order.attributes.water_meter_time_pre}}</i></p>
                        </div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15">
                                <span>本次抄表时间</span>
                                <input id='water_datetime-picker' type="text" v-model="water_meter_time">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="weui_cells  xsdApp-bg-white xsdApp-margin-top6">
                <div v-show="order.attributes.power_charge=='by_meter'">
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size16 xsdApp-label xsdApp-label-orange">电费</p>
                        </div>
                        <div class="weui_cell_ft">
                            <p class="xsdApp-font-size16">¥{{power_fees}}</p>
                        </div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15">
                                <span>电费单价</span>
                                <i class="xsdApp-color-gray">{{order.attributes.power_unit_price}}</i>
                            </p>
                        </div>
                    </div>
                    <div class="weui_cell">

                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15"><span>上次电表读数</span><i
                                    class="xsdApp-color-gray">{{order.attributes.power_meter_pre}}</i></p>
                        </div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15">
                                <span>本次电表读数</span>
                                <input type="number" v-model="power_meter" readonly="{{order.attributes.is_meter}}">
                                <i id="refresh" class="xsdApp-bg-blue-1" v-if="order.attributes.is_meter"
                                   v-on:touchend="getOrder(true)">刷新读数</i>
                            </p>
                        </div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15"><span>上次抄表时间</span><i
                                    class="xsdApp-color-gray">{{order.attributes.power_meter_time_pre}}</i></p>
                        </div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15"><span>本次抄表时间&nbsp;&nbsp;</span>
                                <input id='power_datetime-picker' placeholder="请选择抄表时间" type="text"
                                       v-model="power_meter_time"></p>
                        </div>
                    </div>
                    <div class="weui_cell" v-show="order.attributes.smart_value.is_share">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15"><span>上次公共区域电表读数</span><i
                                    class="xsdApp-color-gray">{{order.attributes.smart_value.last_public_meter_num}}</i>
                            </p>
                        </div>
                    </div>
                    <div class="weui_cell" v-show="order.attributes.smart_value.is_share">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15"><span>本次公共区域电表读数</span><i
                                    id="public_power_meter">{{order.attributes.smart_value.public_num}}</i></p>
                        </div>
                    </div>
                    <div class="weui_cell" v-show="order.attributes.smart_value.is_share">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15"><span>公共区域分摊比例</span><i
                                    class="xsdApp-color-gray">{{order.attributes.smart_value.share}}%</i></p>
                        </div>
                    </div>
                    <div class="weui_cell" v-show="order.attributes.smart_value.is_share">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15">
                                <span>公共区域电费金额(元)</span><i>{{order.attributes.smart_value.public_value}}</i></p>
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
                order: "",
                water_meter_time: "",
                water_meter: "",
                power_meter_time: "",
                power_meter: "",
                water_fees: "",
                power_fees: "",
            };
        },

        computed: {
            water_fees: function () {
                try {
                    let num = this.order.attributes.water_unit_price * (this.water_meter - this.order.attributes.water_meter_pre);
                    if (num < 0) {
                        num = 0;
                    }
                    return num
                } catch (err) {

                }
            },

            power_fees: function () {
                try {
                    let num1 = this.order.attributes.power_unit_price * (this.power_meter - this.order.attributes.power_meter_pre).toFixed(2);
                    if (num1 < 0) {
                        num1 = 0;
                    }
                    if (this.order.attributes.smart_value.is_share) {
                        num1 = this.order.attributes.smart_value.value;
                    }
                    console.log(num1, 'sss');
                    return num1
                } catch (err) {

                }

            }
        },

        route: {
            activate: function (transition) {
                //this.$root.$set('header',this.title);//给父级传参
                transition.next();
            }
        },

        methods: {
            getOrder: function (flag) {
                this.$http.get(baseUrl + "api/v1/roomorders/" + this.$route.query.id + "?is_meter=1", {}, {
                    headers: {
                        "Accept": "application/vnd.api+json"
                    }
                }).then(function (response) {
                    this.$set('order', response.data.data);
                    if (response.data.data.attributes.smart_value.num > 0) {
                        this.$set('power_meter', response.data.data.attributes.smart_value.num);
                    } else {
                        this.$set('power_meter', 0);
                    }
                    if (!flag) {
                        $("#power_datetime-picker").datetimePicker({
                            title: "选择本次抄表时间",
//                        min: response.data.data.attributes.power_meter_time_pre,
//                        max: response.data.data.attributes.end_time
                        });
                        $("#water_datetime-picker").datetimePicker({
                            title: "选择本次抄表时间",
//                        min: response.data.data.attributes.water_meter_time_pre,
//                        max: response.data.data.attributes.end_time
                        });
                    } else {
                        $.toast("刷新成功!", "success");
                    }
                }.bind(this))
            },
            save: function () {
                let args = {};
                if (this.order.attributes.water_charge == 'by_meter') {
                    args.water_fees = this.$get("water_fees");
                    args.water_meter_time = $("#water_datetime-picker").val().split(" ")[0];
                    args.water_meter = this.$get("water_meter");
                }
                if (this.order.attributes.power_charge == 'by_meter') {
                    args.power_fees = this.$get("power_fees");
                    args.power_meter_time = $("#power_datetime-picker").val().split(" ")[0];
                    args.power_meter = this.$get("power_meter");
                    if (this.order.attributes.smart_value.is_share)
                        args.public_power_meter = $("#public_power_meter").text();
                }
                this.$http.patch(baseUrl + "api/v1/roomorders/" + this.$route.query.id, args, {
                    emulateJSON: true,
                    headers: {
                        "Accept": "*/*",
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    }
                }).then(function (response) {
                    this.$router.go({
                        name: 'order',
                        query: {"id": this.$route.query.id, 'type': this.order.type}
                    })
                }.bind(this)).catch(function (err) {
                    $.toast("保存失败", "forbidden");
                })
            }
        },

        ready: function () {
            this.getOrder();
//             解决异步问题

            var intervalTime = setInterval(function () {

                var resultContentH = $("#read-meter").height();
                if (resultContentH > 0) {

                    $("#showResult").height(resultContentH)
                    setTimeout(function () {
                        clearInterval(intervalTime);
                        var myScroll = new IScroll('#read-meter');
                    }, 100)
                }
            }, 20);

        }
    }
</script>
