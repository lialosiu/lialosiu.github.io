let app = new Vue({
    el: '#app',
    data: function () {
        return {
            nowDatetime: moment().format('YYYY-MM-DD HH:mm:ss')
        }
    }
});

setInterval(function () {
    app.$data.nowDatetime = moment().format('YYYY-MM-DD HH:mm:ss');
}, 1000);
