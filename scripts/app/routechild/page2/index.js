exports.items = {
    main: 'main'
};

exports.beforeRender = function () {
    console.log('this.application',this.app)
    console.log('this.renderOptions',this.renderOptions)
};