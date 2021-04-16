
exports.components = [{
	id: 'echars2',  //templates.hbs里定义的元素
	name: 'echart', //ext目录下的组件名
	options: {
        title: {
            text: 'ECharts'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    }   //此组件配置属性
}];


