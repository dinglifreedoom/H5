<!--添加账单-->
<style>
    #add_order {
        position: absolute;
        width: 100%;
        z-index: 20;
        left: 0px;
        top: 64px;
        bottom: 52px;
        overflow: auto;
    }

    #add_order + .order_weui_tab a {
        padding: 0px;
    }

    #add_order + .order_weui_tab .weui_tabbar_label {
        color: #ffffff;
    }

    #add_order .weui_cell_l0:before {
        left: 0px;
    }

    #add_order .weui_cell_l45:before {
        left: 45px;
    }

    #add_order .padding-left48 {
        padding-left: 48px;
    }

    #add_order input {
        padding-left: 6px;
    }

    #add_order input + i {
        position: absolute;
        right: 42px;
    }

    #add_order .remark {
        padding-top: 10px;
    }

    #add_order .remark p {
        float: left;
        margin-left: 16px;
    }

    #add_order p a {
        float: right;
        margin-top: 2px;
    }

    #add_order p a img {
        width: 16px;
        height: 16px;
    }

    #add_order .remark div {
        margin: 1px 20px 10px 108px;
    }

    #add_order .remark div textarea {
        width: 100%;
        height: 60px;
    }

    #add_order #add_btn {
        display: inline-block;
        background-image: url("../../static/images/order/icon_add@2x.png");
        background-repeat: no-repeat;
        background-size: 20px 21px;
        padding-left: 24px;
    }

    #add_order_mask {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 300;
        background: rgba(0, 0, 0, 0.5)
    }

    #add_order_mask .mask-con {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgb(255, 255, 255);
    }

    #add_order_mask .mask-con .add-fees-title {
        height: 52px;
        border-bottom: 1px solid rgb(224, 224, 224);
        line-height: 52px;
        font-size: 16px;
        color: rgb(89, 172, 255);
        text-align: center;

    }

    #add_order_mask .mask-con .add-fees-list {
        margin: 16px 30px 52px;

    }

    #add_order_mask .mask-con .add-fees-list li {
        float: left;
        padding: 3px 10px;
        color: rgb(153, 153, 153);
        background: rgb(255, 255, 255);
        border: 1px solid rgb(153, 153, 153);
        border-radius: 4px;
        margin: 0 10px 16px;

    }

    #add_order_mask .mask-con .add-fees-list .active {
        background: rgb(89, 172, 255);
        color: rgb(255, 255, 255);

    }

    #add_order_mask .mask-con .weui_tab p {
        height: 52px;
        line-height: 52px;
        font-size: 16px;
        color: rgb(255, 255, 255)
    }

    #add_order .bill-con {
        padding-bottom: 64px;
    }

    #add_order .bill-con input {
        width: 136px;
    }

    #add_order .bill-con .yuan {
        float: right;
    }
