<!--用户注册-->

<style>
    #login header {
        padding-top: 30px;
        color: #4d4d4d;
        background: rgb(255, 255, 255);

    }

    /*#login .big-btn{*/
    /*float: left;*/
    /*padding-left:15px;*/
    /*}*/
    /*#login .login-back{*/
    /*font-size:22px;*/
    /*}*/
    #login #login-in, #login #login-success {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: url("../../static/images/spread/loginbg.png") no-repeat;
        background-size: 100% 100%;
        overflow: auto;

    }

    #login #login-success {
        background: url("../../static/images/spread/login_success.png") no-repeat #fff;
        background-size: 100% 496px;
    }

    #login #login-success div {
        text-align: center;
    }

    #login #login-success .downLoad {
        position: fixed;
        height: 48px;
        line-height: 48px;
        left: 15px;
        right: 15px;
        bottom: 30px;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        background: #59acff;

    }

    #login #login-success .log-suc-icon {
        margin-bottom: 20px;
        padding-top: 52px;
    }

    #login #login-success .log-suc-icon img {
        width: 70px;
        height: 70px;
    }

    #login #login-success .log-msg-icon img {
        width: 210px;
        height: 169px;
    }

    #login .logo {
        text-align: center;
        padding: 20px 0;
    }

    #login .logo img {
        width: 68px;
        height: 68px;
    }

    #login #login-in ul {
        margin: 0 15px 10px;
        padding: 0 20px;
        border-radius: 4px;
        background: rgb(255, 255, 255);
    }

    #login #login-in ul li {
        position: relative;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        border-bottom: 1px solid #bfbfbf;
    }

    #login #login-in ul .phone-tips:after {
        position: absolute;
        content: "请输入正确手机号";
        font-size: 13px;
        left: 92px;
        color: #ff5153;

    }

    #login #login-in ul .code-tips:after {
        position: absolute;
        content: "验证码错误";
        font-size: 13px;
        left: 92px;
        color: #ff5153;

    }

    #login .other-err {
        display: none;
        position: absolute;
        padding: 6px 26px;
        border-radius: 4px;
        width: 160px;
        left: 50%;
        top: -32px;
        margin-left: -108px;
        font-size: 13px;
        color: #fff;
        text-align: center;
        background: rgba(0, 0, 0, 0.5);

    }

    #login #login-in ul li:last-child {
        border: none;
    }

    #login #login-in ul li input {
        width: 100%;
    }

    #login #login-in ul .verify input {
        width: 160px;
    }

    #login #login-in ul .verify span {
        float: right;
        font-size: 13px;
    }

    #login #login-in .verify .authCode {
        float: right;
        width: 86px;
        height: 32px;
        border-radius: 4px;
        margin-top: 10px;
        font-size: 13px;
        text-align: center;
        line-height: 32px;
        color: #fff;
        background: #59acff;
    }

    #login #login-in .passWord {
        color: #59acff;
    }

    #login #login-in .hidePass {
        display: none;
    }

    #login #login-in .title {
        padding-top: 28px;
        text-align: center;
    }

    #login #login-in .title img {
        width: 96px;
        height: 15px;
    }

    #login .register {
        display: block;
        height: 48px;
        margin: 0 15px 10px;
        border-radius: 5px;
        line-height: 48px;
        text-align: center;
        font-size: 16px;
        color: #fff;
        background: #59acff;
    }

    #login .clause {
        float: right;
        color: #b2b2b2;
        margin-right: 15px;
        font-size: 13px;
    }

    #login .clause div {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 5px;
        border-radius: 2px;
        background: url("../../static/images/spread/clause_select.png") no-repeat;
        background-size: 100% 100%;

    }

    #login .clause div.checked {
        background: url("../../static/images/spread/clause_selected.png") no-repeat;
        background-size: 100% 100%;

    }

    #login .clause a {
        color: #3b88ee;
    }
      #captchaMask {
			    display: none;
    /* overflow: hidden; */
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                z-index: 400;
                background: rgba(0, 0, 0, 0.5);
                z-index: 99;
            }
            		#verification {
				    position: absolute;
                    width: 80%;
                    height: 10rem;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    background: #fff;
                    border-radius: 0.125rem;
                    padding-left: 0.55rem;
                    padding-right: 0.55rem;
                    z-index: 9999;
            }
            #captchaMask .captchheader {
		
                    border-bottom: 1px solid #f1f1f2;
                    text-align: center;
                    color: #888;
                    font-size: 0.65rem;
                    /* line-height: .97rem; */
                    padding-top: 0.55rem;
                    padding-bottom: 0.55rem;
            }
            #captchaMask .close{
                       position: absolute;
                    top: .65rem;
                    right: 0.75rem;
                    width: .75rem;
			
		    }
			#captchaMask .content {
				padding-top: 0.65rem;
                overflow: hidden;
                padding-bottom: 35px;
			}
			
			#captchaMask .inputting {
				margin-top: 18px;
                float: left;
                width: 51%;
			}
			
			#captchaMask .inputting input {
				    border: none;
                border-bottom: 1px solid #f1f1f2;
                padding-left: .2rem;
                /* margin-left: 0.2rem; */
                width: 100%;
                font-size: .75rem;
                /* line-height: .74rem; */
                /* margin-top: .51rem; */
                height: 1.5rem;
			}
			
			#captchaMask .img {
				float: right;
			}
			#captchaMask .img img{
                display: block;
            }
            #captchaMask .img a{
               display: block;
                font-size: 0.1rem;
                color: #499df2;
            }
			
			#captchaMask .captchaBtn {
				    /* margin-top: .4rem; */
                /* margin-left: .26rem; */
                width: 95%;
                /* height: .8rem; */
                background: #499df2;
                border-radius: 5px;
                text-align: center;
                /* font-size: 0.24rem; */
                /* line-height: .8rem; */
                margin: 0 auto;
                height: 35px;
                line-height: 35px;
            }
           #captchaMask .captchaBtn>a {
                color: #fff;
                font-size: 0.7rem
			}
          
