<!--广告-->
<template>
    <div id="ads">
        <img v-bind:src="img" alt="ads" width="100%"/>
    </div>
</template>
<style>
    #ads {
        position: absolute;
        width: 100%;
        z-index: 20;
        left: 0px;
        top: 0px;
        bottom: 0px;
        overflow: hidden;
        text-align: center;
    }
</style>
<script>
    export default{
        data(){
            return {
                img: "23132131",
                imgs: ["", "../../static/images/ads1.jpg", "../../static/images/ads2.jpg", "../../static/images/ads3.png", "../../static/images/ads4.png", "../../static/images/ads5.png"],
            }
        },
        ready: function () {
            this.$set("img", this.imgs[parseInt(this.$route.query.type)])

            setTimeout(function () {
                var myScroll = new IScroll('#ads');
            }, 200)
        },
    }
</script>
