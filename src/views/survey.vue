<style>
  body,html{
    background: #fff;
     
  }
  #survey .wrapper{
        position: relative;
    margin-top: 59px;
    padding-left: 10%;
    padding-top: 5%;
   
    font-size: .7rem;
  }
  
   #survey .wrapper .box{
     margin-bottom:15px;
   }
  #survey .wrapper ul{
      margin-left: 4%;
  }
    #survey .wrapper p{
     margin-bottom: 6px;
  }
   #survey .wrapper ul li{
     line-height: 30px;
  }
    #survey .phone{
            border-bottom: solid 1px #ccc;
            margin-bottom: 9px;
            width: 126px;
            font-size: 0.7rem;
  }
 #survey .wrapper li b{
   display: inline-block;
    width: 22px;
    height: 22px;
    background: url(/static/images/ic_radio_normal.png) no-repeat;
    background-size: 80%;
    vertical-align: middle;
    margin-top: 2px;
    margin-right: 2%;
  }
   #survey .wrapper li.active b{
      display: inline-block;
    width: 22px;
    height: 22px;
    background: url(/static/images/ic_radio_selected.png) no-repeat;
    background-size: 80%;
    vertical-align: middle;
    margin-top: 2px;
    margin-right: 2%;
   }
 #survey .wrapper i{
   display: inline-block;
    width: 22px;
    height: 22px;
    background: url(/static/images/ic_radio_selected.png) no-repeat;
    background-size: 80%;
    vertical-align: middle;
    margin-top: 2px;
    margin-right: 2%;
  }
 #survey .bottom{
    
   
        width: 100%;
    text-align: center;
    font-size: 0.7rem;
    padding-top: 7%;
    padding-bottom: 6%;
  }
 #survey .bottom p {
      font-size: 0.65rem;
  }
 #survey .bottom .btn{
   width: 60%;
    margin: 0 auto;
    height: 35px;
    line-height: 35px;
   
    text-align: center;
    background: #56CC8D;
    border-radius: 5px;
    margin-bottom: 5px;
  }
 #survey .bottom .btn a{
     color: #fff;
  }
 #survey .title{
       position: relative;
    z-index: 20;
    text-align: center;
    /* background: rgba(73, 157, 242, 1); */
    /* color: #ffffff; */
    text-align: center;
    width: 100%;
    top: 59px;
    height: 59xp;
    height: 44px;
    line-height: 44px;
    border-bottom: solid 1px #ccc;
 }
 #survey .title .back{
    background: url(/static/images/ic_back.png) no-repeat right center;
   
    display: inline-block;
    width: 10px;
    height: 19px;
    position: absolute;
    left: 0;
    padding: 20px 0px 0px 15px;

 }
</style>

<template>
    <div id="survey">
        <header>
            <a v-on:touchend="closeBack()" class="header-back"></a>
            {{title}}
        </header>
         <div class="title">
            <a v-on:touchend="Back()" class="back"></a>
            问卷调查
        </div>
        <div class="wrapper">
            <div class="box">
                <p>1. 我们的智能分析系统是否满足您的需求？</p>
                  <ul>
                    <li v-for="item in items" @touchstart="demandChoice(item)" v-bind:class="{ 'active': surveyactive == item.code}"><b></b><span>{{item.name}}</span></li>
                 
                  </ul>
            </div>
              <div class="box"> 
                <p>2. 您愿意为智能分析支付的费用？</p>
                  <ul>
                    <li v-for="list in lists" @touchstart="priceChoice(list)" :class="{ 'active': priceactive == list.code}"><b></b><span>{{list.name}}</span></li>
                 
                  </ul>
            </div> 
             <div class="box"> 
                <p>3. 请留下回访电话</p>
                  <ul>
                   <li @touchstart="phoneChoice(1)" class="{{i==1?'active':''}}"><b></b><input class="phone" type="text" placeholder="请填写电话" v-on:input ="inputFunc()"></li>
                    <li @touchstart="phoneChoice(2)" class="{{i==2?'active':''}}"><b></b><span class="visit">我不希望回访</span></li>
                  </ul>
            </div> 
              
        </div>
        <div class="bottom">
             <div class="btn" @touchstart="save()"><a>提交</a></div> 
             <p>水滴感谢您的参与！</p>
        </div>
    </div>

