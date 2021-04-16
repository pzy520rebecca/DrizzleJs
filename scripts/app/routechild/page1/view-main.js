exports.components = [function () {
    var me = this;
    return {
        id: 'player',
        name: 'videojs',
        options: {
            video: {
                autoplay: true,
            },
        }
    };
}];
exports.bindings = {
    state: true
};
exports.events = {
    'click back': 'backHandle',
};
exports.handlers = {
    backHandle:function(id){
        // location.href="#/routechild"
        this.app.navigate('routechild',true) //路由跳转
        console.log(this.app.navigate)
    }
};
exports.dataForTemplate = {
    url: function (data) {
        return data.state.url || 'http://vjs.zencdn.net/v/oceans.mp4'
    }
};
exports.video = {
    ended: function () {

    },
    seeked: function (player) {
        player.play();
    },
    loadeddata: function (player) {
    }
};
exports.beforeClose = function () {
    var player = this.components.player;
    var resourceTotalTime = Math.floor(player.duration());
    var lessonLocationTime = Math.floor(player.cache_.currentTime);
    console.log(resourceTotalTime + "cTime:" + lessonLocationTime);
};
exports.afterClose = function () {
};
// exports.beforeRender = function () {
//     console.log(this, this.app)
// }
