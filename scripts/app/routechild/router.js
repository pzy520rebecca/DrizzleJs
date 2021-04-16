exports.routes = {
    'page1/:id': 'jumpChild',
    'page2/:id': 'jumpChild'
};

exports.jumpChild = function(id) {
    if(id == 123){
        return this.app.show('content', 'routechild/page1',{id:id});
    }else{
        return this.app.show('content', 'routechild/page2',{id:id});
    }
};
