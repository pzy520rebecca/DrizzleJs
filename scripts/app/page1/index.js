exports.items = {
    main: 'main'
};
exports.store = {
    models: {
        state: { data: {} }
    },
    callbacks: {
        init: function (option) {
            var state = this.models.state;
            state.data = option;
        }
    }
};

exports.beforeRender = function () {
    // console.log(this.renderOptions)
    return this.dispatch('init', this.renderOptions);
};