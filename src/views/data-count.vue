<!--经营数据统计-->
<style>
    #data #weui_navbar_item {
        padding: 12px 0px;
    }

    #data .weui_navbar_item:after {
        border: none;
    }

    #data .weui_navbar_item.weui_bar_item_on {
        background: none;
        border-bottom: 2px rgb(89, 172, 255) solid;
        color: rgb(89, 172, 255);
    }

    #data .weui_tab_bd {
        padding: 60px 50px 0px 50px;
        overflow: hidden;
    }

    #data .weui_tab_bd p {
        width: 180px;
        padding-left: 12px;
        margin: 0 auto;
        font-size: 16px;
        text-align: left;
        color: rgb(153, 153, 153);
    }

    #data .weui_tab_bd .slogan {
        width: 100%;
        padding-left: 0px;
        text-align: center;
        font-size: 15px;
        margin-top: 12px;
        margin-bottom: 48px;
    }

    #data .weui_navbar {
        width: 100%;
        position: absolute;
        z-index: 2;
        height: 50px;
        top: 64px;
        left: 0px;
    }

    #data #data-count {
        width: 100%;
        position: absolute;
        z-index: 20;
        top: 114px;
        bottom: 0px;
        left: 0px;
        overflow: hidden;
    }

    canvas {
        position: relative;
        left: 50%;
        margin-left: -110px;
    }