</style>
<template>
    <header>
        <a v-on:touchstart="close()" class="header-back"></a>
        <span v-if="flag==1">编辑账单</span>
        <span v-else>添加账单</span>
    </header>
    <div id="add_order">
        <div>
            <div class="bill-con">
                <div class="weui_cells xsdApp-margin-top6">
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label">
                                <i class="xsdApp-color-red">*</i>
                                <span v-if="type=='roomorders'">租客姓名:</span>
                                <span v-else>业主姓名:</span>
                                {{name}}
                            </p>
                        </div>
                    </div>
                    <div class="weui_cell weui_cell_l0">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-label xsdApp-font-size15 xsdApp-icon-right">
                                <i class="xsdApp-color-red">*</i>应收款时间:
                                <input id="actual_pay_time" name="actual_pay_time" type="text" readonly
                                       placeholder="请选择应收款时间"
                                       value={{order.attributes.actual_pay_time}}>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="weui_cells xsdApp-margin-top-1">
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label">
                                <i class="xsdApp-color-red">*</i>账单周期
                            </p>
                        </div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label xsdApp-icon-right padding-left48">开始时间:
                                <input id="start_time" name="start_time" type="text" readonly placeholder="请选择账单开始时间"
                                       value={{order.attributes.start_time}}>
                            </p>
                        </div>
                    </div>
                    <div class="weui_cell  weui_cell_l45">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label xsdApp-icon-right padding-left48">结束时间:
                                <input id="end_time" name="end_time" type="text" readonly placeholder="请选择账单结束时间"
                                       value={{order.attributes.end_time}}>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="weui_cells xsdApp-margin-top-1 xsdApp-font-size15 remark">
                    <p class="xsdApp-label">账单备注：</p>
                    <div><textarea name="remark-bill" id="remark-bill"
                                   placeholder="请填写账单备注内容">{{order.attributes.comments}}</textarea></div>
                </div>
                <div class="weui_cells xsdApp-margin-top6">
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label">
                                总金额:{{order.attributes.rent_utilities}}<i class="yuan">元</i>
                            </p>
                        </div>
                    </div>
                    <div class="weui_cell weui_cell_l0" v-if="order.attributes.amount!=0 || fees.amount_active">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label padding-left48">
                                房屋租金:<input type="text" placeholder="请填写金额" name="amount"
                                            value={{order.attributes.amount}}><i>元</i>
                                <a v-on:touchstart="deleteList('order.attributes.amount','fees.amount_active')"><img
                                        src="../../static/images/deletebtn.png" alt=""></a>
                            </p>
                        </div>
                    </div>
                    <div class="weui_cell  weui_cell_l45" v-if="order.attributes.deposit!=0 || fees.deposit_active">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label padding-left48">
                                房屋押金: <input type="text" placeholder="请填写金额" name="deposit"
                                             value={{order.attributes.deposit}}><i>元</i>
                                <a v-on:touchstart="deleteList('order.attributes.deposit','fees.deposit_active')"><img
                                        src="../../static/images/deletebtn.png" alt=""></a>
                            </p>
                        </div>
                    </div>


                    <div class="weui_cell  weui_cell_l45"
                         v-if="order.attributes.water_fees!=0 || fees.water_fees_active">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label padding-left48">
                                水费: <input type="text" placeholder="请填写金额" name="water_fees"
                                           value={{order.attributes.water_fees}}><i>元</i>
                                <a v-on:touchstart="deleteList('order.attributes.water_fees','fees.water_fees_active')"><img
                                        src="../../static/images/deletebtn.png" alt=""></a>
                            </p>
                        </div>
                    </div>
                    <div class="weui_cell  weui_cell_l45"
                         v-if="order.attributes.power_fees!=0 || fees.power_fees_active">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label padding-left48">
                                电费: <input type="text" placeholder="请填写金额" name="power_fees"
                                           value={{order.attributes.power_fees}}><i>元</i>
                                <a v-on:touchstart="deleteList('order.attributes.power_fees','fees.power_fees_active')"><img
                                        src="../../static/images/deletebtn.png" alt=""></a>

                            </p>
                        </div>
                    </div>
                    <div class="weui_cell  weui_cell_l45" v-if="order.attributes.gas_fees!=0 || fees.gas_fees_active">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label padding-left48">
                                燃气费: <input type="text" placeholder="请填写金额" name="gas_fees"
                                            value={{order.attributes.gas_fees}}><i>元</i>
                                <a v-on:touchstart="deleteList('order.attributes.gas_fees','fees.gas_fees_active')"><img
                                        src="../../static/images/deletebtn.png" alt=""></a>

                            </p>
                        </div>
                    </div>
                    <div class="weui_cell  weui_cell_l45"
                         v-if="order.attributes.property_fees!=0 || fees.property_fees_active">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label padding-left48">
                                物业费: <input type="text" placeholder="请填写金额" name="property_fees"
                                            value={{order.attributes.property_fees}}><i>元</i>
                                <a v-on:touchstart="deleteList('order.attributes.property_fees','fees.property_fees_active')"><img
                                        src="../../static/images/deletebtn.png" alt=""></a>

                            </p>
                        </div>
                    </div>
                    <div class="weui_cell  weui_cell_l45"
                         v-if="order.attributes.service_fees!=0 || fees.service_fees_active">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label padding-left48">
                                服务费: <input type="text" placeholder="请填写金额" name="service_fees"
                                            value={{order.attributes.service_fees}}><i>元</i>
                                <a v-on:touchstart="deleteList('order.attributes.service_fees','fees.service_fees_active')"><img
                                        src="../../static/images/deletebtn.png" alt=""></a>

                            </p>
                        </div>
                    </div>
                    <div class="weui_cell  weui_cell_l45"
                         v-if="order.attributes.cleaning_fees!=0 || fees.cleaning_fees_active">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label padding-left48">
                                保洁费: <input type="text" placeholder="请填写金额" name="cleaning_fees"
                                            value={{order.attributes.cleaning_fees}}><i>元</i>
                                <a v-on:touchstart="deleteList('order.attributes.cleaning_fees','fees.cleaning_fees_active')"><img
                                        src="../../static/images/deletebtn.png" alt=""></a>

                            </p>
                        </div>
                    </div>
                    <div class="weui_cell  weui_cell_l45"
                         v-if="order.attributes.upkeep_fees!=0 || fees.upkeep_fees_active">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label padding-left48">
                                维修费: <input type="text" placeholder="请填写金额" name="upkeep_fees"
                                            value={{order.attributes.upkeep_fees}}><i>元</i>
                                <a v-on:touchstart="deleteList('order.attributes.upkeep_fees','fees.upkeep_fees_active')"><img
                                        src="../../static/images/deletebtn.png" alt=""></a>

                            </p>
                        </div>
                    </div>
                    <div class="weui_cell  weui_cell_l45"
                         v-if="order.attributes.material_fees!=0 || fees.material_fees_active">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label padding-left48">
                                材料费: <input type="text" placeholder="请填写金额" name="material_fees"
                                            value={{order.attributes.material_fees}}><i>元</i>
                                <a v-on:touchstart="deleteList('order.attributes.material_fees','fees.material_fees_active')"><img
                                        src="../../static/images/deletebtn.png" alt=""></a>

                            </p>
                        </div>
                    </div>
                    <div class="weui_cell  weui_cell_l45" v-if="order.attributes.catv_fees!=0 || fees.catv_fees_active">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label padding-left48">
                                电视费: <input type="text" placeholder="请填写金额" name="catv_fees"
                                            value={{order.attributes.catv_fees}}><i>元</i>
                                <a v-on:touchstart="deleteList('order.attributes.catv_fees','fees.catv_fees_active')"><img
                                        src="../../static/images/deletebtn.png" alt=""></a>

                            </p>
                        </div>
                    </div>
                    <div class="weui_cell  weui_cell_l45"
                         v-if="order.attributes.internet_fees!=0 || fees.internet_fees_active">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label padding-left48">
                                宽带费: <input type="text" placeholder="请填写金额" name="internet_fees"
                                            value={{order.attributes.internet_fees}}><i>元</i>
                                <a v-on:touchstart="deleteList('order.attributes.internet_fees','fees.internet_fees_active')"><img
                                        src="../../static/images/deletebtn.png" alt=""></a>

                            </p>
                        </div>
                    </div>
                    <div class="weui_cell  weui_cell_l45"
                         v-if="order.attributes.sanitation_fees!=0 || fees.sanitation_fees_active">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label padding-left48">
                                卫生费: <input type="text" placeholder="请填写金额" name="sanitation_fees"
                                            value={{order.attributes.sanitation_fees}}><i>元</i>
                                <a v-on:touchstart="deleteList('order.attributes.sanitation_fees','fees.sanitation_fees_active')"><img
                                        src="../../static/images/deletebtn.png" alt=""></a>

                            </p>
                        </div>
                    </div>
                    <div class="weui_cell  weui_cell_l45" v-if="order.attributes.free_fees!=0 || fees.free_fees_active">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label padding-left48">
                                优惠费: <input type="text" placeholder="请填写金额" name="free_fees"
                                            value={{order.attributes.free_fees}}><i>元</i>
                                <a v-on:touchstart="deleteList('order.attributes.free_fees','fees.free_fees_active')"><img
                                        src="../../static/images/deletebtn.png" alt=""></a>

                            </p>
                        </div>
                    </div>
                    <div class="weui_cell  weui_cell_l45"
                         v-if="order.attributes.other_fees!=0 || fees.other_fees_active">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label padding-left48">
                                其他费: <input type="text" placeholder="请填写金额" name="other_fees"
                                            value={{order.attributes.other_fees}}><i>元</i>
                                <a v-on:touchstart="deleteList('order.attributes.other_fees','fees.other_fees_active')"><img
                                        src="../../static/images/deletebtn.png" alt=""></a>

                            </p>
                        </div>
                    </div>
                </div>
                <div class="weui_cells xsdApp-margin-top-1">
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-label">
                                <i id="add_btn" v-on:touchstart="showFees" class="xsdApp-color-blue">添加费用</i>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="weui_tab order_weui_tab">
        <a href="javascript:;" class="weui_tabbar_item xsdApp-bg-blue-1">
            <p class="weui_tabbar_label xsdApp-font-size16" v-if="flag==0" v-on:touchend="save()">保存</p>
            <p class="weui_tabbar_label xsdApp-font-size16" v-else v-on:touchend="update()">保存</p>
        </a>
    </div>
    <div id="add_order_mask" v-if="showDefineList">
        <div class="mask-con">
            <div class="add-fees-title">添加杂费</div>
            <ul class="add-fees-list clearfix">
                <li :class="{active:order.attributes.amount||fees.amount_active}"
                    v-on:touchstart="addActive('fees.amount_active')">房屋租金
                </li>
                <li :class="{active:order.attributes.deposit||fees.deposit_active}"
                    v-on:touchstart="addActive('fees.deposit_active')">房屋押金
                </li>
                <li :class="{active:order.attributes.water_fees||fees.water_fees_active}"
                    v-on:touchstart="addActive('fees.water_fees_active')">水费
                </li>
                <li :class="{active:order.attributes.power_fees||fees.power_fees_active}"
                    v-on:touchstart="addActive('fees.power_fees_active')">电费
                </li>
                <li :class="{active:order.attributes.gas_fees||fees.gas_fees_active}"
                    v-on:touchstart="addActive('fees.gas_fees_active')">燃气费
                </li>
                <li :class="{active:order.attributes.property_fees||fees.property_fees_active}"
                    v-on:touchstart="addActive('fees.property_fees_active')">物业费
                </li>
                <li :class="{active:order.attributes.service_fees||fees.service_fees_active}"
                    v-on:touchstart="addActive('fees.service_fees_active')">服务费
                </li>
                <li :class="{active:order.attributes.upkeep_fees||fees.upkeep_fees_active}"
                    v-on:touchstart="addActive('fees.upkeep_fees_active')">维修费
                </li>
                <li :class="{active:order.attributes.cleaning_fees||fees.cleaning_fees_active}"
                    v-on:touchstart="addActive('fees.cleaning_fees_active')">保洁费
                </li>
                <li :class="{active:order.attributes.material_fees||fees.material_fees_active}"
                    v-on:touchstart="addActive('fees.material_fees_active')">材料费
                </li>
                <li :class="{active:order.attributes.catv_fees||fees.catv_fees_active}"
                    v-on:touchstart="addActive('fees.catv_fees_active')">有线电视
                </li>
                <li :class="{active:order.attributes.internet_fees||fees.internet_fees_active}"
                    v-on:touchstart="addActive('fees.internet_fees_active')">宽带
                </li>
                <li :class="{active:order.attributes.sanitation_fees||fees.sanitation_fees_active}"
                    v-on:touchstart="addActive('fees.sanitation_fees_active')">卫生
                </li>
                <li :class="{active:order.attributes.other_fees||fees.other_fees_active}"
                    v-on:touchstart="addActive('fees.other_fees_active')">其他
                </li>
                <li :class="{active:order.attributes.free_fees||fees.free_fees_active}"
                    v-on:touchstart="addActive('fees.free_fees_active')">优惠
                </li>
            </ul>
            <div class="weui_tab order_weui_tab">
                <a href="javascript:;" class="weui_tabbar_item xsdApp-bg-blue-1">
                    <p class="weui_tabbar_label xsdApp-font-size16" v-on:touchstart="addFeesList()">确定添加</p>
                </a>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    export default {
        data(){
            return {
                flag: this.$route.query.flag,
                type: this.$route.query.type,
                name: "",
                fees: {
                    amount_active: false,
                    deposit_active: false,
                    water_fees_active: false,
                    power_fees_active: false,
                    gas_fees_active: false,
                    property_fees_active: false,
                    service_fees_active: false,
                    upkeep_fees_active: false,
                    cleaning_fees_active: false,
                    material_fees_active: false,
                    catv_fees_active: false,
                    sanitation_fees_active: false,
                    internet_fees_active: false,
                    other_fees_active: false,
                    free_fees_active: false
                },
                contract_id: "",
                showDefineList: false,    //显示费用定义列表
                order: {
                    attributes: {
                        amount: 0,
                        deposit: 0,
                        water_fees: 0,
                        power_fees: 0,
                        gas_fees: 0,
                        rent_utilities: '',
                        property_fees: 0,
                        service_fees: 0,
                        cleaning_fees: 0,
                        upkeep_fees: 0,
                        material_fees: 0,
                        catv_fees: 0,
                        internet_fees: 0,
                        sanitation_fees: 0,
                        free_fees: 0,
                        other_fees: 0,
                    }
                }

            }
        },
        methods: {
            close(){
                this.$router.go({
                    name: 'order',
                    query: {"id": this.$route.query.id, 'type': this.$route.query.type}
                })
            },
            test(){
                alert("test");
            },
            blur(){
                alert('光标隐藏');
            },
            showFees(){
                this.showDefineList = true;
            },

            addActive: function (type) {
                this.$set(type, true);
                //this.myScroll.refresh();

            },

            addFeesList: function () {
                this.showDefineList = false;
            },

            deleteList: function (type1, type2) {
                this.$set(type1, 0);
                this.$set(type2, false);
                $(event.currentTarget).parent().find('input').val('0');
                $(event.currentTarget).parent().parent().parent().hide();
            },

            /**
             * 获取账单
             */
            getOrder: function () {
                this.$http.get(baseUrl + "api/v1/" + this.$route.query.type + "/" + this.$route.query.id, {}, {
                    headers: {
                        "Accept": "application/vnd.api+json"
                    }
                }).then(function (response) {

//                    let feeList = response.data.data.atttributes;
//                    this.fees.forEach(it=>{
//                        if(feeList[it.code]){
//                            it.value = feeList[it.code];
//                            it.active = true;
//                        }
//                    });

                    if (this.$route.query.type == "roomorders") {
                        this.$set('name', response.data.data.attributes.customer_name);
                    } else {
                        this.$set('name', response.data.data.attributes.owner_name);
                    }

                    this.$set('contract_id', response.data.data.attributes.contract_id);
                    if (this.$get("flag") == 1) {
                        this.$set('order', response.data.data);
                    }

                }.bind(this)).catch(function (err) {
                    if (err.status == '404') {
                        $.toast("账单不存在", "forbidden");
                    } else if (err.status == '500') {
                        $.toast("服务器错误", "forbidden");
                    }
                })

            },
            /**
             *  保存账单
             */
            save: function () {

                this.$http.post(baseUrl + "api/v1/" + this.$route.query.type, {
                    "ought_pay_time": $("input[name='actual_pay_time']").val().split(" ")[0],
                    "start_time": $("input[name='start_time']").val().split(" ")[0],
                    "end_time": $("input[name='end_time']").val().split(" ")[0],

                    "deposit": $("input[name='deposit']").val() == undefined ? 0 : $("input[name='deposit']").val(),
                    "amount": $("input[name='amount']").val() == undefined ? 0 : $("input[name='amount']").val(),
                    "water_fees": $("input[name='water_fees']").val() == undefined ? 0 : $("input[name='water_fees']").val(),
                    "power_fees": $("input[name='power_fees']").val() == undefined ? 0 : $("input[name='power_fees']").val(),
                    "gas_fees": $("input[name='gas_fees']").val() == undefined ? 0 : $("input[name='gas_fees']").val(),
                    "property_fees": $("input[name='property_fees']").val() == undefined ? 0 : $("input[name='property_fees']").val(),
                    "service_fees": $("input[name='service_fees']").val() == undefined ? 0 : $("input[name='service_fees']").val(),
                    "cleaning_fees": $("input[name='cleaning_fees']").val() == undefined ? 0 : $("input[name='cleaning_fees']").val(),
                    "upkeep_fees": $("input[name='upkeep_fees']").val() == undefined ? 0 : $("input[name='upkeep_fees']").val(),
                    "material_fees": $("input[name='material_fees']").val() == undefined ? 0 : $("input[name='material_fees']").val(),
                    "catv_fees": $("input[name='catv_fees']").val() == undefined ? 0 : $("input[name='catv_fees']").val(),
                    "internet_fees": $("input[name='internet_fees']").val() == undefined ? 0 : $("input[name='internet_fees']").val(),
                    "sanitation_fees": $("input[name='sanitation_fees']").val() == undefined ? 0 : $("input[name='sanitation_fees']").val(),
                    "free_fees": $("input[name='free_fees']").val() == undefined ? 0 : $("input[name='free_fees']").val(),
                    "other_fees": $("input[name='other_fees']").val() == undefined ? 0 : $("input[name='other_fees']").val(),
                    "comments": $("#remark-bill").val() == undefined ? 0 : $("#remark-bill").val(),
                    "contract_id": this.contract_id
                }, {
                    emulateJSON: true,
                    headers: {
                        "Accept": "*/*",
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    }
                }).then(function (response) {
                    $.toast("添加成功");
                    this.close();
                }.bind(this)).catch(function (err) {
                    if (err.status == '400') {
                        $.toast(err.data.errors.detail, "forbidden");
                    } else if (err.status == '500') {
                        $.toast("服务器错误", "forbidden");
                    }
                })


            },

            /**
             * 更新账单
             */
            update: function () {

                this.$http.patch(baseUrl + "api/v1/" + this.$route.query.type + "/" + this.$route.query.id, {
                    "ought_pay_time": $("input[name='actual_pay_time']").val().split(" ")[0],
                    "start_time": $("input[name='start_time']").val().split(" ")[0],
                    "end_time": $("input[name='end_time']").val().split(" ")[0],
                    "deposit": $("input[name='deposit']").val() == undefined ? 0 : $("input[name='deposit']").val(),
                    "amount": $("input[name='amount']").val() == undefined ? 0 : $("input[name='amount']").val(),
                    "water_fees": $("input[name='water_fees']").val() == undefined ? 0 : $("input[name='water_fees']").val(),
                    "power_fees": $("input[name='power_fees']").val() == undefined ? 0 : $("input[name='power_fees']").val(),
                    "gas_fees": $("input[name='gas_fees']").val() == undefined ? 0 : $("input[name='gas_fees']").val(),
                    "property_fees": $("input[name='property_fees']").val() == undefined ? 0 : $("input[name='property_fees']").val(),
                    "service_fees": $("input[name='service_fees']").val() == undefined ? 0 : $("input[name='service_fees']").val(),
                    "cleaning_fees": $("input[name='cleaning_fees']").val() == undefined ? 0 : $("input[name='cleaning_fees']").val(),
                    "upkeep_fees": $("input[name='upkeep_fees']").val() == undefined ? 0 : $("input[name='upkeep_fees']").val(),
                    "material_fees": $("input[name='material_fees']").val() == undefined ? 0 : $("input[name='material_fees']").val(),
                    "catv_fees": $("input[name='catv_fees']").val() == undefined ? 0 : $("input[name='catv_fees']").val(),
                    "internet_fees": $("input[name='internet_fees']").val() == undefined ? 0 : $("input[name='internet_fees']").val(),
                    "sanitation_fees": $("input[name='sanitation_fees']").val() == undefined ? 0 : $("input[name='sanitation_fees']").val(),
                    "free_fees": $("input[name='free_fees']").val() == undefined ? 0 : $("input[name='free_fees']").val(),
                    "other_fees": $("input[name='other_fees']").val() == undefined ? 0 : $("input[name='other_fees']").val(),
                    "comments": $("#remark-bill").val() == undefined ? 0 : $("#remark-bill").val(),

                    "contract_id": this.contract_id
                }, {
                    emulateJSON: true,
                    headers: {
                        "Accept": "*/*",
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    }
                }).then(function (response) {
                    $.toast("更新账单成功");
                    this.close();

                }.bind(this)).catch(function (err) {
                    if (err.status == '400') {
                        $.toast(err.data.errors.detail, "forbidden");
                    } else if (err.status == '500') {
                        $.toast("服务器错误", "forbidden");
                    }
                })


            }
        },
        ready(){
            if (/Android/gi.test(navigator.userAgent)) {
                window.addEventListener('resize', function () {
                    if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
                        window.setTimeout(function () {
                            document.activeElement.scrollIntoViewIfNeeded();
                        }, 300);
                    }
                })
            }

            this.getOrder();
            $("#actual_pay_time").datetimePicker({
                title: "选择应收款时间",
                formatValue: function (params, values, displayValues) {
                    return values[0] + '-' + values[1] + '-' + values[2];
                },

            });
            $("#start_time").datetimePicker({
                title: "选择账单开始时间",
                formatValue: function (params, values, displayValues) {
                    return values[0] + '-' + values[1] + '-' + values[2];
                },

            });
            $("#end_time").datetimePicker({
                title: "选择账单结束时间",
                formatValue: function (params, values, displayValues) {
                    return values[0] + '-' + values[1] + '-' + values[2];
                },

            });
//            let _this = this;
//            _this.myScroll = new IScroll('#add_order');
//            setTimeout(function () {
//                document.addEventListener('touchmove', function(e) {
//                    e.preventDefault();
//                }, false);
//                _this.myScroll.refresh();
//            }, 100);
//
//            //$(document).on("scroll",)
//
//            window.addEventListener('resize',function(){
//                window.iscroll = _this.myScroll;
//                setTimeout(function () {
//                    console.log($(window).height());
//                    _this.myScroll.refresh();
//                },16);
//
//            },false);

        }
    }
</script>
