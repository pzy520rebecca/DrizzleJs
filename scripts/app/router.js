module.exports = {
    routes: {
        list:'showList',
        dynamic: 'showDynamic',
        qrcode: 'showQrcode',
        routechild: 'showRoutechild'
    },
    showList: function() {
    	//在名为content的Region中展示request模块
        return this.app.show('content', 'list', { forceRender: true });
    },
    showDynamic: function() {
    	//在名为content的Region中展示dynamic模块
        return this.app.show('content', 'dynamic', { forceRender: true });
    },
    showQrcode: function() {
    	//在名为content的Region中展示request模块
        return this.app.show('content', 'qrcode', { forceRender: true });
    },
    showRoutechild:function() {
    	//在名为content的Region中展示request模块
        console.log('this.app',this.app)
        return this.app.show('content', 'routechild',{ forceRender: false });
    }
};
