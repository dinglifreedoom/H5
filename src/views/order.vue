<!--账单详情-->
<style>
    #order {
        position: absolute;
        width: 100%;
        z-index: 20;
        left: 0px;
        top: 50px;
        bottom: 52px;
        overflow: auto;

    }

    #order h1 {
        font-size: 22px;
        font-weight: normal;
        color: rgb(89, 172, 255)
    }

    #order .weui_cell_primary span {
        color: #ffffff;
        font-size: 12px;
        padding: 2px 4px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
    }

    #order .xsdApp-bg-gray {

        background: rgb(204, 204, 204);
    }

    #order .xsdApp-bg-white p {
        color: rgb(153, 153, 153);
        font-size: 15px;
        margin-bottom: 11.5px;
    }

    #order .xsdApp-inline-block {
        width: 132px;
        overflow: hidden;
        word-wrap: normal;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 6px;
    }

    .order_weui_tab {
        position: absolute;
        line-height: 52px;
        z-index: 20;
        height: 52px;
        bottom: 0px;
        left: 0px;
        width: 100%;
    }

    .order_weui_tab .weui_tabbar a {
        padding-top: 0px;
    }

    .order_weui_tab .weui_tabbar a:last-child p {
        color: #ffffff;
    }

    .order_weui_tab .weui_tabbar a:first-child {
        border-right: 1px solid #d9d9d9;
    }

    #order .weui_cell_primary p span {
        display: inline-block;
        width: 64px;
        color: rgb(115, 115, 115);
        font-size: 14px;
    }

    .weui_dialog_bd .payMethod span {
        display: inline-block;
        width: 72px;
        text-align: center;
        border: 1px rgb(151, 151, 151) solid;
        margin: 4px 5px;
        border-radius: 13px;
    }

    .weui_dialog_bd .payMethod .active {
        background: rgb(73, 157, 242);
        color: #ffffff;
        border: none;
    }

    #order #editAble {
        padding-right: 0px;
    }

    #order #editAble p {
        border-bottom: 1px #e7e7e7 solid;
        padding-bottom: 6px;
    }

    #order #editAble p input {
        line-height: 20px;
    }

    #order #detail .remark-bill p {
        float: left;
    }

    #order #detail .remark-bill div {
        margin-left: 70px;
        font-size: 15px;
        color: rgb(153, 153, 153);
    }

    #actual {
        width: 126px;
    }

    #weui_actionsheet {
        z-index: 500;
    }
