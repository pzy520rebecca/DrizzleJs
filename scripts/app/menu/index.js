exports.items = {
    main: 'main'
};
exports.store = {
    models: {
        navList:{url:'../navList'}
    },
    callbacks:{
        // 请求列表数据
        getNavList: function () {
            console.log('this.models===',this.models)
            var { navList } = this.models
            return this.get(navList)
        }
    }
};
exports.beforeRender = function () {
    this.dispatch('getNavList')
};
