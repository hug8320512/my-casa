let _isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
if (_isMobile) {
  $(document.body).addClass("is-mobile");
}
var _open = false;
$(window).on("load", function () {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  $(".navbar-toggler").removeAttr("disabled");
  $(".navbar-toggler").on("click", function () {
    if (_open) {
      _open = false;
      $("#mainNav").removeClass("show");
      $("#mainNav").height("auto");
      $("body").css("overflow", "auto");
    } else {
      _open = true;
      $("#mainNav").addClass("show");
      $("#mainNav").height(window.innerHeight + "px");
      $("body").css("overflow", "hidden");
    }
  });
});
$(window).resize(function () {
  var width = $(window).width();
  if (width >= 992) {
    $("#mainNav").removeClass("show");
  } else {
    if (_open) {
      $("#mainNav").addClass("show");
    }
  }
});
var didScroll;
var lastScrollTop = 0;
var delta = 100;
var height = 200;
var flagMenu;
var flagTransitionMenu = true;
var scrollupaux = 0;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  heightMenu = document.getElementById("mainNav").clientHeight;
  if (!_open) {
    if (st == 0) {
      $("#mainNav").addClass("posAbs");
      $("#mainNav").removeClass("navbar-shrink");
      $("#mainNav").removeClass("hide");
      $("#mainNav").css({
        opacity: "1",
      });
    }
    if (st < heightMenu) {
      if (st > lastScrollTop) {
        $("#mainNav").addClass("posAbs");
        flagMenu = true;
        flagTransitionMenu = true;
      } else {
        if (flagMenu) {
          $("#mainNav").addClass("posAbs");
        } else {
          $("#mainNav").removeClass("posAbs");
        }
      }
    } else {
      $("#mainNav").removeClass("posAbs");
      if (flagMenu) {
        $("#mainNav").css({
          opacity: "0",
        });
      }
      if (flagTransitionMenu) {
        $("#mainNav").addClass("stopTransitionPadding");
      } else {
        $("#mainNav").removeClass("stopTransitionPadding");
      }
      if (st > lastScrollTop) {
        $("#mainNav").addClass("hide");
        if (flagMenu) {
          flagMenu = false;
        }
        scrollupaux = 0;
      } else {
        if (scrollupaux <= delta) {
          scrollupaux += Math.abs(st - lastScrollTop);
        } else {
          scrollupaux = 0;
          $("#mainNav").css({
            opacity: "1",
          });
          $("#mainNav").removeClass("hide");
          $("#mainNav").addClass("navbar-shrink");
          if (flagTransitionMenu) {
            flagTransitionMenu = false;
          }
        }
      }
    }
    lastScrollTop = st;
  }
});
$(window).on("mousemove touchmove", function (e) {
  if (_open) {
    $("#mainNav").height(window.innerHeight + "px");
  }
});
jQuery(function ($) {
  var eventTriggerNames = ["ttuwhatsapp", "ttuskype", "ttumail", "ttuphone"];
  $(".contacts-window .icon-social a").on("click", function () {
    let index = $(this).index();
    window.dataLayer.push({
      event: eventTriggerNames[index],
    });
  });
  var doAnimations = function () {
    var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $(".animatable");
    if ($animatables.length == 0) {
      $(window).off("scroll", doAnimations);
    }
    $animatables.each(function (i) {
      var $animatable = $(this);
      var offsetHeight = 5;
      if (
        $animatable.hasClass("image-wrapper") ||
        $animatable.hasClass("early")
      ) {
        if ($animatable.hasClass("grid-item") && _isMobile) {
          offsetHeight = 5;
        } else if ($animatable.hasClass("floating")) {
          offsetHeight = 800;
        } else {
          offsetHeight = 400;
        }
      } else if ($animatable.hasClass("form")) {
        offsetHeight = 600;
      }
      if ($animatable.hasClass("reallyearly")) {
        offsetHeight = -100;
        if ($animatable.offset().top - offsetHeight < offset) {
          $animatable.removeClass("animatable").addClass("animated");
        }
      } else {
        if (
          $animatable.offset().top + $animatable.height() - offsetHeight <
          offset
        ) {
          $animatable.removeClass("animatable").addClass("animated");
        }
      }
    });
  };
  $(window).on("scroll", doAnimations);
  $(window).on("load", doAnimations);
  $(window).trigger("scroll");
});
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
      l,
      d = function () {
        clearTimeout(l);
        l = setTimeout(n, 100);
      },
      m = function () {},
      t = function () {
        window.addEventListener("resize", d, !1);
        window.addEventListener("orientationchange", d, !1);
        if (window.MutationObserver) {
          var k = new MutationObserver(d);
          k.observe(document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !0,
          });
          m = function () {
            try {
              k.disconnect(),
                window.removeEventListener("resize", d, !1),
                window.removeEventListener("orientationchange", d, !1);
            } catch (v) {}
          };
        } else
          document.documentElement.addEventListener(
            "DOMSubtreeModified",
            d,
            !1
          ),
            (m = function () {
              document.documentElement.removeEventListener(
                "DOMSubtreeModified",
                d,
                !1
              );
              window.removeEventListener("resize", d, !1);
              window.removeEventListener("orientationchange", d, !1);
            });
      },
      u = function (k) {
        function e(a) {
          if (void 0 !== a.protocol) var c = a;
          else (c = document.createElement("a")), (c.href = a);
          return c.protocol.replace(/:/g, "") + c.host;
        }
        if (window.XMLHttpRequest) {
          var d = new XMLHttpRequest();
          var m = e(location);
          k = e(k);
          d =
            void 0 === d.withCredentials && "" !== k && k !== m
              ? XDomainRequest || void 0
              : XMLHttpRequest;
        }
        return d;
      };
    var n = function () {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] &&
            (a.useEl.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "xlink:href",
              "#" + a.hash
            ),
            a.useEl.hasAttribute("href") &&
              a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
            b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if ((b = b.getElementsByTagName("svg")[0]))
            b.setAttribute("aria-hidden", "true"),
              (b.style.position = "absolute"),
              (b.style.width = 0),
              (b.style.height = 0),
              (b.style.overflow = "hidden"),
              c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }
      var a,
        c,
        q = 0;
      m();
      var f = document.getElementsByTagName("use");
      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }
        var h =
          (a =
            f[c].getAttribute("href") ||
            f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") ||
            f[c].getAttribute("xlink:href")) && a.split
            ? a.split("#")
            : ["", ""];
        var b = h[0];
        h = h[1];
        var r =
          g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r
          ? (f[c].hasAttribute("href") &&
              f[c].setAttributeNS(
                "http://www.w3.org/1999/xlink",
                "xlink:href",
                a
              ),
            b.length &&
              ((a = e[b]),
              !0 !== a &&
                setTimeout(
                  l({
                    useEl: f[c],
                    base: b,
                    hash: h,
                  }),
                  0
                ),
              void 0 === a &&
                ((h = u(b)),
                void 0 !== h &&
                  ((a = new h()),
                  (e[b] = a),
                  (a.onload = p(a)),
                  (a.onerror = n(a)),
                  (a.ontimeout = n(a)),
                  a.open("GET", b),
                  a.send(),
                  (q += 1)))))
          : r
          ? b.length &&
            e[b] &&
            setTimeout(
              l({
                useEl: f[c],
                base: b,
                hash: h,
              }),
              0
            )
          : void 0 === e[b]
          ? (e[b] = !0)
          : e[b].onload && (e[b].abort(), delete e[b].onload, (e[b] = !0));
      }
      f = "";
      q += 1;
      d();
    };
    var p = function () {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };
    "complete" !== document.readyState
      ? window.addEventListener("load", p, !1)
      : p();
  }
})();
$(window).on("load", function () {
  let $selects = $(".prv-select");
  $selects.each(function (key, value) {
    let $value = $(value);
    let $headSpan = $value.find(".dropdown-head span");
    $value.find("input").on("change", function () {
      let $input = $(this);
      $headSpan.text($input.next().text());
      $selects.removeClass("focus");
      if ($input.val() !== "") {
        $value.addClass("active");
      } else {
        $value.removeClass("active");
      }
    });
  });
  $selects.on("click", function (event) {
    event.stopPropagation();
    let $this = $(this);
    if ($this.hasClass("focus")) {
      $this.removeClass("focus");
    } else {
      $selects.removeClass("focus");
      $this.addClass("focus");
    }
  });
  $(window).on("click", function () {
    $selects.removeClass("focus");
  });
});
$(window).on("load", function () {
  let $floatingImages = $(".floating-image");
  $(window).scroll(function () {
    if ($(window).width() >= 576) {
      $floatingImages.each(function (key, value) {
        let $value = $(value);
        let windowHeight = $(window).height();
        let bbox = $value[0].getBoundingClientRect();
        if (bbox.y + bbox.height > 0 && bbox.y < windowHeight) {
          let progress =
            1 - (bbox.y + bbox.height) / (windowHeight + bbox.height);
          let translateY = 6 - progress * 12;
          $value.css("transform", "translateY(" + translateY + "rem)");
        }
      });
    }
  });
});
$(window).on("load", function () {
  const WRITING_SPEED = 100;
  const DELETING_SPEED = 25;
  $(".typed-text").each(function () {
    let $current = $(this);
    let strings = $current.attr("data-text").split("|");
    let stringPos = 0;
    let stringSize = strings[0].length;
    let writingInterval = null;

    function writing() {
      let currentString = strings[stringPos];
      let string = currentString.substring(0, stringSize++);
      if (string[string.length - 1] === "<") {
        while (string[string.length - 1] !== ">") {
          string = currentString.substring(0, stringSize++);
        }
      }
      $current.html(string);
      if (stringSize > currentString.length) {
        clearInterval(writingInterval);
        setTimeout(function () {
          deletingInterval = setInterval(deleting, DELETING_SPEED);
        }, 1000);
      }
    }
    let deletingInterval = null;

    function deleting() {
      let currentString = strings[stringPos];
      let string = currentString.substring(0, stringSize--);
      if (string[string.length - 1] === ">") {
        while (string[string.length - 1] !== "<") {
          string = currentString.substring(0, stringSize--);
        }
        string = currentString.substring(0, stringSize--);
      }
      $current.html(string);
      if (stringSize < 0) {
        clearInterval(deletingInterval);
        setTimeout(function () {
          stringPos = (stringPos + 1) % strings.length;
          writingInterval = setInterval(writing, WRITING_SPEED);
        }, 500);
      }
    }
    deletingInterval = setInterval(deleting, DELETING_SPEED);
  });
});
var topBtn = jQuery("#back-top-button");
jQuery(window).scroll(function () {
  var calScreenWidth = jQuery(window).width();
  if (jQuery(this).scrollTop() > 100) {
    jQuery(".icon-scroll").hide();
    topBtn.addClass("show");
  } else if (jQuery(this).scrollTop() == 0) {
    jQuery(".icon-scroll").show();
    topBtn.removeClass("show");
  }
  if ($(window).scrollTop() + $(window).height() > $(document).height() - 125) {
    topBtn.addClass("near-bottom");
  } else {
    topBtn.removeClass("near-bottom");
  }
});
topBtn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    "100"
  );
});
$(window).scroll(function (event) {
  var d = document.documentElement;
  var offset = d.scrollTop + window.innerHeight;
  var height = d.offsetHeight;
  if (offset >= height) {
    $("footer .shadow-holder").addClass("noshadow");
  } else {
    $("footer .shadow-holder").removeClass("noshadow");
  }
});
