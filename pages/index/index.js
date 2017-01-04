//index.js
//获取应用实例
var app = getApp();
Page({
    data: {
        userInfo: {},
        isHideLoading: false,
        signinText: "一键签到",
        isSignined: false,
    },
    onLoad: function() {
        var that = this;
        setTimeout(function() {
            that.initData();
        }, 1500);
        console.log("onLoad");
    },
    initData: function() {
        var that = this;
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo,
                isHideLoading: true
            });
        });
    },
    onSignin: function(e){
        if(this.data.isSignined){
            wx.showModal({
                title:"提示",
                content:"开发中...",
                confirmText: "确定",
                cancelText: "",
                duration: 1500
            });
            return;
        }
        this.setData({
            isHideLoading: false,
        });
        var that = this;
        setTimeout(function(){
            that.setData({
                isHideLoading: true,
                signinText: "我要抽奖",
                isSignined: true
            });
            wx.showToast({
                title:"签到成功",
                duration: 1500
            });
            app.signined = true;
            console.log(app);
        },500);
    },
    onReady: function(){
        console.log("onReady");
    },
    onScan: function(e){
        var that = this;
        wx.scanCode({
            success: function(res){
                var result = JSON.stringify(res);

                wx.showModal({
                    title:"扫码结果",
                    content:result,
                    duration: 1500
                });
            },
            fail: function(e){

            }
        })
    },
    onHide: function(){
        console.log("onHide");
    },
    onShow:function(){
        console.log("onShow");
    },
    onUnload:function(){
        console.log("onUnload");
    },
    onShareAppMessage: function(e){
        wx.showToast({
            title:"share everything",
            duration: 1500
        });
        return {

        }
    }

})
