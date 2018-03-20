<!--报表广告-->
<style>
    ul, li, dl, dt, dd {
        list-style: none;
    }

    #statement {
        height: 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        position: absolute;
    }

    .report-btn {
        display: block;
        width: 40%;
        height: 45px;
        position: absolute;
        left: 50%;
        bottom: 6%;
        text-align: center;
        line-height: 45px;
        margin-left: -20%;
        border-radius: 25px;
    }

    #report-bg-img .report-btn img {
        width: 100%;
        height: 100%;
    }

    .report-ad p {
        margin-top: 86px;
    }

    #report-bg-img {
        background: #fff  no-repeat;
        /*background: #fff url(../../static/images/reportad.png) no-repeat;*/
        background-size: 100% 100%;
        /*background: #fff;*/
    }

    #report-bg-img {
        left: 0;
        right: 0;
        bottom: 0;
        top: 50px;
        position: absolute;
    }
</style>
<template>
    <div id="statement" class="static report-ad">
        <header class="report-bg">
            <div class="big-btn" v-on:touchstart="close()">
                <a class="header-back"></a>
            </div>
            报表
            <div class="big-btn">
            </div>
        </header>
        <div id="report-bg-img">
            <a id="report-limit-btn" class="report-btn" v-on:touchstart="buyUserLevel()"><img
                    src="../../static/images/reportbtn.png"></a>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        methods: {
            close: function () {
                appObj.closeFrame();
            },
            /**
             * 买家用户
             */
            buyUserLevel: function () {
                let base_url = baseUrl;
                //如果是集中式,将url改成分散式
                if (base_url.search("jz.api") !== -1) {
                    base_url = base_url.replace('jz.api', 'api');
                }
                //获取权限,判断操作按钮展示
                let url = base_url + "api/v2/vip/apply";
                this.$http.get(url, {}, {
                    headers: {
                        "Accept": "application/vnd.api+json"
                    }
                }).then(function (response) {
                    $.alert("申请成功，工作人员将在2个小时联系您。请保持手机号畅通！", "申请成功");
                }.bind(this)).catch(function (err) {
                    $.toast("账单不存在", "forbidden");
                });
                $("#report-limit-btn").hide();
            },
            judgeUser: function () {
                let base_url = baseUrl;
                //如果是集中式,将url改成分散式
                if (base_url.search("jz.api") !== -1) {
                    base_url = base_url.replace('jz.api', 'api');
                }
                //获取权限,判断操作按钮展示
                let url = base_url + "api/v2/vip/apply/status";
                this.$http.get(url, {}, {
                    headers: {
                        "Accept": "application/vnd.api+json"
                    }
                }).then(function (response) {
                    console.log(response.data.is_apply);
                    if (response.data.is_apply == 1) {
                        $("#report-limit-btn").hide();
                    }
                })
            },
            limit: function () {

                this.$router.go({
                    name: 'day-report',
                });
                $("#report-limit-btn").hide();
//
//                if(typeof appObj == "undefined"){
//
//                }else{
//                    let UserLevel=appObj.getUserLevel();
//                    if(UserLevel==1){
//                        this.$router.go({
//                            name: 'day-report',
//                        });
//                        $("#report-limit-btn").hide();
//                    }
//
//                }
            }
        },
        ready: function () {
            this.limit();
            this.judgeUser();
        }
    }

</script>