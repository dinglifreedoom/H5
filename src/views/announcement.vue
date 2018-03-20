<!--公告-->
<style>
    #announcement .static .wrapper {
        position: absolute;
        width: 100%;
        z-index: 20;
        top: 64px;
        left: 0px;
        bottom: 0px;
        overflow: hidden;
        background: #ffffff;
    }

    #announcement .static .wrapper h2 {
        padding: 15px 15px 0px 15px;
        font-size: 18px;
    }

    #announcement .static .wrapper p {
        text-indent: 2em;
        font-size: 14px;
        padding: 10px 15px 0px 15px;
        line-height: 24px;
    }

    #announcement .wrapper .content {
        padding: 10px;
    }
</style>
<template>
    <div id="announcement" class="static">
        <header>
            <a v-on:touchstart="close()" class="header-back"></a>
            公告
        </header>

        <div class="wrapper">
            <div>
                <h2 class="title">
                    {{announce.title}}
                </h2>
                <div class="content">
                    {{{announce.content}}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default{

        data: function () {
            return {
                announce: ""
            };
        },

        methods: {
            close: function () {
                appObj.closeFrame()
            },
            getData: function () {
                let _this = this;
                let base_url = baseUrl;
                //如果是集中式,将url改成分散式
                if (base_url.search("jz.api") !== -1) {
                    base_url = base_url.replace('jz.api', 'api');
                }
                let url = base_url + "api/v2/announcements/" + this.$route.query.id;
                this.$http.get(url, {}, {
                    headers: {
                        "Accept": "application/vnd.api+json"
                    }
                }).then(function (response) {
                    this.$set("announce", response.data.data.attributes);
                    setTimeout(function () {
                        var myScroll = new IScroll('#announcement .wrapper');
                        document.addEventListener('touchmove', function (e) {
                            e.preventDefault();
                        }, false);
                    }, 100)
                }.bind(this)).catch(function (err) {
                    if (err.status == '404') {
                        $.toast("公告不存在", "forbidden");
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
