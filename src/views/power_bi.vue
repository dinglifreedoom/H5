<!--添加财务流水-->
<style>
    html,body{
        background: #f2f2f2;
    }
    #power_bi .wrapper, #houseList .wrapper {
        position: absolute;
    width: 80%;
    z-index: 20;
    top: 61px;
    right: 0;
    bottom: 0;
    overflow: auto;
    }

    .leftCityBox {
        width: 100%;
        height: 100%;
        float: left;
        background: #f2f2f2;
        overflow: scroll;
      
    }

    .cityList {
        height: 600px;
        border-right: 1px solid #fff;
    }

    ::-webkit-scrollbar { /*隐藏滚轮*/
        display: none;
    }

    .cityList:hover {
        overflow: scroll;
        overflow-y: auto;
    }

    .cityList li {
        text-align: center;
        padding: 3px 5px;
        font-size: .65rem;
        line-height: 1.65rem;
        font-family: '微软雅黑';
        border-bottom: 1px solid #E0E0E0;
        color:#4E4F52 ;
    }

    .cityList li.active {
        text-align: center;
        padding: 3px 5px;
        font-size: .65rem;
        line-height: 1.65rem;
        font-family: '微软雅黑';
        /* border-bottom: 1px solid #fff; */
       
        background: #D8D8D8;
        color:#4E4F52;
    }
  

    .cityPowerShow {
        width: 100%;
        float: right;
        height: 100%;
        /* background: #ffffff; */
        overflow: hidden;
    }

    .power-show-wrapper {
        height: 700px;
        overflow: scroll;
        text-align: center;
        position: relative;

    }
    .power-show-wrapper::after {
        content:"";
    }
    .power-show-wrapper #actionText{
        padding:50% 0;
        height:100%;
    }


    .userController {
         /* position: absolute; */
    /* float: left; */
    height: 35px;
    width: 35%;
    /* left: 6%; */
    /* top: 0; */
    /* z-index: 999999; */
    margin: 0 auto;
}
    .userController.active{
         margin-left: 16px;
    }

    .actionFrame{
        margin-top: 4%;
    }
    iframe.action_top{
         margin-top: 14%;
    }
    #bars.blue{
         background:url("/static/images/bi/ic_unfold.png") no-repeat; 
        background-size:25px;
    }
    #bars.white{
        background:url("/static/images/bi/ic_fold.png") no-repeat;
        background-size:25px;
    }
    #bars{
        margin-top:.755rem;
        width:25px;
        height:25px;
        display:block;
        padding-left:.355rem;
        cursor: pointer ;
    }
    .navbox{
         width: 20%;
    float: left;
    background: #fff;
    position: fixed;
    top: 59px;
    left: 0;
    overflow: auto;
    height: 100%;
    }
    .navbox.active{
        width: 100%;
     background: #EAEAEA;
    }
    .logoBar{
        display: none;
    }
   .mask{
      
        display: block;
    width: 100%;
    /* height: 200px; */
    /* background: #fff; */
    /* position: absolute; */
    bottom: 0;
    right: 0;
    z-index: 99999;
    /* display: none; */
    background: #EAEAEA;
    margin-top: -20%;
    position: relative;
    padding-top: 5px;
    padding-bottom: 35px;
        
    }
   
    div.mask-xd{
    display: block;
    width: 100%;
   
    /* background: #fff; */
    position: relative;
    bottom: 0px;
    right: 0;
    z-index: 99999;
    background: #EAEAEA;
        margin-top: -9%;
    }
    .maskbox{
       font-size: .65rem;
    }
    .marginTop{
        margin-top: 8%;
    }
    .maskbox ul{
       overflow: hidden;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    }
    .maskbox li{
        float: left;
    }
     .maskbox li p {
        line-height: 1.15rem;
     }
    .maskbox li:nth-child(2){
        margin-top: 4%;
    }
    .maskbox li span{
     display: inline-block;
    width: 69px;
    height: 95px;
    background: url(/static/images/bi/img_rocket.png) no-repeat;
    background-size: 80%;
    }
    .pay_btn{
            width: 72%;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    color: #fff;
    text-align: center;
  
    background: #56CC8D;
    }
</style>
<template>
    <div id="power_bi">
        <header>
            <a v-on:touchend="closeBack()" class="header-back"></a>
            {{currentCity}}
        </header>
         <div class="navbox">
                     <div class="userController" v-on:touchstart="showCityList()">
                    <span id="bars" class="blue"></span>
                </div>
                    <div class="leftCityBox" v-if="sliderNav">
                        <ul class="cityList">
                            <li v-for="item in cities" data-value="{{item.url}}" data-city="{{item.city}}"
                                v-on:touchstart="actionFrame($event,item.url,item.city)"  v-bind:class="{ 'active': item.city === selected }">{{item.city}}
                            </li>
                        </ul>
                    </div>
                </div>
        <div class="wrapper">
            <div>
                <div class="cityPowerShow">
                    <div class="power-show-wrapper">
                        <div id="actionText"><p>无智能监测数据</p></div>
                        <iframe id="actionFrame" class="actionFrame"  v-bind:src="fUrl"  frameborder="0" height="100%" width="100%" style="display:none;" ></iframe>
                            <div class="mask">
                            <div class="maskbox">
                                <div class="marginTop">
                                    <ul>
                                        <li><span></span></li>
                                        <li>
                                            <p>由于分析服务器远在美国</p>
                                            <p>加载速度可能较慢</p>
                                        </li>
                                    </ul>
                                </div>
                               <div class="pay_btn" v-on:touchstart="goSurvey()"><a class="pay_btn_speed">申请付费提速</a></div>
                            </div>
                        </div>  
                     </div>
                      
                </div>
            </div>
                
        </div>
      
    </div>

