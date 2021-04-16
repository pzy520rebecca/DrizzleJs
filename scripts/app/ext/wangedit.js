var D = require('drizzlejs'),//引入框架
    E = require('wangeditor'); 


//注册名字为editor的组件
D.ComponentManager.register('editor', function(view, el, options) {
    //根据view-main.js文件exports.components属性配置的参数实例化editor组件
    //view: 视图View实例对象
    //el: editor组件作用的dom元素,对应exports.components的id属性
    //options: 对应exports.components里配置的参数options
    // 基于准备好的dom，初始化editor实例
    const editor = new E(el);
    editor.config.height = 500;
    editor.create();
});