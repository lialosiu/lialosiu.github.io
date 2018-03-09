let app = new Vue({
    el: '#app',
    data: function () {
        return {
            nowDatetime: moment().format('YYYY-MM-DD HH:mm:ss')
        }
    },
    mounted: function () {
        "use strict";
        $('.ui.sticky').each((key, item) => {
            if ($(item).hasClass('article-header')) {
                $(item).sticky({
                    context: $(item).parents('.article'),
                    offset: 50,
                    bottomOffset: 50,
                    onUnstick: () => {
                        $(item).css('left', '');
                    }
                });
            }
            if ($(item).hasClass('article-meta')) {
                $(item).sticky({
                    context: $(item).parents('.article'),
                    offset: 130,
                    bottomOffset: 0,
                })
            }
        });
    }
});

setInterval(function () {
    app.$data.nowDatetime = moment().format('YYYY-MM-DD HH:mm:ss');
}, 1000);
