<!--早读-->
<style>
    #morning-read .static .wrapper {
        position: absolute;
        width: 100%;
        z-index: 20;
        top: 64px;
        left: 0px;
        bottom: 0px;
        overflow: hidden;
        background: #ffffff;
    }

    #morning-read .static .wrapper h2{
        padding: 15px 15px 0px 15px;
        text-align: center;
        font-size: 18px;
        overflow: hidden;
        word-wrap: normal;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    #morning-read .static .wrapper p{
        text-indent: 2em;
        font-size: 14px;
        padding: 10px 15px 0px 15px ;
        line-height: 24px;
    }
    #morning-read .wrapper .content {
        padding: 10px;
    }

    #morning-read h1{
        font-size:14px;
        margin-bottom:0px;
        color:black;
    }
    #morning-read h1 span{
        display: inline;
        margin:0px;
        float:none;
        margin:0px;
        width:inherit;
        background:none;
    }
</style>
<template>
    <div id="morning-read" class="static">
        <header>
            <a v-on:touchstart="close()" class="header-back"></a>
            早读
        </header>

        <div class="wrapper">
            <div >
                <h2 class="title">
                    {{morning.title}}
                </h2>
                <div class="content">
                    {{{morning.content}}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default{
        data: function () {
            return {
                morning:""
            };
        },
        methods: {
            close:function () {
                appObj.closeFrame()
            },
            getData: function () {
                let _this=this;
                let base_url = baseUrl;
                //如果是集中式,将url改成分散式
                if(base_url.search("jz.api")!==-1){
                    base_url = base_url.replace('jz.api','api');
                }
                let url = base_url + "api/m/morning/read";
                this.$http.get(url, {}, {
                    headers: {
                        "Accept": "application/vnd.api+json"
                    }
                }).then(function (response) {
                    this.$set("morning",response.data.data[0].attributes);
                    setTimeout(function(){
                        var myScroll = new IScroll('#morning-read .wrapper');
                        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
                    },100)
                }.bind(this)).catch(function (err) {
                    if (err.status == '404') {
                        $.toast("数据不存在", "forbidden");
                    } else if (err.status == '500') {
                        $.toast("服务器错误", "forbidden");
                    }
                });
            },
        },
        ready: function () {
            this.getData();
        }
    }
</script>
