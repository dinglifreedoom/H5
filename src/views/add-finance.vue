<!--添加财务流水-->
<style>
    #add-finance textarea {
        width: 100%;
        resize: none;
        height: 100px;
    }

    #add-finance .weui_cell:before, #houseList .weui_cell:before {
        left: 0px;
    }

    #add-finance .weui_cells, #houseList .weui_cells {
        margin-top: 6px;
    }

    #add-finance .weui_cells p span {
        margin-right: 6px;
    }

    #add-finance .weui_cells p input {
        width: calc(100% - 90px);
    }

    #add-finance .wrapper, #houseList .wrapper {
        position: absolute;
        width: 100%;
        z-index: 20;
        top: 64px;
        left: 0px;
        bottom: 0px;
        overflow: hidden;
    }

    #houseList .wrapper {
        bottom: 24px;
    }

    #houseList {
        position: fixed;
        background: rgb(255, 255, 255);
        width: 100%;
        height: 100%;
        z-index: 9999;
    }
</style>
<template>
    <div id="add-finance">
        <header>
            <a v-on:touchend="closeBack()" class="header-back"></a>
            添加财务流水
            <a v-on:touchend="save()" class="header-btn">保存</a>
        </header>
        <div class="wrapper">
            <div class="weui_cells  xsdApp-bg-white">
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15 xsdApp-icon-right">
                            <span>收支类别:</span>
                            <input id="flow-picker" type="text" placeholder="请选择收支类别">
                        </p>
                    </div>
                </div>
                <div class="weui_cell xsdApp-bg-gray">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15">交易对象</p>
                    </div>
                </div>
                <div v-if="flag">
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15"><span>公寓名称:</span><input id="apartmentName"
                                                                                   type="text"
                                                                                   placeholder="请选择产生流水的公寓" readonly>
                            </p>
                        </div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15"><span>所在楼层:</span><input id="floorName" type="text"
                                                                                   readonly placeholder="请选择产生流水的楼层"
                            ></p>
                        </div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-icon-right"><span>房间名称:</span><input
                                    id="aparmentRoomList"
                                    type="text"
                                    readonly
                                    placeholder="请选择产生流水的房间">
                            </p>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15"><span>房源名称:</span><input v-on:touchend="openList"
                                                                                   v-model="housName" type="text"
                                                                                   placeholder="请选择产生流水的房源" readonly>
                            </p>
                        </div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15 xsdApp-icon-right"><span>房间名称:</span><input id="roomList"
                                                                                                     type="text"
                                                                                                     placeholder="请选择产生流水的房间">
                            </p>
                        </div>
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15"><span>交易对象:</span><input v-model="trader_name" type="text"
                                                                               placeholder="请填写交易对象姓名"></p>
                    </div>
                </div>
                <div class="weui_cell xsdApp-bg-gray">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15">费用详情</p>
                    </div>
                </div>
                <!--<div class="weui_cell">-->
                <!--<div class="weui_cell_bd weui_cell_primary">-->
                <!--<p class="xsdApp-font-size15 xsdApp-icon-right"><span>费用类型:</span><input id="fees-picker" type="text" placeholder="选择费用类型"></p>-->
                <!--</div>-->
                <!--</div>-->
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15 xsdApp-icon-right"><span>费用名称:</span><input id="fees-picker"
                                                                                                 type="text"
                                                                                                 placeholder="请选择费用名称">
                        </p>
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15"><span>费用金额:</span><input v-model="fees" type="number"
                                                                               placeholder="请填写费用金额"></p>
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15 xsdApp-icon-right"><span>支付方式:</span><input id="payMethod"
                                                                                                 type="text"
                                                                                                 placeholder="请选择支付方式">
                        </p>
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15 xsdApp-icon-right"><span>交易时间:</span><input id="pay-time"
                                                                                                 type="text"
                                                                                                 placeholder="请设置交易时间">
                        </p>
                    </div>
                </div>
                <div class="weui_cell xsdApp-bg-gray">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p class="xsdApp-font-size15">收支备注</p>
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                        <textarea v-model="remark" placeholder="备注信息可以填在这里哦"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="houseList" class="xsdApp-hide  xsdApp-bg-gray">
        <header>
            <a v-on:touchend="close()" class="header-back"></a>
            选择房源
        </header>
        <div class="wrapper">
            <div>
                <div class="weui_cells  xsdApp-bg-white" v-for="house in houses" v-on:click="getHouse(house)">
                    <div class="weui_cell">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p class="xsdApp-font-size15">{{house.attributes.location}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default{
        data(){
            return {
                housName: "",
                flow_type: "",
                trader_name: "",
                house_id: "",
                room_id: "",
                remark: "",
                fees: "",
                houses: "",
                rooms: [],
                target: this.$route.query.target,
                flag: flag,
                apartmentList: {},
                apartments: [],
                floors: []
            }
        },

        methods: {
            /**
             * 关闭回退
             */
            closeBack: function () {
                $(".close-picker").trigger("click");
                if (this.target == "smart") {
                    appObj.closeFrame()
                } else {
                    this.$router.go({
                        name: 'finance',
                    })
                }
            },

            openList: function () {
                $.showLoading('加载房源列表');
                this.$http.get(baseUrl + "api/v1/houses?search=" + "", {}, {
                    headers: {
                        "Accept": "application/vnd.api+json",
                        "Content-Type": "application/vnd.api+json"
                    }
                }).then(function (response) {
                    $.hideLoading();
                    this.$set('houses', response.data.data);
                    $("#houseList").removeClass("xsdApp-hide fadeOutRightBig").addClass("animated fadeInRightBig");
                    var intervalTime = setInterval(function () {
                        var resultContentH = $("#houseList .wrapper").height();
                        if (resultContentH > 0) {
                            $("#showResult").height(resultContentH)
                            setTimeout(function () {
                                clearInterval(intervalTime);
                                var myScroll1 = new IScroll('#houseList .wrapper', {
                                    click: true
                                });
                            }, 100)
                        }
                    }, 20);
                }.bind(this))
            },
            /**
             * 获取房源
             * @param obj
             */
            getHouse: function (obj) {
                this.$set("housName", obj.attributes.location);
                this.$set("house_id", obj.id);
                let _this = this;
                $.each(obj.attributes.rooms_identifiers, function (i, value) {
                    let data = {};
                    data.title = value.name;
                    data.value = value.id;
                    _this.rooms.push(data);
                });
                $("#houseList").removeClass("fadeInRightBig").addClass("animated fadeOutRightBig");
                $("#roomList").select({
                    title: "选择房间",
                    autoClose: true,
                    items: _this.rooms
                });
            },
            /**
             * 关闭
             */
            close: function () {
                $("#houseList").removeClass("fadeInRightBig").addClass("animated fadeOutRightBig");
            },

            /**
             * 保存
             */
            save: function () {
                let data = {
                    "flow_type": $("#flow-picker").attr("data-values"),
                    "trader_name": this.trader_name,
                    "room_id": $("#roomList").attr("data-values"),
                    "pay_method": $("#payMethod").attr("data-values"),
                    "trade_at": $("#pay-time").val(),
                    "remark": this.remark
                };
                if (flag) {
                    data["apartment"] = this.house_id;
                    data["room"] = $("#aparmentRoomList").attr("data-values");
                } else {
                    data["house_id"] = this.house_id;
                    data["room_id"] = $("#roomList").attr("data-values");
                }
                data[$("#fees-picker").attr("data-values")] = this.fees;

                this.$http.post(baseUrl + "api/v2/moneyflows", data, {
                    emulateJSON: true,
                    headers: {
                        "Accept": "*/*",
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    }
                }).then(function (response) {
                    $.toast("添加成功", "success");
                    this.closeBack();

                }.bind(this)).catch(function (err) {
                    if (err.status == "400") {
                        $.toast(err.data.errors.detail, "forbidden");
                    } else {
                        $.toast("保存失败", "forbidden");
                    }
                })

            }
        },

        ready: function () {

            let that = this;

            if (flag) {
                this.$http.get(baseUrl + "api/v1/apartmentinds", {}, {
                    headers: {
                        "Accept": "application/vnd.api+json",
                        "Content-Type": "application/vnd.api+json"
                    }
                }).then(function (response) {
                    let _this = this;
                    _this.apartmentList = response.data.data.attributes.apartments;
                    $.each(_this.apartmentList, function (i, value) {
                        let data = {};
                        data.title = value.name;
                        data.value = i;
                        _this.apartments.push(data);

                    });
                    $("#apartmentName").select({
                        title: "选择所在公寓",
                        autoClose: true,
                        items: _this.apartments,
                        onChange: function () {

                        }
                    });
                }).bind(this);

                $("#apartmentName").change(function () {

                    let num = parseInt($("#apartmentName").attr("data-values"));
                    that.house_id = that.apartmentList[num].id;
                    $.each(that.apartmentList[num].floors, function (i, value) {
                        let data = {};
                        data.title = value.name;
                        data.value = value.id;
                        that.floors.push(data);
                    });
                    $("#floorName").select({
                        title: "选择所在楼层",
                        autoClose: true,
                        items: that.floors,
                    });
                });

                $("#floorName").change(function () {

                    that.$http.get(baseUrl + "api/v1/concentratedhouses?apartment=" + that.house_id + "&floor=" + $("#floorName").attr("data-values"), {}, {
                        headers: {
                            "Accept": "application/vnd.api+json",
                            "Content-Type": "application/vnd.api+json"
                        }
                    }).then(function (response) {
                        let _this = that;
                        $.each(response.data.data[0].attributes.rooms, function (i, value) {
                            let data = {};
                            data.title = value.name;
                            data.value = value.id;
                            _this.rooms.push(data);

                        });
                        $("#aparmentRoomList").select({
                            title: "选择房间",
                            autoClose: true,
                            items: _this.rooms
                        });
                    }).bind(that)
                })
            }

            $("#flow-picker").select({
                title: "选择收支类别",
                autoClose: true,
                items: [
                    {
                        title: "收入",
                        value: "0",
                    },
                    {
                        title: "支出",
                        value: "1",
                    }
                ]
            });
            $("#fees-picker").select({

                title: "选择费用名称",
                autoClose: true,
                items: [
                    {
                        title: "水费",
                        value: "water_fees"
                    },
                    {
                        title: "电费",
                        value: "power_fees"
                    },
                    {
                        title: "燃气费",
                        value: "gas_fees"
                    },
                    {
                        title: "物业费",
                        value: "property_fees"
                    },
                    {
                        title: "服务费",
                        value: "service_fees"
                    },
                    {
                        title: "维修费",
                        value: "upkeep_fees"
                    },
                    {
                        title: "保洁费",
                        value: "cleaning_fees"
                    },
                    {
                        title: "材料费",
                        value: "material_fees"
                    },
                    {
                        title: "有线电视",
                        value: "catv_fees"
                    },
                    {
                        title: "宽带费",
                        value: "internet_fees"
                    },
                    {
                        title: "卫生费",
                        value: "sanitation_fees"
                    },
                    {
                        title: "其他费用",
                        value: "other_fees"
                    }
                ]
            });

            $("#payMethod").select({
                title: "选择支付方式",
                autoClose: true,
                items: [
                    {
                        title: "支付宝",
                        value: "0",
                    },
                    {
                        title: "嘀嗒付",
                        value: "1",
                    },
                    {
                        title: "微信",
                        value: "2",
                    },
                    {
                        title: "现金",
                        value: "3",
                    },
                    {
                        title: "银行转账",
                        value: "4",
                    }
                ]
            });

            $("#pay-time").datetimePicker({
                title: "选择交易时间"
            });
            var myScroll = new IScroll('#add-finance .wrapper', {touchmove: true});

        }
    }
</script>
