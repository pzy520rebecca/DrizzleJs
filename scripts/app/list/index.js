var _ = require('lodash/collection');
exports.items = {
  main: 'main',
  pagination: "pagination"
};
exports.store = {
  models: {
    infoList: { url: '../infoList?_page=1&_limit=5' },
    filter: { data: 'all' },
    user: { data: {} },
    totalList: { url: '../infoList', autoLoad: 'after' },
  },
  callbacks: {
    // 请求列表数据
    getInfoList: function () {
      console.log('this.models===',this.models)
      var { infoList } = this.models
      return this.get(infoList)
    },
    // 只显示男性
    filterHandle: function (payload) {
      console.log('payload',payload)
      if (this.models.filter.data === "男")
        this.models.filter.set('all', true);//显示全部
      else
        this.models.filter.set("男", true);//只显示男的
    },
    // 删除单项
    removeHandle: function (payload) {
      var { infoList, totalList,user } = this.models;
      var oriUrl = infoList.options.url
      var page=oriUrl.split('?')[1].split('&')[0].split('=')[1]
      user.data.page = page
      infoList.options.url = `../infoList/${payload.id}`
      var that = this
      this.del(infoList).then(function () {
        infoList.options.url = oriUrl
        that.get(infoList)
        that.get(totalList)
      })
    },
    // 搜索
    searchHandle: function (payload) {
      console.log('payload',payload)
      var { infoList } = this.models;
      var target = _.filter(infoList.data, function (item) {
        return item.name.includes(payload.name)
      })
      if (!target.length) {
        alert("未找到" + payload.name)
        return
      }
      infoList.set(target, true);
    },
    // 添加
    addHandle: function (payload) {
      var { user } = this.models;
      user.data.show = 1;
      console.log('user',user)
      user.changed()
    }
  }
};
exports.beforeRender = function () {
  this.dispatch('getInfoList')
};