</template>


<script>

    export default{
        data(){
            return {
                cities:[],
                sliderNav:true,
                fUrl:'',
                currentCity:"智能分析",
                selected:false,
            }
        },

        methods: {
            actionFrame(e,url,city){
         
              if(typeof appObj == 'undefined'){
                this.$http.get(baseUrl +  "api/v2/census/recordaction", {
                    	msg: city
                }, {
                    headers:{
                        "Authorization":token
                    }
                }).then(function (data) {

                })
            }else{

                var mode = appObj.getModeResult();

                if(mode === 'centralize_mode'){
                    baseUrl = '//jz.api.shuidiguanjia.com'
//                    baseUrl = '//jz.api.ih2ome.cn'
                }else{
                    baseUrl = '//api.shuidiguanjia.com'
//                    baseUrl = '//api.ih2ome.cn'
                }
//                alert(baseUrl)
                this.$http.get(baseUrl + "/api/v2/census/recordaction", {
                   msg: city
                }, {
                    headers:{
                        "Authorization":token
                    }
                }).then(function (data) {

                }).catch(function(e){

                })
            }
                e.target.className = ""
                this.$set('fUrl',url);
                this.$set('currentCity',city);
                this.selected = city
                $("#actionFrame").show();
                $("#actionText").hide();
            },
            /**
             * 关闭回退
             */
            closeBack: function () {
                appObj.closeFrame();
            },
            goSurvey(){
 
             if(typeof appObj == 'undefined'){
                this.$http.get(baseUrl +  "api/v2/census/intelligentanalyse", {
                    	explain: $(".pay_btn_speed").text()
                }, {
                    headers:{
                        "Authorization":token
                    }
                }).then(function (data) {

                })
            }else{

                var mode = appObj.getModeResult();

                if(mode === 'centralize_mode'){
                    baseUrl = '//jz.api.shuidiguanjia.com'
//                    baseUrl = '//jz.api.ih2ome.cn'
                }else{
                    baseUrl = '//api.shuidiguanjia.com'
//                    baseUrl = '//api.ih2ome.cn'
                }
//                alert(baseUrl)
                this.$http.get(baseUrl + "/api/v2/census/intelligentanalyse", {
                    explain: $(".pay_btn_speed").text()
                }, {
                    headers:{
                        "Authorization":token
                    }
                }).then(function (data) {

                }).catch(function(e){

                })
            }
                      this.$router.go({
                        name: 'survey'
                    })

            },   
            showCityList(){
                $("#bars").removeClass("blue white")
                if(this.$get('sliderNav')){
                    this.$set('sliderNav',false);
                
                     $("#power_bi .wrapper").css({
                        width:"100%",
                        top:"103px"
                    });
                     $("#bars").addClass("white")
                     $(".navbox").addClass("active")
                     $(".userController").addClass("active")
           
                    $(".mask").addClass("mask-xd")
                }else{
                    this.$set('sliderNav',true);
                      $("#power_bi .wrapper").css({
                        width:"80%",
                        top:"61px"
                    });
                     $(".navbox").removeClass("active")
                     $(".userController").removeClass("active")
                  
                    $("#bars").addClass("blue")
            
                    $(".mask").removeClass("mask-xd")
                }
            }
        },

        ready: function () {
            if(typeof appObj == 'undefined'){
                this.$http.get(baseUrl + "api/v2/powerbi/city_list", {}, {
                    headers:{
                        "Authorization":token
                    }
                }).then(function (data) {
                    this.$set('currentCity',data.data.data.cities[0].city)
                    this.$set('selected',data.data.data.cities[0].city)
                    this.$set('cities', data.data.data.cities);
                    if (data.data.data.cities){
                        if(data.data.data.cities[0].url){
                            this.$set('fUrl',data.data.data.cities[0].url );
                            $("#actionFrame").show();
                            $("#actionText").hide();
                        }
                    }

                })
            }else{

                var mode = appObj.getModeResult();
//                alert(mode)
                if(mode === 'centralize_mode'){
                    baseUrl = '//jz.api.shuidiguanjia.com'
//                    baseUrl = '//jz.api.ih2ome.cn'
                }else{
                    baseUrl = '//api.shuidiguanjia.com'
//                    baseUrl = '//api.ih2ome.cn'
                }
//                alert(baseUrl)
                this.$http.get(baseUrl + "/api/v2/powerbi/city_list", {}, {
                    headers:{
                        "Authorization":token
                    }
                }).then(function (data) {
//                    document.write("-------------success-----------") ;
//                    document.write(data.data.status);
//                    document.write(data.data.msg);


                    this.$set('currentCity',data.data.data.cities[0].city)
                    this.$set('selected',data.data.data.cities[0].city)
                    this.$set('cities', data.data.data.cities);
                    this.$set('fUrl',data.data.data.cities[0].url );
                    $("#actionFrame").show();
                    $("#actionText").hide();
                    console.log(data)
                }).catch(function(e){
//                    document.write("-------------error-----------") ;
//                    document.write(e) ;
                    console.log(e)
                })
            }

            var myScroll = new IScroll('#power_bi .wrapper', {touchmove: true});

        }
    }
</script>
