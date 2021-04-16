
exports.components = [{
	id: 'echars1',  //templates.hbs里定义的元素
	name: 'echart', //ext目录下的组件名
	options: {
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                data:[
                    {value:235, name:'视频广告'},
                    {value:274, name:'联盟广告'},
                    {value:310, name:'邮件营销'},
                    {value:335, name:'直接访问'},
                    {value:400, name:'搜索引擎'}
                ]
            }
        ]
    }   //此组件配置属性
}];