</template>
<script>
export default {
    data(){
            return {
                i:'1',
                surveyactive:'',
                priceactive:"",
                title:"智能分析",
                items:[{code:"0",name:"满足"},{code:"1",name:"基本满足"},{code:"2",name:"完全不能满足"}],
                lists:[{code:"0",name:"1元/月"},{code:"1",name:"20元/月"},{code:"2",name:"100元/月"},{code:"3",name:"500元/月"}],
                data:{
                    require:"",
                    paymoney:"",
                    rvisit:""

                }
            }
        },
    methods:{
       closeBack: function () { 
                appObj.closeFrame();
            },
       demandChoice:function(item){
              this.surveyactive = item.code
               this.data.require = item.name

                if(typeof appObj == 'undefined'){
                this.$http.get(baseUrl +  "api/v2/census/questionnairesurvey", {
                    	 require: item.name
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
                this.$http.get(baseUrl + "/api/v2/census/questionnairesurvey", {
                     require: item.name
                }, {
                    headers:{
                        "Authorization":token
                    }
                }).then(function (data) {

                }).catch(function(e){

                })
            }  
            },
       priceChoice:function(list){
       
              this.priceactive = list.code
              this.data.paymoney = list.name
 
                if(typeof appObj == 'undefined'){
                this.$http.get(baseUrl +  "api/v2/census/questionnairesurvey", {
                    	  paymoney: list.name
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
                this.$http.get(baseUrl + "/api/v2/census/questionnairesurvey", {
                     paymoney: list.name
                }, {
                    headers:{
                        "Authorization":token
                    }
                }).then(function (data) {

                }).catch(function(e){

                })
            }  
            },
            inputFunc:function(){
             if(/^1[34578]\d{9}$/.test($('.phone').val())){
                 this.data.rvisit = $(".phone").val()  

                 if(typeof appObj == 'undefined'){
                this.$http.get(baseUrl +  "api/v2/census/questionnairesurvey", {
                    	 rvisit: $('.phone').val()
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
                this.$http.get(baseUrl + "/api/v2/census/questionnairesurvey", {
                    rvisit: $('.phone').val()
                }, {
                    headers:{
                        "Authorization":token
                    }
                }).then(function (data) {

                }).catch(function(e){

                })
            }  
              
              }
            },
            phoneChoice:function(i){
              this.i = i
          
              if(i==2){
                    this.data.rvisit = $(".visit").text()
                 if(typeof appObj == 'undefined'){
                this.$http.get(baseUrl +  "api/v2/census/questionnairesurvey", {
                    	 rvisit: $(".visit").text()
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
                this.$http.get(baseUrl + "/api/v2/census/questionnairesurvey", {
                    rvisit: $(".visit").text()
                }, {
                    headers:{
                        "Authorization":token
                    }
                }).then(function (data) {

                }).catch(function(e){

                })
            }  
              }else{
                  this.data.rvisit = $(".phone").val()
                  if(/^1[34578]\d{9}$/.test($('.phone').val())){
          if(typeof appObj == 'undefined'){
                this.$http.get(baseUrl +  "api/v2/census/questionnairesurvey", {
                    	 rvisit: $(".phone").val()
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
                this.$http.get(baseUrl + "/api/v2/census/questionnairesurvey", {
                    rvisit:$(".phone").val()
                }, {
                    headers:{
                        "Authorization":token
                    }
                }).then(function (data) {

                }).catch(function(e){

                })
            }  
                  }
              }
            },
          save:function(){
                if(this.data.require==''){
                    $.toast("问卷未填写完成", "forbidden");
                    return
                }
                 if(this.data.paymoney==''){
                    $.toast("问卷未填写完成", "forbidden");
                    return
                }
                 if(this.data.rvisit==''){
                    $.toast("请填写手机号", "forbidden");
                    return
                }
              
                if(typeof appObj == 'undefined'){
                this.$http.post(baseUrl +  "api/v2/census/questionnairesurvey2",$.param(this.data), {
                    headers:{
                        "Authorization":token,
                         "Accept": "*/*",
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    }
                }).then(function (data) {
                     this.$router.go({
                        name: 'power_bi'
                         })
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
                this.$http.post(baseUrl + "/api/v2/census/questionnairesurvey2", $.param(this.data), {
                    headers:{
                        "Authorization":token,
                         "Accept": "*/*",
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    }
                }).then(function (data) {
                    this.$router.go({
                        name: 'power_bi'
                        })
                }).catch(function(err){
                    if(err.status == '404') {
                    $.toast("数据不存在", "forbidden");
                  } else if(err.status == '500') {
                    $.toast("服务器错误", "forbidden");
                  }
                })
            }  
            }, 
            Back:function(){
                 this.$router.go({
                        name: 'power_bi'
                    })
            }
    }   
}
</script>