</style>
<template>
    <header>
        <a v-on:touchstart="close()" class="header-back"></a>
        <span v-if="order.type=='roomorders'">租客账单详情</span>
        <span v-else>业主账单详情</span>
        <a class="header-btn">
            <img v-on:touchend="openMenus()" src="../../static/images/order/icon_more.png" width="44"
                 height="44">
        </a>
    </header>
    <div id="order">
        <div id="order_scroll">
            <div class="weui_cells xsdApp-margin-top6">
                <div class="weui_cell xsdApp-bg-blue weui_cell_left0">
                    <div class="weui_cell_bd weui_cell_primary">
                        <h1>¥{{order.attributes.rent_utilities}}</h1>
                        <span v-if="order.attributes.approved_status==0 || order.attributes.approved_status==2">
                            <span class="xsdApp-bg-green" v-if="order.attributes.show_status==0">待处理</span>
                            <span class="xsdApp-bg-orange" v-if="order.attributes.show_status==1">应处理</span>
                            <span class="xsdApp-bg-red" v-if="order.attributes.show_status==2">已逾期</span>
                        </span>
                        <span class="xsdApp-bg-blue-1" v-if="order.attributes.approved_status==1">审核中</span>
                      
                        <span class="xsdApp-bg-red" v-if="order.attributes.approved_status==3">已驳回</span>
                     
                    
                    </div>
                    <div class="weui_cell_ft">
                        <p class="xsdApp-font-size14">账单日期：{{order.attributes.ought_pay_time}}</p>
                    </div>
                </div>
            </div>
            <div class="weui_cells  xsdApp-margin-top6">
                <div class="weui_cell xsdApp-bg-yellow weui_cell_left0">
                    <div class="weui_cell_bd weui_cell_primary xsdApp-font-size16">
                        账单信息
                    </div>
                    <div class="weui_cell_ft">
                    <span class="xsdApp-inline-block xsdApp-font-size14 xsdApp-hide">
                        <i v-if="flag">{{order.attributes.apartment_name}}&nbsp;{{order.attributes.floor_num}}层&nbsp;{{order.attributes.room}}</i>
                        <i v-else>{{order.attributes.location}}</i>
                    </span><span id="openDetail" class="xsdApp-icon xsdApp-icon-open"></span>
                    </div>
                </div>
                <div id="detail" class="weui_cell xsdApp-bg-white weui_cell_left0">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p v-if="flag">房间:{{order.attributes.apartment_name}}&nbsp;{{order.attributes.floor_num}}层&nbsp;{{order.attributes.room}}</p>
                        <p v-else>房间:{{order.attributes.location}}</p>
                        <p v-if="order.type=='roomorders'">租客姓名:{{order.attributes.customer_name}}</p>
                        <p v-else>业主姓名:{{order.attributes.owner_name}}</p>
                        <p v-if="order.type=='roomorders'">手机号码:{{order.attributes.customer_phone}}</p>
                        <p v-else>手机号码:{{order.attributes.owner_phone}}</p>
                        <p class="xsdApp-font-size14">
                            账单周期：{{order.attributes.start_time}}至{{order.attributes.end_time}}</p>
                        <div class="remark-bill"><p>账单备注:</p>
                            <div>{{order.attributes.comments}}</div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="weui_cells xsdApp-margin-top6">
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size16 xsdApp-label xsdApp-label-yellow">房租详情</p>
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15">房屋租金</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15">房屋押金</p>
                    </div>
                    <div class="weui_cell_ft">
                        <p class="xsdApp-font-size15">¥{{order.attributes.amount}}<span  v-if=" order.attributes.rent_order_type =='free' ">（免租期）</span></p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15">¥{{order.attributes.deposit}}</p>
                    </div>
                </div>
            </div>
            <div class="weui_cells xsdApp-margin-top-1">
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size16 xsdApp-label xsdApp-label-green">杂费详情</p>
                    </div>
                </div>
                <div id="editAble" class="weui_cell" v-if="editAble">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15"
                           v-if=" order.attributes.water_charge!='by_meter' || order.attributes.water_fees">
                            <span>水费</span><label class="xsdApp-margin-left6">¥<input class="xsdAPP-input" type="number"
                                                                                      name="water_fees"
                                                                                      v-model='order.attributes.water_fees'></label>
                        </p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15"
                           v-if=" order.attributes.power_charge!='by_meter' || order.attributes.power_fees">
                            <span>电费</span>
                            <label
                                    class="xsdApp-margin-left6">¥<input class="xsdAPP-input" type="number"
                                                                        name="power_fees"
                                                                        v-model="order.attributes.power_fees"></label>
                        </p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.water_fees">
                            <span>燃气费</span>
                            <label
                                    class="xsdApp-margin-left6">¥<input class="xsdAPP-input" type="number"
                                                                        name="power_fees"
                                                                        v-model="order.attributes.gas_fees"></label>
                        </p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.water_fees">
                            <span>物业费</span>
                            <label
                                    class="xsdApp-margin-left6">¥<input class="xsdAPP-input" type="number"
                                                                        name="power_fees"
                                                                        v-model="order.attributes.property_fees">
                            </label>
                        </p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15">
                            <span>服务费</span>
                            <label
                                    class="xsdApp-margin-left6">¥<input class="xsdAPP-input" type="number"
                                                                        name="power_fees"
                                                                        v-model="order.attributes.service_fees"></label>
                        </p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15">
                            <span>保洁费</span>
                            <label
                                    class="xsdApp-margin-left6">¥<input class="xsdAPP-input" type="number"
                                                                        name="power_fees"
                                                                        v-model="order.attributes.cleaning_fees"></label>
                        </p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15">
                            <span>维修费</span>
                            <label
                                    class="xsdApp-margin-left6">¥<input class="xsdAPP-input" type="number"
                                                                        name="power_fees"
                                                                        v-model="order.attributes.upkeep_fees"></label>
                        </p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15">
                            <span>材料费</span>
                            <label
                                    class="xsdApp-margin-left6">¥<input class="xsdAPP-input" type="number"
                                                                        name="power_fees"
                                                                        v-model="order.attributes.material_fees"></label>
                        </p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15">
                            <span>有线电视</span>
                            <label
                                    class="xsdApp-margin-left6">¥<input class="xsdAPP-input" type="number"
                                                                        name="power_fees"
                                                                        v-model="order.attributes.catv_fees"></label>
                        </p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15">
                            <span>宽带</span>
                            <label
                                    class="xsdApp-margin-left6">¥<input class="xsdAPP-input" type="number"
                                                                        name="power_fees"
                                                                        v-model="order.attributes.internet_fees"></label>
                        </p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15">
                            <span>卫生</span>
                            <label
                                    class="xsdApp-margin-left6">¥<input class="xsdAPP-input" type="number"
                                                                        name="power_fees"
                                                                        v-model="order.attributes.sanitation_fees">
                            </label>
                        </p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15">
                            <span>优惠</span>
                            <label
                                    class="xsdApp-margin-left6">¥<input class="xsdAPP-input" type="number"
                                                                        name="power_fees"
                                                                        v-model="order.attributes.free_fees"></label>
                        </p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15">
                            <span>其他</span>
                            <label
                                    class="xsdApp-margin-left6">¥<input class="xsdAPP-input" type="number"
                                                                        name="power_fees"
                                                                        v-model="order.attributes.other_fees"></label>
                        </p>
                    </div>
                </div>
                <div class="weui_cell" v-else>
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15" v-if="order.attributes.water_fees">水费</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.power_fees">电费</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.gas_fees">燃气费</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.property_fees">物业费</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.service_fees">服务费</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.cleaning_fees">保洁费</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.upkeep_fees">维修费</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.material_fees">材料费</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.catv_fees">有线电视</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.internet_fees">宽带</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.sanitation_fees">卫生</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.free_fees">优惠</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.other_fees">其他</p>
                    </div>
                    <div class="weui_cell_ft">
                        <p class="xsdApp-font-size15" v-if="order.attributes.water_fees">¥{{order.attributes.water_fees}}</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.power_fees">
                            ¥{{order.attributes.power_fees}}</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.gas_fees">
                            ¥{{order.attributes.gas_fees}}</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.property_fees">
                            ¥{{order.attributes.property_fees}}</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.service_fees">
                            ¥{{order.attributes.service_fees}}</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.cleaning_fees">
                            ¥{{order.attributes.cleaning_fees}}</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.upkeep_fees">
                            ¥{{order.attributes.upkeep_fees}}</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.material_fees">
                            ¥{{order.attributes.material_fees}}</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.catv_fees">
                            ¥{{order.attributes.catv_fees}}</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.internet_fees">
                            ¥{{order.attributes.internet_fees}}</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.sanitation_fees">
                            ¥{{order.attributes.sanitation_fees}}</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.free_fees">
                            ¥{{order.attributes.free_fees}}</p>
                        <p class="xsdApp-margin-top6 xsdApp-font-size15" v-if="order.attributes.other_fees">
                            ¥{{order.attributes.other_fees}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="weui_tab order_weui_tab" v-if="!editAble">
        <div v-if="order.attributes.ought_pay_status!=0">
            <div class="weui_tabbar" v-if="order.attributes.pay_status!=1">
                <a v-link="'read-meter?id='+order.id" class="weui_tabbar_item" v-if="order.attributes.is_meter_need">
                    <p class="weui_tabbar_label xsdApp-font-size16">抄表</p>
                </a>
                <a v-on:touchend="send(order.attributes.customer_name,order.attributes.customer_phone)"
                   href="javascript:;" class="weui_tabbar_item" v-if="order.attributes.customer_phone">
                    <p class="weui_tabbar_label xsdApp-font-size16">发送账单</p>
                </a>
                <a v-on:touchend="confirmOrder()" href="javascript:;" class="weui_tabbar_item xsdApp-bg-blue-1" v-if="order.attributes.approved_status ==0 || order.attributes.approved_status ==2">
                    <p class="weui_tabbar_label xsdApp-font-size16" v-if="order.type=='roomorders'">确认收租</p>
                    <p class="weui_tabbar_label xsdApp-font-size16" v-else>确认交租</p>
                </a>
  
                 
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data: function () {
            return {
                order: {
                    attributes: {}
                },
                editAble: false,
                rentedAble: false,
                myScroll: "",
                flag: flag
            };
        },
        route: {
            activate: function (transition) {
                //this.$root.$set('header',this.title);//给父级传参
                transition.next();
            }
        },
        methods: {
            close: function () {
                appObj.closeFrame()
            },
            openMenus: function () {
             
                let _this = this;
                //权限控制
                let auth_actions = [];
                let type = _this.$route.query.type;
                let auth_edit, auth_del, auth_add = true;
                   console.log(flag)
                  console.log(type)
                if (flag == true) {
                    if (type == 'roomorders') {
                        auth_edit =  _this.AUTH.concentrated.customer_order_mod;
                     
                        auth_add = _this.AUTH.concentrated.customer_order_add;
                        auth_del = _this.AUTH.concentrated.customer_order_del;
                    } else {
                        auth_edit = _this.AUTH.concentrated.landlord_order_edit ;
                        auth_add = _this.AUTH.concentrated.landlord_order_add;
                        auth_del = _this.AUTH.concentrated.landlord_order_del;
                    }
                } else {
                    if (type == 'roomorders') {
                        auth_edit = _this.AUTH.distribute.customer_order_mod;
                        auth_add = _this.AUTH.distribute.customer_order_add;
                        auth_del = _this.AUTH.distribute.customer_order_del;
                    } else {
                        auth_edit = _this.AUTH.distribute.landlord_order_edit ;
                        auth_add = _this.AUTH.distribute.landlord_order_add;
                        auth_del = _this.AUTH.distribute.landlord_order_del;
                    }
                }
                console.log(auth_edit, auth_add, auth_del);
                if ((type == 'roomorders' && auth_edit) || (type == 'houseorders' && auth_edit)) {
                    auth_actions.push({
                        text: "编辑账单",
                        onClick: function () {
                            _this.$router.go({
                                name: 'add-order',
                                query: {
                                    "id": _this.$route.query.id,
                                    'type': _this.order.type,
                                    'flag': 1
                                }
                            })
                        }
                    });
                }
                if ((type == 'roomorders' && auth_add) || (type == 'houseorders' && auth_add)) {
                    auth_actions.push({
                        text: "添加账单",
                        onClick: function () {
                            _this.$router.go({
                                name: 'add-order',
                                query: {
                                    "id": _this.$route.query.id,
                                    'type': _this.order.type,
                                    'flag': 0
                                }
                            })
                        }
                    });
                }
                if ((type == 'roomorders' && auth_del) || (type == 'houseorders' && auth_del)) {
                    auth_actions.push({
                        text: "删除账单",
                        onClick: function () {
                            $.confirm("是否确认删除该账单,删除后,将不可恢复", "确认删除", function () {
                                _this.$http.delete(baseUrl + "api/v1/" + _this.$route.query.type + "/" + _this.$route.query.id, {}, {
                                    headers: {
                                        "Accept": "application/vnd.api+json"
                                    }
                                }).then(function (response) {
                                    $.toast("删除成功");
                                    _this.close();
                                }.bind(_this)).catch(function (err) {
                                    $.toast("删除失败", "forbidden");
                                })
                            }, function () {
                                //点击取消后的回调函数
                            });
                        }
                    });
                }

                $.actions({
                    actions: auth_actions
                });

            },
            getOrder: function () {
                this.$http.get(baseUrl + "api/v1/" + this.$route.query.type + "/" + this.$route.query.id, {}, {
                    headers: {
                        "Accept": "application/vnd.api+json"
                    }
                }).then(function (response) {
                    console.log(response.data.data);
                    this.$set('order', response.data.data);
                    if (this.order.attributes.pay_status != 0 || this.order.attributes.ought_pay_status == 0) {
                        $("#order").css({bottom: "0px"})
                    } else {
                        $("#order").css({bottom: "52px"})
                    }
                }.bind(this)).catch(function (err) {
                    if (err.status == '404') {
                        $.toast("账单不存在", "forbidden");
                    } else if (err.status == '500') {
                        $.toast("服务器错误", "forbidden");
                    }
                })

            },

            send: function (name, phone) {
                let _this = this;
                $.confirm("确定将当前租客账单发送给租客" + name + "(" + phone + ")?", "", function () {
                    _this.$http.patch(baseUrl + "api/v1/sendroomorders/" + _this.$route.query.id).then(
                        function (response) {
                            $.toast("发送成功");
                        }.bind(_this)).catch(function (err) {
                        if (err.status == '500') {
                            $.toast("服务器错误", "forbidden");
                        }
                    })
                }, function () {
                    //点击取消后的回调函数
                });
            },

            confirmOrder: function () {
                let _html = "<p class='xsdApp-text-left'>账单房间:" + this.order.attributes.location + "</p>" +
                    "<p class='xsdApp-text-left'>账单周期:" + this.order.attributes.start_time + "至" + this.order.attributes.end_time + "</p>" +
                    "<p class='xsdApp-text-left'>账单金额:" + this.order.attributes.rent_utilities + "</p>" +
                    "<p class='xsdApp-text-left'>支付方式:</p>" +
                    "<p class='xsdApp-text-left payMethod'>" +
                    "<span class='active' data-value='alipay'>支付宝</span>" +
                    "<span data-value='dida'>嘀嗒付</span>" +
                    "<span data-value='weixin'>微信</span>" +
                    "<span data-value='cash'>现金</span>" +
                    "<span data-value='bank'>银行转账</span>" +
                    "<span data-value='pos'>线下pos</span></p>" +
                    "<p class='xsdApp-text-left' style='margin: 6px 0px -14px 0px;'>实际支付时间:&nbsp;&nbsp;<input id='actual' type='text' name='datetime' placeholder='实际支付日期'></p>"

                let _this = this;
                $.confirm(_html, "确认收租", function () {
                    if ($("#actual").val() == "") {
                        $.toast("请输入实际支付日期!", "forbidden");
                        return;
                    }
                    _this.$http.patch(baseUrl + "api/v1/pay" + _this.order.type + "/" + _this.$route.query.id, {
                        "tag": "payMethod",
                        "pay_method": $(".payMethod .active").attr("data-value"),
                        "actual_pay_time": $("#actual").val().split(" ")[0]
                    }, {
                        emulateJSON: true,
                        headers: {
                            "Accept": "*/*",
                            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                        }
                    }).then(function (response) {
                        $.toast("确认成功");
                        _this.getOrder();

                    }.bind(_this)).catch(function (err) {

                
                          $.toast(err.data.errors.detail, "forbidden");
                    
                })
                }, function () {
                    //点击取消后的回调函数
                });
                $("#actual").datetimePicker({
                    title: "选择实际支付日期",
                    formatValue: function (params, values, displayValues) {
                        return values[0] + '-' + values[1] + '-' + values[2];
                    },
                });
            },

            edit: function () {
                this.$set("editAble", true);
                $("#order").css({bottom: "0px"});
                this.myScroll.refresh();
            },

            save: function () {
                this.$http.patch(baseUrl + "api/v1/" + this.order.type + "/" + this.$route.query.id, {
                    "water_fees": this.order.attributes.water_fees,
                    "power_fees": this.order.attributes.power_fees,
                    "gas_fees": this.order.attributes.gas_fees,
                    "property_fees": this.order.attributes.property_fees,
                    "service_fees": this.order.attributes.service_fees,
                    "cleaning_fees": this.order.attributes.cleaning_fees,
                    "upkeep_fees": this.order.attributes.upkeep_fees,
                    "material_fees": this.order.attributes.material_fees,
                    "catv_fees": this.order.attributes.catv_fees,
                    "internet_fees": this.order.attributes.internet_fees,
                    "sanitation_fees": this.order.attributes.sanitation_fees,
                    "free_fees": this.order.attributes.free_fees,
                    "other_fees": this.order.attributes.other_fees
                }, {
                    emulateJSON: true,
                    headers: {
                        "Accept": "*/*",
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    }
                }).then(function (response) {

                    this.$set("editAble", false);
                    this.getOrder();
                    $("#order").css({bottom: "52px"})
                    $.toast("保存成功");

                }.bind(this))


            }


        },

        ready: function () {
//            console.log(this);
            this.getOrder();
            let _this = this;
            let base_url = baseUrl;
            //如果是集中式,将url改成分散式
            if (base_url.search("jz.api") !== -1) {
                base_url = base_url.replace('jz.api', 'api');
            }
            //获取权限,判断操作按钮展示
            let url = base_url + "api/v1/permissions";

            this.$http.get(url, {}, {
                headers: {
                    "Accept": "application/vnd.api+json"
                }
            }).then(function (response) {
                _this.AUTH = response.data.data.attributes;
            }.bind(this)).catch(function (err) {
                if (err.status == '404') {
                    $.toast("账单不存在", "forbidden");
                } else if (err.status == '500') {
                    $.toast("服务器错误", "forbidden");
                }
            });

            $("#openDetail").on("touchend", function () {
                $(this).toggleClass("xsdApp-icon-close");
                $(this).prev().toggleClass("xsdApp-hide");
                if ($(this).hasClass("xsdApp-icon-close")) {
                    $("#detail").slideUp(300, function () {
                        $(this).css({padding: "0px 15px", overflow: "hidden"})
                    })
                } else {

                    $("#detail").css({padding: "10px 15px", overflow: "hidden"}).slideDown(300)
                }

            });
            $("body").on("touchend", ".payMethod span", function () {

                $(this).parent().find(".active").removeClass("active");
                $(this).addClass("active");
            });

//            setTimeout(function () {
//                _this.myScroll = new IScroll('#order');
//                document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
//                _this.myScroll.refresh();
//                $("body").on("touchstart", "#order", function () {
//                    _this.myScroll.refresh();
//                });
//            }, 100);

        }
    }
</script>
