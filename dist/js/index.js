$(function(){$("#showdiv").on("mouseover",function(){$("#follow").css("display","block")}),$("#follow").on("mouseover",function(){$("#follow").css("display","block")}),$("#showdiv").on("mouseleave",function(){$("#follow").css("display","none")}),$("#follow").on("mouseleave",function(){$("#follow").css("display","none")}),$("#pic-one").on("mouseover",function(){$(".carousel-control").css("display","block"),$(".carousel-control").css("background","rgba(0,0,0,.8)")}),$("#pic-one").on("mouseleave",function(){$(".carousel-control").css("display","none")}),$("#car").on("mouseover",function(){$("#car").attr("class","hoa"),$("#show").css("display","block")}),$("#car").on("mouseleave",function(){$("#car").removeClass(),$("#show").css("display","none")}),$("#nav-list li").on("mouseover",function(){var s=$(this).index();$(this).children(":first").addClass("nowa"),$("#list-mo div").eq(s).addClass("nows")}),$("#nav-list li ").on("mouseleave",function(){var s=$(this).index();$(this).children(":first").removeClass("nowa"),$("#list-mo div").eq(s).removeClass("nows")}),$("#list-mo div").on("mouseover",function(){var s=$(this).index();$(this).addClass("nows"),$("#nav-list li").eq(s).children(":first").addClass("nowa")}),$("#list-mo div").on("mouseleave",function(){var s=$(this).index();$(this).removeClass("nows"),$("#nav-list li").eq(s).children(":first").removeClass("nowa")});var s=$("#lists").children().eq(0).prop("outerHTML");s+=$("#lists").children().eq(1).prop("outerHTML"),s+=$("#lists").children().eq(2).prop("outerHTML"),s+=$("#lists").children().eq(3).prop("outerHTML"),s+=$("#lists").children().eq(4).prop("outerHTML"),$("#lists").append(s);var o=0,e=setInterval(function(){o++,11==o&&(o=1,$("#lists").css("left","0")),$("#lists").animate({left:-184*o+"px"},1e3)},5e3);$("#lefta").mousedown(function(){clearInterval(e)}),$("#lefta").mouseup(function(){e=setInterval(function(){o++,11==o&&(o=1,$("#lists").css("left","0")),$("#lists").animate({left:-184*o+"px"},1e3)},5e3)}),$("#righta").mousedown(function(){clearInterval(e)}),$("#righta").mouseup(function(){e=setInterval(function(){o++,11==o&&(o=1,$("#lists").css("left","0")),$("#lists").animate({left:-184*o+"px"},1e3)},5e3)}),$("#lefta").click(function(){0==o&&(o=10,$("#lists").css("left","-1840px"),console.log(o)),o--,$("#lists").stop().animate({left:-184*o+"px"},500)}),$("#righta").click(function(){o++,11==o&&(o=1,$("#lists").css("left","0")),$("#lists").stop().animate({left:-184*o+"px"},500)}),$("#openli").on("mouseover",function(){$("#lisa").css("display","block")}),$("#openli").on("mouseleave",function(){$("#lisa").css("display","none")}),$("#lisa").on("mouseover",function(){$("#lisa").css("display","block")}),$("#lisa").on("mouseleave",function(){$("#lisa").css("display","none")});var n=($("#magic"),$(window));$(document);n.scroll(function(){$(document).scrollTop()>200?$("#magic").fadeIn():$("#magic").fadeOut()}),$("#aside:nth-of-type(3)").click(function(){$(document).scrollTop("0")})});