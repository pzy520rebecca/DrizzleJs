var D = require('drizzlejs');
function Pagination(el) {
    console.log(el,'el=======')
    this.total = el.total || 1; // 数据总数
    this.pageSize = el.pageSize || 5; // 每页条数
    this.pageIndex = 1; // 当前页码
    this.pageNumber = Math.ceil(el.total / el.pageSize); // 总页码
    this.paginationEl = el.id;
    this.changeCallBack = el.changeCallBack;
    this.init()
}
Pagination.prototype = {
    init() {
        this.renderPagination()
        this.bindEvent()
    },
    renderPagination() {
        console.log('this.paginationEl',this.paginationEl)
        this.paginationEl.innerHTML = '';
        let html = [];
        html.push(this.createPrevBtn());
        html.push(this.createPageNumber());
        html.push(this.createNextBtn());
        let ul = document.createElement('ul');
        ul.className = 'pagination-ul';
        ul.innerHTML = html.join(' ');
        this.paginationEl.appendChild(ul);
    },
    bindEvent() {
        this.bindPageNumberEvent();
        this.bindPrevBtnEvent();
        this.bindNextBtnEvent();
    },
    bindPageNumberEvent() {
        let painationList = this.paginationEl.querySelectorAll('.pagination_item');
        painationList.forEach(pagination => {
            pagination.addEventListener('click', (e) => {
                this.pageChange(Number(e.currentTarget.innerHTML))
            }, false)
        })
    },
    bindPrevBtnEvent() {
        let Prev = this.paginationEl.querySelector('.last_page')
        Prev.addEventListener('click', () => {
            if (this.pageIndex === 1) {
                return
            }
            this.pageChange(--this.pageIndex);
        }, false)
    },
    bindNextBtnEvent() {
        let Next = this.paginationEl.querySelector('.next_page')
        Next.addEventListener('click', () => {
            if (this.pageIndex === this.pageNumber) {
                return
            }
            this.pageChange(++this.pageIndex);
        }, false)
    },
    renderNumber(pageNumber, i) {
        if (this.pageIndex === i) {
            return `<li class="pagination_item active">${i}</li>`
        } else {
            return `<li class="pagination_item">${i}</li>`
        }
    },
    createPageNumber() {
        let pageNumber = ''
        console.log('this.pageNumber',this.pageNumber);
        // 总页码小于等于10的时候可以全部渲染,否则需要渲染省略号
        if (this.pageNumber <= 10) {
            for (let i = 1; i <= this.pageNumber; i++) {
                pageNumber += this.renderNumber(pageNumber, i)
            }
        } else {
            if (this.pageIndex < 6) {
                let i = 1
                while (i < 6) {
                    pageNumber += this.renderNumber(pageNumber, i)
                    i++
                }
                pageNumber += `<li class="pagination_item">...</li>`
                i = this.pageNumber - 3
                while (i <= this.pageNumber) {
                    pageNumber += this.renderNumber(pageNumber, i)
                    i++
                }
            } else if (this.pageIndex >= 6 && this.pageIndex < this.pageNumber - 4) {
                let i = 1
                while (i < 3) {
                    pageNumber += this.renderNumber(pageNumber, i)
                    i++
                }
                pageNumber += `<li class="pagination_item">...</li>`
                i = this.pageIndex - 1
                while (i <= this.pageIndex + 1) {
                    pageNumber += this.renderNumber(pageNumber, i)
                    i++
                }
                pageNumber += `<li class="pagination_item">...</li>`
                i = this.pageNumber - 2
                while (i <= this.pageNumber) {
                    pageNumber += this.renderNumber(pageNumber, i)
                    i++
                }
            } else {
                let i = 1
                while (i < 5) {
                    pageNumber += this.renderNumber(pageNumber, i)
                    i++
                }
                pageNumber += `<li class="pagination_item">...</li>`
                i = this.pageNumber - 4
                while (i <= this.pageNumber) {
                    pageNumber += this.renderNumber(pageNumber, i)
                    i++
                }
            }
        }

        return pageNumber
    },
    createPrevBtn() {
        if (this.pageIndex === 1) {
            return `<li onclick="" class="last_page"> < </li>`
        } else {
            return `<li class="last_page"> < </li>`
        }
    },
    createNextBtn() {
        if (this.pageIndex === this.pageNumber) {
            return `<li class="next_page"> > </li>`
        } else {
            return `<li class="next_page"> > </li>`
        }
    },
    pageChange(pageIndex) {
        this.pageIndex = pageIndex
        this.init()
        if (typeof this.changeCallBack === 'function') {
            this.changeCallBack(this.pageIndex)
        }
    }
}

/* 组件注册 */
D.ComponentManager.register('Pagination', function (view, el, options = {}) {
    var model = view.bindings[options.model];
    var total = view.bindings[options.total].data.length
    var pageNumber = total ? Math.ceil(total / 5) : 3
    console.log('分页组件', model, total, pageNumber,options)
    var curPage = view.bindings[options.page].data.page
    new Pagination({
        id: el,
        total: total,
        pageIndex:1,
        pageSize:5,
        pageNumber: pageNumber,
        changeCallBack: function (page) {
            console.log(page)
            //获取当前页数
            model.options.url = '../infoList?_page=' + page + '&_limit=5';
            D.Request.get(model, {
                loading: true,
                type: model.options.method || 'GET',
            });
        },
    })
    return 
});