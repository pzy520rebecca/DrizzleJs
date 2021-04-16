var D = require('drizzlejs'),//引入框架
    echarts = require('echarts'); 


//注册名字为echarts的组件
D.ComponentManager.register('echart', function(view, el, options) {
    //根据view-main.js文件exports.components属性配置的参数实例化二维码组件
    //view: 视图View实例对象
    //el: echarts组件作用的dom元素,对应exports.components的id属性
    //options: 对应exports.components里配置的参数options
    // 基于准备好的dom，初始化echarts实例
    console.log('view,el,options',view,el,options)
    var myChart = echarts.init(el);
    myChart.setOption(options);
});    