exports.bindings = {
    navList: true
};
exports.dataForTemplate = {
    navData:function(data){
        console.log('data',data)
        return data.navList
    }
}