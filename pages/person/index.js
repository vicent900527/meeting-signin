//index.js
//获取应用实例
var app = getApp();
Page({
    data: {
        signinList: [],
        isHideLoading: false,
    },
    onLoad: function() {


    },

    onShow: function() {
        var that = this;
        app.getUserInfo(function(userInfo) {
            that.setData({
                signinList: that.getSigninList(userInfo),
                isHideLoading: true
            });
        });
    },

    getSigninList: function(userInfo) {
        var that = this;
        var list = [];
        for (var i = 0; i < 20; i++) {
            var image = (i == 0 && app.signined) ? userInfo.avatarUrl : "../../images/header.png";
            var name = (i == 0 && app.signined) ? userInfo.nickName : this.getName(i);
            var item = {
                name: name,
                image: image,
                time: this.getTime(i)
            };
            list.push(item);
        }
        return list;
    },

    getTime: function(i) {
        var times = new Date().getTime();
        times = times - i * 1000 * 60 * 5;
        var date = new Date(times);
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        return h + "时" + m + "分";
    },

    getName: function(index) {
        var i = index % 6;
        switch (i) {
            case 0:
                return "Vicent";
                break;
            case 1:
                return "Light";
                break;
            case 2:
                return "Terry";
                break;
            case 3:
                return "Jason";
                break;
            case 4:
                return "Jacky";
                break;
            case 5:
                return "Colin";
                break;
            default:
        }
    },

    onShareAppMessage: function(e){
        console.log(e);
    }

})
