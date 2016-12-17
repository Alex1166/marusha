$(".menu, .progress-table, .overlay-bg, .overlay-menu, .overlay-progress").fadeOut(0), $(document).click(function () {
    $(".input").focus()
}), $(document).on("blur", ".input", function () {
    $(this).removeClass("hidden")
}), $(document).on("focus", ".input", function () {
    $(this).addClass("hidden")
}), $(document).on("keypress", ".input", function () {
    $("p.test-skills").addClass("hidden"), $(".menu, .overlay-bg")
}), $(document).on("submit", "form", function (a) {
    a.preventDefault();
    var b = $(".input").val().toLowerCase();
    if ("" == b)return !1;
    var c = window.la.split("-");
    -1 !== jQuery.inArray(b, c) ? goodAnswer() : badAnswer(), $(".hiragana-symbol .character").html(getRandomHiragana()), $(".input").val("")
}), $(document).on("click", ".twitter-share", function (a) {
    a.preventDefault();
    var b = $(this).attr("href");
    b = b.replace("{min}", parseInt($(".good").html())), b = b.replace("{max}", parseInt($(".total").html())), $(".hidden-twitter").attr("href", b), console.log(b), $(".hidden-twitter")[0].click()
});
var goodAnswer = function () {
    incrementGood(), incrementTotal(), $(".nope").stop(!0, !0).hide(0), $(".yep").stop(!0, !0).fadeIn(500).delay(1500).fadeOut(500)
}, badAnswer = function () {
    incrementTotal(), $(".yep").stop(!0, !0).hide(0), $(".nope .answ").html(window.la.split("-")[0]), $(".nope").stop(!0, !0).fadeIn(500).delay(3e3).fadeOut(500)
}, incrementGood = function () {
    $(".good").html(parseInt($(".good").html()) + 1)
}, incrementTotal = function () {
    $(".total").html(parseInt($(".total").html()) + 1)
};

$(document).on("click", ".menu-btn", function (a) {
        // a.preventDefault(), $(".overlay-menu, .overlay-bg, .menu").fadeIn(255)
        var cssId = 'myCss';  // you could encode the css path itself to generate id..
        $('link[rel=stylesheet][href*="font"]').remove();
        if (!document.getElementById(cssId))
        {
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.id   = cssId;
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = 'assets/css/font-1.css';
            link.media = 'all';
            head.appendChild(link);
        }
    }
);

$(document).on("click", ".menu, .overlay-click-zone", function (a) {
        a.preventDefault(), $(".overlay-menu, .overlay-bg, .menu").fadeOut(255)
    }
);
$(document).on("click", ".progress-btn", function (a) {
        // a.preventDefault(), $(".overlay-progress, .overlay-bg, .progress-table").fadeIn(255)
        var cssId = 'myCss';  // you could encode the css path itself to generate id..
        $('link[rel=stylesheet][href*="font"]').remove();
        if (!document.getElementById(cssId))        {

            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.id   = cssId;
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = 'assets/css/font-2.css';
            link.media = 'all';
            head.appendChild(link);
        }
    }
);
$(document).on("click", ".progress-table, .overlay-click-zone", function (a) {
        a.preventDefault(), $(".overlay-progress, .overlay-bg, .progress-table").fadeOut(255)
    }
);
$(".menu .content, .progress-table .items li, .settings-in-menu").click(function (a) {
        event.stopPropagation();
    }
);
$.fn.random = function () {
    return this.eq(Math.floor(Math.random() * this.length))
};

var getRandomHiragana = function () {
    if (1 == $("#mono").prop("checked"))var a = $(".hiragana.mono").not(".empty").random(); else var a = $(".hiragana").not(".empty").random();
    var b = a.next();
    return window.la = b.html(), a.html()
};
$("#mono").on("change", function () {
    $(".hiragana-symbol .character").html(getRandomHiragana()), $(".input").val("")
});
var init = function () {
    $(".hiragana-symbol .character").html(getRandomHiragana())
}();