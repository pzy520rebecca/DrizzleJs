exports.items = {
    header: 'header',
    main: 'main'
};
exports.store = {
    models: {
        tab: { data: 1 }
    },
    callbacks:{
        clickHandle:function(payload){
            var {tab}=this.models,
                num = tab.data
            if(+num){
                tab.set('0',true)
            }else{
                tab.set('1',true)
            }
        }
    }
}


