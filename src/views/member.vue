<!--会员介绍-->
<style>
    .static .wrapper {
        position: absolute;
        width: 100%;
        z-index: 20;
        top: 64px;
        left: 0px;
        bottom: 0px;
        overflow: hidden;
        background: #ffffff;
    }
    .static .wrapper h2{
        padding: 15px 15px 0px 15px;
        font-size: 18px;
    }
    .static .wrapper p{
        text-indent: 2em;
        font-size: 14px;
        padding: 10px 15px 0px 15px ;
        line-height: 24px;
    }
    table{
        margin: 20px auto;
        width: 320px;
        border-collapse: collapse;
    }
    tr{
        display: table-row;
    }
    td:nth-child(2),td:nth-child(3){
        width:66px;
        text-align: center;
    }
    td {
        height: 46px;
        color: #4e5b66;
        font-size: 14px;
        padding: 2px 5px;
        border: 1px #e3e3e3 solid;
    }
    #clickWaterVip td i{

        display: block;
        height: 20px;
        width: 20px;
        margin:0 auto;
    }
    .icon-xsd-have{
        background:  url("../../static/images/1x/imgYou.png") no-repeat right center;
    }
    .icon-xsd-nothave{
        background:  url("../../static/images/1x/imgMeiyou.png") no-repeat right center;
    }
    .icon-xsd-have{
        color:#56cc8d;
    }
    #clickWaterVip .buy{
        display: block;
        background: rgb(255,174,82);
        width: 50px;
        padding: 2px 5px;
        text-align: center;
        color: #fff;
        border-radius: 4px;
    }
    .buy-td{
        color:rgb(255,174,82);
    }
    .buy-td a{
        font-size:12px;
    }
    #clickWaterVip{
        /* overflow: hidden;
        position: relative; *
        /* height: 1100px; */
        position: relative;
    }
    #member img.member{
       
        width: 100%;
      
    }
    #member img.btn{
            position: absolute;
            width: 23%;
            top: 2.45rem;
            right: 13%;
           
    }
    .newBadge{
        font-size: .355rem;
        color: #fff;
        background: #666;
        border-radius: .5rem;
        text-align: center;
    }
    .vipTable span{
        /*padding:0 .334rem;*/
    }
    #member .weui_btn_dialog.btn{
        color:#ccc;
    }
    #member .weui_mask ,.weui_dialog{
        
       visibility:visible ;
      display: none; 
     
      opacity: 1;
    }
   
</style>
<template>
    <div id="member" class="static">
        <header>
            <a v-on:touchstart="close()" class="header-back"></a>
            会员介绍
        </header>
        <div class="wrapper">
            <div id="separate">
                <div id="clickWaterVip">
                        <img class="member" src="../../static/images/member.png" alt="">
                        <img class="btn" src="../../static/images/reportbtn.png" alt="" v-on:touchstart="judgeUser()">
                </div>
            </div>
        </div>
            <div  class="weui_mask "></div>
    <div class="weui_dialog member_dialog">
            <div class="weui_dialog_hd">
                提示
            </div>
            <div class="weui_dialog_bd">是否确定申请"金水滴"续费（或开通）？</div>
            <div class="weui_dialog_ft">
                <a href="javascript:;" class="weui_btn_dialog btn" v-on:touchstart="closejudgeUser()">取消</a>
                <a href="javascript:;" class="weui_btn_dialog primary" v-on:touchstart="confirmjudgeUser()">确定</a>
            </div>
    </div>
     <div class="weui_dialog dialog_member">
            <div class="weui_dialog_hd">
                提示
            </div>
            <div class="weui_dialog_bd">您已申请购买，请等待客服联系。</div>
            <div class="weui_dialog_ft">
               
                <a href="javascript:;" class="weui_btn_dialog primary" v-on:touchstart="confirm()">确定</a>
            </div>
    </div>


    </div>


</template>

<script>

    export default{
        
        data(){
            return{
                msg:'服务政策'
            }
        },
        
        methods:{
            close:function () {
                appObj.closeFrame()
            },
            judgeUser:function(){
                let base_url = baseUrl;
                let _this=this;
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
                    console.log(response.data.is_apply);
                    if(response.data.is_apply==1){
//                        $("#report-limit-btn").hide();
                      // $.alert("您已申请购买，请等待客服联系。");
                         $(".dialog_member").show()
                          $(".weui_mask").show()
                    }else{
                      
                     
                        $(".member_dialog").show()
                        $(".weui_mask").show()
                    }
                })

            },
            confirm:function(){
                  $(".dialog_member").hide()
                  $(".weui_mask").hide()
            },
            closejudgeUser:function(){
                   $(".member_dialog").hide()
                    $(".weui_mask").hide()
            },
            confirmjudgeUser:function(){
                 this.buy();
            },  
            buy:function(){
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
                $(".weui_dialog").hide()
               $(".weui_mask").hide() 
                $.toast("提交成功，请等待客服联系。", "success");
               }.bind(this)).catch(function (err) {
                    $.toast("账单不存在", "forbidden");
                })
            }
        },
        ready:function () {

              var intervalTime = setInterval(function () {

                var resultContentH = $("img.member").height();
                if (resultContentH > 0) {

                    $("#clickWaterVip").height(resultContentH)
                    setTimeout(function () {
                        clearInterval(intervalTime);
                        var myScroll = new IScroll('#member .wrapper',{ touchmove: true });
                       // document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
                    }, 100)
                }
            }, 20);


        }
    }
</script>

