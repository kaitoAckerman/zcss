! function () {
    function e(e) {
        for (r = 0; r < n.length; r++) n[r].classList.remove("popover-open")
    }

    function t(t) {
        t.preventDefault(), document.querySelector(this.getAttribute("href")).classList.contains("popover-open") ? document.querySelector(this.getAttribute("href")).classList.remove("popover-open") : (e(), document.querySelector(this.getAttribute("href")).classList.add("popover-open")), t.stopImmediatePropagation()
    }
    var o = document.querySelectorAll("[data-popover]"),
        n = document.querySelectorAll(".popover"),
        r = void 0;
    for (r = 0; r < o.length; r++) o[r].addEventListener("click", t);
    document.addEventListener("click", e)
}(),
function () {
    var e = document.querySelectorAll(".code-content"),
        t = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        },
        o = void 0;
    for (o = 0; o < e.length; o++) e[o].innerHTML = function (e) {
        return String(e).replace(/[&<>"']/g, function (e) {
            return t[e]
        })
    }(e[o].innerHTML);
    ! function (e, t, o, n, r, i) {
        r = t.createElement(o), r.async = 1, r.src = "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js", i = t.getElementsByTagName(o)[document.querySelectorAll(o).length - 1], i.parentNode.insertBefore(r, i)
    }(window, document, "script")
}()

console.log('test');