exports.bindings = {
    infoList: false,
    totalList: true,
    user: false
};
exports.components = [{
    id: 'pager-wrap',
    name: 'Pagination',
    options: {
        model: 'infoList', total: 'totalList', page: 'user'
    }
}];