</style>
<template>
    <div id="data">
        <header>
            <a v-on:touchstart="close()" class="header-back"></a>
            经营数据统计
        </header>

        <div class="weui_navbar xsdApp-bg-white">
            <a data-id="#tab1" class="weui_navbar_item weui_bar_item_on">
                入住率
            </a>
            <a data-id="#tab2" class="weui_navbar_item">
                退租率
            </a>
            <a data-id="#tab3" class="weui_navbar_item">
                续租率
            </a>
            <a data-id="#tab4" class="weui_navbar_item">
                毛利率
            </a>
        </div>
        <div id="data-count">
            <div>
                <div class="weui_tab_bd">
                    <div id="tab1" class="weui_tab_bd_item  weui_tab_bd_item_active">
                        <canvas id="data1" width="440" height="440" style="width:220px;height:220px;"></canvas>
                        <p class="slogan" v-if='occupancy_rate<0.8'>房子空太多,加油带看吧！</p>
                        <p class="slogan" v-if='0.8<=occupancy_rate&&occupancy_rate<=0.9'>达标了,还可以更好哦！</p>
                        <p class="slogan" v-if='occupancy_rate>0.9'>都租出去了，好厉害啊！</p>
                        <p>在租房间：<span class="xsdApp-color-yellow">{{all_room_nums - vacancy_room_nums}}</span> 间</p>
                        <p>空置间数：<span class="xsdApp-color-red">{{vacancy_room_nums}}</span>间</p>
                        <p>总房间数：<span class="xsdApp-color-blue">{{all_room_nums}} </span>间</p>
                    </div>
                    <div id="tab2" class="weui_tab_bd_item">
                        <canvas id="data2" width="440" height="440" style="width:220px;height:220px;"></canvas>
                        <p class="slogan" v-if='eviction_rate<0.2'>很出色,坐等盈利吧!</p>
                        <p class="slogan" v-if='0.2<=eviction_rate&&eviction_rate<=0.5'>一般,继续努力吧!</p>
                        <p class="slogan" v-if='eviction_rate>0.5'>偏高,找找原因吧!</p>
                        <p>退租合同数：<span class="xsdApp-color-yellow">{{evictioned_nums_all}}</span> 个</p>
                        <p>中途退租数：<span class="xsdApp-color-red">{{evictioned_nums_at_halfway}}</span>个</p>
                    </div>
                    <div id="tab3" class="weui_tab_bd_item">
                        <canvas id="data3" width="440" height="440" style="width:220px;height:220px;"></canvas>
                        <p class="slogan" v-if='renew_rate>0.8'>行业领先,人生赢家!</p>
                        <p class="slogan" v-if='0.6<=renew_rate&&renew_rate<=0.8'>一般,继续努力!</p>
                        <p class="slogan" v-if='renew_rate<0.6'>偏低,找找原因吧!</p>
                        <p>到期合同数：<span class="xsdApp-color-yellow">{{expired_room_contract_nums}}</span> 个</p>
                        <p>续租合同数：<span class="xsdApp-color-red">{{room_contract_renew_nums}}</span>个</p>
                    </div>
                    <div id="tab4" class="weui_tab_bd_item">
                        <canvas id="data4" width="440" height="440" style="width:220px;height:220px;"></canvas>
                        <p class="slogan" v-if='0.3<gross_profit_rate'>盆满钵满,豪做朋啊!</p>
                        <p class="slogan" v-if='0.15<=gross_profit_rate&&gross_profit_rate<=0.3'>正常盈利,小康水平!</p>
                        <p class="slogan" v-if='gross_profit_rate<0.15'>偏低,找找原因吧!</p>
                        <p>总收入：<span class="xsdApp-color-yellow">{{incomes | switchMoney}}</span> 元</p>
                        <p>总支出：<span class="xsdApp-color-red">{{payout | switchMoney}}</span>元</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import draw from "../../static/js/xsdApp.js";
    require('../../node_modules/jquery-weui/dist/js/jquery-weui.min') ;
    export default{
        data(){
            let count = {};
            $.ajax({
                url: baseUrl + "api/v2/rateinfo",
                dataType: 'json',
                async: false,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization", token);
                },
                success: function (data, textStatus, XMLHttpRequest) {
                    count = data
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    $.toast('获取统计数据失败','forbidden');
                }
            })

            return count;
        },
        filters: {
            /**
             * 切换金额显示
             * @param value
             * @returns {string}
             */
            switchMoney: function (value) {
                if (value / 10000 > 1 || value / 10000 < -1) {
                    return (value / 10000).toFixed(2) + "万"
                } else {
                    return "¥" + value;
                }
            }
        },
        methods: {
            close: function () {
                appObj.closeFrame()
            },
        },
        ready() {
            $(".weui_navbar a").on("touchstart", function () {
                $(".weui_tab_bd .weui_tab_bd_item").removeClass("weui_tab_bd_item_active");
                if ($(this).index() > $(".weui_navbar .weui_bar_item_on").index()) {
                    $($(this).attr("data-id")).removeClass("bounceInLeft").addClass("animated bounceInRight").addClass("weui_tab_bd_item_active");
                } else {
                    $($(this).attr("data-id")).removeClass("bounceInRight").addClass("animated bounceInLeft").addClass("weui_tab_bd_item_active");
                }
                $(".weui_navbar a").removeClass("weui_bar_item_on");
                $(this).addClass("weui_bar_item_on");
            });

            let color1, color2, color3, color4;
            if ((this.occupancy_rate * 100).toFixed(2) > 90) {
                color1 = "#56cc8d";
            } else if (80 <= (this.occupancy_rate * 100).toFixed(2) && (this.occupancy_rate * 100).toFixed(2) <= 90) {
                color1 = "#ffae53";
            } else {
                color1 = "#ff7f66";
            }

            if ((this.eviction_rate * 100).toFixed(2) < 20) {
                color2 = "#56cc8d";
            } else if (20 <= (this.eviction_rate * 100).toFixed(2) && (this.eviction_rate * 100).toFixed(2) <= 50) {
                color2 = "#ffae53";
            } else {
                color2 = "#ff7f66";
            }

            if ((this.renew_rate * 100).toFixed(2) > 80) {

                color3 = "#56cc8d";
            } else if (60 <= (this.renew_rate * 100).toFixed(2) && (this.renew_rate * 100).toFixed(2) <= 80) {

                color3 = "#ffae53";
            } else {

                color3 = "#ff7f66";
            }

            if ((this.gross_profit_rate * 100).toFixed(2) > 30) {

                color4 = "#56cc8d";
            } else if (15 <= (this.gross_profit_rate * 100).toFixed(2) && (this.gross_profit_rate * 100).toFixed(2) <= 30) {

                color4 = "#ffae53";
            } else {

                color4 = "#ff7f66";
            }
            $(".weui_navbar .weui_bar_item_on").trigger("click");
            draw($("#data1")[0], (this.occupancy_rate * 100).toFixed(2), color1);
            draw($("#data2")[0], (this.eviction_rate * 100).toFixed(2), color2);
            draw($("#data3")[0], (this.renew_rate * 100).toFixed(2), color3);
            draw($("#data4")[0], (this.gross_profit_rate * 100).toFixed(2), color4);
            setTimeout(function () {
                var myScroll = new IScroll('#data #data-count');
            }, 100)
        }
    }
</script>
