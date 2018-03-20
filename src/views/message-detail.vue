<!--消息详情-->
<style>
    #message-detail .weui_cell:before{
        left: 0px;
    }
    #message-detail .warpper{
        position: absolute;
        width: 100%;
        top:64px;
        bottom: 0px;
        z-index: 20;
        overflow: hidden;
    }
    #message-detail .weui_cells{
        margin-top: 0px;
    }
    #message-detail .weui_cell{
        padding: 20px 30px;
    }
    #message-detail .weui_cells:after{
        border-bottom: none;
    }
    #message-detail .xsdApp-font-size16 span{
        display: inline-block;
        width: 19px;
        height:19px;
        vertical-align: middle;
        margin-left: 6px;
        background: url("../../static/images/1x/flag.png") no-repeat right center;
        background: -webkit-image-set(url(../../static/images/1x/flag.png) 1x,
        url(../../static/images/2x/flag.png) 2x,
        url(../../static/images/3x/flag.png) 3x) no-repeat right center;
    }
</style>
<template>
    <div id="message-detail">
        <header>
            <a v-link="'message'" class="header-back"></a>
            消息详情
        </header>
        <div class="warpper">
            <div class="weui_cells  xsdApp-bg-white">
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size16">通知消息<span></span></p>
                        <p class="xsdApp-font-size13 xsdApp-margin-top6" >{{message.created_at}}</p>
                    </div>
                </div>
                <div class="weui_cell xsdApp-bg-gray">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15">{{message.content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{

        data:function () {

            return {
                message:""
            };
        },

        methods:{

            getData:function () {

                this.$http.get(baseUrl+"api/v1/messages/"+this.$route.query.id).then(function (response) {
                    this.$set('message', response.data);
                    if(!response.data.readn){

                        this.doRead();
                    }
                }.bind(this)).catch(function (err) {

                    if(err.status=='404'){

                        $.toast("消息不存在", "forbidden");
                    }else if(err.status=='500'){
                        $.toast("服务器错误", "forbidden");
                    }
                })
            },
            doRead(){

                this.$http.put(baseUrl+"api/v1/messages/"+this.$route.query.id+"/readn",{},{
                    headers:{
                        "Accept": "application/vnd.api+json",
                        "Content-Type":"application/vnd.api+json"
                    }
                }).then(function (response) {

                }.bind(this))
            },
        },

        ready:function () {
            this.getData()
            var myScroll = new IScroll('#message-detail .warpper')
        }
    }
</script>