</style>
<template>
    <div id="login">
        <!--<header>-->
        <!--<div class="big-btn" v-on:click="close()" v-if="hide">-->
        <!--<a class="login-back" >&lt;</a>-->
        <!--</div>-->
        <!--注册水滴管家-->
        <!--<div class="big-btn" >-->
        <!--</div>-->
        <!--</header>-->
            <div id="login-in" v-if="!hide">
            <div class="title"><img src="../../static/images/spread/signup_title.png"></div>
            <div class="logo"><img src="../../static/images/spread/signup_img_logo.png"></div>
            <ul>
                <li><input type="text" name="phone" placeholder="请输入手机号"></li>
                <li class="verify"><input type="text"  name="authcode" placeholder="请输入验证码"><input type="button"
                                                                                                  class="authCode"
                                                                                                  v-on:click="verifyUse()"
                                                                                                  data-value=""
                                                                                                  value="发送验证码"></li>
                <li class="verify showPass"><input type="password" class="showWord" placeholder="请输入密码"><span
                        class="passWord" v-on:click="togglePassWord('.hideWord','.hidePass')">显示密码</span></li>
                <li class="verify hidePass"><input type="text" class="hideWord" name="password"
                                                   placeholder="请输入密码"><span class="passWord"
                                                                             v-on:click="togglePassWord('.showWord','.showPass')">隐藏密码</span>
                </li>
                <li><input type="text" name="referrer" placeholder="请推荐人手机号码（没有可不填）">
                    <p class="other-err">其他错误</p>
                </li>
            </ul>
            <div class="register" v-on:click="register()">立即注册</div>
            <div class="clause">
                <div class="checked" v-on:click="checked()"></div>
                已阅读并同意<a v-on:click="goClause()">注册条款</a></div>
        </div>
                		 <!-- 弹框 -->
		  <div id="captchaMask">
                <div id="verification">
                <div class="captchheader">图文验证
          
                <img class="close" src="../../static/images/order/cancel.png" alt="" v-on:click="closeImg()">
                </div>
                <div class="content">
                <div class="inputting">
                <input type="text" id="captchaInput" placeholder="请输入验证码">
                </div>
                <div class="img" v-on:click="clickCaptcha()">
                <img id='captchaImg' src="">
                <a id="changeImg" href="javascript:;" >看不清楚，换一张</a>
                </div>
               
                </div>
                 <div class="captchaBtn" v-on:click="clickModalBtn()">
                <a href="javascript:;">确定</a>
                </div>
                </div>
          </div>
        <div id="login-success" v-if="hide">
            <div class="log-suc-icon"><img src="../../static/images/spread/success-icon.png"></div>
            <div class="log-msg-icon"><img src="../../static/images/spread/success-msg.png"></div>
            <div class="downLoad" v-on:click="downLoad()">下载APP</div>
        </div>
        

        <script type="text/javascript">
            var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
            document.write(unescape("%3Cspan id='cnzz_stat_icon_1264315170'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s19.cnzz.com/z_stat.php%3Fid%3D1264315170' type='text/javascript'%3E%3C/script%3E"));
        </script>

    </div>
