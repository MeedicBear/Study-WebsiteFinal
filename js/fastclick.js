! function e(t, n, r) {
    function o(s, a) {
        if (!n[s]) {
            if (!t[s]) { var c = "function" == typeof require && require; if (!a && c) return c(s, !0); if (i) return i(s, !0); var u = new Error("Cannot find module '" + s + "'"); throw u.code = "MODULE_NOT_FOUND", u }
            var l = n[s] = { exports: {} };
            t[s][0].call(l.exports, function(e) { var n = t[s][1][e]; return o(n ? n : e) }, l, l.exports, e, t, n, r)
        }
        return n[s].exports
    }
    for (var i = "function" == typeof require && require, s = 0; s < r.length; s++) o(r[s]);
    return o
}({
    1: [function(e, t) {
        ! function() {
            "use strict";

            function e(t, n) {
                function o(e, t) { return function() { return e.apply(t, arguments) } }
                var i;
                if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = t, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !e.notNeeded(t)) {
                    for (var s = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, c = 0, u = s.length; u > c; c++) a[s[c]] = o(a[s[c]], a);
                    r && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, r) { var o = Node.prototype.removeEventListener; "click" === e ? o.call(t, e, n.hijacked || n, r) : o.call(t, e, n, r) }, t.addEventListener = function(e, n, r) { var o = Node.prototype.addEventListener; "click" === e ? o.call(t, e, n.hijacked || (n.hijacked = function(e) { e.propagationStopped || n(e) }), r) : o.call(t, e, n, r) }), "function" == typeof t.onclick && (i = t.onclick, t.addEventListener("click", function(e) { i(e) }, !1), t.onclick = null)
                }
            }
            var n = navigator.userAgent.indexOf("Windows Phone") >= 0,
                r = navigator.userAgent.indexOf("Android") > 0 && !n,
                o = /iP(ad|hone|od)/.test(navigator.userAgent) && !n,
                i = o && /OS 4_\d(_\d)?/.test(navigator.userAgent),
                s = o && /OS [6-7]_\d/.test(navigator.userAgent),
                a = navigator.userAgent.indexOf("BB10") > 0;
            e.prototype.needsClick = function(e) {
                switch (e.nodeName.toLowerCase()) {
                    case "button":
                    case "select":
                    case "textarea":
                        if (e.disabled) return !0;
                        break;
                    case "input":
                        if (o && "file" === e.type || e.disabled) return !0;
                        break;
                    case "label":
                    case "iframe":
                    case "video":
                        return !0
                }
                return /\bneedsclick\b/.test(e.className)
            }, e.prototype.needsFocus = function(e) {
                switch (e.nodeName.toLowerCase()) {
                    case "textarea":
                        return !0;
                    case "select":
                        return !r;
                    case "input":
                        switch (e.type) {
                            case "button":
                            case "checkbox":
                            case "file":
                            case "image":
                            case "radio":
                            case "submit":
                                return !1
                        }
                        return !e.disabled && !e.readOnly;
                    default:
                        return /\bneedsfocus\b/.test(e.className)
                }
            }, e.prototype.sendClick = function(e, t) {
                var n, r;
                document.activeElement && document.activeElement !== e && document.activeElement.blur(), r = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
            }, e.prototype.determineEventType = function(e) { return r && "select" === e.tagName.toLowerCase() ? "mousedown" : "click" }, e.prototype.focus = function(e) {
                var t;
                o && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
            }, e.prototype.updateScrollParent = function(e) {
                var t, n;
                if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
                    n = e;
                    do {
                        if (n.scrollHeight > n.offsetHeight) { t = n, e.fastClickScrollParent = n; break }
                        n = n.parentElement
                    } while (n)
                }
                t && (t.fastClickLastScrollTop = t.scrollTop)
            }, e.prototype.getTargetElementFromEventTarget = function(e) { return e.nodeType === Node.TEXT_NODE ? e.parentNode : e }, e.prototype.onTouchStart = function(e) {
                var t, n, r;
                if (e.targetTouches.length > 1) return !0;
                if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], o) {
                    if (r = window.getSelection(), r.rangeCount && !r.isCollapsed) return !0;
                    if (!i) {
                        if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                        this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
                    }
                }
                return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
            }, e.prototype.touchHasMoved = function(e) {
                var t = e.changedTouches[0],
                    n = this.touchBoundary;
                return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n ? !0 : !1
            }, e.prototype.onTouchMove = function(e) { return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0 }, e.prototype.findControl = function(e) { return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea") }, e.prototype.onTouchEnd = function(e) {
                var t, n, a, c, u, l = this.targetElement;
                if (!this.trackingClick) return !0;
                if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
                if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
                if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, s && (u = e.changedTouches[0], l = document.elementFromPoint(u.pageX - window.pageXOffset, u.pageY - window.pageYOffset) || l, l.fastClickScrollParent = this.targetElement.fastClickScrollParent), a = l.tagName.toLowerCase(), "label" === a) {
                    if (t = this.findControl(l)) {
                        if (this.focus(l), r) return !1;
                        l = t
                    }
                } else if (this.needsFocus(l)) return e.timeStamp - n > 100 || o && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(l), this.sendClick(l, e), o && "select" === a || (this.targetElement = null, e.preventDefault()), !1);
                return o && !i && (c = l.fastClickScrollParent, c && c.fastClickLastScrollTop !== c.scrollTop) ? !0 : (this.needsClick(l) || (e.preventDefault(), this.sendClick(l, e)), !1)
            }, e.prototype.onTouchCancel = function() { this.trackingClick = !1, this.targetElement = null }, e.prototype.onMouse = function(e) { return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0 }, e.prototype.onClick = function(e) { var t; return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t) }, e.prototype.destroy = function() {
                var e = this.layer;
                r && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
            }, e.notNeeded = function(e) { var t, n, o, i; if ("undefined" == typeof window.ontouchstart) return !0; if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) { if (!r) return !0; if (t = document.querySelector("meta[name=viewport]")) { if (-1 !== t.content.indexOf("user-scalable=no")) return !0; if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0 } } if (a && (o = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), o[1] >= 10 && o[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) { if (-1 !== t.content.indexOf("user-scalable=no")) return !0; if (document.documentElement.scrollWidth <= window.outerWidth) return !0 } return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction ? !0 : (i = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], i >= 27 && (t = document.querySelector("meta[name=viewport]"), t && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === e.style.touchAction || "manipulation" === e.style.touchAction ? !0 : !1) }, e.attach = function(t, n) { return new e(t, n) }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() { return e }) : "undefined" != typeof t && t.exports ? (t.exports = e.attach, t.exports.FastClick = e) : window.FastClick = e
        }()
    }, {}],
    2: [function(e) { window.Origami = { fastclick: e("./bower_components/fastclick/lib/fastclick.js") } }, { "./bower_components/fastclick/lib/fastclick.js": 1 }]
}, {}, [2]);;
(function() {
    function trigger() { document.dispatchEvent(new CustomEvent('o.load')) };
    document.addEventListener('load', trigger);
    if (document.readyState === 'ready') trigger();
}());
(function() {
    function trigger() { document.dispatchEvent(new CustomEvent('o.DOMContentLoaded')) };
    document.addEventListener('DOMContentLoaded', trigger);
    if (document.readyState === 'interactive') trigger();
}())