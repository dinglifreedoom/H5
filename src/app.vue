<!--主入口-->
<style>
    .weui_mask {
        z-index: 60
    }

    .weui_dialog, .weui_toast {
        z-index: 100
    }

    .fade-transition, .back-transition {

        transition: all .3s ease-in;
        margin-top: 0px;
    }

    .fade-enter {
        opacity: 1;
        transform: translate3d(30%, 0, 0);
        -webkit-transform: translate3d(30%, 0, 0);
    }

    .fade-leave {
        opacity: 0;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);

    }

    .back-enter {
        opacity: 1;
        -webkit-transform: translate3d(-30%, 0, 0);
        transform: translate3d(-30%, 0, 0);

    }

    .back-leave {
        opacity: 0;
        transform: translate3d(0%, 0, 0);
        -webkit-transform: translate3d(0%, 0, 0);
        /*-webkit-transform: translate3d(0, 0, 0);*/
        /*transform: translate3d(0, 0, 0);*/
    }

    #root {
        /*max-width: 1024px;*/
        min-width: 320px;
        margin: 0 auto;
    }
    .scrolling{
        -webkit-overflow-scrolling: touch;
    }
    #cnzz_stat_icon_1264358441{
        display:none;
    }

</style>
<template>
    <div id="root" class="scrolling">
        <!--keep-alive   :transition="effect" transition-mode="out-in"-->
        <router-view ></router-view>
        <span id="cnzz_stat_icon_1264358441"></span>
        <script src="//s22.cnzz.com/z_stat.php?id=1264358441" type="text/javascript"></script>
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {
                msg: 'main',
                title: '主入口',
                effect: "fade",
            }
        },
        route: {
            activate: function (transition) {
                //this.$root.$set('header',this.title);//给父级传参
                transition.next();
            }
        },
        events: {
            goToError: function (status) {
                if (status == 404) {
                    this.$router.go({
                        name: '*',
                    })
                }
            },
        },
        methods: {

        },
        ready: function () {
//            var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
//            document.write(unescape("%3Cspan id='cnzz_stat_icon_1264358441'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s22.cnzz.com/z_stat.php%3Fid%3D1264358441' type='text/javascript'%3E%3C/script%3E"));
//            console.log('init cnzz')

            document.addEventListener('touchmove', function (event) {
                event.preventDefault();
            }, false);

            //禁止body滚动
//            $("body").bind('touchmove', function (e) {
//                e.preventDefault();
//            }, false);
            let _this = this;
            $("body").on("touchstart", ".header-back", function () {
                _this.$data.effect = "back";
            })
            $("body").on("touchstart", ".header-add", function () {
                _this.$data.effect = "fade";
            })
        }
    };
</script>