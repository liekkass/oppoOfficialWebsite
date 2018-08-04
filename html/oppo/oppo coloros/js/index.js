$(function(){
	var state=0;
	// 鼠标移入的时候发生的导航商店链接事件
	$("#ewm-wx").mouseenter(function(){
		$(this).css("opacity","1");
		$("#weixing-ewm").css("display","block");
	});
	// 鼠标移开的时候发生的导航商店链接事件
	$("#ewm-wx").mouseleave(function(){
		$(this).css("opcity","0.8");
		$("#weixing-ewm").css("display","none");
	});
	// 鼠标点击的时候发生的点击搜索事件
	$("#search").click(function(){
		if(state===0){
			$("#wrapper-box").css("opacity","1");
			$("#wrapper-box").css("display","block");
			state=1;
		}else{
			$("#wrapper-box").css("opacity","0");
			$("#wrapper-box").css("display","none");
			state=0;
		}
	});
	// 鼠标点击的时候发生的点击链接事件
	$("#lianjie").click(function(){
		if(state===0){
			$("#global_box").css("opacity","1");
			$("#global_box").css("display","block");
			state=1;
		}else{
			$("#global_box").css("opacity","0");
			$("#global_box").css("display","none");
			state=0;
		}
	});
	// 鼠标移入的时候发生的微信二维码事件
	$("#navsm-sj").mouseenter(function(){
		$(this).css("opacity","1");
		$("#shouji-ul").css("display","block");
	});
	// 鼠标移开的时候发生的微信二维码事件
	$("#navsm-sj").mouseleave(function(){
		$(this).css("opcity","0.8");
		$("#shouji-ul").css("display","none");
	});
})

