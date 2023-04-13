let app = new Vue({
  el: '#app',
  data: function () {
    return {
      isWindowScrollTop: false,
    }
  },
  mounted: function () {
    "use strict";
    window.addEventListener("scroll", this.onScroll);
    this.isWindowScrollTop = window.top.scrollY <= 0;
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll(e) {
      this.isWindowScrollTop = window.top.scrollY <= 0;
    },
  }
});
