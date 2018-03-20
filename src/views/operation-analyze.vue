<!--运营分析-->
<style>
    #ope-analyze{
        height:100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        position: absolute;
    }
    #ope-analyze .ope-bg{
        padding-top:30px;
        /* background: rgb(255,129,101); */
        background: #88C4FF;
    }
    #ope-analyze .ope-btn{
        display:block;
        width:40%;
        height:45px;
        position:absolute;
        left:50%;
        bottom:6%;
        text-align:center;
        line-height:45px;
        margin-left:-20%;
        border-radius:25px;
    }
    #ope-bg-img .ope-btn img{
        width:100%;
        height:100%;
    }
    .ope-title p{
        margin-top:86px;
    }

    #ope-bg-img{
        left:0;
        right:0;
        bottom:0;
        top: 70px;
        position: absolute;
        background:#fff  no-repeat;
        /*background:#fff url(../../static/images/operationanalyze.png) no-repeat;*/
        /*background:#fff;*/
        background-size:100% 100%;
    }
</style>
<template>
    <div id="ope-analyze" class="static ope-title">
        <header class="ope-bg">
            <div class="big-btn" v-on:touchstart="close()" >
                <a class="header-back"></a>
            </div>
            运营分析
            <div class="big-btn" >
            </div>
        </header>
        <div id="ope-bg-img">
            <a id="ope-limit-btn" class="ope-btn" v-on:touchstart="buyUserLevel()">
                <img src="../../static/images/operationanalyzebtn.png">
            </a>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            close:function () {
                appObj.closeFrame();
            },
            buyUserLevel:function(){
                let base_url = baseUrl;
                //如果是集中式,将url改成分散式
                if(base_url.search("jz.api")!==-1){
                    base_url = base_url.replace('jz.api','api');
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
                $("#ope-limit-btn").hide();
            },
            judgeUser:function(){
                let base_url = baseUrl;
                //如果是集中式,将url改成分散式
                if(base_url.search("jz.api")!==-1){
                    base_url = base_url.replace('jz.api','api');
                }
                //获取权限,判断操作按钮展示
                let url = base_url + "api/v2/vip/apply/status";
                this.$http.get(url, {}, {
                    headers: {
                        "Accept": "application/vnd.api+json"
                    }
                }).then(function (response) {
                    if(response.data.is_apply==1){
                        $("#ope-limit-btn").hide();
                    }
                })

            },
            limit:function(){
                this.$router.go({
                    name: 'operation-report',
                });
                $("#ope-limit-btn").hide();
//
//                if(typeof appObj == "undefined"){
//
//                }else{
//                    let UserLevel = appObj.getUserLevel();
//                    if(UserLevel==1){
//                        this.$router.go({
//                            name: 'operation-report',
//                        });
//                        $("#ope-limit-btn").hide();
//                    }
//                }
            }
        },
        ready:function () {
            this.limit();
            this.judgeUser();
        }
    }

</script>