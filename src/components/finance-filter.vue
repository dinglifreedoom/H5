<style>
    #finance-filter .weui_cell:before {
        left: 0px;
    }

    #finance-filter {
        position: absolute;
        z-index: 200;
        top: 84px;
        bottom: 0px;
        left: 0;
        width: 100%;
        overflow: hidden;
    }

    #finance-filter .xsdApp-font-size15 {
        padding-left: 16px;
    }

    #finance-filter .weui_mask {
        opacity: 0.5;
        margin-top: 104px;
        -webkit-transition-duration: .3s;
        transition-duration: .3s;
        visibility: visible;
        z-index: 0;
    }

    #finance-filter .weui-col-100 {
        height: 240px;

    }

    #finance-filter .weui_cells {
        overflow: auto;
    }

    #finance-filter .weui-col-100:nth-child(2) {
        border-left: 1px rgb(204, 204, 204) solid;
        margin-left: 50%;
        height: 240px;
        overflow-x: hidden;
        position: relative;
        top: -260px;
    }

    #finance-filter .weui-col-100.weui_cells:after {
        position: static;
    }
</style>
<template>
    <div id="finance_top">
        <div id="top" class="weui_cells">
            <div class="weui_cell weui-row xsdApp-bg-yellow xsdApp-text-center ">
                <div class="weui-col-33"><span id="flow_tips" class="filter" v-on:touchend="open('flow')">费用流向</span>
                </div>
                <div class="weui-col-33"><span id="flow_fee" class="filter" v-on:touchend="open('fee')">费用类型</span>
                </div>
                <div class="weui-col-33"><span>交易时间</span></div>
            </div>
        </div>
        <div id="count" class="weui_cells xsdApp-margin-top10">
            <div class="weui_cell weui-row xsdApp-bg-white  xsdApp-text-center xsdApp-font-size15">
                <div class="weui-col-25">
                    <p class="xsdApp-color-green">{{incomes}}</p>
                    <p class="xsdApp-font-size13">收入</p>
                </div>
                <div class="weui-col-25">
                    <p class="xsdApp-color-red">{{payout}}</p>
                    <p class="xsdApp-font-size13">支出</p>
                </div>
                <div class="weui-col-25">
                    <p class="xsdApp-color-green">{{profit}}</p>
                    <p class="xsdApp-font-size13">利润</p>
                </div>
                <div class="weui-col-25">
                    <p class="xsdApp-color-red">{{profit_rate}}%</p>
                    <p class="xsdApp-font-size13">毛利率</p>
                </div>
            </div>
        </div>
    </div>
    <div id="finance-filter" class="xsdApp-hide">
        <div class="weui_mask"></div>
        <div class="tips">
            <div class="flow weui_cells">
                <div class="weui_cell  xsdApp-color-blue">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15" data-value="" v-on:touchend="feesTips('flow','')">不限</p>
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15" data-value="0" v-on:touchend="feesTips('flow',0)">收入</p>
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15" data-value="1" v-on:touchend="feesTips('flow',1)">支出</p>
                    </div>
                </div>
            </div>
            <div class="weui-row fees">
                <div class="weui-col-100 weui_cells">
                    <div class="weui_cell xsdApp-color-blue">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15" v-on:touchend="feesTips('fee_type_rough_all','')">全部类型</p>
                        </div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15" v-on:touchend="feesTips('fee_type_rough_rent',0)">房租</p>
                        </div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15" v-on:touchend="feesTips('fee_type_rough_fees',1)">杂费</p>
                        </div>
                    </div>
                </div>
                <div class="weui-col-100 weui_cells" v-if="fees">
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15" data-value="" v-on:touchend="feesTips('fee_types','')">
                                全部费用</p>
                        </div>
                    </div>
                    <div class="weui_cell" v-for="fee in fees">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15" data-value={{fee.value}} v-on:touchend=
                            "feesTips('fee_types', fee.value)">{{fee.name}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    export default{
        props: {incomes: String, payout: String, profit: String, profit_rate: String},
        data(){
            return {
                fees: "",
                fee_type_rough: "",
                fee_type: "",
                flow_type: "",
            }
        },

        methods: {

            open: function (type) {
                if (type == "flow") {
                    $("#finance-filter .flow").removeClass("xsdApp-hide")
                    $("#finance-filter .fees").addClass("xsdApp-hide")
                } else {
                    $("#finance-filter .fees").removeClass("xsdApp-hide")
                    $("#finance-filter .flow").addClass("xsdApp-hide")
                }
                $(".filter").removeClass("open");
                $("#finance-filter").toggleClass("xsdApp-hide");
                $(event.currentTarget).addClass("open")
                if ($("#finance-filter").hasClass("xsdApp-hide")) {
                    $(event.currentTarget).removeClass("open")
                }
            },

            feesTips: function (type, value) {

                $(event.currentTarget).parents(".weui_cells").find(".xsdApp-color-blue").removeClass("xsdApp-color-blue");
                $(event.currentTarget).addClass("xsdApp-color-blue");
                let target = $(event.currentTarget).text();
                if (type == "fee_type_rough_rent") {
                    this.$set("fees", [
                        {
                            name: "租金",
                            value: 0
                        },
                        {
                            name: "押金",
                            value: 1
                        }])
                    this.$set("fee_type_rough", value);
                } else if (type == "fee_type_rough_fees") {
                    this.$set("fees", [
                        {
                            name: "水费",
                            value: 2
                        },
                        {
                            name: "电费",
                            value: 3
                        },
                        {
                            name: "燃气费",
                            value: 4
                        }
                        ,
                        {
                            name: "物业费",
                            value: 5
                        }
                        ,
                        {
                            name: "服务费",
                            value: 6
                        }
                        ,
                        {
                            name: "维修费",
                            value: 7
                        },
                        {
                            name: "保洁费",
                            value: 8
                        }
                        ,
                        {
                            name: "材料费",
                            value: 9
                        }
                        ,
                        {
                            name: "有线电视",
                            value: 10
                        }
                        ,
                        {
                            name: "宽带",
                            value: 11
                        },
                        {
                            name: "卫生",
                            value: 12
                        }
                        ,
                        {
                            name: "其他",
                            value: 13
                        }
                    ])
                    this.$set("fee_type_rough", value);
                } else if (type == "fee_type_rough_all") {

                    this.$set("fees", "");
                    this.$set("fee_type_rough", value);
                    this.$set("fee_type", "");
                    $("#finance-filter").addClass("xsdApp-hide");
                    $("#flow_fee").text(target);
                    this.goTo();

                } else if (type == "fee_types") {
                    this.$set("fee_type", value);
                    $("#finance-filter").addClass("xsdApp-hide");
                    $("#flow_fee").text(target);
                    this.goTo();

                } else if (type == "flow") {

                    this.$set("flow_type", value);
                    $("#flow_tips").text(target);
                    $("#finance-filter").addClass("xsdApp-hide");
                    this.goTo();

                }
            },

            goTo(){

                this.$router.go({
                    name: 'finance',
                    query: {
                        "fee_type_rough": this.fee_type_rough,
                        "fee_type": this.fee_type,
                        "flow_type": this.flow_type
                    }
                })
                this.$dispatch("getData", 1, this.fee_type_rough, this.fee_type, this.flow_type);

            }
        },

        ready: function () {


        }
    }
</script>
