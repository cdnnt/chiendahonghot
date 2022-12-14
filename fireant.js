FireAnt = {};
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent",
    eventer = window[eventMethod],
    messageEvent = "attachEvent" == eventMethod ? "onmessage" : "message";
eventer(messageEvent, function(e) {
    var o = e[e.message ? "message" : "data"];
    if ("resize" == o.action) {
        for (var n = e.origin, r = document.getElementsByClassName("fireant-widget"), t = 0; t < r.length; t++)
            if (0 == r[t].src.indexOf(n) && o.container_id == r[t].id) {
                r[t].height = o.height + "px";
                break
            }
    } else "scrollTop" == o.action && window.scrollTo(0, 0)
}, !1), FireAnt.baseWidgetUrl = "https://www.fireant.vn/Widgets/", FireAnt.ArticleWidget = function(e) {
    var o = FireAnt.baseWidgetUrl + "Articles";
    this.parameters = e;
    var n = document.getElementById(e.container_id),
        r = document.createElement("div");
    r.innerHTML = '<iframe class="fireant-widget" id="' + e.container_id + '" src="' + o + "?container_id=" + e.container_id + "&article_count=" + e.article_count + "&show_more_button=" + e.show_more_button + "&border_color=" + encodeURIComponent(e.border_color) + "&background_color=" + encodeURIComponent(e.background_color) + "&sep_color=" + encodeURIComponent(e.sep_color) + '" width="' + e.width + '" height="400" frameborder="0" allowtransparency="true" scrolling="no"></iframe>', n.parentNode.replaceChild(r, n)
}, FireAnt.QuoteWidget = function(e) {
    var o = FireAnt.baseWidgetUrl + "Quote";
    this.parameters = e;
    var n = document.getElementById(e.container_id),
        r = document.createElement("div");
    r.innerHTML = '<iframe class="fireant-widget" id="' + e.container_id + '" src="' + o + "?container_id=" + e.container_id + "&symbols=" + e.symbols + "&locale=" + e.locale + "&price_line_color=" + encodeURIComponent(e.price_line_color) + "&grid_color=" + encodeURIComponent(e.grid_color) + "&label_color=" + encodeURIComponent(e.label_color) + "&height=" + e.height + '" width="' + e.width + '" height="400" frameborder="0" allowtransparency="true" scrolling="no"></iframe>', n.parentNode.replaceChild(r, n)
}, FireAnt.MarketsWidget = function(e) {
    var o = FireAnt.baseWidgetUrl + "Markets";
    this.parameters = e;
    var n = document.getElementById(e.container_id),
        r = document.createElement("div");
    r.innerHTML = '<iframe class="fireant-widget" id="' + e.container_id + '" src="' + o + "?container_id=" + e.container_id + "&symbols=" + e.symbols + "&locale=" + e.locale + "&price_line_color=" + encodeURIComponent(e.price_line_color) + "&grid_color=" + encodeURIComponent(e.grid_color) + "&label_color=" + encodeURIComponent(e.label_color) + "&height=" + e.height + '" width="' + e.width + '" height="400" frameborder="0" allowtransparency="true" scrolling="no"></iframe>', n.parentNode.replaceChild(r, n)
},
