var _ = require('lodash/collection');//加载用到的工具模块

exports.bindings = {
  infoList: true,
  filter: true,
  user: true,
  totalList: true
};
exports.events = {
  
};
exports.handlers = {
  
};
exports.dataForTemplate = {
  infoData: function (data) {
    if (data.filter === 'all') {
      return data.infoList
    }
    return _.filter(data.infoList, { sex: data.filter })
  },
  showMan: function (data) {
    return data.filter === "男"
  },
  totalNum: function (data) {
    return data.infoList.length
  }
};
exports.actions = {
  'change sexcheck': 'filterHandle',
  'click  destroy-*': 'removeHandle',
  'keypress new-task': 'searchHandle',
  'click clickSearch': 'searchHandle',
  'click add': 'addHandle',
};
exports.dataForActions = {
  searchHandle: function (data, e) {
    var name
    if (e.target.dataset.name === "button") {
      name = this.$('new-task').value
    } else {
      if (e.keyCode !== 13) {
        return false;
      }
      e.preventDefault();
      name = e.target.value;
    }
    if (!name) {
      alert('内容不能为空')
      return
    }
    data.name = name;
    this.$('new-task').value = '';
    return data;
  }
};


exports.components = [{
  id: 'dialog-box',  //templates.hbs里定义的元素
  name: 'dialog', //ext目录下的组件名
  options: { model: 'user' }
}]

