<!--注册条款-->
<style>
    #clause-items header{
        padding-top:30px;
        color:#4d4d4d;
        background:rgb(255,255,255);
    }
    #clause-items #clause-details{
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        padding: 28px 0 40px;
        background:url("../../static/images/spread/loginbg.png") no-repeat;
        background-size:100% 100%;
        overflow: auto;
    }
    #clause-items #clause-details p{
        margin:0 15px;
        font-size:14px;
        color:#737373;
    }
    #clause-items #clause-details h3{
        margin:0 15px;
        font-size:16px;
        color:#737373;
    }
    #clause-items #clause-details .clause-header{
        text-align: center;
        margin-bottom:5px;
    }
    .indent{
        text-indent:2em;
    }
</style>
<template>
    <div id="clause-items" class="static ope-title">
        <!--<header>-->
            <!--<div class="big-btn" v-on:click="close()" >-->
                <!--<a class="login-back">&lt;</a>-->
            <!--</div>-->
            <!--水滴管家注册条款-->
            <!--<div class="big-btn" >-->
            <!--</div>-->
        <!--</header>-->
        <div id="clause-details">
            <h3 class="clause-header">水滴管家注册条款</h3>
            <p class="indent">本服务条款是您与上海库铭数据技术有限公司（下称“库铭数据技术”）之间的协议。水滴管家，是由库铭数据技术提供的互联网软件服务。在本服务创建账号并使用之前，您必须首先同意此条款。此条款在必要时将进行修订，且毋须另行通知。修订后的条款一旦在网页上公布即有效代替原来的服务条款。</p>
            <h3>账户</h3>
            <p class="indent">您同意并理解您有责任将您与用于获得服务的任何账号相关的密码保密。您负责对您账号下发生的所有的行为和内容负责。</p>
            <p>( 一 )注册相关</p>
            <p>在使用本服务前，您同意并保证：</p>
            <p>1.您所填写的用户信息是真实、准确、完整、及时的，并且没有任何引人误解或者虚假的陈述，且保证水滴管家可以通过您所填写的联系方式与您取得联系。</p>
            <p>2.您应根据水滴管家对于相关服务的要求及时提供相应的身份证明等资料，否则水滴管家有权拒绝向您提供相关服务。您承诺将及时更新您用户信息以维持该等信息的有效性。</p>
            <p>3.如果您提供的资料或信息包含有不正确、不真实的信息，水滴管家保留取消您会员资格并随时结束为您提供服务的权利。</p>
            <p>4.您应对您的账户负责，只有您本人可以使用您的水滴管家账户，该账户不可转让、不可赠与、不可继承。</p>
            <p>( 二 )账户安全</p>
            <p>您将对使用该账户及密码进行的一切操作负责，您同意：</p>
            <p>1．本公司通过您的用户名和密码识别您的指示，请您妥善保管您的用户名和密码，对于因密码泄露所致的损失，由您自行承担。您保证不向其他任何人泄露该账户及密码，亦不使用其他任何人的水滴管家账户及密码。</p>
            <p>2．如您发现有他人冒用或盗用您的账户及密码或任何其他未经合法授权之情形时，应立即以有效方式通知本公司，要求本公司暂停相关服务。同时，您理解本公司对您的请求采取行动需要合理期限，在此之前，本公司对已执行的指令及(或)所导致的您的损失不承担任何责任。</p>
            <h3>服务费用</h3>
            <p class="indent">库铭数据技术提供“水滴管家”给您试用，若您遵守水滴管家对免费试用用户提出的权利和义务规定，则您可享受终身免费使用“水滴管家”的资格，可选用的增值服务除外。</p>
            <h3>权利和义务</h3>
            <p>1．水滴管家在工作时间内随时以电话、传真、电子邮件方式免费提供您产品的服务与技术支持维护，通常软件系统故障，提供实时响应远程解决。</p>
            <p>2．水滴管家有义务对系统提供技术支持和维护，并根据客户基础需求不断更新完善基本功能。</p>
            <h3>版权归属</h3>
            <p class="indent">水滴管家对您在本服务提交的数据、内容拥有使用权，这些内容的所有权仍然归您所有。但是，如果您将页面设置为公开，就意味着您允许其他人查看和共享您的内容。</p>
            <p class="indent">本服务的外观设计与专利、版权均归水滴管家所有。未经水滴管家许可，您不能复制、拷贝，或者重用任何部分代码和外观设计。</p>
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
                this.$router.go({
                    name: 'signup',
                });
            }
        },
        ready:function () {

        }
    }

</script>