</template>
<script>
    var native = {
        device: {
            Android: function () {
                return navigator.userAgent.match(/Android/i) ? true : false;
            }
            ,
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i) ? true : false;
            }
            ,
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;

            }
            ,
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i) ? true : false;
            }
            ,
            isWeiXin: function () {
                return navigator.userAgent.match(/MicroMessenger/i) ? true : false;
            }
            ,
            any: function () {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
            }

        }

    };
    var time = 60;
    export default{
        data(){
            return {
                passWord: '',
                hide: false,
                message:{
                      count: '',            // 已发送次数
                      captcha_img: "",     // 验证码图片地址
                      token: ""            // 本次token
                }
            }
        },
        methods: {
            close: function () {
                this.$set("hide", false);
            },
            goClause: function () {
                this.$router.go({
                    name: 'clause',
                });
            },
            verifyUse: function () {
              
                var phone = $("input[name='phone']").val();
                if (!(/^1[3,5,8,4,7]\d{9}$/).test(phone)) {
                    $("ul").children("li").eq(0).addClass('phone-tips');
                    return;
                }

                let base_url = baseUrl;
                //如果是集中式,将url改成分散式
                if (base_url.search("jz.api") !== -1) {
                    base_url = base_url.replace('jz.api', 'api');
                }
                let url = base_url + "api/v2/account/check_phone_code/";
                         $.ajax({
                        type: "GET",
                        url: url,
                        data: {
                            "phone": phone,
                            "frm":"h5",
                            "why":"register"
                        },
                        success: function (res) {
                            console.log(res)
                            $('#captchaMask').show();
                            $('#captchaImg').attr('src', res.data.captcha_img);
                            this.message.token = res.data.token;
                             this.message.count = res.data.count;
                            //console.log(res.data.count)
                            $('#captchaInput').val('');
                          
                        }.bind(this),
                        error: function (err) {
                            if (!err.status != 200) {
                                alert(err.responseJSON.msg);
                            }
                        }
                })

            },
            closeImg : function(){
                $('#captchaMask').hide();
            },
                    clickCaptcha : function (){
                let base_url = baseUrl;
              
            
                $('#captchaImg').attr("src" ,base_url+"api/v2/account/refresh_captcha/");
             
                var curTime = new Date().getTime();
                var img_url = base_url+'api/v2/account/refresh_captcha?phone=' + $("input[name='phone']").val() + '&token=' + this.message.token + '&t='+ curTime;
                $('#captchaImg').attr('src', img_url);
                $('#captchaInput').val('');   
            },
                clickModalBtn:function(){
                    
                    let base_url = baseUrl;
                    if ($("#captchaInput").val() == "" ) {
                    alert("验证码不能为空");
                    return false;
                };
                        $.ajax({
                            type: "GET",
                            url: base_url+ "api/v2/account/send_verify_code",
                            data: {
                            "phone": $("input[name='phone']").val(),
                            'token':this.message.token,
                            'count':this.message.count,
                            'captcha':$("#captchaInput").val()
                            },
                            success: function (res) {
                                $('#captchaMask').hide();
                                 $(".authCode").val(time + "s").css("background", "rgba(89, 172, 255, 0.65)");
                                var setTime = setInterval(function () {
                                    time--;
                                    $(".authCode").val(time + "s");
                                    if (time < 0) {
                                        $(".authCode").val("发送验证码").css("background", "#59acff");
                                        clearInterval(setTime);
                                        time = 60;
                                    }
                                }, 1000);                           


                            },
                            error: function (err) {
                                if (!err.status != 200) {
                                    alert("验证码错误");
                                }
                            }
                 })
            },
            sendAuthCode: function () {
                var phone = $("input[name='phone']").val();
                let base_url = baseUrl;
                //如果是集中式,将url改成分散式
                if (base_url.search("jz.api") !== -1) {
                    base_url = base_url.replace('jz.api', 'api');
                }
                let url = base_url + "api/v1/verifycode";
                this.$http.get(url, {
                    phone: phone
                }, {
                    headers: {
                        "Accept": "application/vnd.api+json"
                    }
                }).then(function (response) {

                }.bind(this)).catch(function (err) {
                    if (err.status == '404') {
                        $.toast("数据不存在", "forbidden");
                    } else if (err.status == '500') {
                        $.toast("服务器错误", "forbidden");
                    }
                });

            },
            downLoad: function () {
                $(".downLoad").css("background", "#499DF2")
                setTimeout(function () {
                    $(".downLoad").css("background", "#59acff");
                }, 300);

                if (native.device.iOS()) {
                    location.href = "https://itunes.apple.com/cn/app/%E6%B0%B4%E6%BB%B4%E7%AE%A1%E5%AE%B6-%E6%88%BF%E4%B8%9C%E4%BA%BA%E7%9A%84%E6%8E%8C%E4%B8%8A%E5%85%AC%E5%AF%93%E7%AE%A1%E7%90%86app/id1144337669?mt=8#";
                } else if (native.device.Android()) {
                    location.href = "http://sj.qq.com/myapp/detail.htm?apkName=com.shuidiguanjia.missouririver";
                } else {
                    location.href = "http://imtt.dd.qq.com/16891/F4F9E3F46A6EB6EA4B8D20450D8DE8AC.apk?fsname=com.shuidiguanjia.missouririver_2.5.6_256.apk&csr=1bbd";
                }
            },
            togglePassWord: function (cla, ele) {
                var value = $(event.currentTarget).siblings("input").val();
                $(cla).val(value);
                $(event.currentTarget).siblings("input").val("").parent().hide();
                $(ele).show();

            },
            register: function () {
                var _czc = _czc || [];
                _czc.push(["_setCustomVar", "是否访问", "注册"]);

                $(".register").css("background", "#499DF2")
                setTimeout(function () {
                    $(".register").css("background", "#59acff");
                }, 300);
                setTimeout(function () {
                    $(".other-err").hide();

                }, 1000);
                var phone = $("input[name='phone']").val();
                var authcode = $("input[name='authcode']").val();
                var passWord = $("input[type='passWord']").val() == "" ? $("input[name='password']").val() : $("input[type='passWord']").val();
                var referrer = $("input[name='referrer']").val();
                if (!(/^1[3,5,8,4,7]\d{9}$/).test(phone)) {
                    $("ul").children("li").eq(0).addClass('phone-tips');
                    return;
                }
                if ($(".authCode").val() == "发送验证码") {
                    $("ul").children("li").eq(1).addClass('code-tips');

                    return;
                }
                if (!(/^([A-Za-z0-9\.\@\!\#\$\%\^\&\*\(\)]){6,}$/).test(passWord)) {
                    $(".other-err").show().html("密码格式不正确");
                    return;
                }

                if (referrer != "" && !(/^1[3,5,8,4,7]\d{9}$/).test(referrer)) {
                    $(".other-err").show().html("推荐人手机号不正确");
                    return;
                }

                if (!$(".clause").children("div").hasClass("checked")) {
                    $(".other-err").show().html("请阅读并勾选阅读条款");
                    return;
                }
                let base_url = baseUrl;
                //如果是集中式,将url改成分散式
                if (base_url.search("jz.api") !== -1) {
                    base_url = base_url.replace('jz.api', 'api');
                }
                let url = base_url + "api/v1/users";

                this.$http.post(url, {
                    phone: phone,
                    username: phone,
                    referral: referrer,
                    password: passWord,
                    code: authcode,
                    terminal: "Mobile"
                }, {
                    emulateJSON: true,
                    headers: {
                        "Accept": "*/*",
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    }

                }).then(function (response) {
                    this.$set("hide", true);

                }.bind(this)).catch(function (err) {
                    if (err.data.errors.detail) {
                        if (err.data.errors.detail == "验证码错误") {
                            $("ul").children("li").eq(1).addClass('code-tips');
                        } else {
                            $(".other-err").show().html(err.data.errors.detail);
                        }
                    } else {
                        $(".other-err").show().html("服务器错误");
                    }
                });
            },
            checked: function () {
                if ($(event.currentTarget).hasClass("checked")) {
                    $(event.currentTarget).removeClass("checked");
                } else {
                    $(event.currentTarget).addClass("checked");
                }
            }
        },

        ready: function () {
            $("input").focus(function () {
                $("ul").children("li").eq(0).removeClass('phone-tips');
                $("ul").children("li").eq(1).removeClass('code-tips');
                $(".other-err").hide();
            });
        }
    }


</script>