<!--报表日期选择-->
<style>

    #select-date {
        background: rgb(245, 245, 245);
    }

    #select-date #month-tab-list {
        border-bottom: 1px solid rgb(206, 206, 206);
    }

    #select-date #month-tab-list li {
        border-top: 1px solid rgb(206, 206, 206);
        height: 42px;
        line-height: 42px;
        padding-left: 16px;
        color: rgb(115, 115, 115);
        background: #fff;
    }

    #select-date #month-tab-list li span {
        color: rgb(153, 153, 153);
    }

    #select-date .report-sort {
        padding-top: 74px;
        height: 50px;
        width: 100%;
    }

    #select-date #select-date-btn {
        width: 100%;
        height: 52px;
        position: absolute;
        bottom: 0;
        line-height: 52px;
        color: #fff;
        text-align: center;
        background: #499DF2;
        /* background: rgb(255, 174, 82); */
    }

    .day-crile {
        width: 16px;
        height: 13px;
        float: left;
        margin-right: 5px;
        padding-top: 3px;
        margin-top: 3px;
        border-radius: 18px;
        display: inline-block;
        border: 1px solid rgb(153, 153, 153);
    }

    .day-crile div {
        width: 10px;
        height: 10px;
        border-radius: 18px;
        margin-left: 3px;
    }

    .day-crile-l {
        /* border: 1px solid rgb(255, 174, 82); */
        border: 1px solid #499DF2;
    }

    .day-sbc-l {
        /* background: rgb(255, 174, 82); */
        background: #499DF2;
    }

    #select-date .report-sort .day-con {
        display: inline-block;
    }

    .report-sort .day-con {
        display: inline-block;
        height: 32px;
        padding-top: 15px;
        padding-left: 15px;
    }

    #select-date #month-tab-list li p {
        margin-top: 0;
        margin-left: 0;
        margin-right: 16px;
        padding-left: 0;
    }

    .picker-items .picker-items-col:nth-child(5) {
        display: none;
    }

    .picker-items .picker-items-col:nth-child(6) {
        display: none;
    }

    .picker-items .picker-items-col:nth-child(7) {
        display: none;
    }

    .select-date-mark {
        display: none;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 300;
        background: rgba(0, 0, 0, 0.5);
    }

</style>
<template>
    <div id="statement" class="static report-ad">
        <div class="select-date-mark" v-on:touchstart="hideMark()"></div>

        <header class="report-bg">
            <div class="big-btn" v-on:touchstart="close()">
                <a class="header-back"></a>
            </div>
            选择日期
            <div class="big-btn">
            </div>
        </header>
        <div id="select-date">
            <div class="report-sort">
                <div v-on:touchstart="switchoverL()" class="day-con">
                    <div id="day-crile-l" class="day-crile day-crile-l">
                        <div id="day-sbc-l" class="day-sbc-l"></div>
                    </div>
                    日报
                </div>
                <div v-on:touchstart="switchoverR()" class="day-con">
                    <div id="day-crile-r" class="day-crile">
                        <div id="day-sbc-r"></div>
                    </div>
                    月报
                </div>
            </div>
            <ul id="month-tab-list">

                <li id="month-title-date">

                    <p class="xsdApp-font-size15 xsdApp-label xsdApp-icon-right padding-left48">
                        <span>选择日期:</span>
                        <input id="start_time" name="start_time" type="text" readonly placeholder="请选择日期"
                               value=''>
                    </p>
                </li>
                <!--<span v-if="switchLeft">选择年月日:</span><span v-if="switchRight">选择年月:</span>-->
            </ul>
            <div id="select-date-btn" v-on:touchstart="getData()">
                确定
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data: function () {
            return {
                reportDate: "",
//                dateTime:"",
                switchLeft: true,
                switchRight: false
            };
        },
        methods: {
            close: function () {
                this.$router.go({
                    name: 'day-report',
                });
            },
            // 切换报表
            switchoverL: function () {
                $(".close-picker").trigger("click");
                $("#day-crile-l").addClass("day-crile-l");
                $("#day-sbc-l").addClass("day-sbc-l");
                $("#day-crile-r").removeClass("day-crile-l");
                $("#day-sbc-r").removeClass("day-sbc-l");
                this.$set("switchLeft", true);
                this.$set("switchRight", false);
            },
            switchoverR: function () {
                $(".close-picker").trigger("click");
                $("#day-crile-l").removeClass("day-crile-l");
                $("#day-sbc-l").removeClass("day-sbc-l");
                $("#day-crile-r").addClass("day-crile-l");
                $("#day-sbc-r").addClass("day-sbc-l");
                this.$set("switchLeft", false);
                this.$set("switchRight", true);
            },
            defaultTime: function () {
                let date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDay();
                $("#start_time").val(year + "-" + month + "-" + day + " ");
            },
            selectMark: function () {
                // 监测日历出现蒙层出现
                $("body").find(".weui-picker-container").remove();
                $(".weui-picker-container").hide();
                setTimeout(function () {
//                    $(".select-date-mark").show();
                    $(".close-picker").click(function () {
                        $(".select-date-mark").hide();
                    });
                    let flag = $(".weui-picker-container").eq($(".weui-picker-container").length - 1).css("display");

                    if (flag == "block") {
                        $(".select-date-mark").show();
                    } else {
                        $(".select-date-mark").hide();
                    }

                }, 300);

            },
            hideMark: function (e) {
                setTimeout(function () {
                    $(".close-picker").trigger("click");
                    $(".select-date-mark").hide();
                }, 200)
                e.preventDefault();
            },
            // 获取日期
            getData: function () {
                let dateTime = $("#start_time").val().split(" ")[0];
                let monthTime = dateTime.split("-");
                monthTime.pop();
                monthTime = monthTime.join("-");
                let reportFlag = this.$get("switchLeft");
                if (reportFlag) {
                    this.$router.go({
                        name: 'day-report',
                        query: {"dataTime": dateTime}
                    });
                } else {
                    this.$router.go({
                        name: 'month-report',
                        query: {"dataTime": monthTime}
                    });
                }
            }
        },
        ready: function () {
//            this.defaultTime();
            // 日历
            $(".weui-picker-container").hide();

            $("#start_time").datetimePicker({
                title: "选择日期",
                formatValue: function (params, values, displayValues) {
                    return values[0] + '-' + values[1] + '-' + values[2];
                },
            }).trigger("click");
            $(".close-picker").trigger("click");


        }

    }


</script>