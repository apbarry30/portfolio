!function($){"use strict";if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))var gdlr_touch_device=!0;else var gdlr_touch_device=!1;function gdlr_set_item_outer_nav(){$(".blog-item-wrapper > .gdlr-nav-container").each((function(){var t=$(this).siblings(".blog-item-holder");$(this).children().css({top:t.position().top,bottom:"auto",height:t.height()-50})}))}$.extend({getUrlVars:function(){for(var t,i=[],e=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),a=0;a<e.length;a++)t=e[a].split("="),i.push(t[0]),i[t[0]]=t[1];return i},getUrlVar:function(t){return $.getUrlVars()[t]}}),$.fn.gdlr_flexslider=function(){"function"==typeof $.fn.megaproject_flexslider&&$(this).each((function(){var t={animation:"fade",animationLoop:!0,prevText:'<i class="icon-angle-left" ></i>',nextText:'<i class="icon-angle-right" ></i>',useCSS:!1};if($(this).attr("data-pausetime")&&(t.slideshowSpeed=parseInt($(this).attr("data-pausetime"))),$(this).attr("data-slidespeed")&&(t.animationSpeed=parseInt($(this).attr("data-slidespeed"))),"carousel"==$(this).attr("data-type")?(t.move=1,t.animation="slide",$(this).closest(".gdlr-item-no-space").length>0?(t.itemWidth=$(this).width()/parseInt($(this).attr("data-columns")),t.itemMargin=0):(t.itemWidth=($(this).width()+30)/parseInt($(this).attr("data-columns"))-30,t.itemMargin=30)):$(this).attr("data-effect")&&(t.animation=$(this).attr("data-effect")),$(this).attr("data-columns")&&(t.minItems=parseInt($(this).attr("data-columns")),t.maxItems=parseInt($(this).attr("data-columns"))),$(this).attr("data-nav-container")){var i=$(this).parents("."+$(this).attr("data-nav-container")).siblings(".gdlr-nav-container");i.find(".gdlr-flex-prev").length>0||i.find(".gdlr-flex-next").length>0?(t.controlNav=!1,t.directionNav=!1,t.start=function(t){i.find(".gdlr-flex-next").click((function(){console.log(t),t.flexAnimate(t.getTarget("next"),!0)})),i.find(".gdlr-flex-prev").click((function(){t.flexAnimate(t.getTarget("prev"),!0)})),gdlr_set_item_outer_nav(),$(window).resize((function(){gdlr_set_item_outer_nav()}))}):(t.controlNav=!1,t.controlsContainer=i.find(".nav-container"))}$(this).closest(".gdlr-single-portfolio-thumbnail").length>0&&(t.manualControls="#gdlr-flex-thumbnail-control li img"),$(this).megaproject_flexslider(t)}))},$.fn.gdlr_nivoslider=function(){"function"==typeof $.fn.nivoSlider&&$(this).each((function(){var t={};$(this).attr("data-pausetime")&&(t.pauseTime=parseInt($(this).attr("data-pausetime"))),$(this).attr("data-slidespeed")&&(t.animSpeed=parseInt($(this).attr("data-slidespeed"))),$(this).attr("data-effect")&&(t.effect=$(this).attr("data-effect")),$(this).nivoSlider(t)}))},$.fn.gdlr_isotope=function(){"function"==typeof $.fn.isotope&&$(this).each((function(){var t=$(this).attr("data-layout")?$(this).attr("data-layout"):"fitRows";if("fitRows"!=t){var i=$(this);i.children(".clear").remove(),i.isotope({layoutMode:t}),$(window).resize((function(){i.isotope()}))}}))},$.fn.gdlr_fancybox=function(){if("function"==typeof $.fn.fancybox){var t={nextMethod:"resizeIn",nextSpeed:250,prevMethod:!1,prevSpeed:250,helpers:{media:{}}};"object"==typeof $.fancybox.helpers.thumbs&&(t.helpers.thumbs={width:50,height:50}),$(this).fancybox(t)}},$.fn.gdlr_fluid_video=function(){$(this).find('iframe[src*="youtube"], iframe[src*="vimeo"]').each((function(){if($(this).closest(".ls-container, .master-slider").length<=0){if($(this).is("embed")&&$(this).parent("object").length||$(this).parent(".fluid-width-video-wrapper").length)return;$(this).attr("id")||$(this).attr("id","gdlr-video-"+Math.floor(999999*Math.random()));var t=$(this).height()/$(this).width();$(this).removeAttr("height").removeAttr("width");try{$(this).wrap('<div class="gdlr-fluid-video-wrapper"></div>').parent().css("padding-top",100*t+"%"),$(this).attr("src",$(this).attr("src"))}catch(t){}}}))},$.fn.gdlr_pie_chart=function(){"function"==typeof $.fn.easyPieChart&&$(this).each((function(){var t=$(this);function i(){if(t.parent().width()<parseInt(t.attr("data-size"))){var i=t.parent().width()+"px";t.css({"max-width":i,"max-height":i})}}$(this).easyPieChart({animate:1200,lineWidth:t.attr("data-linewidth")?parseInt(t.attr("data-linewidth")):8,size:t.attr("data-size")?parseInt(t.attr("data-size")):155,barColor:t.attr("data-color")?t.attr("data-color"):"#a9e16e",trackColor:t.attr("data-bg-color")?t.attr("data-bg-color"):"#f2f2f2",backgroundColor:t.attr("data-background"),scaleColor:!1,lineCap:"square"}),$.browser.msie&&parseInt($.browser.version)<=8||(i(),$(window).resize((function(){i()})))}))},$(document).ready((function(){$("body").gdlr_fluid_video(),$(".gdlr-top-woocommerce-wrapper").hover((function(){$(this).children(".gdlr-top-woocommerce").fadeIn(200)}),(function(){$(this).children(".gdlr-top-woocommerce").fadeOut(200)})),$(".gdlr-accordion-item").each((function(){var t=$(this).hasClass("gdlr-multiple-tab");$(this).children(".accordion-tab").children(".accordion-title").click((function(){var i=$(this).parent();i.hasClass("active")?(i.removeClass("pre-active"),$(this).children("i").removeClass("icon-minus").addClass("icon-plus"),$(this).siblings(".accordion-content").slideUp((function(){i.removeClass("active")}))):(i.addClass("pre-active"),$(this).children("i").removeClass("icon-plus").addClass("icon-minus"),$(this).siblings(".accordion-content").slideDown((function(){i.addClass("active")}))),t||(i.siblings().removeClass("pre-active"),i.siblings().children(".accordion-title").children("i").removeClass("icon-minus").addClass("icon-plus"),i.siblings().children(".accordion-content").slideUp((function(){$(this).parent().removeClass("active")})))}))})),$(".tab-title-wrapper").children().click((function(){$(this).addClass("active"),$(this).siblings().removeClass("active");var t=$(this).index()+1;$(this).parent().siblings(".tab-content-wrapper").children(":nth-child("+t+")").each((function(){$(this).siblings().removeClass("active").hide(),$(this).fadeIn((function(){$(this).addClass("active")}))}))}));var inital_tab=$.getUrlVar("tab");inital_tab&&$("#"+inital_tab.replace(",",", #")).each((function(){$(this).trigger("click")})),$(".gdlr-code-item .gdlr-code-title").click((function(){var t=$(this).parent();t.hasClass("active")?($(this).children("i").removeClass("icon-minus").addClass("icon-plus"),$(this).siblings(".gdlr-code-content").slideUp((function(){t.removeClass("active")}))):($(this).children("i").removeClass("icon-plus").addClass("icon-minus"),$(this).siblings(".gdlr-code-content").slideDown((function(){t.addClass("active")})))})),$(".gdlr-parallax-wrapper").each((function(){if($(this).hasClass("gdlr-background-image")){var t=$(this),i=parseFloat(t.attr("data-bgspeed"));if(0==i||gdlr_touch_device)return;if(-1==i)return t.css("background-attachment","fixed"),void t.css("background-position","center center");$(window).scroll((function(){if($(window).scrollTop()+$(window).height()>t.offset().top&&$(window).scrollTop()<t.offset().top+t.outerHeight()){var e;e=$(window).height()>t.offset().top?$(window).scrollTop():$(window).scrollTop()+$(window).height()-t.offset().top,t.css("background-position","center "+-e*i+"px")}}))}else{if(!$(this).hasClass("gdlr-background-video"))return;"function"==typeof $.fn.mb_YTPlayer&&$(this).children(".gdlr-bg-player").mb_YTPlayer()}})),"function"==typeof $.fn.superfish&&($("#gdlr-main-navigation .sf-mega > ul").each((function(){$(this).children("li").each((function(){var t=$(this);t.replaceWith($("<div />").addClass("sf-mega-section").addClass(t.attr("data-column")).attr("data-size",t.attr("data-size")).html($("<div />").addClass("sf-mega-section-inner").addClass(t.attr("class")).attr("id",t.attr("id")).html(t.html())))})),$(this).replaceWith(this.innerHTML)})),$("#gdlr-main-navigation .sf-mega").each((function(){var sf_mega=$(this);$(this).show();var row=0,column=0,max_height=0;sf_mega.children(".sf-mega-section").each((function(){column%60==0&&(0!=row&&(sf_mega.children('[data-row="'+row+'"]').children(".sf-mega-section-inner").height(max_height-50),max_height=0),row++,$(this).addClass("first-column")),$(this).attr("data-row",row),column+=eval("60*"+$(this).attr("data-size")),$(this).height()>max_height&&(max_height=$(this).height())})),sf_mega.children('[data-row="'+row+'"]').children(".sf-mega-section-inner").height(max_height-50)})),$("#gdlr-main-navigation").superfish({speed:"fast"})),"function"==typeof $.fn.dlmenu&&$("#gdlr-responsive-navigation").each((function(){$(this).find(".dl-submenu").each((function(){if($(this).siblings("a").attr("href")&&"#"!=$(this).siblings("a").attr("href")){var t=$('<li class="menu-item gdlr-parent-menu"></li>');t.append($(this).siblings("a").clone()),$(this).prepend(t)}})),$(this).dlmenu()})),$(".gdlr-gallery-thumbnail").each((function(){var t=$(this).children(".gdlr-gallery-thumbnail-container");$(this).find(".gallery-item").click((function(){var i=t.children('[data-id="'+$(this).attr("data-id")+'"]');if("block"==i.css("display"))return!1;var e=i.children("img").attr("width"),a=i.children("img").attr("height")/e*Math.min(t.width(),e);return t.animate({height:a}),i.fadeIn().siblings().hide(),!1})),$(window).resize((function(){t.css("height","auto")}))})),$('a[href$=".jpg"], a[href$=".png"], a[href$=".gif"]').not('[data-rel="fancybox"], [href*="pinterest"]').attr("data-rel","fancybox"),$('[data-rel="fancybox"]').gdlr_fancybox(),$(".gdlr-image-link-shortcode").hover((function(){$(this).find(".gdlr-image-link-overlay").animate({opacity:.8},150),$(this).find(".gdlr-image-link-icon").animate({opacity:1},150)}),(function(){$(this).find(".gdlr-image-link-overlay").animate({opacity:0},150),$(this).find(".gdlr-image-link-icon").animate({opacity:0},150)})),$(".gdlr-personnel-item.round-style .personnel-item").each((function(){var t=$(this);function i(){t.find(".personnel-item-inner").each((function(){$(this).css("margin-top",-$(this).height()/2)}))}i(),$(window).resize((function(){i()}))})),$(".gdlr-personnel-item.round-style .personnel-item").hover((function(){$(this).find(".personnel-author-image").animate({opacity:.05},200),$(this).find(".personnel-item-inner").animate({opacity:1},200)}),(function(){$(this).find(".personnel-author-image").animate({opacity:1},200),$(this).find(".personnel-item-inner").animate({opacity:0},200)})),$(".gdlr-price-table-item").each((function(){var t=$(this);function i(){var i=0,e=t.find(".price-content");e.css("height","auto"),e.each((function(){i<$(this).height()&&(i=$(this).height())})),e.css("height",i)}i(),$(window).resize((function(){i()}))})),$("form").submit((function(){var t=!1;if($(this).find("input[data-default]").each((function(){$(this).is("#url")?$(this).val()==$(this).attr("data-default")&&$(this).val(""):$(this).val()==$(this).attr("data-default")&&(t=!0)})),t)return!1})),$("#gdlr-menu-search-button").click((function(){var t=($(window).width()-$(this).closest(".gdlr-navigation-container").width())/2,i=$(window).width()-($(this).offset().left+$(this).outerWidth()+t);$("body").hasClass("header-style-1")||$("body").hasClass("header-style-2")?$(this).siblings("#gdlr-menu-search").css("right",i).slideToggle(200):$(this).siblings("#gdlr-menu-search").slideToggle(200),gdlrClearSelection()})),$(".search-text input[data-default], .gdlr-comments-area input[data-default]").each((function(){var t=$(this).attr("data-default");$(this).val(t),$(this).live("blur",(function(){""==$(this).val()&&$(this).val(t)})).live("focus",(function(){$(this).val()==t&&$(this).val("")}))})),window.location.hash&&$("html, body").animate({scrollTop:$(window.location.hash).offset().top-68},500),$('.gdlr-navigation a[href*="#"], .gdlr-responsive-navigation a[href*="#"]').click((function(){if($(this).attr("href").length>1){var t=$(this.hash);if($("body").hasClass("home")){if(t.length>0)return $("html, body").animate({scrollTop:t.offset().top-68},500),!1}else window.location.replace($(".body-wrapper").attr("data-home")+"/"+this.hash)}})),gdlr_touch_device||$.browser.msie&&!(parseInt($.browser.version)>8)?((!$.browser.msie||parseInt($.browser.version)>8)&&$(".gdlr-chart").gdlr_pie_chart(),$(".gdlr-skill-bar-progress").each((function(){$(this).attr("data-percent")&&$(this).animate({width:$(this).attr("data-percent")+"%"},1200,"easeOutQuart")}))):($(".content-wrapper img").each((function(){if(!$(this).closest(".gdlr-ux, .ls-wp-container, .product, .flexslider, .nivoSlider").length){var t=$(this);t.offset().top>$(window).scrollTop()+$(window).height()&&(t.css({opacity:0}),$(window).scroll((function(){$(window).scrollTop()+$(window).height()>t.offset().top+100&&t.animate({opacity:1},1200)})))}})),$(".gdlr-ux").each((function(){var t=$(this);if(t.hasClass("gdlr-chart")||t.hasClass("gdlr-skill-bar")){if(t.offset().top<$(window).scrollTop()+$(window).height())return void(t.hasClass("gdlr-chart")&&(!$.browser.msie||parseInt($.browser.version)>8)?t.gdlr_pie_chart():t.hasClass("gdlr-skill-bar")&&t.children(".gdlr-skill-bar-progress").each((function(){$(this).attr("data-percent")&&$(this).animate({width:$(this).attr("data-percent")+"%"},1200,"easeOutQuart")})))}else{if(!(t.offset().top>$(window).scrollTop()+$(window).height()))return;t.css({opacity:0,"padding-top":20,"margin-bottom":-20})}$(window).scroll((function(){$(window).scrollTop()+$(window).height()>t.offset().top+100&&(t.hasClass("gdlr-chart")&&(!$.browser.msie||parseInt($.browser.version)>8)?t.gdlr_pie_chart():t.hasClass("gdlr-skill-bar")?t.children(".gdlr-skill-bar-progress").each((function(){$(this).attr("data-percent")&&$(this).animate({width:$(this).attr("data-percent")+"%"},1200,"easeOutQuart")})):t.animate({opacity:1,"padding-top":0,"margin-bottom":0},1200))}))}))),$(".nivoSlider").gdlr_nivoslider(),$(".flexslider").gdlr_flexslider()})),$(window).load((function(){$(".gdlr-isotope").gdlr_isotope(),$.browser.msie&&parseInt($.browser.version)<=8&&$(".gdlr-chart").gdlr_pie_chart(),$(".body-wrapper.float-menu").each((function(){if($("body").hasClass("header-style-1")||$("body").hasClass("header-style-2")){var t=$("#gdlr-header-substitute"),i=t.siblings(".gdlr-navigation-wrapper");$(window).scroll((function(){i.hasClass("gdlr-fixed-header")&&($(this).scrollTop()<=t.offset().top-parseInt($("html").css("margin-top"))||$(this).width()<959)?(t.css("height","auto"),i.insertAfter(t),i.removeClass("gdlr-fixed-header")):!i.hasClass("gdlr-fixed-header")&&$(this).width()>959&&$(this).scrollTop()>t.offset().top-parseInt($("html").css("margin-top"))&&(t.css("height",i.height()+parseInt(i.css("border-top-width"))),i.addClass("gdlr-fixed-header"),$("body").append(i))}))}else{var e=$(".gdlr-header-wrapper"),a=e.children(".gdlr-header-inner");$(window).scroll((function(){if(a.hasClass("gdlr-fixed-header")&&($(this).width()<959||$(this).scrollTop()<=e.offset().top+e.height()+parseInt($("html").css("margin-top")))){var t=a.clone(!0);$("body").append(t),t.fadeOut((function(){$(this).remove()})),a.removeClass("gdlr-fixed-header"),e.css("height","auto").append(a)}else!a.hasClass("gdlr-fixed-header")&&$(this).width()>959&&$(this).scrollTop()>e.offset().top+e.height()+parseInt($("html").css("margin-top"))&&(e.css("height",e.height()),a.addClass("gdlr-fixed-header").css("display","none"),$("body").append(a),a.fadeIn(200))}))}})),$(window).trigger("resize"),$(window).trigger("scroll")}))}(jQuery);