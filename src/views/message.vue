<!--通知消息-->
<style>

    #message .weui_cell {
        align-items: baseline;
    }

    #message .weui_cell .weui_cell_ft span {
        display: inline-block;
        color: #ffffff;
        padding: 2px 6px;
        border-radius: 4px;
    }

    #message .red span {
        background: rgb(255, 127, 102);
    }

    #message .gray span {
        background: rgb(204, 204, 204);
    }

    #message .red a {
        color: rgb(115, 115, 115);
    }

    #message .gray a {
        color: rgb(204, 204, 204);
    }

    #message .wrapper {
        position: absolute;
        width: 100%;
        z-index: 20;
        top: 64px;
        left: 0px;
        bottom: 0px;
        overflow: hidden;
    }

    .noResults {
        height: 100%;
        background: url("../../static/images/1x/wuxiaoxi.png") no-repeat center;
        background: -webkit-image-set(url(../../static/images/1x/wuxiaoxi.png) 1x,
        url(../../static/images/2x/wuxiaoxi@2x.png) 2x,
        url(../../static/images/3x/wuxiaoxi@3x.png) 3x) no-repeat center;
    }
</style>
<template>
    <div id="message">
        <header>
            <a v-on:touchstart="close()" class="header-back"></a>
            通知消息
            <a v-on:touchend="allRead()" class="header-btn">全部已读</a>
        </header>
        <div class="wrapper">

            <div v-if="messages">
                <div v-for="item in messages">
                    <div class="weui_cells  xsdApp-bg-white  xsdApp-margin-top6 red" v-if="!item.attributes.readn">
                        <a class="weui_cell" v-link="'message-detail?id='+item.id">
                            <div class="weui_cell_bd weui_cell_primary">
                                <p class="xsdApp-label xsdApp-label-circle-red xsdApp-font-size15">
                                    {{item.attributes.content}}
                                </p>
                            </div>
                            <div class="weui_cell_ft">
                                <p class="xsdApp-font-size12"><span>未读</span></p>
                            </div>
                        </a>
                    </div>
                    <div class="weui_cells  xsdApp-bg-white xsdApp-margin-top6 gray" v-else>
                        <a class="weui_cell" v-link="'message-detail?id='+item.id">
                            <div class="weui_cell_bd weui_cell_primary">
                                <p class="xsdApp-label xsdApp-label-circle-gray xsdApp-font-size15">
                                    {{item.attributes.content}}</p>
                            </div>
                            <div class="weui_cell_ft">
                                <p class="xsdApp-font-size12"><span>已读</span></p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="noResults" v-else></div>

        </div>
    </div>
</template>
<script>
    export default{
        data(){
            this.getData();
            return {
                messages: "",
                myScroll: ""
            };
        },

        methods: {
            close: function () {
                appObj.closeFrame()
            },

            getData: function () {

                this.$http.get(baseUrl + "/api/v1/messages", {}, {
                    headers: {
                        "Accept": "application/vnd.api+json"
                    }
                }).then(function (response) {
                    this.$set('messages', response.data.data);
                }.bind(this)).catch(function (err) {
                    if (err.status == '500') {
                        $.toast("服务器错误", "forbidden");
                    }
                })
            },

            allRead: function () {
                this.$http.put(baseUrl + "api/v1/messages/all_tag_readn").then(function (response) {
                    $.toast("操作成功");
                    this.getData();
                }.bind(this)).catch(function (err) {
                    $.toast("操作失败", "forbidden");
                })
            }
        },

        ready: function () {

//             解决异步问题
            var intervalTime = setInterval(function () {

                var resultContentH = $("#message .wrapper").height();
                if (resultContentH > 0) {

                    $("#showResult").height(resultContentH)
                    setTimeout(function () {
                        clearInterval(intervalTime);
                        var myScroll = new IScroll('#message .wrapper', {
                            click: true
                        });
                    }, 100)
                }
            }, 10);

        }
    }
</script>
