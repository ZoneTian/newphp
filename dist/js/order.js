function tipsShow(t){var e=$('<div id="tip"><div class="t_box"><div class="tip_msg">'+t+"<s><i></i></s></div></div></div>");$("body").append(e),$("#tip").show("fast"),$(".tip").mouseout(function(){$("#tip").remove()}).mousemove(function(t){$("#tip").css({top:t.pageY-20+"px",left:t.pageX+30+"px"})}).mousedown(function(){$("#tip").remove()})}$(function(){$("#top").load("top.html",function(){$("#magic").remove(),$("#nav").remove()}),$("#bottom").load("bottom.html",function(){$("#index-boto").remove()}),$("#is_bill").click(function(){var t=$(this).prop("checked");console.log(t),t?($(this).attr("checked",!0),$(".shrAddress_box_bill").show()):($(this).attr("checked",!1),$("#is_invoice").attr("checked",!1),$("#is_listing").attr("checked",!1),$(".shrAddress_box_bill").hide())}),$(".pay_int").click(function(){$(this).prop("checked")?($(".pay_int").parent().parent().parent().css("background","#fff"),$(this).parent().parent().parent().css("background","#f5f5f5")):$(this).parent().parent().parent().css("background","#fff")}),$(".pay_ints").click(function(){$(this).prop("checked")?($(".pay_ints").parent().parent().parent().parent().css("background","#fff"),$(this).parent().parent().parent().parent().css("background","#f5f5f5")):$(this).parent().parent().parent().parent().css("background","#fff")}),$(".pay_intp").click(function(){$(this).prop("checked")?($(".pay_intp").parent().parent().parent().parent().removeClass("packnow"),$(this).parent().parent().parent().parent().addClass("packnow")):$(this).parent().parent().parent().parent().removeClass("packnow")})});